function placeHeader(element) {
  element.innerHTML = `
  <div class="header__container">
    <a class="header__logo" href="index.html">Tu Logo</a>
    <img class="header__mobile-menu" src="./assets/menu.svg" alt="mobile menu" />

    <div class="header__mobile-modal">
      <img class="header__mobile-close" src="./assets/close.svg" alt="mobile close" />
      <a class="header__mobile-modal-link" href="./portfolio.html">Portfolio</a>
      <a class="header__mobile-modal-link" href="./services.html">Servicios</a>
      <a class="header__mobile-modal-link" href="./contact.html">Contacto</a>
    </div>

    <div class="header__desktop-links">
      <a class="header__desktop-link" href="./portfolio.html">Portfolio</a>
      <a class="header__desktop-link" href="./services.html">Servicios</a>
      <a class="header__desktop-link" href="./contact.html">Contacto</a>
    </div>
  </div>
  `;

  // Agrego el evento de clic al elemento del menu movil abrir
  const openButtonElement = element.querySelector(".header__mobile-menu");
  openButtonElement.addEventListener("click", () => {
    const modalElement = element.querySelector(".header__mobile-modal");
    modalElement.classList.add("header__modal-show");
  });

  // Agrego el evento de clic al elemento del modal para cerrar
  const closeButtonElement = element.querySelector(".header__mobile-close");
  closeButtonElement.addEventListener("click", () => {
    const modalElement = element.querySelector(".header__mobile-modal");
    modalElement.classList.remove("header__modal-show");
  });
}
