function toggleMenu() {
      document.getElementById('menu').classList.toggle('show');
    }

    function toggleSubMenu(element) {
      if (window.innerWidth <= 768) {
        element.classList.toggle('open');
      }
    }
