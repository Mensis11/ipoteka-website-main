import { initSlider } from './blocks/slider.js'; 
import { initBurgerMenu } from './blocks/burger_manu.js';
import { calculatorInit } from './blocks/calculator.js';
import { InitOpenningForm } from './blocks/button_call.js';

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  calculatorInit();
});

document.addEventListener('DOMContentLoaded', () => {
  InitOpenningForm();
});