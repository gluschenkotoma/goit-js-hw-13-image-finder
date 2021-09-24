const debounce = require('lodash.debounce');

import card from '../templates/card.hbs';
import gallery from '../templates/gallery.hbs';

const searchForm = document.querySelector('#search-form');
const divMark = document.querySelector('.mark');
const apiKey = '22755596-bd5bc4dc11dbf7c870dedd292';
const firstPage = 1;
let currentNextPage = 1;
let searchWords;

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  divMark.innerHTML = '';
  searchWords = searchForm.elements.query.value;
  const title = { searchWords };
  const galleryMarkup = gallery(title);
  divMark.insertAdjacentHTML('beforeend', galleryMarkup);
  const btn = document.querySelector('.btn-load-more');
  btn.addEventListener('click', event => {
    loadMoreFn(event, currentNextPage);
  });
  createFirstPage(searchWords);
  searchForm.reset();
});

const createFirstPage = words => {
  searchImgFn(words, firstPage, apiKey);
};

function loadMoreFn(event, page) {
  console.log(`click`, event);
  searchImgFn(searchWords, page, apiKey);
  currentNextPage = page + 1;
  console.log(currentNextPage);
}

async function searchImgFn(words, page, key) {
  await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${words}&page=${page}&per_page=12&key=${key}`,
  )
    .then(response => response)
    .then(data => data.json())
    .then(arr => {
      let resultArray;
      resultArray = arr.hits;
      const nextPageMarkup = card(resultArray);
      const ulRef = document.querySelector('.gallery');
      ulRef.insertAdjacentHTML('beforeend', nextPageMarkup);
    });
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
