/*
 * ASTRO — ABERTURA DO APLICATIVO
 * ---------------------------------------------------------------------------
 * "O despertar do cosmos" (~3,9 s):
 *   1. o céu se acende: estrelas surgem e uma semente de luz pulsa no centro;
 *   2. órbitas, o anel zodiacal e um hexagrama se desenham, e planetas começam a girar;
 *   3. a lua da marca é traçada num único gesto; a estrela nasce com um clarão;
 *   4. ASTRO se revela letra por letra;
 *   5. o céu acelera e vira um portal: o app aparece atravessando as estrelas.
 *
 * Quando aparece: na primeira abertura de cada sessão, no celular (tela estreita)
 * ou quando o app está instalado. Toque na tela para pular.
 * Parâmetros úteis na URL:  ?abertura=1 (forçar)  ?abertura=0 (não mostrar).
 * Respeita "reduzir movimento" do sistema (mostra só a marca, sem animação).
 * Este script é carregado sem "defer" no <head> para cobrir a tela antes do app
 * aparecer; se não for o caso de mostrar, ele sai na hora, sem custo.
 * ---------------------------------------------------------------------------
 */
(function () {
    'use strict';

    var params = new URLSearchParams(location.search);
    var modo = params.get('abertura');
    if (modo === '0') return;
    var teste = modo === 'teste';           // usado só para capturar quadros
    var forcar = modo === '1' || teste;

    var jaViu = false;
    try { jaViu = sessionStorage.getItem('astro_abertura') === '1'; } catch (e) {}
    var instalado = window.matchMedia('(display-mode: standalone)').matches ||
                    window.matchMedia('(display-mode: minimal-ui)').matches ||
                    window.navigator.standalone === true;
    var celular = window.matchMedia('(max-width: 820px)').matches;
    if (!forcar && (jaViu || !(instalado || celular))) return;
    try { sessionStorage.setItem('astro_abertura', '1'); } catch (e) {}

    var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var SAIDA = 3300;          // início do "portal" (ms)
    var FIM = 3950;            // remoção definitiva (ms)
    if (reduzido) { SAIDA = 1300; FIM = 1800; }

    /* ---------- geometria do desenho (viewBox 400 x 400, centro 200,200) ---------- */
    var C = 200;
    function pol(r, graus) { var a = (graus - 90) * Math.PI / 180; return [C + r * Math.cos(a), C + r * Math.sin(a)]; }
    function f(n) { return Math.round(n * 100) / 100; }

    var ticks = '';
    for (var i = 0; i < 72; i++) {
        var maior = i % 6 === 0;
        var p1 = pol(maior ? 160 : 166, i * 5), p2 = pol(178, i * 5);
        ticks += '<line x1="' + f(p1[0]) + '" y1="' + f(p1[1]) + '" x2="' + f(p2[0]) + '" y2="' + f(p2[1]) + '" class="' + (maior ? 'ab-t-maior' : 'ab-t-menor') + '"/>';
    }
    var estrelinhas = '';
    for (var s = 0; s < 12; s++) {
        var q = pol(172, s * 30 + 15);
        estrelinhas += '<circle cx="' + f(q[0]) + '" cy="' + f(q[1]) + '" r="1.5" class="ab-ponto-sig"/>';
    }
    function triangulo(r, ini) {
        var a = pol(r, ini), b = pol(r, ini + 120), c = pol(r, ini + 240);
        return '<path pathLength="1" class="ab-hexa" d="M' + f(a[0]) + ' ' + f(a[1]) + 'L' + f(b[0]) + ' ' + f(b[1]) + 'L' + f(c[0]) + ' ' + f(c[1]) + 'Z"/>';
    }

    var MARCA_LUA = 'M21.5 4.6A12.2 12.2 0 1 0 27.4 20 9.6 9.6 0 0 1 21.5 4.6z';
    var MARCA_ESTRELA = 'M23 11l1 2.2 2.3.3-1.7 1.6.4 2.3L23 16.2l-2 1.2.4-2.3-1.7-1.6 2.3-.3z';
    // posição absoluta da estrela da marca (marca com escala 5, centrada em 15,5 x 16)
    var ex = C + (23 - 15.5) * 5, ey = C + (13.6 - 16) * 5;

    var svg =
        '<svg class="ab-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs>' +
        '<linearGradient id="ab-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d38b"/><stop offset="1" stop-color="#ad90f5"/></linearGradient>' +
        '<filter id="ab-brilho" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
        '<linearGradient id="ab-fl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff6d8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
        '</defs>' +
        '<g class="ab-zodiaco">' +
        '<circle cx="200" cy="200" r="178" pathLength="1" class="ab-anel ab-anel-ext"/>' +
        '<circle cx="200" cy="200" r="166" pathLength="1" class="ab-anel ab-anel-int"/>' + ticks + estrelinhas +
        '</g>' +
        '<circle cx="200" cy="200" r="152" pathLength="1" class="ab-orbita o4"/>' +
        '<circle cx="200" cy="200" r="122" pathLength="1" class="ab-orbita o3"/>' +
        '<circle cx="200" cy="200" r="92" pathLength="1" class="ab-orbita o2"/>' +
        '<circle cx="200" cy="200" r="62" pathLength="1" class="ab-orbita o1"/>' +
        '<g class="ab-hexagrama">' + triangulo(122, 0) + triangulo(122, 180) + '</g>' +
        '<g class="ab-planeta p1"><circle cx="200" cy="138" r="2.6" fill="#f3d9a0"/></g>' +
        '<g class="ab-planeta p2"><circle cx="200" cy="108" r="2" fill="#c9b3ff"/></g>' +
        '<g class="ab-planeta p3"><circle cx="200" cy="78" r="3" fill="#e3b361"/></g>' +
        '<g class="ab-planeta p4"><circle cx="200" cy="48" r="2.2" fill="#9fb0ff"/></g>' +
        '<circle cx="200" cy="200" r="2.4" class="ab-semente"/>' +
        '<g transform="translate(200 200) scale(5) translate(-15.5 -16)">' +
        '<path d="' + MARCA_LUA + '" class="ab-lua-miolo"/>' +
        '<path d="' + MARCA_LUA + '" pathLength="1" class="ab-lua-traco" filter="url(#ab-brilho)"/>' +
        '<g class="ab-estrela"><path d="' + MARCA_ESTRELA + '" fill="url(#ab-g)" filter="url(#ab-brilho)"/></g>' +
        '</g>' +
        '<circle cx="' + ex + '" cy="' + ey + '" r="26" class="ab-onda" style="transform-origin:' + ex + 'px ' + ey + 'px"/>' +
        '<line x1="' + (ex - 46) + '" y1="' + ey + '" x2="' + (ex + 46) + '" y2="' + ey + '" class="ab-clarao ab-cl-h" style="transform-origin:' + ex + 'px ' + ey + 'px"/>' +
        '<line x1="' + ex + '" y1="' + (ey - 46) + '" x2="' + ex + '" y2="' + (ey + 46) + '" class="ab-clarao ab-cl-v" style="transform-origin:' + ex + 'px ' + ey + 'px"/>' +
        '</svg>';

    // ASTRO: cada letra com um tom entre dourado e lilás
    var LETRAS = 'ASTRO'.split('');
    function misturar(t) {
        var a = [246, 214, 144], b = [200, 178, 255];
        return 'rgb(' + a.map(function (v, k) { return Math.round(v + (b[k] - v) * t); }).join(',') + ')';
    }
    var nome = LETRAS.map(function (l, k) {
        return '<span style="color:' + misturar(k / (LETRAS.length - 1)) + ';animation-delay:' + (2300 + k * 110) + 'ms">' + l + '</span>';
    }).join('');

    var html =
        '<div class="ab-aurora ab-a1"></div><div class="ab-aurora ab-a2"></div>' +
        '<canvas class="ab-estrelas"></canvas>' +
        '<div class="ab-meteoro"></div>' +
        '<div class="ab-centro">' +
        '<div class="ab-palco"><div class="ab-halo"></div>' + svg + '</div>' +
        '<div class="ab-nome">' + nome + '</div>' +
        '<div class="ab-sub">Mapa natal · Trânsitos · Tarot</div>' +
        '</div>' +
        '<div class="ab-pular">toque para continuar</div>';

    var css = [
        '#astro-abertura{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;overflow:hidden;',
        'background:radial-gradient(ellipse 90% 70% at 50% 40%,#1b2160 0%,#0c102f 48%,#050717 100%);touch-action:none;-webkit-tap-highlight-color:transparent;',
        'font-family:Cinzel,"Cormorant Garamond",Georgia,serif;opacity:1}',
        '#astro-abertura.ab-saindo{animation:ab-some .65s cubic-bezier(.5,0,.3,1) forwards}',
        '#astro-abertura *{box-sizing:border-box}',
        '.ab-estrelas{position:absolute;inset:0;width:100%;height:100%}',
        '.ab-aurora{position:absolute;border-radius:50%;filter:blur(48px);opacity:.55;will-change:transform}',
        '.ab-a1{width:90vmax;height:60vmax;left:-35vmax;top:-22vmax;background:radial-gradient(closest-side,rgba(124,147,255,.45),transparent);animation:ab-deriva 9s ease-in-out infinite alternate}',
        '.ab-a2{width:80vmax;height:55vmax;right:-30vmax;bottom:-20vmax;background:radial-gradient(closest-side,rgba(155,110,230,.42),transparent);animation:ab-deriva 11s ease-in-out infinite alternate-reverse}',
        '.ab-centro{position:relative;display:flex;flex-direction:column;align-items:center;gap:0;margin-top:-2vh;will-change:transform,opacity}',
        '.ab-saindo .ab-centro{animation:ab-portal .65s cubic-bezier(.5,0,.8,.4) forwards}',
        '.ab-palco{position:relative;width:min(88vw,54vh,430px);aspect-ratio:1/1}',
        '.ab-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}',
        '.ab-halo{position:absolute;inset:18%;border-radius:50%;background:radial-gradient(closest-side,rgba(246,211,139,.34),rgba(173,144,245,.22) 55%,transparent);animation:ab-halo 3.2s ease-in-out 1.7s both,ab-respira 2.6s ease-in-out 2.6s infinite alternate}',
        /* anéis e órbitas se desenham */
        '.ab-anel,.ab-orbita,.ab-hexa{fill:none;stroke-dasharray:1;stroke-dashoffset:0}',
        '.ab-anel{stroke:rgba(227,179,97,.62);stroke-width:.9;animation:ab-traco 1.3s cubic-bezier(.4,0,.2,1) .35s both}',
        '.ab-anel-int{stroke:rgba(200,185,255,.4);stroke-width:.6;animation-delay:.5s}',
        '.ab-orbita{stroke:rgba(190,175,255,.3);stroke-width:.8}',
        '.ab-orbita.o1{animation:ab-traco 1s ease-out .55s both}.ab-orbita.o2{animation:ab-traco 1s ease-out .68s both}',
        '.ab-orbita.o3{animation:ab-traco 1s ease-out .81s both}.ab-orbita.o4{animation:ab-traco 1s ease-out .94s both}',
        '.ab-hexa{stroke:rgba(227,179,97,.55);stroke-width:.9;animation:ab-traco 1.2s ease-in-out .85s both}',
        '.ab-t-menor,.ab-t-maior{stroke:rgba(227,179,97,.55);stroke-width:.6;animation:ab-surge .9s ease-out 1.1s both}',
        '.ab-t-maior{stroke:rgba(246,214,144,.85);stroke-width:1}',
        '.ab-ponto-sig{fill:#f3d9a0;animation:ab-surge .9s ease-out 1.3s both}',
        '.ab-zodiaco{transform-box:view-box;transform-origin:center;animation:ab-gira 60s linear infinite}',
        '.ab-hexagrama{transform-box:view-box;transform-origin:center;animation:ab-gira-inv 48s linear infinite}',
        '.ab-planeta{transform-box:view-box;transform-origin:center;opacity:0}',
        '.ab-planeta circle{filter:drop-shadow(0 0 3px currentColor)}',
        '.ab-planeta.p1{animation:ab-gira 7s linear 1.2s infinite,ab-surge .6s ease-out 1.2s forwards}',
        '.ab-planeta.p2{animation:ab-gira-inv 11s linear 1.3s infinite,ab-surge .6s ease-out 1.3s forwards}',
        '.ab-planeta.p3{animation:ab-gira 16s linear 1.4s infinite,ab-surge .6s ease-out 1.4s forwards}',
        '.ab-planeta.p4{animation:ab-gira-inv 22s linear 1.5s infinite,ab-surge .6s ease-out 1.5s forwards}',
        /* semente de luz */
        '.ab-semente{fill:#fff;filter:drop-shadow(0 0 6px #fff) drop-shadow(0 0 14px #bda4ff);animation:ab-semente 1.5s ease-in-out .2s both}',
        /* a marca */
        '.ab-lua-miolo{fill:rgba(155,128,234,.16);animation:ab-surge .9s ease-out 1.75s both}',
        '.ab-lua-traco{fill:none;stroke:url(#ab-g);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:0;animation:ab-traco 1.15s cubic-bezier(.45,0,.2,1) 1s both}',
        '.ab-estrela{transform-box:fill-box;transform-origin:center;animation:ab-nasce .9s cubic-bezier(.2,1.4,.4,1) 1.95s both}',
        '.ab-onda{fill:none;stroke:rgba(255,226,160,.9);stroke-width:1.6;transform-box:view-box;opacity:0;animation:ab-onda 1.1s ease-out 2s both}',
        '.ab-clarao{stroke:url(#ab-fl);stroke-width:1.4;transform-box:view-box;opacity:0}',
        '.ab-cl-h{animation:ab-clarao-h .9s ease-out 1.98s both}.ab-cl-v{animation:ab-clarao-v .9s ease-out 1.98s both}',
        /* nome */
        '.ab-nome{display:flex;gap:.34em;margin-top:calc(min(88vw,54vh,430px)*-.055 + 12px);font-weight:600;font-size:clamp(1.7rem,9.4vw,2.5rem);letter-spacing:.2em;padding-left:.2em;text-shadow:0 0 18px rgba(227,179,97,.4),0 0 40px rgba(155,128,234,.35)}',
        '.ab-nome span{display:inline-block;animation:ab-letra .8s cubic-bezier(.2,.8,.2,1) both}',
        '.ab-sub{margin-top:10px;font-family:Inter,system-ui,sans-serif;font-size:clamp(.58rem,2.7vw,.72rem);letter-spacing:.34em;text-transform:uppercase;color:rgba(205,210,245,.72);padding-left:.34em;animation:ab-surge 1s ease-out 3s both}',
        '.ab-pular{position:absolute;bottom:max(26px,env(safe-area-inset-bottom));left:0;right:0;text-align:center;font-family:Inter,system-ui,sans-serif;font-size:.64rem;letter-spacing:.28em;text-transform:uppercase;color:rgba(190,198,240,.4);animation:ab-surge 1s ease-out 1.4s both}',
        /* meteoro */
        '.ab-meteoro{position:absolute;top:16%;left:-30%;width:42vmax;height:1.6px;background:linear-gradient(90deg,transparent,rgba(255,240,205,.95));transform:rotate(24deg);transform-origin:right center;opacity:0;animation:ab-meteoro 1.1s cubic-bezier(.3,.5,.4,1) .95s both}',
        '.ab-meteoro::after{content:"";position:absolute;right:-2px;top:-2px;width:5px;height:5px;border-radius:50%;background:#fff;box-shadow:0 0 10px 3px rgba(255,236,190,.9)}',
        /* quadros-chave */
        '@keyframes ab-traco{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}',
        '@keyframes ab-surge{from{opacity:0}to{opacity:1}}',
        '@keyframes ab-gira{to{transform:rotate(360deg)}}',
        '@keyframes ab-gira-inv{to{transform:rotate(-360deg)}}',
        '@keyframes ab-semente{0%{opacity:0;transform:scale(.2)}30%{opacity:1;transform:scale(1.8)}60%{opacity:.85;transform:scale(1)}100%{opacity:0;transform:scale(.6)}}',
        '@keyframes ab-nasce{0%{opacity:0;transform:scale(0) rotate(-120deg)}60%{opacity:1;transform:scale(1.5) rotate(10deg)}100%{opacity:1;transform:scale(1) rotate(0)}}',
        '@keyframes ab-onda{0%{opacity:.95;transform:scale(.25)}100%{opacity:0;transform:scale(7.5)}}',
        '@keyframes ab-clarao-h{0%{opacity:0;transform:scaleX(0)}35%{opacity:1;transform:scaleX(1.25)}100%{opacity:0;transform:scaleX(.6)}}',
        '@keyframes ab-clarao-v{0%{opacity:0;transform:scaleY(0)}35%{opacity:1;transform:scaleY(1.25)}100%{opacity:0;transform:scaleY(.6)}}',
        '@keyframes ab-halo{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}',
        '@keyframes ab-respira{from{opacity:.75;transform:scale(.96)}to{opacity:1;transform:scale(1.06)}}',
        '@keyframes ab-letra{from{opacity:0;transform:translateY(14px) scale(.9);filter:blur(7px)}to{opacity:1;transform:none;filter:blur(0)}}',
        '@keyframes ab-meteoro{0%{opacity:0;transform:translate(0,0) rotate(24deg)}10%{opacity:1}100%{opacity:0;transform:translate(150vw,70vw) rotate(24deg)}}',
        '@keyframes ab-deriva{from{transform:translate(0,0) scale(1)}to{transform:translate(6vmax,4vmax) scale(1.12)}}',
        '@keyframes ab-portal{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(2.4)}}',
        '@keyframes ab-some{0%{opacity:1}100%{opacity:0}}',
        '@keyframes ab-entra{from{opacity:0}to{opacity:1}}',
        /* movimento reduzido: tudo parado, só um fade */
        '#astro-abertura.ab-reduzido{animation:ab-entra .5s ease both}',
        '#astro-abertura.ab-reduzido *{animation:none!important}',
        '#astro-abertura.ab-reduzido .ab-meteoro,#astro-abertura.ab-reduzido .ab-onda,#astro-abertura.ab-reduzido .ab-clarao,#astro-abertura.ab-reduzido .ab-semente,#astro-abertura.ab-reduzido .ab-pular{display:none}',
        '#astro-abertura.ab-reduzido .ab-planeta{opacity:1}'
    ].join('');

    /* ---------- montagem ---------- */
    var estilo = document.createElement('style');
    estilo.id = 'astro-abertura-css';
    estilo.textContent = css;
    var raiz = document.createElement('div');
    raiz.id = 'astro-abertura';
    raiz.setAttribute('role', 'presentation');
    raiz.setAttribute('aria-hidden', 'true');
    if (reduzido) raiz.className = 'ab-reduzido';
    raiz.innerHTML = html;
    var pai = document.documentElement;
    pai.appendChild(estilo);
    pai.appendChild(raiz);

    // a fonte do título pode chegar depois; pede cedo (não bloqueia nada)
    try { if (document.fonts && document.fonts.load) document.fonts.load('600 1em Cinzel'); } catch (e) {}

    /* ---------- céu de estrelas (canvas) ---------- */
    var cv = raiz.querySelector('.ab-estrelas');
    var ctx = cv.getContext('2d');
    var largura = 0, altura = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function medir() {
        largura = window.innerWidth; altura = window.innerHeight;
        cv.width = Math.round(largura * dpr); cv.height = Math.round(altura * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    medir();
    window.addEventListener('resize', medir);

    var N = reduzido ? 70 : 150;
    var estrelas = [];
    // gerador determinístico para o céu ser sempre o mesmo
    var semente = 7;
    function rnd() { semente = (semente * 16807) % 2147483647; return (semente - 1) / 2147483646; }
    var CORES = ['255,255,255', '255,245,214', '214,200,255', '175,190,255', '246,211,139'];
    for (var k = 0; k < N; k++) {
        estrelas.push({
            a: rnd() * Math.PI * 2,
            r: Math.pow(rnd(), 0.8) * 0.95 + 0.02,
            t: 0.4 + rnd() * 1.4,
            fase: rnd() * 6.28,
            tam: 0.5 + rnd() * 1.5,
            cor: CORES[Math.floor(rnd() * CORES.length)],
            surge: rnd() * 900
        });
    }

    var t0 = performance.now();
    var rafId = 0, encerrado = false, saindo = false;
    function ease(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

    function desenhar(agora) {
        var R = Math.max(largura, altura) * 0.78;
        var cx = largura / 2, cy = altura * 0.46;
        ctx.clearRect(0, 0, largura, altura);
        var warp = reduzido ? 0 : ease((agora - SAIDA) / 650);
        if (reduzido) agora = 2400;      // céu parado: sem pisca nem deriva
        var giro = agora * 0.00004;
        for (var n = 0; n < estrelas.length; n++) {
            var e = estrelas[n];
            var entrada = ease((agora - e.surge) / 900);
            if (entrada <= 0) continue;
            var ang = e.a + giro * (1.2 - e.r);
            var raio = e.r * R * (1 + warp * 2.2);
            var x = cx + Math.cos(ang) * raio, y = cy + Math.sin(ang) * raio;
            if (x < -60 || x > largura + 60 || y < -60 || y > altura + 60) continue;
            var brilho = (0.35 + 0.65 * Math.abs(Math.sin(agora * 0.001 * e.t + e.fase))) * entrada;
            if (warp > 0.02) {
                var raio0 = raio / (1 + warp * 0.5);
                ctx.strokeStyle = 'rgba(' + e.cor + ',' + Math.min(1, brilho + warp * 0.3) + ')';
                ctx.lineWidth = e.tam * (1 + warp);
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(ang) * raio0, cy + Math.sin(ang) * raio0);
                ctx.lineTo(x, y);
                ctx.stroke();
            } else {
                ctx.fillStyle = 'rgba(' + e.cor + ',' + brilho + ')';
                ctx.beginPath();
                ctx.arc(x, y, e.tam, 0, 6.2832);
                ctx.fill();
            }
        }
    }

    function quadro() {
        if (encerrado) return;
        var agora = (typeof window.__aberturaTempo === 'number') ? window.__aberturaTempo : performance.now() - t0;
        desenhar(agora);
        if (!saindo && agora >= SAIDA && !teste) iniciarSaida();
        rafId = requestAnimationFrame(quadro);
    }

    function iniciarSaida(rapida) {
        if (saindo) return;
        saindo = true;
        raiz.classList.add('ab-saindo');
        if (rapida) raiz.style.animationDuration = '.35s';
        setTimeout(encerrar, rapida ? 380 : FIM - SAIDA);
    }

    function encerrar() {
        if (encerrado) return;
        encerrado = true;
        cancelAnimationFrame(rafId);
        window.removeEventListener('resize', medir);
        if (raiz.parentNode) raiz.parentNode.removeChild(raiz);
        if (estilo.parentNode) estilo.parentNode.removeChild(estilo);
    }

    // toque para pular
    raiz.addEventListener('pointerdown', function () { iniciarSaida(true); });
    // rede de segurança: nunca deixa a tela presa
    if (!teste) setTimeout(encerrar, FIM + 1500);

    rafId = requestAnimationFrame(quadro);
    window.__abertura = { encerrar: encerrar, desenhar: desenhar };
})();
