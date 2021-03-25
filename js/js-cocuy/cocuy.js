var tiempoIntervalo = 50;
var tiempoAnimacion = 600;
var lineWidth = 2;
var factorAltura = .13


// Inicia animación capa 1-----------------------------------
function animarCapa1() {
  let capa1 = document.getElementById("capa1");
  let ctx = capa1.getContext("2d");
  let width = capa1.width;
  let height = factorAltura * width;

  let piax = 0;
  let piay = 0.77 * height;

  let pc1ax = 0.2 * width;
  let pc1ay = 0.82 * height;

  let pc2ax = 0.34 * width;
  let pc2ay = 0.77 * height;

  let pfax = 0.41 * width;
  let pfay = 0.79 * height;

  let pc1bx = 0.45 * width;
  let pc1by = 0.77 * height;

  let pc2bx = 0.55 * width;
  let pc2by = 0.82 * height;

  let pfbx = 0.72 * width;
  let pfby = 0.85 * height;

  let pc1cx = 0.75 * width;
  let pc1cy = 0.82 * height;

  let pc2cx = 0.86 * width;
  let pc2cy = 0.88 * height;

  let pfcx = 1 * width;
  let pfcy = 0.84 * height;

  let pcx = [piax, pc1ax, pc2ax, pfax, pc1bx, pc2bx, pfbx, pc1cx, pc2cx, pfcx];
  let pcy = [piay, pc1ay, pc2ay, pfay, pc1by, pc2by, pfby, pc1cy, pc2cy, pfcy];

  function pintarCapa1() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(pcx[0]-lineWidth, height+lineWidth);
    ctx.lineTo(pcx[0]-lineWidth, pcy[0]);
    ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
    ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
    ctx.bezierCurveTo(pcx[7], pcy[7], pcx[8], pcy[8], pcx[9]+lineWidth, pcy[9]);
    ctx.lineTo(pcx[9]+lineWidth, height+lineWidth);
    ctx.fillStyle = "#1F5020" ;
    ctx.strokeStyle = "#272839";
    ctx.fill();
    ctx.stroke();
  }
  function crecerCapa1() {
    let j = 0;
    let k = 0;
    let diferenciaAltura = [];
    let reductorAltura = 0;
    for (j = 0; j <= 9; j++) {
      diferenciaAltura[j] = height - pcy[j];
    }

    let timer = setInterval(function () {
      if (reductorAltura <= 1) {
        for (k = 1; k <= 9; k++) {
          pcy[k] = height - diferenciaAltura[k] * reductorAltura;
        }

        pintarCapa1();

        reductorAltura = reductorAltura + 0.1;
      }
      if (reductorAltura > 1) {
        clearInterval(timer);
      }
    }, tiempoIntervalo);
  }
  crecerCapa1();
}




// Temina animación capa 1-----------------------------------

