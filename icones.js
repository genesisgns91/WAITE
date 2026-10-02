/*
 * ASTRO — ÍCONES COMPARTILHADOS
 * ---------------------------------------------------------------------------
 * 1) Troca os emojis coloridos do sistema (🔍 💾 🔊 ...) por ícones SVG em
 *    traço fino, com a cor do texto ao redor (currentColor). Funciona também
 *    para conteúdo gerado depois pelo JavaScript das páginas (MutationObserver).
 * 2) Garante que símbolos de signos e planetas (♈ ♉ ... ♀ ♂ ✡) sejam desenhados
 *    como TEXTO e não como emoji, anexando o seletor de variação U+FE0E.
 *    (A família de fontes Noto Sans Symbols, carregada em estilos.css, cuida do
 *    desenho dos glifos; a propriedade font-variant-emoji reforça o resultado.)
 * ---------------------------------------------------------------------------
 */
(function () {
    'use strict';

    var P = {
        search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.8-3.8"/>',
        save: '<path d="M5 3.5h10.5L19.5 7.5V20.5H5z"/><path d="M8 3.5v4.5h6.5V3.5M8 20.5v-6h8v6"/>',
        user: '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c0-3.9 3.4-6.5 7.5-6.5s7.5 2.6 7.5 6.5"/>',
        trash: '<path d="M4 7h16M10 11v5.5M14 11v5.5M6 7l.9 12.5h10.2L18 7M9 7V4h6v3"/>',
        refresh: '<path d="M20 11a8 8 0 0 0-14.5-4M4 4v3.6h3.6"/><path d="M4 13a8 8 0 0 0 14.5 4M20 20v-3.6h-3.6"/>',
        volume: '<path d="M4 9.5v5h3.8L13 18.5v-13L7.8 9.5z"/><path d="M16.2 9a4.2 4.2 0 0 1 0 6M18.8 6.4a8 8 0 0 1 0 11.2"/>',
        globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 3.2 3.2 14.8 0 18M12 3c-3.2 3.2-3.2 14.8 0 18"/>',
        list: '<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
        file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
        book: '<path d="M3 5.8C5.2 4.3 8.6 4.4 12 6.4c3.4-2 6.8-2.1 9-.6V19c-2.2-1.5-5.6-1.4-9 .6-3.4-2-6.8-2.1-9-.6z"/><path d="M12 6.4v13.2"/>',
        calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
        play: '<path d="M8 5.5v13l10.5-6.5z"/>',
        pause: '<path d="M8.5 5.5v13M15.5 5.5v13"/>',
        stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
        mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
        folder: '<path d="M3 7.5A2 2 0 0 1 5 5.5h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
        landmark: '<path d="M3 9.5 12 4l9 5.5M5.5 10v8M9.8 10v8M14.2 10v8M18.5 10v8M3 20.5h18"/>',
        moon: '<path d="M20 14.6A8.4 8.4 0 0 1 9.4 4a8.4 8.4 0 1 0 10.6 10.6z"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
        star: '<path d="M12 3.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6.1L12 16.7l-5.4 3.1 1.2-6.1-4.5-4.2 6.1-.7z"/>',
        sparkles: '<path d="M11 3.5l1.9 5.2 5.2 1.9-5.2 1.9L11 17.7l-1.9-5.2L3.9 10.6l5.2-1.9z"/><path d="M19 15.5v4M17 17.5h4"/>',
        orb: '<circle cx="12" cy="10.5" r="6.8"/><path d="M6.8 20.5h10.4M8.2 16.5l-1.2 4M15.8 16.5l1.2 4M9 8.2a3.6 3.6 0 0 1 2.8-1.6"/>',
        alert: '<path d="M12 3.6l9.4 16.2H2.6z"/><path d="M12 10v4.4M12 17.2h.01"/>',
        dice: '<rect x="4" y="4" width="16" height="16" rx="3.2"/><path d="M8.8 8.8h.01M15.2 8.8h.01M12 12h.01M8.8 15.2h.01M15.2 15.2h.01"/>',
        message: '<path d="M4.5 5.5h15v10.5h-9l-4.5 3.8V16h-1.5z"/>',
        checksq: '<rect x="4" y="4" width="16" height="16" rx="3.2"/><path d="M8.3 12.2l2.7 2.7 4.7-5.3"/>',
        zap: '<path d="M13 2.5 5 13.6h6L10.2 21.5 19 10.4h-6z"/>',
        flame: '<path d="M12 3c.9 3.9 5.2 5.6 5.2 10.2a5.2 5.2 0 0 1-10.4 0c0-2.2 1-3.6 2.2-4.6.1 1.9 1 2.6 1.9 2.6C10.9 8.9 11 6 12 3z"/>',
        yinyang: '<circle cx="12" cy="12" r="9"/><path d="M12 3a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0 9"/><circle cx="12" cy="7.5" r=".9" fill="currentColor" stroke="none"/>',
        scale: '<path d="M12 4v16M7.5 20h9M5 7h14"/><path d="M5 7l-2.8 6.5a3.2 3.2 0 0 0 5.6 0zM19 7l-2.8 6.5a3.2 3.2 0 0 0 5.6 0z"/>',
        swords: '<path d="M5 19 17.5 6.5M14 5.5h4.5V10M19 19 6.5 6.5M10 5.5H5.5V10"/>',
        megaphone: '<path d="M4 10v4h3l8 4V6L7 10z"/><path d="M18.2 9.2a4 4 0 0 1 0 5.6"/>',
        dot: '<circle cx="12" cy="12" r="5" fill="currentColor" stroke="none"/>',
        close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
        check: '<path d="M5 12.8l4.6 4.6L19 7.8"/>',
        chevdown: '<path d="M6.5 9.5l5.5 5.5 5.5-5.5"/>',
        chevup: '<path d="M6.5 14.5 12 9l5.5 5.5"/>',
        arrow: '<path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5"/>'
    };

    // emoji / símbolo -> [ícone, classe opcional]
    var MAPA = {
        '🔍': ['search'], '🔎': ['search'], '💾': ['save'], '👤': ['user'], '🗑': ['trash'],
        '🔄': ['refresh'], '↻': ['refresh'], '🧹': ['refresh'], '🔊': ['volume'], '🌐': ['globe'],
        '📑': ['list'], '📄': ['file'], '🧾': ['file'], '📜': ['file'], '📋': ['file'],
        '📖': ['book'], '📚': ['book'], '🗓': ['calendar'], '📅': ['calendar'],
        '▶': ['play'], '⏸': ['pause'], '⏹': ['stop'], '🗣': ['mic'], '📂': ['folder'], '🏛': ['landmark'],
        '🌙': ['moon'], '☀': ['sun'], '🌟': ['star'], '✨': ['sparkles'], '🤖': ['sparkles'], '🔮': ['orb'],
        '⚠': ['alert'], '🎲': ['dice'], '💬': ['message'], '☑': ['checksq'], '⚡': ['zap'], '🔥': ['flame'],
        '☯': ['yinyang'], '⚖': ['scale'], '⚔': ['swords'], '📢': ['megaphone'], '🔵': ['dot', 'ico-azul'],
        '✕': ['close'], '✓': ['check'], '▼': ['chevdown'], '▲': ['chevup'], '→': ['arrow']
    };

    var chaves = Object.keys(MAPA).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
    var RE_EMOJI = new RegExp('(' + chaves.join('|') + ')[\\uFE0E\\uFE0F]?', 'g');
    // Glifos que o sistema desenharia como emoji: signos, ♀ ♂, estrela de Davi
    var RE_TEXTO = /([\u2648-\u2653\u2640\u2642\u2721])(?!\uFE0E)\uFE0F?/g;
    var IGNORAR = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, OPTION: 1, TITLE: 1, NOSCRIPT: 1, INPUT: 1 };

    function icone(nome, extra) {
        var s = document.createElement('span');
        s.className = 'ico' + (extra ? ' ' + extra : '');
        s.setAttribute('aria-hidden', 'true');
        s.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + P[nome] + '</svg>';
        return s;
    }

    function dentroDeIcone(no) {
        for (var n = no.parentNode; n; n = n.parentNode) {
            if (n.nodeType === 1 && (IGNORAR[n.tagName] || (n.classList && n.classList.contains('ico')))) return true;
        }
        return false;
    }

    function dentroDeSvg(no) {
        for (var n = no.parentNode; n; n = n.parentNode) { if (n.nodeType === 1 && n.tagName.toLowerCase() === 'svg') return true; }
        return false;
    }

    function processarTexto(no) {
        var t = no.nodeValue;
        if (!t || dentroDeIcone(no)) return;
        var emSvg = dentroDeSvg(no);

        // 1) signos/planetas em modo texto
        if (RE_TEXTO.test(t)) {
            RE_TEXTO.lastIndex = 0;
            t = t.replace(RE_TEXTO, '$1\uFE0E');
            no.nodeValue = t;
        }
        RE_TEXTO.lastIndex = 0;

        // 2) emojis de interface -> SVG (só em HTML; dentro de <svg> não dá para inserir spans)
        if (emSvg) return;
        RE_EMOJI.lastIndex = 0;
        if (!RE_EMOJI.test(t)) return;
        RE_EMOJI.lastIndex = 0;

        var frag = document.createDocumentFragment();
        var ultimo = 0, m;
        while ((m = RE_EMOJI.exec(t)) !== null) {
            if (m.index > ultimo) frag.appendChild(document.createTextNode(t.slice(ultimo, m.index)));
            var def = MAPA[m[1]];
            frag.appendChild(icone(def[0], def[1]));
            ultimo = m.index + m[0].length;
        }
        if (ultimo < t.length) frag.appendChild(document.createTextNode(t.slice(ultimo)));
        no.parentNode.replaceChild(frag, no);
    }

    function varrer(raiz) {
        if (!raiz) return;
        if (raiz.nodeType === 3) { processarTexto(raiz); return; }
        if (raiz.nodeType !== 1 || IGNORAR[raiz.tagName]) return;
        if (raiz.classList && raiz.classList.contains('ico')) return;
        var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null);
        var nos = [], n;
        while ((n = w.nextNode())) nos.push(n);
        nos.forEach(processarTexto);
    }

    var fila = [], agendado = false;
    function agendar(no) {
        fila.push(no);
        if (agendado) return;
        agendado = true;
        (window.requestAnimationFrame || setTimeout)(function () {
            agendado = false;
            var itens = fila; fila = [];
            itens.forEach(function (x) { if (x.isConnected) varrer(x); });
        });
    }

    function iniciar() {
        varrer(document.body);
        new MutationObserver(function (muts) {
            muts.forEach(function (m) {
                if (m.type === 'characterData') agendar(m.target);
                else m.addedNodes.forEach(function (n) { agendar(n); });
            });
        }).observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();

    window.AstroIcones = { icone: icone, varrer: varrer };
})();
