//Gestion de Eventos
//const MY_TITLE = document.getElementById('titulo');
const MY_BUTTON = document.getElementById('miboton');
const MY_INPUT = document.getElementById('myinput');

//Introduciendo y capturando valor en input
/*MY_BUTTON.addEventListener('click', () =>{//Se cambia 'dblclick' por 'click'
    MY_TITLE.style.color = MY_INPUT.value;//value propiedad con esto recogemos el valor que se escribe en el input cuadro de texto.
});*/
/**Ahora el encabezado cambiara con el color que se ponga en el input cuadro de texto
 *si no es un color correcto el encabezado no cambiara.
*/


/*MY_BUTTON.addEventListener('click', () =>{//Se cambia 'dblclick' por 'click'
    MY_TITLE.style.color = 'purple';
});*/
/*Ahora cuando pinche en el boton sera cuando se cambie el encabezado de color*/

/*MY_TITLE.addEventListener('click', () =>{//Se cambia 'dblclick' por 'click'
    MY_TITLE.style.color = 'purple';
});*/
/*addEventListener tiene dos parametros obligatorio y un tercero opcional;
type es el evento que es requerido y debe almacenar una cadena de texto que le 
indique que evento quiere gestionar, listener es una funcion que se ejecuta
cuando el evento ocurra. En mi ejemplo cuando se produzca un doble click
sobre mi titul (se lanza el evento) del navdgador se ejecutara la funcion de flecha
(arrow function) y el color del titulo etiqueta h1 pasara a ser morado.*/

//Eligiendo varios por etiquetas(html collection)
const MY_TITLE = document.getElementsByTagName('h1')[0]; //haria lo mismo que que si pusiera const MY_TITLE = document.getElementById('titulo');
//pero en este caso solo tomo el primer h1 del documento.
MY_BUTTON.addEventListener('click', () =>{//Se cambia 'dblclick' por 'click'
    MY_TITLE.style.color = MY_INPUT.value;//value propiedad con esto recogemos el valor que se escribe en el input cuadro de texto.
});
const MY_P = document.getElementsByTagName('p');//(HTMLCollection)
/*En este caso se almacenaran todos los elementos (etiquetas p) de mi documento*/