// Inicia animación capa 2-----------------------------------
function animarCapa2() {
  let capa2 = document.getElementById("capa2");
  let ctx = capa2.getContext("2d");
  let width = capa2.width;
  let height = factorAltura * width;

  let piax = 0;
  let piay = 0.71 * height;

  let pc1ax = 0.37 * width;
  let pc1ay = 0.71 * height;

  let pc2ax = 0.62 * width;
  let pc2ay = 0.78 * height;

  let pfax = 0.68 * width;
  let pfay = 0.79 * height;

  let pc1bx = 0.69 * width;
  let pc1by = 0.7 * height;

  let pc2bx = 0.71 * width;
  let pc2by = 0.78 * height;

  let pfbx = 0.73 * width;
  let pfby = 0.75 * height;

  let pc1cx = 0.84 * width;
  let pc1cy = 0.72 * height;

  let pc2cx = 0.9 * width;
  let pc2cy = 0.76 * height;

  let pfcx = 1 * width;
  let pfcy = 0.79 * height;

  let pcx = [piax, pc1ax, pc2ax, pfax, pc1bx, pc2bx, pfbx, pc1cx, pc2cx, pfcx];
  let pcy = [piay, pc1ay, pc2ay, pfay, pc1by, pc2by, pfby, pc1cy, pc2cy, pfcy];

  function pintarCapa2() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(pcx[0]-lineWidth, height);
    ctx.lineTo(pcx[0]-lineWidth, pcy[0]);
    ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
    ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
    ctx.bezierCurveTo(pcx[7], pcy[7], pcx[8], pcy[8], pcx[9]+lineWidth, pcy[9]);
    ctx.lineTo(pcx[9]+lineWidth, height+lineWidth);
    ctx.fillStyle =  "#173D18 "
    ctx.strokeStyle = "#272839"
    ctx.fill();
    ctx.stroke();
  }

  function crecerCapa2() {
    let j = 0;
    let k = 0;
    let diferenciaAltura = [];
    let reductorAltura = 0;
    for (j = 0; j <= 9; j++) {
      diferenciaAltura[j] = height - pcy[j];
    }

    let timer = setInterval(function () {
      if (reductorAltura <= 1) {
        for (k = 1; k <= 6; k++) {
          pcy[k] = height - diferenciaAltura[k] * reductorAltura;
        }

        pintarCapa2();

        reductorAltura = reductorAltura + 0.1;
      }
      if (reductorAltura > 1) {
        clearInterval(timer);
      }
    }, tiempoIntervalo);
  }

  crecerCapa2();
}
// Termina animación capa 2-----------------------------------



// Inicia animación capa 3-----------------------------------
function animarCapa3() {
  let capa3 = document.getElementById("capa3");
  let ctx = capa3.getContext("2d");
  let width = capa3.width;
  let height = factorAltura * width;

  let piax = 0;
  let piay = 0.71 * height;

  let pc1ax = 0.08 * width;
  let pc1ay = 0.6 * height;

  let pc2ax = 0.17 * width;
  let pc2ay = 0.8 * height;

  let pfax = 0.28 * width;
  let pfay = 0.35 * height;

  let pc1bx = 0.29 * width;
  let pc1by = 0.35 * height;

  let pc2bx = 0.3 * width;
  let pc2by = 0.3 * height;

  let pfbx = 0.32 * width;
  let pfby = 0.33 * height;

  let pc1cx = 0.33 * width;
  let pc1cy = 0.34 * height;

  let pc2cx = 0.36 * width;
  let pc2cy = 0.23 * height;

  let pfcx = 0.4 * width;
  let pfcy = 0.25 * height;

  let pc1dx = 0.42 * width;
  let pc1dy = 0.48 * height;

  let pc2dx = 0.44 * width;
  let pc2dy = 0.34 * height;

  let pfdx = 0.445 * width;
  let pfdy = 0.45 * height;

  let pc1ex = 0.48 * width;
  let pc1ey = 0.64 * height;

  let pc2ex = 0.54 * width;
  let pc2ey = 0.62 * height;

  let pfex = 0.62 * width;
  let pfey = 0.78 * height;

  let pcx = [
    piax,
    pc1ax,
    pc2ax,
    pfax,

    pc1bx,
    pc2bx,
    pfbx,

    pc1cx,
    pc2cx,
    pfcx,

    pc1dx,
    pc2dx,
    pfdx,

    pc1ex,
    pc2ex,
    pfex,
  ];

  let pcy = [
    piay,
    pc1ay,
    pc2ay,
    pfay,

    pc1by,
    pc2by,
    pfby,

    pc1cy,
    pc2cy,
    pfcy,

    pc1dy,
    pc2dy,
    pfdy,

    pc1ey,
    pc2ey,
    pfey,
  ];

  function pintarCapa3() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(pcx[0]-lineWidth, height);
    ctx.lineTo(pcx[0]-lineWidth, pcy[0]);
    ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
    ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
    ctx.bezierCurveTo(pcx[7], pcy[7], pcx[8], pcy[8], pcx[9], pcy[9]);
    ctx.bezierCurveTo(pcx[10], pcy[10], pcx[11], pcy[11], pcx[12], pcy[12]);
    ctx.bezierCurveTo(pcx[13], pcy[13], pcx[14], pcy[14], pcx[15]+lineWidth, pcy[15]);
    ctx.lineTo(pcx[15]+lineWidth, height+lineWidth);
    ctx.fillStyle =  "#0D2A0E" 
    ctx.strokeStyle = "#272839 "
    ctx.fill();
    ctx.stroke();
  }

  function crecerCapa3() {
    let j = 0;
    let k = 0;
    let diferenciaAltura = [];
    let reductorAltura = 0;
    for (j = 0; j <= 15; j++) {
      diferenciaAltura[j] = height - pcy[j];
    }

    let timer = setInterval(function () {
      if (reductorAltura <= 1) {
        for (k = 3; k <= 12; k++) {
          pcy[k] = height - diferenciaAltura[k] * reductorAltura;
        }

        pintarCapa3();

        reductorAltura = reductorAltura + 0.1;
      }
      if (reductorAltura > 1) {
        clearInterval(timer);
      }
    }, tiempoIntervalo);
  }

  crecerCapa3();
}
// Termina animación capa 3-----------------------------------


