`use strict`;

// elementul cu clasa "section-interview"
const sectionInterview = document.querySelector('.section-interview');

// schimare culoare la fiecare 1 secunda
setInterval(function () {
  sectionInterview.classList.toggle('color-transition');
}, 1000);
