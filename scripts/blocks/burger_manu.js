/*
  тут, як і з js для слайдера,
  зроби функцію-обгортку і все туди перекинь,
  потім експортуй і імпортуй в main.js
*/

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});
