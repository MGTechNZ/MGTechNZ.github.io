// Theme toggle (dark/light)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('bg-black')) {
    // Switch to light mode
    body.classList.remove('bg-black', 'text-white');
    body.classList.add('bg-white', 'text-black');
  } else {
    // Switch to dark mode
    body.classList.remove('bg-white', 'text-black');
    body.classList.add('bg-black', 'text-white');
  }
});

// Dropdown menu toggle
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

// AOS init
AOS.init();

// Counter animation (optional)
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200; // adjust speed

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
