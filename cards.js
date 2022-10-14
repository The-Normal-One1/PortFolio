const titleWorks = ['My Recent Works'];
const descriptionWorks = ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."];
const worksHeading = ['Multi-Post Stories'];
const img = ['images/Img Placeholder.svg', 'images/Img Placeholder-desktop.svg'];

const works = document.querySelector('.works');
works.innerHTML = `<h2 class="my-recent">${titleWorks[0]}</h2>
<hr class="hori-break1" />
<div class="clearfix">
  <div class="placeholder">
    <img src="${img[0]}" alt="Placeholder" />
  </div>
  <img
    class="placeholder2"
    src="${img[1]}"
    alt="Placeholder"
  />
  <div class="story-cont">
    <div class="stories">
      <p>${worksHeading[0]}</p>
    </div>
    <p class="daily">
      ${descriptionWorks[0]}
    </p>
    <ul class="lruby">
      <a class="block" href="#">
        <li>css</li>
      </a>
      <a class="block" href="#">
        <li>html</li>
      </a>
      <a class="block" href="#">
        <li>bootstrap</li>
      </a>
      <a class="block" href="#">
        <li>ruby</li>
      </a>
    </ul>
    <a data-modal-target="#modal" class="see-project" href="#">
      See Project
    </a>
  </div>
</div>`;

const titleArray = ['', 'Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data More', 'Data Dashboard Healthcare', 'Website Portfolio'];
const description = ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard"];
const classesDiv = ['nothing', 'profesion-desktop', 'profesion-desktop3', 'profesion-desktop4', 'profesion-desktop', 'profesion-desktop3', 'profesion-desktop3'];
const classesHeading = ['nothing', 'heading-content-desktop', 'heading-content-desktop3', 'heading-content-desktop4', 'heading-content-desktop', 'heading-content-desktop3'];
const lists = ['html', 'bootstrap', 'ruby'];

const cards = document.querySelector('.project-cards-desktop');
for (let i = 0; i < titleArray.length; i += 1) {
  cards.innerHTML += ` <div class="${classesDiv[i]}">
    <h2 class="${classesHeading[i]}">
    ${titleArray[i]}
    </h2>
    <p class="p-content-desktop">
    ${description[i]}
    </p>
    <ul class="p-language-desktop">
      <a class="block-two-desktop" href="#">
        <li>${lists[0]}</li>
      </a>
      <a class="block-two-desktop" href="#">
        <li>${lists[1]}</li>
      </a>
      <a class="block-two-desktop" href="#">
        <li>${lists[2]}</li>
      </a>
    </ul>
    <button data-modal-target="#modal" class="project-button-desktop" href="#">See Project</button>
    </div>`;
}