// Inicia animación capa 4-----------------------------------
function animarCapa4() {
  let capa4 = document.getElementById("capa4");
  let ctx = capa4.getContext("2d");
  let width = capa4.width;
  let height = factorAltura * width;

  let piax = 0;
  let piay = 0.43 * height;

  let pc1ax = 0.02 * width;
  let pc1ay = 0.46 * height;

  let pc2ax = 0.03 * width;
  let pc2ay = 0.32 * height;

  let pfax = 0.1 * width;
  let pfay = 0.35 * height;

  let pc1bx = 0.12 * width;
  let pc1by = 0.37 * height;

  let pc2bx = 0.14 * width;
  let pc2by = 0.27 * height;

  let pfbx = 0.22 * width;
  let pfby = 0.36 * height;

  let pc1cx = 0.25 * width;
  let pc1cy = 0.46 * height;

  let pc2cx = 0.25 * width;
  let pc2cy = 0.27 * height;

  let pfcx = 0.27 * width;
  let pfcy = 0.4 * height;

  let pcx = [piax, pc1ax, pc2ax, pfax, pc1bx, pc2bx, pfbx, pc1cx, pc2cx, pfcx];
  let pcy = [piay, pc1ay, pc2ay, pfay, pc1by, pc2by, pfby, pc1cy, pc2cy, pfcy];

  function pintarCapa4() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(pcx[0]-lineWidth, height);
    ctx.lineTo(pcx[0]-lineWidth, pcy[0]);
    ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
    ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
    ctx.bezierCurveTo(pcx[7], pcy[7], pcx[8], pcy[8], pcx[9]+lineWidth, pcy[9]);
    ctx.lineTo(pcx[9]+lineWidth, height+lineWidth);
    ctx.fillStyle = "#031704" 
    ctx.strokeStyle = "#272839"
    ctx.fill();
    ctx.stroke();

  }

  function crecerCapa4() {
    let j = 0;
    let k = 0;
    let n = 0;
    let diferenciaAltura = [];
    let reductorAltura = 0.1;
    for (j = 0; j <= 9; j++) {
      diferenciaAltura[j] = height - pcy[j];
    }

    let timer = setInterval(function () {
      if (reductorAltura <= 1) {
        for (k = 1; k <= 7; k++) {
          pcy[k] = height - diferenciaAltura[k] * reductorAltura;
        }

        pintarCapa4();

        reductorAltura = reductorAltura + 0.1;
      }
      if (reductorAltura > 1) {
        clearInterval(timer);
      }
    }, tiempoIntervalo);
  }

  crecerCapa4();
}
// Termina animación capa 4-----------------------------------



