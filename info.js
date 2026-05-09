document.getElementById('info-root').innerHTML = `
    <div id="infoModalOverlay" class="modal-overlay">
        <div class="info-container" role="dialog" aria-modal="true">
            <button id="closeInfoModal" class="close-modal-btn" tabindex="0" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
            <div class="info-hero-title">
                <h1>B2 TV</h1>
                <div class="info-version-badge">Version 1.0 Pro</div>
                <img src="https://i.imgur.com/DVaThxP.png" alt="B2 Stealth Center Logo" class="info-center-logo">
            </div>
            <div class="info-section">
                <h2 class="info-h2">App Details</h2>
                <div class="info-grid">
                    <div class="info-item"><i class="fas fa-mobile-alt"></i><span>Platform</span><p>Android Device</p></div>
                    <div class="info-item"><i class="fas fa-map-marker-alt"></i><span>Region</span><p>Sri Lanka Only 🇱🇰</p></div>
                    <div class="info-item"><i class="fas fa-shield-alt"></i><span>Security</span><p>Verified</p></div>
                    <div class="info-item"><i class="fas fa-tv"></i><span>Type</span><p>Premium Live TV</p></div>
                </div>
                <div class="info-warning-box">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div class="info-warning-text">
                        <strong>VPN Warning:</strong> මෙම App එක සඳහා VPN භාවිතා කළ නොහැක. කරුණාකර ශ්‍රී ලාංකීය ජාලයක් පමණක් භාවිතා කරන්න.
                    </div>
                </div>
            </div>
            <div class="info-section">
                <h2 class="info-h2">Privacy Policy</h2>
                <div class="info-policy-text">
                    <p>B-2 STEALTH TV හි ඔබගේ රහස්‍යතාව ආරක්ෂා කිරීම අපගේ මූලික ඉලක්කයයි. මෙම යෙදුම මගින් ඔබගේ පෞද්ගලික දත්ත අනවශ්‍ය ලෙස රැස් කිරීම, බෙදා හැරීම හෝ ගබඩා කිරීම කිසිසේත්ම සිදු නොකරන බව අපි සහතික කරමු.</p>
                    <div class="info-disclaimer-box">
                        <strong>DISCLAIMER:</strong><br><br>
                        අපගේ වේදිකාව හුදෙක් අන්තර්ජාලයේ නොමිලේ පවතින සහ තෙවන පාර්ශවයන්ගේ සේවාදායකයන් මත පිහිටා ඇති ශ්‍රව්‍ය දෘශ්‍ය අන්තර්ගතයන්ට සබැඳි (IPTV Links) පහසුවෙන් නැරඹීමට පහසුකම් සැලසීම පමණක් සිදු කරයි. අපි කිසිදු වීඩියෝවක් හෝ නාලිකාවක් අපගේ සේවාදායකයන් තුළ ගබඩා නොකරමු. මෙය හුදෙක් අධ්‍යාපනික සහ විනෝදාස්වාද ව්‍යාපෘතියක් පමණි.
                    </div>
                </div>
            </div>
            <div class="info-section">
                <h2 class="info-h2">Created Info</h2>
                <div class="info-dev-card">
                    <div class="info-dev-info">
                        <h3>MOD APPs Team</h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem;">Lead Developers & UI Designers</p>
                        <p style="margin-top: 10px; font-size: 0.9rem;">ඔබට මෙම ඇප් එක සම්බන්ධයෙන් කිසියම් ගැටළුවක් ඇත්නම් හෝ වැඩිදුර තොරතුරු අවශ්‍ය නම් පහත අපගේ Facebook පිටුව හරහා අප හා සම්බන්ධ වන්න.</p>
                        <a href="https://www.facebook.com/saman2200" class="info-social-btn" target="_blank" tabindex="0">
                            <i class="fab fa-facebook-f"></i> Contact Support Team
                        </a>
                    </div>
                </div>
            </div>
            <div class="info-footer">&copy; 2026 B-2 STEALTH TV<br>Premium Entertainment Designed for Sri Lanka</div>
        </div>
    </div>
`;

// Info Modal Logic
const infoToggle = document.getElementById('infoToggle'); 
const infoModalOverlay = document.getElementById('infoModalOverlay'); 
const closeInfoModal = document.getElementById('closeInfoModal');

function openInfoModal() { 
    infoModalOverlay.classList.add('active'); 
    closeInfoModal.focus(); 
    history.pushState({ isModalOpen: true }, "", "#info"); 
}

function closeInfoModalFunc() { 
    if(window.location.hash === "#info") { history.back(); } 
    else { infoModalOverlay.classList.remove('active'); infoToggle.focus(); } 
}

infoToggle.addEventListener('click', openInfoModal); 
infoToggle.addEventListener('keydown', (e) => { 
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInfoModal(); } 
});
closeInfoModal.addEventListener('click', closeInfoModalFunc);
infoModalOverlay.addEventListener('click', (e) => { if (e.target === infoModalOverlay) closeInfoModalFunc(); });