
const letraA = document.getElementById("letra-A-1");
const brazoLetraU = document.getElementById("brazo-letra-U-1");
const anilloExterno = document.getElementById("anilloExterno");
const parteBajaLetraU = document.getElementById("parte-baja-letra-U-1");

const dashArrayAnilloExterno = anilloExterno.getTotalLength();

const dashArrayLetraA = letraA.getTotalLength();

const dashArrayLetraU = brazoLetraU.getTotalLength();

const dashArrayParteBajaLetraU = parteBajaLetraU.getTotalLength();



// Rota noventa grados y cada 10s la letra A (triangulo de color azul) del logo 
const rotarLetraAPeriodicamente = () => {
    setTimeout(() => {
    document.getElementById("letra-A").classList.add("animar")
    }, 5000)
      setInterval(() => {
        setTimeout(() => {
            document.getElementById("letra-A").classList.add("animar")
            }, 5000)
        setTimeout(() => {
            document.getElementById("letra-A").classList.remove("animar")
            }, 1000);
    }, 10000);
  }
  rotarLetraAPeriodicamente() 



