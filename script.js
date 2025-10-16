const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  hamburger.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
});
