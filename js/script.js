const navMenu = document.querySelector(".navMenu");
const mobileToggle = document.querySelector(".mobileToggle");

function fixedToggle() {
  if (navMenu.classList.contains("active")) {
    mobileToggle.style.position = "fixed";
  } else {
    mobileToggle.style.position = "relative";
  }
}

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active"), fixedToggle();
});

mobileToggle.addEventListener("click", () => mobileToggle.classList.toggle("active"));
