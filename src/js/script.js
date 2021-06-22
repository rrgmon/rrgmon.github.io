'use strict';

const cardEl = document.getElementsByClassName('card');
const cardPopEl = document.getElementsByClassName('card-pop');
let mediaQueryEl = window.matchMedia('(max-width: 56em)');
function cardPopAdd() {
  for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].addEventListener('mouseover', () => {
      cardPopEl[i].classList.add('card-pop-display');
    });

    cardEl[i].addEventListener('mouseout', () => {
      cardPopEl[i].classList.remove('card-pop-display');
    });
  }
}

function cardPopRemove() {
  for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].removeEventListener('mouseover', () => {
      cardPopEl[i].classList.add('card-pop-display');
    });

    cardEl[i].removeEventListener('mouseout', () => {
      cardPopEl[i].classList.remove('card-pop-display');
    });
  }
}

function widthDetect(mediaQueryEl) {
  if (mediaQueryEl.matches) {
    cardPopAdd();
  } else {
    cardPopRemove();
  }
}

mediaQueryEl.addEventListener(
  'change onload resize',
  widthDetect(mediaQueryEl)
);
