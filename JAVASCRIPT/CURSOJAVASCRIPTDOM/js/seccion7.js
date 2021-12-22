//Traversing DOM -parentNode ("Atravesando el DOM")

const LIST = document.querySelector('.list');//los identificadores de las calses class se ponen con puntos

//De esta manera solo se borrarian los botones al hacer click sobre ellos.
/*
LIST.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){//tagName devuelve el elemento en mayusculas si selecciono un elemento de la lista li devolvera LI
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
*/

//Para borrar tanto los botones como el elemento de la lista hariamos lo siguiente
/*
LIST.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){//tagName devuelve el elemento en mayusculas si selecciono un elemento de la lista li devolvera LI
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
*/

//Ojo de esta manera si pulsamos en otro boton que este en el parent de ul
//es decir LIST contiene todo lo que esta dentro de la etiqueta div tambien se borrara TODO al hacer clik en
//el boton, para resolverlo hacemos lo siguiente.

const LIST_UL = document.querySelector('ul');//los identificadores de las calses class se ponen con puntos

/*
LIST_UL.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){//tagName devuelve el elemento en mayusculas si selecciono un elemento de la lista li devolvera LI
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});
*/

LIST_UL.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){//tagName devuelve el elemento en mayusculas si selecciono un elemento de la lista li devolvera LI
        if(event.target.className === 'borrar'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        //siblings e insertBefore(hermanos parientes)
        if(event.target.className === 'up'){
            let li = event.target.parentNode;
            let prev = li.previousElementSibling;
            let ul = li.parentNode;
            if(prev){//Si no validaramos prev si llego al primer elemento de la lista subiendo si vuelvo a subir me lo bajaria al ultimo lugar

                ul.insertBefore(li, prev);//Nuevo elemento en este caso el li y elemento de referencia el prev
            }
        }
        //nextElementSibling (bajar un elemento.)
        if(event.target.className === 'down'){
            let li = event.target.parentNode;
            let next = li.nextElementSibling;
            let ul = li.parentNode;
            if(next){//Si no validaramos prev si llego al primer elemento de la lista subiendo si vuelvo a subir me lo bajaria al ultimo lugar

                ul.insertBefore(next, li);//Nuevo elemento en este caso el next y elemento de referencia el li
            }
        }
    }
});

//Accediendo a los Children para adición dinámica
/*Con lo visto anteriormente si añadimos un nuevo lenguaje no se añadiran los botones asi qu epara resolver esto haremos lo siguiente.
Eliminamos los botones que estan dentro de la etiqueta div de nuestro index.html
para añadirlos de forma dinámica*/ 
function agregarBotonesLista(li){
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Subir';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Bajar';
    li.appendChild(down);

    let borrar = document.createElement('button');
    borrar.className = 'borrar';
    borrar.textContent = 'Borrar';
    li.appendChild(borrar);

}
/*De esta forma cuando cargamos la pagina no aparecen los botones en la lista
solo aparecen cuando se añade un lenguaje para que aparezcan debebos hacer lo siguiente*/

for(let i = 0; i<LIST_UL.children.length; i++) {
    agregarBotonesLista(LIST_UL.children[i]);
}
/* la constante LIST_UL contiene todos los elementos de la lista para recuperar
cada elemento de la lista se hace el children de ul para obtener cada hijo
elemento li de ul tambien podria haber declarado una constante const LI = LIST_UL.children;
y recorrerla LI.length*/


//first_element_child(devolverá el primer hijo de un elemento) last_element_child(devolverá el ultimo hijo de un elemento)
const FIRST_LIST_ITEM = LIST_UL.firstElementChild;
const LAST_LIST_ITEM = LIST_UL.lastElementChild;

FIRST_LIST_ITEM.style.backgroundColor = ('royalblue');
LAST_LIST_ITEM.style.backgroundColor = ('purple');

const ADD_ITEM_INPUT = document.querySelector('input.addItemInput');
const ADD_ITEM_BUTTON = document.querySelector('button.addItemButton');
//Añade un elemento a la lista utilizando el dom
ADD_ITEM_BUTTON.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    if(ADD_ITEM_INPUT.value === ""){
        alert("Debe escribir un lenguaje")
    }else{
        li.textContent = ADD_ITEM_INPUT.value;
        agregarBotonesLista(li)
        ul.appendChild(li);
    }

    ADD_ITEM_INPUT.value = "";
});

const REMOVE_ITEM_BUTTON = document.querySelector('button.removeItemButton');
//Elimina un elemento de la lista (se va eliminando del ultimo hacia arriba por la propiedad css last-child)
REMOVE_ITEM_BUTTON.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');//propiedad css last-child para borrar el ultimo hijo de la lista 
    ul.removeChild(li);
});