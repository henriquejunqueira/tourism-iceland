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
