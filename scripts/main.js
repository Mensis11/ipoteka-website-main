import { initSlider } from './blocks/slider.js'; 
import { initBurgerMenu } from './blocks/burger_manu.js';
import { calculatorInit } from './blocks/calculator.js';
import { InitOpenningForm } from './blocks/button_call.js';
import { animationsInit } from "./blocks/animations.js";

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initBurgerMenu();
  calculatorInit();
  InitOpenningForm();
  animationsInit();
});