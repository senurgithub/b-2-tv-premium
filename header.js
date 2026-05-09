document.getElementById('header-root').innerHTML = `
    <header class="top-bar">
        <div class="brand-container" onclick="document.querySelector('.channels-scroll-area').scrollTo({top: 0, behavior: 'smooth'});">
            <div class="brand-name">B-2 <span>STEALTH</span></div>
            <div class="live-badge"><div class="live-dot"></div> LIVE</div>
        </div>
        <div class="top-actions">
            <div id="searchToggle" class="search-trigger" tabindex="0" role="button" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <div class="search-box-wrapper" id="searchWrapper">
                <input type="text" id="searchInput" placeholder="Search targets..." autocomplete="off">
            </div>
            <div id="infoToggle" class="profile-icon" tabindex="0" role="button" aria-label="App Info">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
        </div>
    </header>
`;

// Search Logic
const searchToggle = document.getElementById('searchToggle'); 
const searchWrapper = document.getElementById('searchWrapper'); 
const searchInput = document.getElementById('searchInput');

function activateSearch() { 
    searchWrapper.classList.toggle('active'); 
    if (searchWrapper.classList.contains('active')) searchInput.focus(); 
}

searchToggle.addEventListener('click', activateSearch); 
searchToggle.addEventListener('keydown', (e) => { 
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateSearch(); } 
});