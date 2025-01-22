let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.remove('nav-down');
    navbar.classList.add('nav-up');
  } else {
    navbar.classList.remove('nav-up');
    navbar.classList.add('nav-down');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evita valores negativos
});

function carregarPagina(pagina) {
  // Carregar o conteúdo da página
  fetch(pagina)
    .then(response => response.text())
    .then(html => {
      // Insere o conteúdo carregado no #content
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar a página:', error));
}

// Carregar a home-content.html automaticamente quando o site abrir
document.addEventListener('DOMContentLoaded', function() {
  carregarPagina('home-content.html'); // Carregar conteúdo inicial
});
