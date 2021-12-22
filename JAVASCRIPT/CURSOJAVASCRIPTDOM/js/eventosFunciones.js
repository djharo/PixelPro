//Pasar funciones por parametros
function di(algo){
    console.log(algo);
}

function exec(func, arg){
    func(arg);//dentro del bloque de la funcion se ejecuta la propia funcion con el argumento que hayamos proporcionado.
}

exec(di, 'Hola Mundo, Javascript 1');

//Otra forma de ejecutar la funcion exec
exec(function di(algo){//como primer argumento pasamos la construccion entera de la funcion
    console.log(algo);
}, 'Hola Mundo, Javascript 2');

//Otra forma mas de ejecutar la funcion exec
//eliminamos el elemento function como el nombre de la funcion
//de esta forma pasaria a se una **funcion anónima
exec((algo) => {//Funcion anónima
    console.log(algo);
}, 'Hola Mundo, Javascript 3');

//Funcion setTimeout
window.setTimeout((algo) => {
    console.log(algo);
}, 5000, 'Hola Mundo, Javascript 5 segundos');//Primer parametro una funcion en este caso la funcion anonima
                    //Segundo parametro el tiempo en milisegundos que quiero que se tarde en ver el mensaje
                    //Tercero el mensaje que quiero mostrar.

var timeoutID;

function delayedAlert(){//Sustituimos slowAlert por una fucion anonima
    timeoutID = window.setTimeout((alerta) =>{
        alert('Aquí está el mensaje');
    }, 5000);
}

/*function slowAlert(){
    alert('Aquí está el mensaje');
}*/

function clearAlert(){
    window.clearTimeout(timeoutID);
}

//Eventos mouseover y mouseout

//const LIST_ITEM = document.getElementsByTagName('li')[0]; obtendria el primer elemento de la lista.
const LIST_ITEM = document.getElementsByTagName('li');

/*
for(let i = 0; i< LIST_ITEM.length; i++){
    //Cuando ponga el cursor sobre un elemento de la lista se pondra en mayuscula
    LIST_ITEM[i].addEventListener('mouseover', () => {
        LIST_ITEM[i].textContent = LIST_ITEM[i].textContent.toUpperCase();
    });
    //Cuando quite el cursor del elemento de la lista se pondra en minuscula.
    LIST_ITEM[i].addEventListener('mouseout', () => {
        LIST_ITEM[i].textContent = LIST_ITEM[i].textContent.toLowerCase();
    });
}
*/

//**Nota con este procedimiento los elementos que se añadan a la lista con el boton Añade un lenguaje
//NO  recibiran el evento y no se pondran ni en mayuscula ni en minuscula*/

//Otra forma de hacer lo anterior es coger el elemento anterior mas cercano a li en este caso ul peero
//como tenemos un div que engloba al ul trabajaremos con el aprovechando ademas la definicion que tenemos

const LIST = document.querySelector('.list');//los identificadores de las calses class se ponen con puntos

/*
LIST.addEventListener('mouseover', () => {
    LIST_ITEM[i].textContent = LIST_ITEM[i].textContent.toUpperCase();
});

LIST.addEventListener('mouseout', () => {
    LIST_ITEM[i].textContent = LIST_ITEM[i].textContent.toLowerCase();
});
*/

//¿Como sabe el padre en este caso cual es el hijo que dispara el evento?

//HANDLER para manipular el evento
/*document.addEventListener('click', (event) =>{//Podremos ver en consola los elementos en los que hagamos click con el raton.
    console.log(event.target);
})*/


LIST.addEventListener('mouseover', (event) => {
    if(event.target.tagName === 'LI'){//tagName devuelve el elemento en mayusculas si selecciono un elemento de la lista li devolvera LI
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});

LIST.addEventListener('mouseout', (event) => {
    if(event.target.tagName === 'LI'){
        event.target.textContent = event.target.textContent.toLowerCase();
    }    
});
