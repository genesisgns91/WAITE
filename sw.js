/*
 * ASTRO — Service Worker
 * ---------------------------------------------------------------------------
 * Estratégias (tudo gratuito, só cache do navegador):
 *  • App shell (HTML, CSS, JS, manifest): REDE PRIMEIRO, com tempo limite. Se
 *    estiver online, sempre vem a versão mais nova; offline ou com rede lenta,
 *    usa a cópia guardada. Por isso atualizar o app não exige recarregar à força.
 *  • Imagens (cartas, ícones) e fontes: CACHE PRIMEIRO. As cartas do Tarot são
 *    guardadas conforme você as vê e passam a abrir até sem internet.
 *  • Bibliotecas de CDN (astronomy-engine, Firebase SDK, Google Fonts): guarda e
 *    atualiza em segundo plano.
 *  • Nunca interceptados: chamadas de IA (Cloudflare Workers), Firestore,
 *    geocodificação e qualquer requisição que não seja GET.
 * Para publicar uma versão nova, basta trocar VERSAO abaixo.
 * ---------------------------------------------------------------------------
 */
const VERSAO = 'v13';
const CACHE_SHELL = `astro-shell-${VERSAO}`;
const CACHE_IMG = 'astro-img-v1';      // persiste entre versões (cartas são grandes)
const CACHE_CDN = 'astro-cdn-v1';
const TEMPO_REDE_MS = 4000;
const LIMITE_IMG = 140;                // 78 cartas + ícones + margem

const SHELL = [
  './', './index.html', './revolucao_solar.html', './transitos_diarios.html', './tarot.html',
  './estilos.css', './icones.js', './pwa.js', './abertura.js', './manifest.json', './pwa_diagnostico.html',
  './icon-192.png', './icon-512.png', './icon-maskable-192.png', './icon-maskable-512.png',
  './icon-monochrome-512.png', './apple-touch-icon.png', './favicon.ico', './favicon.svg', './favicon-32.png'
];

const HOSTS_CDN = ['cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com', 'www.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_SHELL);
    // um arquivo ausente não pode derrubar a instalação inteira
    await Promise.allSettled(SHELL.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes
      .filter((n) => (n.startsWith('astro-shell-') && n !== CACHE_SHELL) || n.startsWith('waite-'))
      .map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function ehImagem(url) { return /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname); }
function ehShell(url) { return /\.(html|css|js|json)$/i.test(url.pathname) || url.pathname.endsWith('/'); }

async function redePrimeiro(request, nomeCache, fallbackNavegacao) {
  const cache = await caches.open(nomeCache);
  const tentativaRede = fetch(request).then((resp) => {
    if (resp && resp.ok) cache.put(request, resp.clone());
    return resp;
  });
  try {
    const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TEMPO_REDE_MS));
    return await Promise.race([tentativaRede, timeout]);
  } catch (e) {
    const guardado = await cache.match(request, { ignoreSearch: true });
    if (guardado) { tentativaRede.catch(() => {}); return guardado; }
    try { return await tentativaRede; } catch (e2) {
      if (fallbackNavegacao) {
        const inicio = await cache.match('./index.html');
        if (inicio) return inicio;
      }
      return new Response('Sem conexão e sem cópia guardada deste arquivo.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
  }
}

async function cachePrimeiro(request, nomeCache, limite) {
  const cache = await caches.open(nomeCache);
  const guardado = await cache.match(request);
  if (guardado) return guardado;
  const resp = await fetch(request);
  if (resp && (resp.ok || resp.type === 'opaque')) {
    cache.put(request, resp.clone());
    if (limite) {
      const chaves = await cache.keys();
      if (chaves.length > limite) await cache.delete(chaves[0]);
    }
  }
  return resp;
}

async function guardarEAtualizar(request, nomeCache) {
  const cache = await caches.open(nomeCache);
  const guardado = await cache.match(request);
  const rede = fetch(request).then((resp) => {
    if (resp && (resp.ok || resp.type === 'opaque')) cache.put(request, resp.clone());
    return resp;
  }).catch(() => guardado);
  return guardado || rede;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // mesma origem (GitHub Pages)
  if (url.origin === self.location.origin) {
    if (request.mode === 'navigate' || ehShell(url)) {
      event.respondWith(redePrimeiro(request, CACHE_SHELL, request.mode === 'navigate'));
      return;
    }
    if (ehImagem(url)) {
      event.respondWith(cachePrimeiro(request, CACHE_IMG, LIMITE_IMG).catch(() => caches.match(request)));
      return;
    }
    return;
  }

  // CDNs conhecidas
  if (HOSTS_CDN.includes(url.hostname) && (url.hostname !== 'www.gstatic.com' || url.pathname.startsWith('/firebasejs/'))) {
    event.respondWith(guardarEAtualizar(request, CACHE_CDN));
    return;
  }
  // todo o resto (IA, Firestore, geocodificação) segue direto para a rede
});
