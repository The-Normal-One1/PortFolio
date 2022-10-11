const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navi-menu");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logo.classList.toggle('active');
    nav.classList.toggle('active');
}
const naviLink = document.querySelectorAll(".navi-link");

naviLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    logo.classList.remove('active');
    nav.classList.remove('active');

}