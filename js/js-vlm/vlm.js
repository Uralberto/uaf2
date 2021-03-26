const piso = document.getElementsByClassName("piso");
const muroVertical = document.getElementsByClassName("muro-v");
const muroHorizontal = document.getElementsByClassName("muro-h");
const cubierta = document.getElementsByClassName("cubierta");
const torrecilla = document.getElementsByClassName("torrecilla");
const estructura = document.getElementsByClassName("estructura");
const ventanas = document.getElementsByClassName("ventana");
const grada = document.getElementsByClassName("grada");
const cerca = document.getElementsByClassName("cerca");
const botonVlm = document.querySelector(".contenedor-vlm__boton .boton-play-pause")




function ocultarVlmPaths(elem) {
  for (let i = 0; i <= elem.length - 1; i++) {
    elem[i].style.opacity = 0;
  }
}

function activarOcultarVlmPaths(){
ocultarVlmPaths(piso);
ocultarVlmPaths(muroVertical);
ocultarVlmPaths(muroHorizontal);
ocultarVlmPaths(cubierta);
ocultarVlmPaths(torrecilla);
ocultarVlmPaths(estructura);
ocultarVlmPaths(ventanas);
ocultarVlmPaths(grada);
ocultarVlmPaths(cerca);
}

activarMostarVlmPaths()


function mostrarVlmPaths(elem) {
  for (let i = 0; i <= elem.length - 1; i++) {
    elem[i].style.opacity = 1;
  }
}


function addFill(elem, color) {
  for (let i = 0; i <= elem.length - 1; i++) {
    elem[i].style.fill = color;
  }
  cubierta[7].style.fill= "#ddd7d2"
}


function activarMostarVlmPaths(){
mostrarVlmPaths(piso);
mostrarVlmPaths(muroVertical);
mostrarVlmPaths(muroHorizontal);
mostrarVlmPaths(cubierta);
addFill(cubierta, "#a42020")
mostrarVlmPaths(torrecilla);
mostrarVlmPaths(estructura);
mostrarVlmPaths(ventanas);
mostrarVlmPaths(grada);
mostrarVlmPaths(cerca);
}






function pintarVlmPaths(vlmPaths) {
  var i = 0;
  let timer = setInterval(
    function () {
      let long = vlmPaths[i].getTotalLength()
      vlmPaths[i].style.opacity = 1
      const animacion = vlmPaths[i].animate(
        [
          {
            strokeDashOffset: long,
          },

          {
            strokeDashOffset: 0,
          }
        ],
        {
          duration: 2000,
          direction: 'normal',
          easing: 'linear',
        }
      )
      if (i === vlmPaths.length - 1) {
        clearInterval(timer)
      }
      i++
    }, 100)
}


// La fucniones a continuación, desde animarPisos() hasta animarCerca() fueron necesarias para poder aplicar los setTimeou que siguen

function animarPisos() {
  pintarVlmPaths(piso);
}

function animarMurosVerticales() {
  pintarVlmPaths(muroVertical);
}

function animarMurosHorizontales() {
  pintarVlmPaths(muroHorizontal);
}

function animarStrokeCubierta() {
  pintarVlmPaths(cubierta);
  cubierta[7].style.fill= "#ddd7d2"
  }

 function activarFillCubierta() {
    addFill(cubierta, "#a42020")
    }
  
function animarTorrecilla() {
  pintarVlmPaths(torrecilla);
}

function animarEstructura() {
  pintarVlmPaths(estructura);
}

function animarVentanas() {
  pintarVlmPaths(ventanas);

}

function animarGradas() {
  pintarVlmPaths(grada);
}
function animarCerca() {
  pintarVlmPaths(cerca);
}


function animarVlmPaths(){
setTimeout(animarPisos);
setTimeout(animarMurosVerticales, 1000);
setTimeout(animarMurosHorizontales, 2000);
setTimeout(animarStrokeCubierta, 3000);
setTimeout(animarTorrecilla, 4000);
setTimeout(animarEstructura, 5000);
setTimeout(animarVentanas, 6000);
setTimeout(animarGradas, 7000);
setTimeout(animarCerca, 8000);
setTimeout(activarFillCubierta, 8000);
}


let controlVlm = 0


function activarAnimarVlmPaths() {
  if (controlVlm===0){
  activarOcultarVlmPaths()
  animarVlmPaths()
  botonVlm.innerHTML = '<img src="./imgs/btn-pause.svg  " alt="botón pausa">'
  controlVlm = 1
}
else{
   botonVlm.innerHTML = '  <img src="./imgs/btn-play.svg  " alt="botón play">'
   activarMostarVlmPaths()
   controlVlm = 0
}

}

