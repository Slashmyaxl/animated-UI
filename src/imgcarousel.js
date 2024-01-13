const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const indicatorButtons = document.querySelectorAll('.indicator-button');
let centerSlide;
let leftSlide;
let rightSlide;
let timer;

function moveToSlide (n) {
  if (n > slides.length) {
    centerSlide = document.getElementById('1');
  } else if (n < 1) {
    centerSlide = document.getElementById(slides.length);
  } else {
    centerSlide = document.getElementById(n);
  }

  if (centerSlide === document.getElementById('1')) {
    leftSlide = document.getElementById(slides.length);
    rightSlide = document.getElementById(Number(centerSlide.id) + 1);
  } else if (centerSlide === document.getElementById(slides.length)) {
    leftSlide = document.getElementById(slides.length - 1);
    rightSlide = document.getElementById('1');
  } else {
    leftSlide = document.getElementById(n - 1);
    rightSlide = document.getElementById(Number(n) + 1);
  }

  styleSlides();
  timer = setTimeout(() => {
    const targetSlide = Number(centerSlide.id) + 1;
    removeStyles();
    moveToSlide(targetSlide);
  }, 3000);
}

function styleSlides () {
  centerSlide.classList.add('center');
  leftSlide.classList.add('left');
  rightSlide.classList.add('right');

  slides.forEach((slide) => {
    (slide.classList.contains('left') || slide.classList.contains('right') || slide.classList.contains('center'))
      ? slide.classList.add('visible')
      : slide.classList.remove('visible');
  });

  indicatorButtons.forEach((button) => {
    if (button.id.charAt(7) === centerSlide.id) {
      button.style.backgroundColor = '#fefefe';
    }
  });
}

const sliderListeners = () => {
  nextButton.addEventListener('click', () => {
    const targetSlide = Number(centerSlide.id) + 1;
    removeStyles();
    clearTimeout(timer);
    moveToSlide(targetSlide);
  });
  prevButton.addEventListener('click', () => {
    const targetSlide = centerSlide.id - 1;
    removeStyles();
    clearTimeout(timer);
    moveToSlide(targetSlide);
  });
  indicatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const targetSlide = (e.target.id.charAt(7));
      removeStyles();
      clearTimeout(timer);
      moveToSlide(targetSlide);
    });
  });
};

function removeStyles () {
  centerSlide.classList.remove('center');
  leftSlide.classList.remove('left');
  rightSlide.classList.remove('right');

  indicatorButtons.forEach(button => { button.style.backgroundColor = 'orange'; });
}

export { moveToSlide, sliderListeners };
