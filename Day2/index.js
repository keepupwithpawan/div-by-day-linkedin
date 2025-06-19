const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      const body = document.body;

      function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
      }

      function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = 'auto';
      }

      hamburger.addEventListener('click', toggleMenu);

      // Close menu when clicking on menu items
      const mobileMenuItems = document.querySelectorAll('.mobile-menu ul li');
      mobileMenuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
      });

      // Close menu when pressing Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
          closeMenu();
        }
      });