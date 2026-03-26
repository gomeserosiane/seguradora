document.addEventListener("DOMContentLoaded", () => {
  const screens = Array.from(document.querySelectorAll(".screen"));
  const introScreen = document.getElementById("introScreen");
  const whatsappFloat = document.getElementById("whatsappFloat");
  const scrollTopFloat = document.getElementById("scrollTopFloat");

  const openWhatsApp = (event, message) => {
    event.preventDefault();

    const phone = "5591999635260";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleFloatingButtons = (targetId) => {
    const shouldShow = targetId === "screenPrimary" || targetId === "screenSecondary";

    if (whatsappFloat) {
      whatsappFloat.style.display = shouldShow ? "flex" : "none";
      whatsappFloat.setAttribute("aria-hidden", String(!shouldShow));
    }

    if (scrollTopFloat) {
      scrollTopFloat.style.display = shouldShow ? "flex" : "none";
      scrollTopFloat.setAttribute("aria-hidden", String(!shouldShow));
    }
  };

  const showScreen = (targetId) => {
    screens.forEach((screen) => {
      const isActive = screen.id === targetId;
      screen.classList.toggle("is-active", isActive);
      screen.setAttribute("aria-hidden", String(!isActive));
    });

    toggleFloatingButtons(targetId);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  document.addEventListener("click", (event) => {
    const targetButton = event.target.closest("[data-target]");
    const contactButton = event.target.closest(".contact-button");
    const topButton = event.target.closest("#scrollTopFloat");

    if (targetButton) {
      const targetId = targetButton.dataset.target;

      if (targetId) {
        showScreen(targetId);
      }

      return;
    }

    if (topButton) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }

    if (contactButton) {
      const isOralBlueButton = contactButton.classList.contains("contact-button-oral");

      if (isOralBlueButton) {
        openWhatsApp(event, "Olá! Gostaria de saber mais informações sobre o plano Oral Blue.");
        return;
      }

      openWhatsApp(event, "Olá! Gostaria de saber mais informações.");
    }
  });

  if (whatsappFloat) {
    whatsappFloat.addEventListener("click", (event) => {
      openWhatsApp(event, "Olá! Vim pelo site e quero mais informações.");
    });
  }

  showScreen(introScreen ? introScreen.id : "introScreen");
});