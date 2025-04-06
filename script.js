// Show/Hide Modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Open modals for navigation
document.querySelector('[data-page="about"]').addEventListener('click', () => openModal('about-modal'));
document.querySelector('[data-page="contact"]').addEventListener('click', () => openModal('contact-modal'));
document.getElementById('explore-btn').addEventListener('click', () => openModal('explore-modal'));
document.getElementById('login-btn').addEventListener('click', () => openModal('login-modal'));

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn.dataset.target);
    });
});

// Buy Button Click Event
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Thanks for choosing to buy this book!");
    });
});

// Add Book Upload Modal (can trigger from button)
document.getElementById('add-book-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Book uploaded successfully!');
});

// Search Functionality (basic)
document.getElementById('search-btn').addEventListener('click', function () {
    const input = document.getElementById('search-input').value.toLowerCase();
    alert(`You searched for: ${input}`);
});
