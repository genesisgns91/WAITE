/**
 * app-common.js - Utilitários compartilhados para o Astro App
 */

// ==========================================
// 1. REGISTRO DE SERVICE WORKER & CACHE
// ==========================================
function registrarServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then((registro) => {
            registro.update();
        }).catch(err => console.warn('Falha ao registrar Service Worker:', err));

        let jaRecarregou = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (jaRecarregou) return;
            jaRecarregou = true;
            window.location.reload();
        });
    }
}

async function limparCacheDoApp() {
    const confirmou = confirm(
        'Isso vai limpar o cache técnico do app e recarregar a página para garantir que você veja a versão mais recente.\n\n' +
        'Seus dados salvos NÃO serão apagados.\n\nContinuar?'
    );
    if (!confirmou) return;

    try {
        if ('serviceWorker' in navigator) {
            const registros = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registros.map((registro) => registro.unregister()));
        }
        if ('caches' in window) {
            const chaves = await caches.keys();
            await Promise.all(chaves.map((chave) => caches.delete(chave)));
        }
    } catch (err) {
        console.warn('Erro ao limpar cache técnico:', err);
    }

    window.location.href = window.location.pathname + '?atualizado=' + Date.now();
}

// ==========================================
// 2. SÍNTESE DE VOZ (TEXT-TO-SPEECH)
// ==========================================
let vozesDisponiveis = [];
let falaAtual = null;

function carregarVozes() {
    if (!('speechSynthesis' in window)) return;
    
    vozesDisponiveis = speechSynthesis.getVoices();
    const select = document.getElementById('vozSelect');
    if (!select) return;

    select.innerHTML = '';

    const vozesPT = vozesDisponiveis.filter(v => v.lang.includes('pt'));
    const listaExibicao = vozesPT.length > 0 ? vozesPT : vozesDisponiveis;

    listaExibicao.forEach(voz => {
        const option = document.createElement('option');
        option.value = voz.name;
        option.textContent = `${voz.name} (${voz.lang})`;
        select.appendChild(option);
    });

    const vozSalva = localStorage.getItem('astro_voz_preferida');
    if (vozSalva && listaExibicao.some(v => v.name === vozSalva)) {
        select.value = vozSalva;
    }
}

function salvarVozPreferida() {
    const select = document.getElementById('vozSelect');
    if (select && select.value) {
        localStorage.setItem('astro_voz_preferida', select.value);
    }
}

function alternarLeituraVoz(seletorTexto = '#modalBody') {
    if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta síntese de voz.');
        return;
    }

    const btnOuvir = document.getElementById('btnOuvir');

    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        if (btnOuvir) btnOuvir.textContent = '🔊';
        return;
    }

    const elementoConteudo = document.querySelector(seletorTexto);
    if (!elementoConteudo) return;

    const texto = elementoConteudo.innerText || elementoConteudo.textContent;
    if (!texto.trim()) return;

    falaAtual = new SpeechSynthesisUtterance(texto);
    falaAtual.lang = 'pt-BR';

    const select = document.getElementById('vozSelect');
    if (select && select.value) {
        const vozEscolhida = vozesDisponiveis.find(v => v.name === select.value);
        if (vozEscolhida) falaAtual.voice = vozEscolhida;
    }

    falaAtual.onend = () => {
        if (btnOuvir) btnOuvir.textContent = '🔊';
    };

    falaAtual.onerror = () => {
        if (btnOuvir) btnOuvir.textContent = '🔊';
    };

    if (btnOuvir) btnOuvir.textContent = '⏹️';
    speechSynthesis.speak(falaAtual);
}

// Inicializa eventos de voz
if ('speechSynthesis' in window) {
    carregarVozes();
    speechSynthesis.onvoiceschanged = carregarVozes;
}

// ==========================================
// 3. GEOCODIFICAÇÃO (OPENSEARCH / NOMINATIM)
// ==========================================
async function buscarCoordenadasGenerica(inputCidadeId, inputLatId, inputLonId, statusId) {
    const inputCidade = document.getElementById(inputCidadeId);
    const inputLat = document.getElementById(inputLatId);
    const inputLon = document.getElementById(inputLonId);
    const elStatus = document.getElementById(statusId);

    if (!inputCidade || !inputCidade.value.trim()) {
        if (elStatus) elStatus.textContent = '⚠️ Digite o nome de uma cidade.';
        return;
    }

    if (elStatus) elStatus.textContent = '⏳ Buscando coordenadas...';

    try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputCidade.value)}&limit=1`;
        const res = await fetch(url, { headers: { 'User-Agent': 'AstroApp/1.0' } });
        const data = await res.json();

        if (data && data.length > 0) {
            if (inputLat) inputLat.value = parseFloat(data[0].lat).toFixed(4);
            if (inputLon) inputLon.value = parseFloat(data[0].lon).toFixed(4);
            if (elStatus) {
                elStatus.textContent = `✓ Encontrado: ${data[0].display_name}`;
                elStatus.style.color = '#3fb950';
            }
        } else {
            if (elStatus) {
                elStatus.textContent = '❌ Cidade não encontrada. Ajuste manualmente a Lat/Lon.';
                elStatus.style.color = '#f85149';
            }
        }
    } catch (err) {
        console.error(err);
        if (elStatus) {
            elStatus.textContent = '❌ Erro ao buscar local. Verifique sua conexão.';
            elStatus.style.color = '#f85149';
        }
    }
}
