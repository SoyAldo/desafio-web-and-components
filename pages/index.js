function placeAboutInformation() {
  fetch(
    "https://cdn.contentful.com/spaces/tlp5htwo3odb/environments/master/entries/?access_token=JnL3ZPg-iQUed7Ugls30WK9zYTfNTvZIQrzk3DwBH7I&content_type=about"
  ).then((response) =>
    response.json().then((data) => {
      // Obteniendo los datos del objeto
      const item = data.items[0];
      const title = item.fields.title;
      const description = item.fields.description;
      const imageId = item.fields.image.sys.id;
      const imageUrl = data.includes.Asset.find(
        (asset) => asset.sys.id === imageId
      ).fields.file.url;
      // Colocando título
      document.querySelector(".about__title").textContent = title;
      // Colocando descripción
      document.querySelector(".about__description").textContent = description;
      // Colocando imagen
      document.querySelector(".about__image").src = "https:" + imageUrl;
    })
  );
}

function placeServiceCards() {
  fetch(
    "https://cdn.contentful.com/spaces/tlp5htwo3odb/environments/master/entries/?access_token=JnL3ZPg-iQUed7Ugls30WK9zYTfNTvZIQrzk3DwBH7I&content_type=services"
  ).then((response) =>
    response.json().then((data) => {
      const cardsElement = document.querySelector(".cards");

      for (const item of data.items) {
        const image =
          "https:" +
          data.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.image.sys.id
          ).fields.file.url;
        const title = item.fields.title;
        const description = item.fields.description;

        const card = getCard(image, title, description);
        cardsElement.appendChild(card);
      }
    })
  );
}

function main() {
  // Colocando la cabecera de página
  placeHeader(document.querySelector(".header"));
  // Colocando el componente de bienvenida
  placeWelcome(
    document.querySelector(".welcome"),
    "Hola",
    "Soy Osvaldo",
    "rocket.svg"
  );
  // Colocando información en "about"
  placeAboutInformation();
  // Colocando las tarjetas de servicios
  placeServiceCards();
  // Colocando el formulario de contacto
  placeContact(document.querySelector(".contact"));
  // Colocando el pie de página
  placeFooter(document.querySelector(".footer"));
}

main();
