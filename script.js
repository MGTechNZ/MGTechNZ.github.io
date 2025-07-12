// script.js

// DOM Elements
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Hamburger toggle
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('show');
  });
});

// Theme toggle with localStorage
function setTheme(theme) {
  if(theme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '🌓';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  if(body.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

// Load saved theme or default to light
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
});

// Scroll reveal for sections
const scrollElements = document.querySelectorAll('.scroll-reveal');

function elementInView(el, dividend = 1) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
}

function displayScrollElement(el) {
  el.classList.add('visible');
}

function hideScrollElement(el) {
  el.classList.remove('visible');
}

function handleScrollAnimation() {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
