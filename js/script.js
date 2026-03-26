document.addEventListener("DOMContentLoaded", () => {
  const screens = Array.from(document.querySelectorAll(".screen"));
  const introScreen = document.getElementById("introScreen");
  const primaryScreen = document.getElementById("screenPrimary");
  const secondaryScreen = document.getElementById("screenSecondary");
  const whatsappFloat = document.getElementById("whatsappFloat");

  if (primaryScreen && secondaryScreen && !secondaryScreen.children.length) {
    const primaryFrame = primaryScreen.querySelector(".screen-frame");

    if (primaryFrame) {
      const duplicateFrame = primaryFrame.cloneNode(true);
      secondaryScreen.appendChild(duplicateFrame);
    }
  }

  const openWhatsApp = (event, message) => {
    event.preventDefault();

    const phone = "5591999635260";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const showScreen = (targetId) => {
    screens.forEach((screen) => {
      const isActive = screen.id === targetId;
      screen.classList.toggle("is-active", isActive);
      screen.setAttribute("aria-hidden", String(!isActive));
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.addEventListener("click", (event) => {
    const targetButton = event.target.closest("[data-target]");
    const contactButton = event.target.closest(".contact-button");

    if (targetButton) {
      const targetId = targetButton.dataset.target;

      if (targetId) {
        showScreen(targetId);
      }

      return;
    }

    if (contactButton) {
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
