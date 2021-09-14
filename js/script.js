// Hamurger

const menu = document.querySelector('.nav__menu'),
  menuItem = document.querySelectorAll('.nav__item'),
  hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger__active');
  menu.classList.toggle('nav__active');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('nav__active');
  });
});

// Smooth scroll

document.querySelector('.nav__menu').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Top button

const nav = document.querySelector('.nav');
const btnTop = document.querySelector('.btn-top');

const topObs = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
};

const topObserver = new IntersectionObserver(topObs, {
  root: null,
  threshold: 0,
});
topObserver.observe(nav);

btnTop.addEventListener('click', () => {
  document.querySelector('.nav').scrollIntoView({ behavior: 'smooth' });
});
