let meuCarrossel = new bootstrap.Carousel(
  document.getElementById('carrosselImagens'),
  {
    interval: 3000,
    wrap: true,
  }
);

// Quando o usuário rolar para baixo, mostra o botão
window.onscroll = function () {
  let backToTopButton = document.getElementById('backToTop');
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = 'block'; // Mostra o botão
  } else {
    backToTopButton.style.display = 'none'; // Esconde o botão
  }
};

// Quando o usuário clicar no botão, rola até o topo
document.getElementById('backToTop').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente até o topo
};

// Evento de fechar o menu
let navbarToggler = document.getElementById('botaoMenu');
let navbarCollapse = document.getElementById('navbarNav');

// Verifica quando a navbar é fechada
navbarCollapse.addEventListener('hidden.bs.collapse', function () {
  navbarToggler.setAttribute('aria-expanded', 'false'); // Garantir que o estado é "fechado"
});

// Verifica quando a navbar é aberta
navbarCollapse.addEventListener('show.bs.collapse', function () {
  navbarToggler.setAttribute('aria-expanded', 'true'); // Garantir que o estado é "aberto"
});
