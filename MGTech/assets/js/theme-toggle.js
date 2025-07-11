const toggleBtn = document.getElementById('toggle-theme');

toggleBtn?.addEventListener('click', () => {
  if(document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// On page load, set theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
