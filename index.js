let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    navbar.classList.remove('nav-down');
    navbar.classList.add('nav-up');
  } else {
    // Rolando para cima
    navbar.classList.remove('nav-up');
    navbar.classList.add('nav-down');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});
