function getCard(image, title, description) {
  // Creo el elemento para la tarjeta
  const card = document.createElement("article");
  // Le agrego la clase de "card"
  card.classList.add("card");
  // Agrego el resto de elementos con sus atributos
  card.innerHTML = `
    <img class="card__image" src="${image}" alt="card image" />
    <h3 class="card__title">${title}</h3>
    <p class="card__description">${description}</p>
  `;
  // Devuelvo la tarjeta
  return card;
}
