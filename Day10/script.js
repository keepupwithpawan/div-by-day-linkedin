const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar-container');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking on menu items (mobile)
const menuItems = document.querySelectorAll('#menu-items li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
});