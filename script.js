const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navi-menu');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  nav.classList.toggle('active');
}
hamburger.addEventListener('click', mobileMenu);

const naviLink = document.querySelectorAll('.navi-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
  nav.classList.remove('active');
}

naviLink.forEach((n) => n.addEventListener('click', closeMenu));

// pop-up window

const projectDatas = [
  {
    popupHeadingOne: 'Multi Post Stories',
    popImg: './images/popupMobile.svg',
    popImgLive: './images/live.svg',
    popImgSource: './images/GitHub.svg',
    popupDescriptionOne: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    popupList: ['html', 'Bootstrap', 'Ruby on rails'],
    popupLiveLink: 'https://the-normal-one1.github.io/PortFolio/',
    popupSouceLink: 'https://github.com/The-Normal-One1/PortFolio',
  },
  {
    popupHeadingTwo: 'Keeping track of hundreds of components website',
    popImg: './images/popupMobile.svg',
    popImgLive: './images/live.svg',
    popImgSource: './images/GitHub.svg',
    popupDescriptionTwo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    popupList: ['html', 'Bootstrap', 'Ruby on rails'],
    popupLiveLink: 'https://the-normal-one1.github.io/PortFolio/',
    popupSouceLink: 'https://github.com/The-Normal-One1/PortFolio',
  }];

const popup = document.querySelector('.modal');

popup.innerHTML = `<div class="pop-up-header">
<h2 class="popheading1">${projectDatas[0].popupHeadingOne}</h2>
<h2 class="popheading2">${projectDatas[1].popupHeadingTwo}</h2>
<button data-close-button class="close-button">&times;</button>
</div>
<ul class="pop-up-lists">
<a class="pop-list" href="#">
  <li>${projectDatas[0].popupList[0]}</li>
</a>
<a class="pop-list" href="#">
  <li>${projectDatas[0].popupList[1]}</li>
</a>
<a class="pop-list" href="#">
  <li>${projectDatas[0].popupList[2]}</li>
</a>
</ul>
<div class="popcon">
<img src="${projectDatas[0].popImg}" alt="popup" />
<div class="poptextbutton">
<p class="popuppharagraph1">
${projectDatas[0].popupDescriptionOne}
</p>
<p class="popuppharagraph2">
${projectDatas[1].popupDescriptionTwo}
</p>
<div class="pop-up-btns">
<a class="pop-btn" href="${projectDatas[0].popupLiveLink}">
  <p>See Live</p> <img src="${projectDatas[0].popImgLive}" alt="Live" />
</a>
<a class="pop-btn" href="${projectDatas[0].popupSouceLink}">
  <p>See Source</p> <img src="${projectDatas[0].popImgSource}" alt="Github" />
</a>
</div>
</div>
</div>`;

const popupOverlay = document.querySelector('#overlay');

popupOverlay.innerHTML = `<div id="overlay"></div>
`;

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// validation contact form

const form = document.querySelector('#form');
const email = document.getElementById('email');
const emailError = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  if (email.value.match(/[A-Z]/g)) {
    event.preventDefault();
    emailError.textContent = 'Please use lowercases for the email field';
  } else if (email.validity.valueMissing) {
    event.preventDefault();
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    event.preventDefault();
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    event.preventDefault();
    emailError.textContent = 'You need to enter an e-mail address.';
  }
});