// Inicia animación capa 5-----------------------------------
function animarCapa5() {
  let capa5 = document.getElementById("capa5");
  let ctx = capa5.getContext("2d");
  let width = capa5.width;
  let height = factorAltura * width;

  let p1x = 0;
  let p1y = 0;

  let p2x = width;
  let p2y = 0;

  let p3x =  width;
  let p3y =  height;


  let px = [p1x, p2x, p3x];
  let py = [p1y, p2y, p3y];

  function pintarCapa5() {
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(px[0], py[0]);
    ctx.lineTo(px[1], py[1]);
    ctx.lineTo(px[2], py[2]);
    ctx.fill();
    let grad = ctx.createRadialGradient (0.2*width, height, 10, 0.5*width, height, .5*width)
   grad.addColorStop(0, '#fff');
   grad.addColorStop(.8, '#5E83F5');
   ctx.fillStyle =  grad;
  }

  function crecerCapa5() {
    let j = 0;
    let k = 0;
    let n = 0;
    let diferenciaAltura = [];
    let reductorAltura = 0.1;
    for (j = 0; j <= 3; j++) {
      diferenciaAltura[j] = height - py[j];
    }

    let timer = setInterval(function () {
      if (reductorAltura <= 1) {
        for (k = 0; k <= 4; k++) {
          py[k] = height - diferenciaAltura[k] * reductorAltura;
        }

        pintarCapa5();

        reductorAltura = reductorAltura + 0.1;
      }
      if (reductorAltura > 1) {
        clearInterval(timer);
      }
    }, tiempoIntervalo);
  }

  crecerCapa5();
}
// Termina animación capa 5-----------------------------------

// Funcion para desvanecer la foto de Cocuy
function desvanecerImgCocuy () {
    const imgCocuy = document.querySelector(".contenedor-cocuy__img")
    imgCocuy.animate([
    {opacity : 1},
    {opacity : 0}
    ],
    {
    duration : 4000,
    fill: "backwards"
    }
    )
}
// Termina funcion para  desvanecer la foto de Cocuy


// Inician funciones que borran las capas y así poder  iniciar una nueva animación con el botón
function borraCapa1() {
  let capa1 = document.getElementById("capa1");
  let ctx = capa1.getContext("2d");
  let width = capa1.width;
  let height = factorAltura * width;
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
}

function borraCapa2() {
  let capa2 = document.getElementById("capa2");
  let ctx = capa2.getContext("2d");
  let width = capa2.width;
  let height = factorAltura * width;
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
}

function borraCapa3() {
  let capa3 = document.getElementById("capa3");
  let ctx = capa3.getContext("2d");
  let width = capa3.width;
  let height = factorAltura * width;
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
}

function borraCapa4() {
  let capa4 = document.getElementById("capa4");
  let ctx = capa4.getContext("2d");
  let width = capa4.width;
  let height = factorAltura * width;
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
}

function borraCapa5() {
    let capa5 = document.getElementById("capa5");
    let ctx = capa5.getContext("2d");
    let width = capa5.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    }
// Terminan lasfunciones que borran las capas y así poder  iniciar una nueva animación con el botón


// Para ejecutar las animaciones 1, 2, 3 , 4 y 5 con el botón dispuesto para ello

function ejecutarAnimacionesCapas12345(){
desvanecerImgCocuy()
borraCapa1()
borraCapa2()
borraCapa3()
borraCapa4()
borraCapa5()
animarCapa1();
setTimeout(animarCapa2, tiempoAnimacion);
setTimeout(animarCapa3, tiempoAnimacion * 2);
setTimeout(animarCapa4, tiempoAnimacion * 3);
setTimeout(animarCapa5, tiempoAnimacion * 4);

}

