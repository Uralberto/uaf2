


const paths = document.querySelectorAll(".contenedor-corbata__papa-svg path");
const botonCorbata = document.querySelector(".contenedor-corbata .boton-play-pause")


function activarPathsOriginales() {
for (let i = 0; i <= paths.length - 1; i++) {
  paths[i].style.opacity = 1;
  paths[i].style.strokeWidth = .5;
}
}

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


let ciclo

function pintarPaths(){
  for(let i=1; i<=172; i++){
  let op = Math.random()
  paths[i].style.opacity= op
  let color = colorRandom()
  paths[130].style.fill = color;
  paths[131].style.fill = color;
}
}

function pintarPathsCiclos(){ 
ciclo = setInterval(pintarPaths, 50) 
}


function pararPintarPathsCiclos(){
  clearInterval(ciclo)
}

let controlCorbata = 0

         
function togglePintarPathsCiclos() {
  if (controlCorbata===0) {
    pintarPathsCiclos()
    controlCorbata = 1  
    botonCorbata.innerHTML = '<img src="./imgs/btn-pause.svg  " alt="botón play">'

  }
  else {
    pararPintarPathsCiclos()
    activarPathsOriginales()
    controlCorbata = 0
    botonCorbata.innerHTML = '<img src="./imgs/btn-play.svg  " alt="botón play">'
  }
}