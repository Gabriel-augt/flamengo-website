const navMenu = document.querySelector(".navMenu");
const mobileToggle = document.querySelector(".mobileToggle");
const itemsMenus = document.querySelectorAll(".itemList");


// hide the menu when clicking
function hideShowClick (element) {
  element.forEach((e) => e.addEventListener ("click", () => {
    navMenu.classList.remove("active");
    mobileToggle.classList.remove("active");
  }));
}

mobileToggle.addEventListener("click", () =>  navMenu.classList.toggle("active"));

mobileToggle.addEventListener("click", () => mobileToggle.classList.toggle("active"));

hideShowClick(itemsMenus)

AOS.init();
