function placeContact(element) {
  element.innerHTML = `
  <div class="contact-container">
    <div class="contact__header">
      <h2 class="contact__title">Escribime</h2>
    </div>
    <form class="contact__form">
      <div class="contact__field">
        <label for="name">Nombre</label>
        <input required type="text" name="name" id="name" placeholder="Tu nombre" />
      </div>
      <div class="contact__field">
        <label for="email">Email</label>
        <input required type="email" name="email" id="email" placeholder="tu@mail.com" />
      </div>
      <div class="contact__field">
        <label for="message">Mensaje</label>
        <textarea
          required
          type="text"
          id="message"
          name="message"
          placeholder="Tu mensaje..."
        ></textarea>
      </div>
      <button class="contact__submit" type="submit">
        Enviar <img src="./assets/send.svg" alt="Send image" />
      </button>
    </form>
  </div>
  `;

  const formElement = element.querySelector(".contact__form");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);

    const email = formData.get("email");
    const message = formData.get("message");

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: {
        to: email,
        message: message,
      },
    });
  });
}
