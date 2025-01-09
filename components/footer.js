function placeFooter(element) {
  element.innerHTML = `
    <div class="footer-container">
      <a class="footer__logo" href="./index.html">DonOsvaldo</a>

      <div class="footer__links-container">
        <nav class="footer__nav">
          <a class="footer__nav-link" href="./index.html">
            <img class="footer__nav-icon" src="./assets/home.svg" />
            <span class="footer__nav-text">Home</span>
          </a>
          <a class="footer__nav-link" href="./services.html">
            <img class="footer__nav-icon" src="./assets/user.svg" />
            <span class="footer__nav-text">Servicios</span>
          </a>
          <a class="footer__nav-link" href="./contact.html">
            <img class="footer__nav-icon" src="./assets/phone.svg" />
            <span class="footer__nav-text">Contacto</span>
          </a>
        </nav>

        <div class="footer__socials">
          <a class="footer__social-container" href="https://www.linkedin.com/in/pereyraosvaldo" target="_blank">
            <img class"footer__social-icon" src="./assets/linkedin.svg" />
          </a>
          <a class="footer__social-container" href="https://github.com/SoyAldo" target="_blank">
            <img class"footer__social-icon" src="./assets/github.svg" />
          </a>
          <a class="footer__social-container" href="https://x.com" target"_blank">
            <img class"footer__social-icon" src="./assets/twitter.svg" />
          </a>
        </div>
      </div>

      <span class="footer__copyright">©2022 - https://apx.school</span>
    </div>
  `;
}
