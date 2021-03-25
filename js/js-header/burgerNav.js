const contenedorItems = document.getElementById("contenedor-panel-nav__items")
const contenedorItem = document.querySelectorAll(".contenedor-panel-nav__item")
const contenedorSubItems = document.querySelectorAll(".contenedor-panel-nav__sub-items")
const itemTitulo = document.querySelectorAll(".presentacion-item .presentacion-item__titulo")
const detalleItem = document.querySelectorAll(".presentacion-item__detalle")
const cv = document.querySelector(".cv")
const descripcionItem = document.querySelectorAll(".presentacion-item .presentacion-item__descripcion")
const enlacesSubItem = document.querySelectorAll(".enlaces-sub-item__ancla-btn")
const cabeceraItem = document.querySelectorAll(".enlaces-sub-item .cabecera-item")
const botonRegresar = document.querySelectorAll(".btn-regresar")
const vineta = document.querySelectorAll(".contenedor-panel-nav__vineta svg")
const quitarLetraA = document.querySelector(".cabecera-item .vineta-quitar-a")
const quitarParteLetraU = document.querySelector(".cabecera-item .vineta-quitar-parte-u")
const ponerVinetaAmarilla = document.querySelector(".cabecera-item .vineta-amarilla")

const eslogan = document.querySelectorAll(".contenedor-header__eslogan path")


//  Para mutar el ícono del menu hamburguesa (de 3 barras a una equix)
const mutarMenuBurger = () => {
  burgerPaths = document.querySelectorAll(".burger-paths path");
  document.getElementById("menu-burger").addEventListener("click", () => {
    for (let i = 0; i <= burgerPaths.length - 1; i++) {
      if (i < 3) {
        burgerPaths[i].classList.toggle("mostrar-burger");
      } else {
        burgerPaths[i].classList.remove("ocultar-burger");
        burgerPaths[i].classList.toggle("mostrar-burger");
      }
    }
  });
};
mutarMenuBurger();

// Muestra el menú principal con efecto de animación cuando se toca la burger. Borra todos los menus activos cuando se toca la equix
const mostrarOcultarMenuPrincipal = () => {
  let time = 0
  let control = 0
  document.getElementById("menu-burger").addEventListener("click", () => {
    if (control === 0) {
        contenedorItem.forEach((item) => {
          setTimeout(
          () => {item.classList.add("activo")}, time)
          time = time+333
          })
          control = 1
          time = 0

         } else {
          const  menusActivos = document.querySelectorAll("body .activo")
          menusActivos.forEach((elemento) => {
          elemento.classList.remove('activo');
          });
          control=0
        }
  });
};
mostrarOcultarMenuPrincipal();


// Borra los menus abiertos y regresa al menú principal con efecto de animación
const btnRegresar = () => {
    document.querySelectorAll(".btn-regresar  img").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          document.querySelectorAll("body .activo").forEach((elemento) => {
          elemento.classList.remove('activo')});
          let time = 0
          contenedorItem.forEach((item) => {setTimeout(
            () => {item.classList.add("activo")}, time)
            time = time+333
            }
          )
        }
        
      )
    })
  };
  btnRegresar();




/* Muestra las barras de subitems ( Por ahora solo  "Explora" los tiene )  y los contenidos de los items "Te cuento"  y "Yo"
 y remueve el menu de navegacion principal */
const mostrarOcultarSubItemsNav = () => {
  
  const btnFlechaAbajo = document.querySelectorAll(".contenedor-panel-nav__item  .contenedor-panel-nav__flecha-abajo");
  btnFlechaAbajo.forEach((item) => {
    item.addEventListener("click", (e) => {


      // Muestra el botón regresar 
      botonRegresar.forEach((boton) => {
        if (e.target.dataset.item === boton.dataset.item) {
          if (!boton.classList.contains("activo")) {
            boton.classList.add("activo")
          } 
        }
      })

      
      // Muestra el título  de un ítem del menú principal 
      cabeceraItem.forEach((cabecera) => {
        if (e.target.dataset.item === cabecera.dataset.item) {
          if (!cabecera.classList.contains("activo")) {
          cabecera.classList.add("activo")
          } 
        }
      })
      
      // Muestra los sub-items de un ítem (Por ahora solo "Explora" los tiene) con efecto de animación
      enlacesSubItem.forEach((subItem) => {
        if (e.target.dataset.item === subItem.dataset.padre) {
          if (!subItem.classList.contains("activo")) {
                let time = 0
                enlacesSubItem.forEach((mostrarSubItems) => {setTimeout(() => {mostrarSubItems.classList.add("activo")}, time)
                time = time+100
                })
                contenedorItem.forEach((item) => {item.classList.remove("activo")});
            } 
        }
      })
      
      // Muestra la viñeta animada de la cebecera del ítem. Se convierte en una cara feliz)
      vineta.forEach((vineta) => {
        if (e.target.dataset.item === vineta.dataset.item) {
            if (!quitarLetraA.classList.contains("activo")) {
            quitarLetraA.classList.add("activo")
          } 
          if (!quitarParteLetraU.classList.contains("activo")) {
            quitarParteLetraU.classList.add("activo")
            } 
          if (!ponerVinetaAmarilla.classList.contains("activo")) {
             ponerVinetaAmarilla.classList.add("activo")
          }
        }
      })

      // Muestra los contenidos  "Te cuento" (párrafo de entrada), y "Yo" que están dentro de  <main>
      detalleItem.forEach((detalleItem) => {
        if (e.target.dataset.item === detalleItem.dataset.item) {
          if (!detalleItem.classList.contains("activo")) {
              detalleItem.classList.add("activo");
              contenedorItem.forEach((item) => {
                 if(item.classList.contains("activo")){
                 item.classList.remove("activo")}
                })
               document.querySelector(".quitar-titulo").style.display = "none"

          } 
        }
      })
    });
    
  });
};
mostrarOcultarSubItemsNav();


/* Muestra la parte faltante (la descripción) del ítem "Te cuento"  */
const mostrarTeCuento = () => {
  document.getElementById("ancla-mostrar-te-cuento").addEventListener("click", () => {
  document.getElementById('presentacion-item__descripcion').classList.add("activo");
  });
};
mostrarTeCuento();


