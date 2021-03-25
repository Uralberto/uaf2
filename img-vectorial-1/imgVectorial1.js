const dadPaths = document.getElementsByClassName("dadPath");
const dadBoton = document.getElementById("contenedor-img-vectorial-1__boton");
const dadContainer = document.getElementById("contenedor-img-vectorial1__svg");


function colorRandom() {
  let set = "0123456789ABCDEF";
  let codigo = [];
  for (let i = 0; i <= 5; i++) {
    let num = Math.floor(Math.random() * 16);
    codigo.push(set[num]);
  }
  let codigoColor = "#" + codigo.join("");
  return codigoColor;
}


function dadPathsInicio() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.opacity = 1;
    dadPath.style.strokeWidth = 1;
    dadPath.style.stroke = " #f8cd51";
    dadPath.style.strokeDasharray = ".5 1 1.5";
    dadPath.style.fill = "none";
  }
}

dadPathsInicio();

function dadPathsParaColorear() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.strokeWidth = 0;
  }
}

// Mover los paths con translate de manera aleatoria; imposible
// No he logrado que funcione transalte aleatoriamente. Parece ser que translate solo acepta valores absolutos

// Inicia código para pintar los paths aleatoriamente

function pintarDadPaths() {
  dadPathsParaColorear();
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.fill = colorRandom();
    dadPath.style.stroke = colorRandom();
  }
}

let dadAnimPintar;

function pintarDadFrecuencia() {
  dadAnimPintar = setInterval(pintarDadPaths, 10);
}

function pararPintarDadFrecuencia() {
  clearInterval(dadAnimPintar);
}
// Termina código para pintar los paths aleatoriamente


// Inicia función para volver al translate original de lo paths
function dadTransformInicial() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.setAttribute("transform", "translate(-784 -179)");
  }
}


// Inicia código para pintar aleatoriamente los cuerpos (los fill)  de los  paths y moverlos
let factor = 100
let x1 = -784
let y1 = -179
let delta = 50
let translateInicial = 'translate(-784px, -179px)'
let rotateInicial = 'rotateZ(0deg)'
let rotateFinal = 'rotateZ(180deg)'

function dadAnimarTransformfill() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    let px = Math.random()*factor;
    let py = Math.random()*factor;
    let translateXY = `translate(${x1-px}px , ${y1-py}px)`
    dadPath.style.fill=colorRandom()
    dadPath.animate([
      {transform: translateInicial },
      {transform: translateXY}
    ], {
      duration: 2000,
      easing: 'ease-out',
      fill: 'backwards'
    }   
    )

    factor = -factor+1
    translateInicial = `translate(${x1+delta}px , ${y1+delta}px)`
    delta = -delta*Math.random()
  }

}

let dadAnimTransfFill;

function activarDadAnimarTransformFill() {
  dadAnimarTransformfill() 
  dadAnimTransfFill = setInterval(dadAnimarTransformfill, 2200);
}

function pararDadAnimarTransformFill() {
  clearInterval(dadAnimTransfFill);
}
// Termina código para pintar aleatoriamente los cuerpos de los  paths y moverlos


// Inicia  código para pintar aleatoriamente los strokes de los  paths y moverlos
function dadAnimarTransformStroke() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    let numRandom = Math.floor(Math.random() * 4) + 1;

    switch (numRandom) {
      case 1:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 1
         
        
        break;

      case 2:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 2 
        dadPath.style.strokeDashArray = "3 2 1 " 
        break;

      case 3:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 2 
        dadPath.style.strokeDashArray = "1 2 3" 


      case 4:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 1 

        break;

      default:
        break;
    }
  }
}

let dadAnimTransfStroke;

function activarDadAnimarTransformStroke() {
  dadAnimTransfStroke = setInterval(dadAnimarTransformStroke, 500);
}

function pararDadAnimarTransformStroke() {
  clearInterval(dadAnimTransfStroke);
}

let dadCheck = 0;

function togglePintarDadCiclo() {
  if (dadCheck === 0) {
    pintarDadFrecuencia();
    dadBoton.innerHTML = '<p>Cliquea para la siguiente animación</p><br><img class="boton-play-pause"  src="./imgs/btn-play.svg  " alt="botón play">';
    dadCheck = 1;
  } else if (dadCheck === 1) {
    dadBoton.innerHTML = '<p>Cliquea para la siguiente animación</p><br><img class="boton-play-pause"  src="./imgs/btn-play.svg  " alt="botón play">';
    pararPintarDadFrecuencia();
    activarDadAnimarTransformFill();
    dadCheck = 2;
  } else if (dadCheck === 2) {
    dadBoton.innerHTML = '<img class="boton-play-pause" src="./imgs/btn-pause.svg" alt="botón pause">  ';
    pararDadAnimarTransformFill()
    dadTransformInicial();
    dadPathsInicio();
    activarDadAnimarTransformStroke();
    dadCheck = 3;
  } else if (dadCheck === 3) {
    dadBoton.innerHTML = '<p>Inicia de nuevo</p><br><img class="boton-play-pause" src="./imgs/btn-play.svg" alt="botón play"> ';
    pararDadAnimarTransformStroke();
    dadTransformInicial();
    dadPathsInicio();
    dadCheck = 0;
  }
}
