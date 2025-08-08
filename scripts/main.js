import { initSlider } from './blocks/slider.js'; 
import { initBurgerMenu } from './blocks/burger_manu.js';
import { calculatorInit } from './blocks/calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  calculatorInit();
});