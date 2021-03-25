

/* Muestra "Explora" y sus sub-items  cuando se hace click en el ancla que  está en el aparte del CV que habla  de mi "Experiencia como frontend autodidacta" */

const enlaceExplora =  document.querySelector(".ancla-explora-aqui")



const mostrarMenuExplora = () => {
 enlaceExplora.addEventListener("click", (e) => {
    // Muestra el submenú de navegación de un ítem (Solo "Explora" tiene submenú o subitems)  
    enlacesSubItem.forEach((eSubItem) => {
        if (e.target.dataset.item === eSubItem.dataset.padre) {
            if (!eSubItem.classList.contains("activo")) {
            enlacesSubItem.forEach((enlace) => {enlace.classList.add("activo")})
            }
        }
      })
      // Muestra la cabecera del ítem de navegación (viñeta y título)
      cabeceraItem.forEach((cabecera) => {
        if (e.target.dataset.item === cabecera.dataset.item) {
          if (!cabecera.classList.contains("activo")) {
          cabecera.classList.add("activo")
          } 
        }
      })
      // Oculta el contenido abierto de un ítem, solo queda  el nombre del ítem con el submenú, si lo tiene
      detalleItem.forEach((elemento) => {
        if (e.target.dataset.itemdetalle === elemento.dataset.item) {
            if (elemento.classList.contains("activo")) {
            elemento.classList.remove("activo");
          } 
        }
      })

    // Para mostrar la flecha de regreso que va encima del título del ítem
    console.log(document.querySelectorAll(".btn-regresar"))
    
    document.querySelectorAll(".btn-regresar").forEach((btnRegresar) => {
        
        if (e.target.dataset.item === btnRegresar.dataset.item) {
            if (!btnRegresar.classList.contains("activo")) {
            btnRegresar.classList.add("activo");
          } 
        }
    })

  })



}  
mostrarMenuExplora()