document.getElementById('player-root').innerHTML = `
    <div class="video-wrapper" data-shaka-player-container>
        <video data-shaka-player id="video" autoplay playsinline></video>
        <div id="loadingSpinner" class="loading-spinner"></div>
        <div class="ultraflix-watermark" id="ultraflixWatermark">
            <div class="uf-powered">Powered by</div>
            <div class="uf-brand">B-2 TECH</div>
        </div>
    </div>
`;

// Watermark Display Logic for Player
setInterval(() => { 
    const controls = document.querySelector('.shaka-controls-container'); 
    const watermark = document.getElementById('ultraflixWatermark'); 
    if (controls && watermark) { 
        const opacity = window.getComputedStyle(controls).opacity; 
        const isHidden = controls.classList.contains('shaka-hidden') || opacity === '0'; 
        if (!isHidden) watermark.classList.add('show-watermark'); 
        else watermark.classList.remove('show-watermark'); 
    } 
}, 250);