  
 const subItemBoton = document.querySelectorAll(".enlaces-sub-item__ancla-btn");
 const subItemDetalle = document.querySelectorAll(".sub-item-detalle");
 const botonRegresar2 = document.querySelectorAll(".btn-regresar--2");
 const contenedorSubItem = document.querySelectorAll(".contenedor-panel-nav__sub-item")

/* Muestra los contenidos de los subitems de "Explora" 
 y remueve el menu de navegacion de "Explora", la cabecera  y la flecha regresar */
const mostrarSubItemDetalle = () => {
   let tiempo2 = 0
   let control2 = 0 
   
   subItemBoton.forEach((item) => {
       item.addEventListener("click", (e) => {
         // Muestra el detalle del subitem y borra el menú a donde pertenece el subitem
         subItemDetalle.forEach((elemento) => {
               if (e.target.dataset.subitem === elemento.dataset.subitem) {
               if (!elemento.classList.contains("activo")) {
                  elemento.classList.add("activo");
                  subItemBoton.forEach((a) => {a.classList.remove("activo")});
               } 
             }
          })

          // Remueve la cabecera del ítem (Viñeta y título)
          cabeceraItem.forEach((cabecera) => {
            if (e.target.dataset.origen === cabecera.dataset.item) {
               if (cabecera.classList.contains("activo")) {
                  cabecera.classList.remove("activo");
               } 
             }
          })

         // Remueve la flecha boton regresar 
         botonRegresar.forEach((boton) => {
            if (e.target.dataset.origen === boton.dataset.item) {
               if (boton.classList.contains("activo")) {
                  boton.classList.remove("activo");
               } 
             }
          })

       })
    })
 }
 mostrarSubItemDetalle()


//  Oculta el detalle de los sub-tems de (por ahora solo los tiene "Explora") y regresa al menú de sub-items que tiene "Explora" (el único que tiene subitems por ahora)
const ocultarDetalleSubItemRegresarMenu = () => {
   botonRegresar2.forEach((item) => {
      item.addEventListener("click", (e) => {
         // Muestra el submenú del ítem (por ahora solo"Explora" tiene)
            subItemDetalle.forEach((elemento) => {
            if (e.target.dataset.regresar2 === elemento.dataset.subitem) { 
            elemento.classList.remove("activo")
            subItemBoton.forEach((item) => {item.classList.add("activo")})
            }
         })

         // Muestra la acabecera del ítem (Viñeta y título)
         cabeceraItem.forEach((cabecera) => {
            
            if (e.target.dataset.origen === cabecera.dataset.item) {
               console.log(cabecera)  
               if (!cabecera.classList.contains("activo")) {
                  cabecera.classList.add("activo");
               } 
             }
          })

         // Muestra  la flecha boton regresar qu está arriba del título del ítem
         botonRegresar.forEach((boton) => {
            if (e.target.dataset.origen === boton.dataset.item) {
               if (!boton.classList.contains("activo")) {
                  boton.classList.add("activo");
               } 
             }
          })

      })
   })
}
ocultarDetalleSubItemRegresarMenu()


