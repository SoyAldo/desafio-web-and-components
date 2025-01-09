function placeWelcome(element, title, subTitle, image) {
  element.innerHTML = `
  <div class="welcome-container">
    <div class="welcome__texts">
      <h1 class="welcome__title">${title}</h1>
      <p>${subTitle}</p>
    </div>
    <div class="welcome__image-container">
      <img class="welcome__image" src="./assets/${image}" alt="welcome image" />
      <img class="welcome__shadow" src="./assets/ellipse.svg" alt="image shadow" />
    </div>
  </div>
  `;
}
