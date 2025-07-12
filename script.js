// script.js

// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
  menuBtn.setAttribute('aria-expanded', !expanded);
  
  // Toggle visibility using aria-hidden attribute for CSS animation
  if (mobileMenu.getAttribute('aria-hidden') === 'false') {
    mobileMenu.setAttribute('aria-hidden', 'true');
  } else {
    mobileMenu.setAttribute('aria-hidden', 'false');
  }
});

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

