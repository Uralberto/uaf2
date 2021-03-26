
# uaf2**

El repositorio **uaf2**  contiene  mi segundo sitio web personal. Llega en reemplazo de  **uaf1**, repositorio  donde aún se encuentra el primero, subido a la red en 2019.  Es un sitio muy diferente,  no  guarda mucha cercanía con el primero salvo por asuntos como el logo  y  el  manejo del color. No tiene nada distinto a *Html*, *Css* y *JavaScript* puro. Podría decir que el único recurso externo es la tipografía. La mayoría de los efectos de animación están a cargo de *JavaScript*. Las animaciones con Css son complementarias. Privilegia el uso de imágenes *SVG* por encima de los demás formatos existentes. 

Está pensado, por ahora (marzo/2021), para ser visto en dispositivos  con ancho de pantalla gráfica no mayor a 600px. La idea es tenerlo habilitado en el menor tiempo posible para  dispositivos mas grandes.

Toma ideas del Neoformismo para el manejo de bordes, sombras y luces, particularmente en los botones y las opciones de navegación. Cada opción de navegación dirige al usuario a un contenido específico y saca de la vista cualquier otro que no esté vinculado. Se quiere evitar que una vez el usuario llegue a un contenido de su interés, no exista otro (arriba, abajo o los lados) que pueda dar la impresión de ser parte. 

El menú de navegación principal cuenta con tres opciones. Las opción "Te cuento" solo pretende dejar en contexto al visitante sobre los antecedentes de este ejercicio digital. Intenta responder por qué existe,  qué lo motiva. La opción "Yo" es el típico *about me* o el "quién soy". La opción "Explora" viene a ser como el modelo a seguir para los nuevos menús de navegación  que se requieran según  los proyectos o iniciativas que a futuro se introduzcan al sitio. A su izquierda (de "Explora") se muestra una carita feliz resultado de la mutación del logo: se quita el elemento triangular azul que sugiere la letra "A" y se recorta la línea superior izquierda del elemento que sugiere la letra "U". En realidad, los elementos no se quitan totalmente. Lo poquito que queda de cada uno  se comportan como los ojos de la carita. Finalmente se pinta de amarillo el área demarcada por el círculo. Efecto pensado para agradecer de manera sencilla el interés de los visitantes.

El logo en la esquina superior izquierda se anima al momento de cargar la página. Es una imagen *SVG*. El efecto de animación se logra manipulando los atributos *stroke-dasharray* y *stroke-dashoffset* de los elementos que configuran el logo. El elemento triangular repite su movimiento cada 10 segundos con una función *JavaScript*. A la derecha del logo van dos elementos *SVG*: uno lleva el nombre (mi nombre) y el otro, ubicado justo debajo, transmite el espíritu del sitio o el área de interés (*frontend*). Cuenta además con una animación que simula una línea de código. Tras varios intentos con elementos distintos, observé que lo más óptimo para lograr *responsividad*, es decir, que el nombre crezca al mismo ritmo del elemento inferior, es que ambos sean elementos *SVG*. 

El menú hamburguesa no tiene nada de particular. Quise innovar  un tris  dejando la barra central de un color diferente. Examiné muchos contenidos para tomar uno de referencia pero finalmente me incliné por uno de mi propia cosecha  manipulado con código *JavaScript* sencillo y de pocas líneas. 

El logo en alto relieve que se muestra al cargar el sitio es una imagen *SVG* con color igual al color *background*  de todo el sitio. Le he puesto el nombre de *logo-shadow*. El efecto se logra aplicando la propiedad *filter* con *Css* en donde *#fcf9fc* es el color que ilumina los elementos del logo por el lado izquierdo y *#d2cfd2* es el color que les da el toque de sombra por el lado derecho. Así se ve el *Css:*

`.contenedor-logo-shadow__drop-shadow {`

  `width: 100%;`

  `stroke-width: 100px;`

  `filter: drop-shadow(3px 1px 1px #d2cfd2) drop-shadow(-1px -1px 3px #fcf9fc);`

  `animation: animarDropShadow 1.5s steps(20, end) forwards`

`}















