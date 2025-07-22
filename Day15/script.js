const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar-holder');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      toggleSidebar();
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    hamburger.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
});

function toggleCollapse(element) {
  const icon = element.querySelector('.collapse-icon');
  const content = element.nextElementSibling;
  icon.classList.toggle('expanded');
  content.classList.toggle('collapsed');
}

window.addEventListener('load', () => {
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.95)';
    setTimeout(() => {
      card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, index * 100 + 300);
  });

  const sidebarItems = document.querySelectorAll('.menu-item, .collapsible-header');
  sidebarItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    setTimeout(() => {
      item.style.transition = 'all 0.4s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, index * 50 + 100);
  });
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});
