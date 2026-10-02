/*
 * ASTRO — APLICATIVO INSTALÁVEL (PWA)
 * ---------------------------------------------------------------------------
 *  1) Registra o Service Worker e o mantém atualizado (inclusive quando o app
 *     instalado volta do segundo plano).
 *  2) Mostra o botão "Instalar app" quando o navegador permite a instalação
 *     (Chrome/Edge/Samsung Internet no Android) e o esconde depois de instalado.
 *  3) Ajusta a barra lateral: ela só "gruda" na tela se couber inteira nela;
 *     do contrário rola junto com a página (sem barra de rolagem interna).
 * ---------------------------------------------------------------------------
 */
(function () {
    'use strict';

    var ehApp = window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: minimal-ui)').matches ||
                window.navigator.standalone === true;

    /* ---------- 1) Service Worker ---------- */
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js').then(function (reg) {
                var atualizar = function () { reg.update().catch(function () {}); };
                atualizar();
                document.addEventListener('visibilitychange', function () {
                    if (document.visibilityState === 'visible') atualizar();
                });
            }).catch(function (err) { console.warn('Service Worker não registrado:', err); });
        });
    }

    /* ---------- 2) Botão "Instalar app" ---------- */
    var eventoInstalar = null;
    var ICONE = '<svg class="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15"/></svg>';

    function aviso(msg) {
        if (typeof window.showToast === 'function') { window.showToast(msg, 'sucesso'); return; }
        var t = document.createElement('div');
        t.textContent = msg;
        t.style.cssText = 'position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:5000;padding:12px 18px;border-radius:14px;background:rgba(20,26,56,.96);border:1px solid rgba(160,175,255,.3);color:#fff;font:500 .85rem Inter,sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.5)';
        document.body.appendChild(t);
        setTimeout(function () { t.remove(); }, 3500);
    }

    function obterBotao() {
        var btn = document.getElementById('btnInstalarApp');
        if (btn) return btn;
        var barra = document.querySelector('.app-header-inner');
        if (!barra) return null;
        btn = document.createElement('button');
        btn.type = 'button';
        btn.id = 'btnInstalarApp';
        btn.className = 'nav-util nav-instalar';
        btn.hidden = true;
        btn.title = 'Instalar o Astro como aplicativo no seu aparelho';
        btn.innerHTML = ICONE + '<span>Instalar app</span>';
        var limpar = barra.querySelector('.nav-util');
        if (limpar) barra.insertBefore(btn, limpar); else barra.appendChild(btn);
        btn.addEventListener('click', function () {
            if (!eventoInstalar) return;
            eventoInstalar.prompt();
            eventoInstalar.userChoice.then(function (r) {
                if (r && r.outcome === 'accepted') btn.hidden = true;
                eventoInstalar = null;
            });
        });
        return btn;
    }

    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        eventoInstalar = e;
        if (ehApp) return;
        var btn = obterBotao();
        if (btn) btn.hidden = false;
    });
    window.addEventListener('appinstalled', function () {
        eventoInstalar = null;
        var btn = document.getElementById('btnInstalarApp');
        if (btn) btn.hidden = true;
        aviso('Astro instalado! Procure o ícone na tela inicial.');
    });

    /* ---------- 3) Barra lateral fixa só quando cabe ---------- */
    function ajustarBarraLateral() {
        var barras = document.querySelectorAll('.app-sidebar, .app-layout-tarot .col-left');
        var limite = window.innerHeight - 80;
        barras.forEach(function (b) {
            if (!b.offsetParent) return;
            b.classList.remove('sidebar-livre');
            if (b.offsetHeight > limite) b.classList.add('sidebar-livre');
        });
    }
    function iniciarBarraLateral() {
        ajustarBarraLateral();
        window.addEventListener('resize', ajustarBarraLateral);
        if ('ResizeObserver' in window) {
            var ro = new ResizeObserver(function () { window.requestAnimationFrame(ajustarBarraLateral); });
            document.querySelectorAll('.app-sidebar, .app-layout-tarot .col-left').forEach(function (b) {
                Array.prototype.forEach.call(b.children, function (c) { ro.observe(c); });
            });
        }
        // conteúdo gerado depois (listas do histórico, pessoas salvas)
        new MutationObserver(function () { window.requestAnimationFrame(ajustarBarraLateral); })
            .observe(document.body, { childList: true, subtree: true });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciarBarraLateral);
    else iniciarBarraLateral();
})();
