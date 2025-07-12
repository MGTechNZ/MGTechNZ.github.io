// Navigation burger toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Animate stats counters
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // lower is faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  // Trigger animation when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.disconnect();
      }
    });
  }, { threshold: 1 });

  observer.observe(counter);
});

// Contact form submission simulation (replace with real API)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // Simple validation could be added here

    formMessage.style.color = '#00cc66';
    formMessage.textContent = 'Sending...';

    // Simulate async send
    setTimeout(() => {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      contactForm.reset();
    }, 1500);
  });
}
