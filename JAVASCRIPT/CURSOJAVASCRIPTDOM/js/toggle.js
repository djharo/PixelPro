const TOGGLE = document.getElementById('toggleList');
const LIST = document.querySelector('.list');//los identificadores de las calses class se ponen con puntos
const MY_INPUT = document.querySelector('input');
const MY_BUTTON = document.querySelector('button.pixel');
//Se queda con la primera etiqueta y el segundo button ya no funciona correctamente
//Añadiendo el .pixel hacemos refencia al button que tiene como clase "class = 'pixel'"
const P = document.querySelector('p.pixel');

TOGGLE.addEventListener('click', ()=>{//Se ocultará todo el contenido que esta dentro de la etiqueta div cuaya clase es class = 'list'

    if( LIST.style.display == 'none'){

        TOGGLE.textContent = 'Oculta la lista';
        LIST.style.display = 'block';
    }else{
        TOGGLE.textContent = 'Muestra la lista'
        LIST.style.display = 'none';
    }
});

MY_BUTTON.addEventListener('click', () => {
    P.innerHTML = MY_INPUT.value + ':';
})