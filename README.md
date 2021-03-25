# Uaf2

Uaf2 es el repositorio de mi segundo sitio web personal. Llega para reemplazar a Uaf1, repositorio en donde aún se encuentra el primero, subido a la red en 2019.

Uaf2 es un sitio totalmente nuevo si se comparan contenidos y diseño. No guarda mucha cercanía con el primero salvo por asuntos como el logo   y  algunos aspectos relacionados con el manejo del color. No tiene nada distinto a *Html, Css y JavaScript* puro. Podría decir que el único recurso externo es la tipografía. La mayoría de los efectos de animación están a cargo de *JavaScript*. Las animaciones con *Css* son complementarias. Privilegia el uso de imágenes *SVG* por encima de los demás formatos existentes. 

Está pensado, por ahora (marzo/2021), para ser visto en teléfonos inteligentes con ancho  de pantalla gráfica no mayor a 600px.  La idea es tenerlo habilitado en el menor tiempo posible  para múltiples dispositivos.

Toma  ideas del Neoformismo para el manejo de bordes,  sombras y luces, particularmente en  los botones y las opciones de navegación de los menús. Cada opción de navegación dirige al usuario a un contenido específico y saca de la vista cualquier otro que no esté vinculado. Se quiere evitar que una vez el usuario llegue a un contenido particular,  no exista otro (arriba,  abajo o los lados)  que pueda dar la impresión de ser parte. 

El menú de navegación principal cuenta con tres opciones. Las opción "Te cuento" solo pretende dejar en contexto al visitante sobre los antecedentes de este ejercicio digital intentando responder por qué existe o qué lo motiva. La opción "Yo" es el típico  *about me*  o  el  "quién soy". La opción "Explora" viene a ser como el modelo a seguir  para los nuevos menús de los proyectos o iniciativas que a futuro se introduzcan. A su izquierda muestra una carita feliz resultado de la mutación del logo: se quita el elemento triangular azul que sugiere la letra "A"  y se recorta la línea superior izquierda del elemento que sugiere la letra "U".  Los elementos no se retiran totalmente, en realidad.  Lo poquito que queda de cada uno de ellos se comportan como los ojos de la carita. Finalmente se pinta de amarillo el area demarcada por el círculo. Efecto pensado para agradecer de manera sencilla el interés de los  visitantes.

El logo en la esquina superior izquierda se anima al momento de cargar la página. Es una imagen *SVG*. El efecto de animación  se logra manipulando los atributos  *stroke-dasharray* y *stroke-dashoffset* de cada elemento que configura el logo.  El elemento triangular repite su movimiento cada 10 segundos con una función *JavaScript*. A la derecha del logo van dos elementos *SVG*:  uno lleva el nombre y el otro, ubicado justo debajo,  transmite el espíritu del sitio o el área de interés y cuenta además con  una animación que simula una línea de código.  Tras varios intentos con elementos distintos, observé  que la manera más óptima para lograr *responsividad*, es decir, que el nombre crezca al mismo ritmo del  elemento inferior, es con elementos *SVG*. 

El menú hamburguesa no tiene nada de particular. Quise innovar un tris  dejando la barra central de un color diferente. Examiné muchos contenidos para tomar uno de referencia pero finalmente me incliné por uno de mi propia cosecha que es manipulado con un código *JavaScript* sencillo y de pocas líneas.  

El logo en alto relieve que se muestra al cargar el sitio es una imagen *SVG* de color igual al color *background* que tienen todos los contenidos del sitio.  Le he puesto el nombre de *logo-shadow*. El efecto se logra aplicando la propiedad *filter* con *Css* en donde #fcf9fc es el color que ilumima  los elementos del logo por el lado izquierdo y #d2cfd2 es el color que les da el toque de sombra por el lado derecho. Así:

######
.contenedor-logo-shadow__drop-shadow {
   width: 100%;
   stroke-width: 100px;
   filter: drop-shadow(3px 1px 1px #d2cfd2) drop-shadow(-1px -1px 3px #fcf9fc);
   animation: animarDropShadow 1.5s steps(20, end)  forwards
}















