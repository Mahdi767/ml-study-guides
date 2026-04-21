// Function to filter guide cards based on search input
function filterGuideCards() {
    const searchInput = document.getElementById('search-input');
    const guideCards = document.querySelectorAll('.guide-card');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        guideCards.forEach(card => {
            const title = card.querySelector('.guide-title').textContent.toLowerCase();
            const description = card.querySelector('.guide-description').textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block'; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    });
}

// Initialize the filter function once the document is loaded
document.addEventListener('DOMContentLoaded', filterGuideCards);