const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const naviLink = document.querySelectorAll(".navi-link");

naviLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}