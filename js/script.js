document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.getElementById("contactButton");

  contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    const phone = "5500000000000";
    const message = "Olá! Gostaria de saber mais informações.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});

const whatsappFloat = document.getElementById("whatsappFloat");

whatsappFloat.addEventListener("click", (event) => {
  event.preventDefault();

  const phone = "5500000000000";
  const message = "Olá! Vim pelo site e quero mais informações.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});