// Burger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;

      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

