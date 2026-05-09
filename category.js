document.getElementById('category-root').innerHTML = `
    <div class="channels-container" id="channelsContainer">
        <!-- Channels will be injected here via your main channel script -->
    </div>
`;

// Category UI Observer Logic
const observer = new MutationObserver((mutations) => { 
    mutations.forEach((mutation) => { 
        mutation.addedNodes.forEach((node) => { 
            if (node.nodeType === 1 && node.classList.contains('cat-section')) { 
                const oldTitle = node.querySelector('.cat-title'); 
                const grid = node.querySelector('.app-grid'); 
                if (oldTitle && !oldTitle.hasAttribute('data-modified')) { 
                    oldTitle.setAttribute('data-modified', 'true'); 
                    const titleText = oldTitle.innerText || oldTitle.textContent; 
                    const headerWrapper = document.createElement('div'); 
                    headerWrapper.className = 'netflix-cat-header'; 
                    const newTitle = document.createElement('div'); 
                    newTitle.className = 'netflix-cat-title'; 
                    newTitle.innerText = titleText; 
                    const seeAllBtn = document.createElement('button'); 
                    seeAllBtn.className = 'see-all-btn'; 
                    seeAllBtn.innerHTML = 'VIEW ALL <svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;margin-left:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>'; 
                    seeAllBtn.onclick = () => { 
                        const allCategories = document.querySelectorAll('.cat-section'); 
                        if (grid.classList.contains('expanded-grid')) { history.back(); } 
                        else { 
                            grid.classList.add('expanded-grid'); 
                            allCategories.forEach(cat => { if (cat !== node) cat.classList.add('hidden-cat'); }); 
                            seeAllBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;transform:rotate(180deg);margin-right:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg> RETURN'; 
                            document.querySelector('.channels-scroll-area').scrollTo({ top: 0, behavior: 'smooth' }); 
                            history.pushState({ isCategoryExpanded: true }, "", "#category"); 
                        } 
                    }; 
                    headerWrapper.appendChild(newTitle); 
                    headerWrapper.appendChild(seeAllBtn); 
                    node.insertBefore(headerWrapper, grid); 
                } 
                if (grid) { 
                    const cards = grid.querySelectorAll('.channel-card'); 
                    cards.forEach(card => { if (!card.getAttribute('tabindex')) { card.setAttribute('tabindex', '0'); } }); 
                } 
            } 
        }); 
    }); 
});
const channelsContainer = document.getElementById('channelsContainer'); 
if (channelsContainer) observer.observe(channelsContainer, { childList: true, subtree: true });