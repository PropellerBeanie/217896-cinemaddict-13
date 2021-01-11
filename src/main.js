import {createHeaderUserName} from "./view/header-username.js";
import {createMainMenu} from "./view/menu.js";
import {createMainSort} from "./view/sort.js";
import {createFilmList} from "./view/list.js";
import {createFilmCard} from "./view/list-film-card.js";
import {createShowMore} from "./view/show-more.js";
import {createFilmListExtra} from "./view/list-extra.js";
// import {createPopup} from "./view/popup.js";
import {createMoviesQuantity} from "./view/movies-quantity.js";

const FILM_CARD_COUNT = 5;
const FILM_CARD_COUNT_EXTRA = 2;

const render = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);
const footerStatistics = document.querySelector(`.footer__statistics`);


render(siteHeaderElement, createHeaderUserName(), `beforeend`);
render(siteMainElement, createMainMenu(), `beforeend`);
render(siteMainElement, createMainSort(), `beforeend`);
render(siteMainElement, createFilmList(), `beforeend`);
const filmsSection = document.querySelector(`.films`);
const filmListSection = document.querySelector(`.films-list`);
const filmListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_CARD_COUNT; i++) {
  render(filmListContainer, createFilmCard(), `beforeend`);
}

render(filmListSection, createShowMore(), `beforeend`);

render(filmsSection, createFilmListExtra(), `beforeend`);
let filmListExtraContainer = document.querySelector(`.films-list__container:last-child`);
for (let i = 0; i < FILM_CARD_COUNT_EXTRA; i++) {
  render(filmListExtraContainer, createFilmCard(), `beforeend`);
}
render(filmsSection, createFilmListExtra(), `beforeend`);
filmListExtraContainer = document.querySelector(`.films-list--extra:last-child .films-list__container`);
for (let i = 0; i < FILM_CARD_COUNT_EXTRA; i++) {
  render(filmListExtraContainer, createFilmCard(), `beforeend`);
}

render(footerStatistics, createMoviesQuantity(), `beforeend`);

