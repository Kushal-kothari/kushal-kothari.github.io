/* -----------------------------------------
  1. Keyboard Navigation: Add focus outline 
  only for keyboard users 
 ---------------------------------------- */
 const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

/* -----------------------------------------
  2. Back to Top Button Visibility on Scroll
 ---------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* -----------------------------------------
  3. Mobile Navigation Toggle (Hamburger Menu)
 ---------------------------------------- */
const menuToggle = document.querySelector(".menu-toggle"); 
const navMenu = document.querySelector(".nav__items");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* -----------------------------------------
  4. Close Mobile Menu When Clicking a Link
 ---------------------------------------- */
document.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active"); // Close menu on mobile
  });
});

/* -----------------------------------------
  5. Fix Resume Link Not Opening on Mobile
 ---------------------------------------- */
document.querySelectorAll('a[href="Resume.html"]').forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default to ensure proper opening
    window.open("Resume.html", "_self"); // Open in same tab
  });
});

/* -----------------------------------------
  6. Smooth Scrolling for Anchor Links
 ---------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // Adjust scroll position
        behavior: "smooth",
      });
    }
  });
});
