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

function carregarPagina(pagina) {
  if (pagina === 'projects.html') {
    // Redireciona para a página completa
    window.location.href = pagina;
  } else {
    // Continua carregando de forma dinâmica para outras páginas
    fetch(pagina)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => console.error('Erro ao carregar a página:', error));
  }
}


// Se quiser carregar o conteúdo da home automaticamente quando o site abrir
// Separe o conteúdo da home em um arquivo home-content.html
document.addEventListener('DOMContentLoaded', function() {
  carregarPagina('home-content.html');
});
