const ADD_ITEM_INPUT = document.querySelector('input.addItemInput');
const ADD_ITEM_BUTTON = document.querySelector('button.addItemButton');
const REMOVE_ITEM_BUTTON = document.querySelector('button.removeItemButton');

//Añade un elemento a la lista utilizando el dom
ADD_ITEM_BUTTON.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    if(ADD_ITEM_INPUT.value === ""){
        alert("Debe escribir un lenguaje")
    }else{
        li.textContent = ADD_ITEM_INPUT.value;
        ul.appendChild(li);
    }

    ADD_ITEM_INPUT.value = "";
});

//Elimina un elemento de la lista (se va eliminando del ultimo hacia arriba por la propiedad css last-child)
REMOVE_ITEM_BUTTON.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');//propiedad css last-child para borrar el ultimo hijo de la lista 
    ul.removeChild(li);
});