document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobile-menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Auto-close mobile menu when link clicked
  const navLinks = menu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
