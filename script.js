// DOM Elements
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu
function toggleMenu() {
  mobileMenu.classList.toggle('active');
  burger.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
}

// Close mobile menu when clicking outside or pressing Escape
function closeMenuOnEscape(e) {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  }
}

burger.addEventListener('click', toggleMenu);
burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});
document.addEventListener('keydown', closeMenuOnEscape);
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    e.target !== burger
  ) {
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Animated Counters (used on Home page)
const counters = document.querySelectorAll('.counter');
const animationDuration = 2000; // 2 seconds

function animateCountUp(el) {
  const target = +el.getAttribute('data-target');
  let start = 0;
  let startTime = null;

  function update(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const val = Math.min(Math.floor((progress / animationDuration) * target), target);
    el.textContent = val;
    if (progress < animationDuration) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}

function runCountersOnScroll() {
  counters.forEach(counter => {
    if (counter.dataset.animated) return; // already animated

    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animateCountUp(counter);
      counter.dataset.animated = true;
    }
  });
}

window.addEventListener('scroll', runCountersOnScroll);
window.addEventListener('load', runCountersOnScroll);

// Projects Page filter (if present)
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class on buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projects.forEach(project => {
      if (filter === 'all' || project.classList.contains(filter)) {
        project.style.display = 'block';
        project.setAttribute('aria-hidden', 'false');
      } else {
        project.style.display = 'none';
        project.setAttribute('aria-hidden', 'true');
      }
    });
  });
});
