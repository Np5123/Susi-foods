// Simple form handler for contact form
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show modal
        const modal = document.getElementById('thankYouModal');
        if (modal) {
            modal.style.display = 'flex';
        }
        form.reset();
    });
    // Modal close handler
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.onclick = function() {
            document.getElementById('thankYouModal').style.display = 'none';
        };
    }
    // Hide modal when clicking outside content
    window.onclick = function(event) {
        const modal = document.getElementById('thankYouModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
