function placeServiceCards() {
  fetch(
    "https://cdn.contentful.com/spaces/tlp5htwo3odb/environments/master/entries/?access_token=JnL3ZPg-iQUed7Ugls30WK9zYTfNTvZIQrzk3DwBH7I&content_type=works"
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
  // Colocando la cabecera
  placeHeader(document.querySelector(".header"));
  // Colocando el componente de bienvenida
  placeWelcome(
    document.querySelector(".welcome"),
    "Mis",
    "trabajos",
    "maletin.svg"
  );
  // Colocando tarjetas de servicios
  placeServiceCards();
  // Colocando el pie de página
  placeFooter(document.querySelector(".footer"));
}

main();
