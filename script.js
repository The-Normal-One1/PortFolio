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

// pop-up window

const popupHeading = ["Multi Post Stories", "Keeping track of hundreds  of components website"];
const popImg = ["./images/popupMobile.svg", "./images/live.svg", "./images/GitHub.svg"];
const popupDescription = [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."];
const popupList = ["html", "Bootstrap", "Ruby on rails"] ;
const popupLinks = ["https://the-normal-one1.github.io/PortFolio/", "https://github.com/The-Normal-One1/PortFolio"]

const popup = document.querySelector('.modal')

popup.innerHTML = `<div class="pop-up-header">
<h2 class="popheading1">${popupHeading[0]}</h2>
<h2 class="popheading2">${popupHeading[1]}</h2>
<button data-close-button class="close-button">&times;</button>
</div>
<ul class="pop-up-lists">
<a class="pop-list" href="#">
  <li>${popupList[0]}</li>
</a>
<a class="pop-list" href="#">
  <li>${popupList[1]}</li>
</a>
<a class="pop-list" href="#">
  <li>${popupList[2]}</li>
</a>
</ul>
<div class="popcon">
<img src="${popImg[0]}" alt="popup" />
<div class="poptextbutton">
<p class="popuppharagraph1">
${popupDescription[0]}
</p>
<p class="popuppharagraph2">
${popupDescription[1]}
</p>
<div class="pop-up-btns">
<a class="pop-btn" href="${popupLinks[0]}">
  <p>See Live</p> <img src="${popImg[1]}" alt="Live" />
</a>
<a class="pop-btn" href="${popupLinks[1]}">
  <p>See Source</p> <img src="${popImg[2]}" alt="Github" />
</a>
</div>
</div>
</div>`;

const popupOverlay = document.querySelector('#overlay')

popupOverlay.innerHTML = `<div id="overlay"></div>
`;


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
        window.scrollTo({top:10, behavior:"smooth"})
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}