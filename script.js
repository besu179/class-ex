document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-button');
  const navLinks = document.querySelector('.nav-links');
  const closeMenu = document.querySelector('.close-menu');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  if (closeMenu) {
    closeMenu.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  }

  // Optional: Close menu when a link is clicked (on mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
