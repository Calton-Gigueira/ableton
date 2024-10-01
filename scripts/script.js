'use strict';

const textSection = document.querySelectorAll('.live__push__link__section');

const showText = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show__text');
    } else {
      entry.target.classList.remove('show__text');
    }
  });
};

const observer = new IntersectionObserver(showText, {
  root: null,
  threshold: 0.1,
});

textSection.forEach(section => observer.observe(section));

const yellowGrid = document.querySelector('.yellow__grid');
const yellowGridImg1 = yellowGrid.querySelector('.yellow__grid__img-1');
const yellowGridImg2 = yellowGrid.querySelector('.yellow__grid__img-2');

const revealYellowGridImgs = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      yellowGridImg1.classList.add('left__show');
      yellowGridImg2.classList.add('right__show');
      console.log(entry);
    } else {
      yellowGridImg1.classList.remove('left__show');
      yellowGridImg2.classList.remove('right__show');
    }
  });
};

const yellowGridObserver = new IntersectionObserver(revealYellowGridImgs, {
  root: null,
  threshold: 0.4,
});

yellowGridObserver.observe(yellowGrid);

// Green Grid
const greenGrid = document.querySelector('.green__grid');
const greenGridLeftImgs = document.querySelectorAll('.left__hidden__image');
const greenGridRightImg = greenGrid.querySelector('.right__hidden__image');

const revealGreenGridImgs = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      greenGridLeftImgs.forEach(img => img.classList.add('left__show__image'));
      greenGridRightImg.classList.add('right__show__image');
    } else {
      greenGridLeftImgs.forEach(img =>
        img.classList.remove('left__show__image')
      );
      greenGridRightImg.classList.remove('right__show__image');
    }
  });
};

const greenGridObserver = new IntersectionObserver(revealGreenGridImgs, {
  root: null,
  threshold: 0.4,
});

greenGridObserver.observe(greenGrid);

// Purple Grid
const purpleGrid = document.querySelector('.purple__grid');
const purpleImgs = [...purpleGrid.querySelectorAll('img')];

const revealPurpleGridImgs = entries => {
  const [leftImg, rightImg] = [...purpleImgs];

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      leftImg.classList.add('purple__show');
      rightImg.classList.add('purple__show');
    } else {
      leftImg.classList.remove('purple__show');
      rightImg.classList.remove('purple__show');
    }
  });
};

const purpleGridObserver = new IntersectionObserver(revealPurpleGridImgs, {
  root: null,
  threshold: 0.4,
});

purpleGridObserver.observe(purpleGrid);
