
const gPaths = document.querySelectorAll(".transformar")
const paths = document.querySelectorAll(".transformar path")
const btnMom = document.getElementById("momContainer_boton")
const momContainer = document.querySelector(".mom-container")
const copia1 = document.getElementById("mom-copia1" )
const copia2 = document.getElementById("mom-copia2" )
const copia3 = document.getElementById("mom-copia3" )
const gracias = document.querySelectorAll(".gracias-por-la-visita")



// Define transform-box y transform-origin
gPaths.forEach((pieza) => {
    pieza.style.transformBox = 'fill-box'
    pieza.style.transformOrigin = 'center'
})



// Deja la piezas a escala .2
const escalarPuntoVeinte = () => {
    gracias.forEach((elemento) => {
        elemento.style.display = "none"
    })
    copia2.style.display = "none"
    copia3.style.display = "none"
    gPaths.forEach((pieza) => {
    pieza.animate([
         {transform: 'scale(.2)'}
        ],{
            duration: 0,
            fill: 'forwards',
            easing: 'ease-out'
        },
        )
})
}
escalarPuntoVeinte()


// Las piezan van de la escala 0.2  a escla 1.0
const mostrarImagenOriginal = (t=3000) => {
    gracias.forEach((elemento) => {
        elemento.style.display = "none"
    })
    gPaths.forEach((pieza) => {
        pieza.style.transformBox = 'fill-box'
        pieza.style.transformOrigin = 'center'
    })
    
    escalarPuntoVeinte() 
    copia2.style.display = "none"
    copia3.style.display = "none"
    gPaths.forEach((pieza) => {
        pieza.animate([
             {transform: 'scale(1)'}
            ],{
                duration: t,
                fill: 'forwards',
                easing: 'ease-out'
            },
            )
    })
}
// mostrarImagenOriginal()


const rotarPiezas = () => {
    gracias.forEach((elemento) => {
        elemento.style.display = "none"
    })
    mostrarImagenOriginal(t=0)
    let f = 1
    gPaths.forEach((pieza) => {
    let deltaX = Math.random()*50
    let deltaY = Math.random()*50
    let toX = 500*f+deltaX+'%'
    let toY = 300*f+deltaY+'%'
    pieza.style.transformOrigin = toX, toY
    pieza.animate([
        {transform:  'rotateZ(0deg)'},
        {transform:  'rotateZ(360deg)'},
    ],  {
            duration: 4000,
            fill: 'backwards',
            easing: 'ease-in-out',
        },
        )
        f = -f
})

}
// rotarPiezas() 


const desordenarPiezas = (duracion = 6000) => {
    gracias.forEach((elemento) => {
        elemento.style.display = "none"
    })
    mostrarImagenOriginal(t=0)
    gPaths.forEach((pieza) => {
        let rotate = 'rotateZ(45deg)'
        pieza.animate([
            {transform:  rotate},
        ],  {
                duration: duracion,
                fill: 'forwards',
                easing: 'ease-out'
            },
            )
    })

    gPaths.forEach((pieza) => {
        let n = 1
        let f = Math.random()
        let px = -500
        if(f<.5){n=-2}
        let translateX = 'translateX('+px*f*n+'px'+')'
        pieza.animate([
            {transform: translateX },
        ],  {
                duration: duracion,
                fill: 'forwards',
                easing: 'ease-out'
            },
            )
    })

    gPaths.forEach((pieza) => {
        let n = 1
        let f = Math.random()
        let px = 500
        if(f<.5){n=-2}
        let translateY = 'translateY('+px*f*n+'px'+')'
        pieza.animate([
            {transform: translateY },
        ],  {
                duration: duracion,
                fill: 'forwards',
                easing: 'ease-out'
            },
            )
    })
  }
//   desordenarPiezas()



const desvanecerImagen = () => {
    mostrarImagenOriginal(t=0)
    copia2.classList.add("activo") 
    copia3.classList.add("activo") 
    copia2.style.display = "block"
    copia3.style.display = "block"

    gPaths.forEach((pieza) => {
        pieza.style.transformOrigin = 'center'
        pieza.animate([
            {transform:  'rotateX(90deg)'},
            
        ],  {
                duration: 6000,
                fill: 'forwards',
                easing: 'ease-in-out',
            },
            )
    })
    const quitarActivo = () => {
        copia2.classList.remove("activo") 
        copia3.classList.remove("activo")
        gracias.forEach((elemento) => {
            elemento.style.display = "block"
        })
           }
    setTimeout(quitarActivo, 6000)

} 

// desvanecerImagen() 

