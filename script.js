// =============================
// MOBILE MENU TOGGLE
// =============================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// =============================
// PAGE TRANSITIONS
// =============================
document.querySelectorAll("a[href]").forEach(link => {
  const isInternal =
    link.href.startsWith(window.location.origin) && !link.href.includes("#");

  if (isInternal) {
    link.addEventListener("click", e => {
      e.preventDefault(); // Prevent default navigation
      const target = link.href;

      // Add page-exit class if element exists
      const page = document.querySelector(".page");
      if (page) page.classList.add("page-exit");

      // Navigate after transition duration
      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  }
});

// =============================
// Smooth scroll for anchor links
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
