const img = document.querySelectorAll(".contenedor-mosaico div img");
const heightContainerPpal = document.querySelector(".contenedor-mosaico").clientHeight
const widthContainerPpal = document.querySelector(".contenedor-mosaico").clientWidth
const imgHeight = document.querySelector("img").clientHeight;
const div = document.querySelectorAll(".contenedor-mosaico div");

const letras = document.querySelectorAll(".contenedor-mosaico div .f");
const numeros = document.querySelectorAll(".contenedor-mosaico div .n");
const botonesPlay = document.querySelectorAll(".contenedor-botones button");


let item = img.length - 1
let tOUno = 'right'

function animarImgUno(n) {
  img[n].style.transformOrigin = tOUno
  img[n].animate([
    { transform: 'rotateY(90deg)' },
    { transform: 'skew(20deg)' },
    { transform: 'rotate(180deg)' },
    { transform: 'skew(-20deg)' },
    { transform: 'rotateY(0deg)' },

  ], {
    duration: 10000,
    fill: 'backwards',
    easing: 'ease-out'

  }
  )
}

function animarImgsUno(j) {
    for (k = j; k >= 0; k--) {
      animarImgUno(k)
      if (tOUno === 'right') {
        tOUno = 'left'
      } else {
        tOUno = 'right'
      }
    }
}

function activarAnimarImgsUno() {
  animarImgsUno(item)
}


function pararAnimarImgsUno() {
  animarImgsUno()

}




///////////////////////////////////////////////////////////////////////////

// Animación de imagenes del mosaisco  tipo dos
// Animación del contenedor de cada imágen del mosaico
// Los contendores de cada imagen del mosaicoa se envían al pie del contenedor 
// se envían al pie de la imágen y luego suben a su posición original con
// movimiento de translación y rotación

let f1 = 50
let f2 = 1

function animarImgDos(n) {

  let py = div[n].offsetTop
  let px = f1 * f2
  let deg = Math.random() * 360;

  let transformCero = 'translate(' + px + 'px' + ',' + -py + 'px) rotate(' + deg + 'deg)'
  let transformCien = 'translate(0px, 0px) rotate(0deg)'

  div[n].animate({
    transform: [transformCero, transformCien],

  },
    duration = 10000,
    easing = "ease-out",
  )

  f1 -= .3
  f2 = -f2

}

function animarImgsDos(j) {
  for (k = j; k >= 0; k--) {
    animarImgDos(k)
  }
}

function activarAnimarImgsDos() {
  animarImgsDos(item)
}


/////////////////////////////////////////////////////////////////

// Animación de imagenes del mosaisco  tipo tres
// Animación del contenedor de cada imágen del mosaico
// Efecto de borrado de cada contenedor, de arriba a abajo
// Enseguida los contenedores vuelven y aparecen de arriba abajo con movimientos de rotación y transalción
// Algo así como la recuperación de los contenedotes que se han borrado

let f3 = 1
let f4 = 1


function animarImgsTres() {

  let sI = setInterval(function () {
    let py = div[item].offsetTop
    let pxl = div[item].offsetLeft * f3

    let deg = Math.random() * 180;

    let topCero = py + 'px'
    let topCien = 0 + 'px'

    let leftCero = pxl + 'px'
    let leftCien = 0 + 'px'

    let rotateCero = 'rotate(' + deg + 'deg)'
    let rotateCien = 'rotate(0deg)'

    div[item].animate({
      top: [topCero, topCien],
      left: [leftCero, leftCien],
      transform: [rotateCero, rotateCien]

    },
      duration = 1500,
      easing = "ease-out",
      fill = "forwards",
    )

    f3 -= .004
    f4 = -f4
    item--
    if (item === 1) {
      clearInterval(sI)
    }

  }, 20)
}

function activarAnimarImgsTres() {
  animarImgsTres()
}

////////////////////////////////////////////////////////////////

function animarImgsCuatro() {

  for (let i = 0; i <= item; i++) {
    let deg = 120;
    let rotateCero = 'rotateZ(' + deg + 'deg)'
    let rotateCien = 'rotateZ(0deg)'
    img[i].style.transformOrigin = "100% 100%"
    img[i].animate({
      transform: [rotateCien, rotateCero],
    },
      10000,
      "easie-in-out",
      "forwards",
    )
  }
}

// animarImgsCuatro()

function activarAnimarImgsCuatro() {
  animarImgsCuatro()
}


function pararAnimarImgsCuatro() {
  animarImgsCuatro()
}




//////////////////////////////////////////////////////////////////////////////


let controlUno = 0

function animacionUno() {
  if (controlUno === 0) {
    activarAnimarImgsUno()
    controlUno = 1
    botonesPlay[0].innerHTML = '<img src="./imgs/btn-pause.svg " alt="botón pause"> '

  }
  else {
    controlUno = 0
    botonesPlay[0].innerHTML = '<img src="./imgs/btn-play.svg " alt="botón play"> '
  }
}



let controlDos

function animacionDos() {
  if (controlDos === 0) {
    activarAnimarImgsDos()
    controlDos = 1
    botonesPlay[1].innerHTML = '<img src="./imgs/btn-pause.svg " alt="botón pause"> '

  }
  else {
    controlDos = 0
    botonesPlay[1].innerHTML = '<img src="./imgs/btn-play.svg " alt="botón play"> '
    item = img.length - 1
  }
}



let controlTres

function animacionTres() {
  if (controlTres === 0) {
    activarAnimarImgsTres()
    controlTres = 1
    botonesPlay[2].innerHTML = '<img src="./imgs/btn-pause.svg " alt="botón pause">  '

  }
  else {
    controlTres = 0
    botonesPlay[2].innerHTML = '<img src="./imgs/btn-play.svg " alt="botón play"> '
    item = img.length - 1
  }
}



let controlCuatro

function animacionCuatro() {
  if (controlCuatro === 0) {
    activarAnimarImgsCuatro()
    controlCuatro = 1
    botonesPlay[3].innerHTML = '<img src="./imgs/btn-pause.svg " alt="botón pause">  '

  }
  else {
    controlCuatro = 0
    botonesPlay[3].innerHTML = '<img src="./imgs/btn-play.svg " alt="botón play"> '
    item = img.length - 1
  }
}