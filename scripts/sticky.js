'use strict';

const headerSection = document.querySelector('.header__second_section');
const mainFirstSection = document.querySelector('.main__first_section');

const revealHeaderSection = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      headerSection.classList.add('sticky');
    } else {
      headerSection.classList.remove('sticky');
    }
  });
};

const myObserver = new IntersectionObserver(revealHeaderSection, {
  root: null,
  threshold: 0,
});

myObserver.observe(mainFirstSection);
