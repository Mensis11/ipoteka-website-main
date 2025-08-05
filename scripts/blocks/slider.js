export function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next-button');
  const prevBtn = document.querySelector('.prev-button');
  const navButtons = document.querySelectorAll('.nav-button');

  if (!slides.length || !nextBtn || !prevBtn) {
    console.warn('Slider: Missing required elements');
    return;
  }

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      navButtons[i]?.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentIndex = index;
      showSlide(index);
    });
  });

  showSlide(currentIndex);
}