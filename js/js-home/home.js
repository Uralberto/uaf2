// const contenedorLogoShadow = document.getElementById("contenedor-logo-shadow");

const quitarPositionRelative = () => {
  let quitarRelative = 0;
    document.getElementById("menu-burger").addEventListener("click", () => {
    if (quitarLogoShadow === 0) {
      contenedorLogoShadow.style.position = " "
      quitarRelative = 1;
    } else {
      contenedorLogoShadow.style.position = "relative";
      quitarRelative = 0;
    }
  });
};
