// script.js

// Mobile menu toggle
const burger = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  burger.classList.toggle('active');
});

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if(localStorage.getItem('mgtech-theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')){
    localStorage.setItem('mgtech-theme', 'dark');
  } else {
    localStorage.removeItem('mgtech-theme');
  }
});

// Animated counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const animate = () => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 150;
    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  // Trigger animation only when in viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animate();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.6 });

  observer.observe(counter);
});

