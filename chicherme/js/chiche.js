

// Versión 2 : Ponle color a la corbata

const paths = document.querySelectorAll("path");
const boton = document.getElementById("contenedor-chiche__boton")
const tarjeta = document.getElementById("tarjeta");


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

let control = 0

         
function togglePintarPathsCiclos() {
  if (control===0) {
    pintarPathsCiclos()
    control = 1  
    boton.innerHTML = '<img src="./imgs/btn-pause.svg  " alt="botón pause">'

  }
  else {
    pararPintarPathsCiclos()
    activarPathsOriginales()
    control = 0
    boton.innerHTML = ' <img src="./imgs/btn-play.svg" alt="botón play">'
  }
}

// Función para remover las abras una vez terminen de abrirse
function removerAbras(){
  tarjeta.removeChild(abras)
}

//Funcion para ocultar abras 

const ocultarAbras = () => {
  abras.style.display = "none"
}

const mostrarAbras = () => {
  abras.style.display = "flex"
}


//Boton para activar la  animación de las abras

const btnAbras= document.querySelector(".boton-play-pause img")
const abraIzquierda = document.querySelector(".abra-izquierda")
const abraDerecha = document.querySelector(".abra-derecha")

let checkBtnAbras = 0


btnAbras.addEventListener("click", () => {
  mostrarAbras()
  abraIzquierda.classList.add("activo")
  abraDerecha.classList.add("activo")
  setTimeout(ocultarAbras, 5000)

})

