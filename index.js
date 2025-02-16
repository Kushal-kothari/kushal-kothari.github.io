/* -----------------------------------------
  1. Keyboard Navigation: Add focus outline 
---------------------------------------- */
const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

/* -----------------------------------------
  2. Back to Top Button Visibility on Scroll
---------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (isBackToTopRendered) => {
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
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav__items");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      console.log("Menu button clicked!");
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }
});

/* -----------------------------------------
  4. Close Mobile Menu When Clicking a Link
---------------------------------------- */
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav__items");
    const menuToggle = document.querySelector(".menu-toggle");

    if (navMenu && menuToggle) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("open");
    }
  });
});

/* -----------------------------------------
  5. Fix Resume Link Not Opening on Mobile
---------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href="Resume.html"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "Resume.html";
    });
  });
});

/* -----------------------------------------
  6. Auto-Scroll to "About Me" on Load
---------------------------------------- */
window.onload = function () {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    setTimeout(() => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  }
};

/* -----------------------------------------
  7. Smooth Scrolling for Anchor Links
---------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});
