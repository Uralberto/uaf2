const imgLogoShadow = document.querySelector(".contenedor-logo-shadow img");

const mostrarOcultarLogoShadow = () => {
let quitarLogoShadow = 0;

document.getElementById("menu-burger").addEventListener("click", () => {
    if (quitarLogoShadow === 0) {
    document.querySelector(".contenedor-logo-shadow").removeChild(imgLogoShadow);
    quitarLogoShadow = 1;
  } else {
    document.querySelector(".contenedor-logo-shadow").appendChild(imgLogoShadow);
    quitarLogoShadow = 0;
  }
})
}

mostrarOcultarLogoShadow()