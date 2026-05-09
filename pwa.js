document.getElementById('pwa-root').innerHTML = `
    <div id="pwaNotification" class="pwa-notification">
        <div class="pwa-text">
            <div class="pwa-title">B-2 STEALTH App</div>
            <div class="pwa-desc">Chrome හරහා App එක Install කර වඩා හොඳ අත්දැකීමක් ලබාගන්න</div>
        </div>
        <div class="pwa-actions">
            <button id="pwaInstallBtn" class="pwa-install-btn">Install</button>
            <button id="pwaCloseBtn" class="pwa-close-btn">✕</button>
        </div>
    </div>
`;

// PWA Install Logic
(function initDynamicPWA() {
    const manifestObj = { "name": "B-2 STEALTH TV Premium", "short_name": "B-2 TV", "start_url": window.location.href.split('?')[0], "display": "standalone", "background_color": "#000000", "theme_color": "#ff2a2a", "icons": [ { "src": "https://i.imgur.com/McqXQ3Y.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" }, { "src": "https://i.imgur.com/McqXQ3Y.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" } ] };
    const encodedManifest = 'data:application/manifest+json;charset=utf-8,' + encodeURIComponent(JSON.stringify(manifestObj));
    let manifestLink = document.createElement('link'); manifestLink.rel = 'manifest'; manifestLink.href = encodedManifest; document.head.appendChild(manifestLink);
    if ('serviceWorker' in navigator) { const swCode = `self.addEventListener('fetch', (event) => {});`; const blob = new Blob([swCode], { type: 'application/javascript' }); navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => { }); }
})();

let deferredPrompt = null; 
let isAppInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const pwaNotification = document.getElementById('pwaNotification'); 
const pwaInstallBtn = document.getElementById('pwaInstallBtn'); 
const pwaCloseBtn = document.getElementById('pwaCloseBtn');

window.addEventListener('beforeinstallprompt', (e) => { 
    e.preventDefault(); 
    deferredPrompt = e; 
    if (!isAppInstalled) setTimeout(() => pwaNotification.classList.add('show'), 2000); 
});

setTimeout(() => { if (!deferredPrompt && !isAppInstalled) pwaNotification.classList.add('show'); }, 4000);

pwaInstallBtn.addEventListener('click', async () => { 
    if (deferredPrompt) { 
        try {
            await deferredPrompt.prompt(); 
            const { outcome } = await deferredPrompt.userChoice; 
            if(outcome === 'accepted') { console.log('PWA Installed'); }
            deferredPrompt = null; 
            pwaNotification.classList.remove('show'); 
        } catch(err) {
            console.error("Install Prompt failed:", err);
        }
    } else { 
        alert("To Install App:\n\n1. Tap the Browser Menu ( ⋮ or ⇪ )\n2. Select 'Add to Home screen' or 'Install App'"); 
        pwaNotification.classList.remove('show'); 
    } 
});

pwaCloseBtn.addEventListener('click', () => pwaNotification.classList.remove('show'));
window.addEventListener('appinstalled', () => { deferredPrompt = null; isAppInstalled = true; pwaNotification.classList.remove('show'); });