//TexContent elemento de texto de un nodo determinado.

const MY_INPUT = document.querySelector('input');
const P = document.querySelector('p.pixel');
const MY_BUTTON = document.querySelector('button');
/*MY_BUTTON.addEventListener('click', ()=>{
    P.textContent = MY_INPUT.value + ':';
});*/

//innerHTML devolveria las etiquetas
MY_BUTTON.addEventListener('click', ()=>{
    P.innerHTML = MY_INPUT.value + ':';
});

//desde consola f12
let ul = document.querySelector('ul');

ul.innerHTML;
'\n<li>PHP</li>\n<li class="marcado">HTML</li>\n<li>Java</li>\n<li class="marcado">XML</li>\n<li>Javascript</li>\n<li class="marcado">CSS</li>\n<li>Ruby</li>\n'
//devuelve lo que hay dentro de ul es decir los elementos de la lista con su
//etiqueta li
ul.innerHTML = "<p>hola caracola</p>";
/*Si pusieramos esto dentro de ul solo apareceria "<p>hola caracola</p>";
<ul>
<p>hola caracola</p>
</ul>
*/
// document.body.innerHTML = ""; con esto pongo todo el body del documento en blanco.

//Los atributos- acceso y manipulación (element atribute)

// <input type="text" class = "pixel"> 
/*input contiene dos atributos cada uno con diferentes valores
que se pueden cambiar desde consola por ejemplo 
MY_INPUT.type = 'checkbox'; cambiaria el input de texto a caja de seleccion*/

