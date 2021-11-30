/*var nombre = "Diego"; // Ambito globar se puede volver a declarar 
let nombre = "Diego"; //Ambito en el que nos encontramos ya no se puede volver a declar con el mismo nombre.
const nombre = "Diego";*///Constante no se puede modificar el valor.

const MYINPUT = document.getElementById('nombre'); //lo que cambia en este caso es la propiedad del valor de la constante
//Lo que contiene la constante MYINPUT es <input type="text" name="nombre" id="nombre"> y a traves de la propiedad 
//value puede contener valores distintos, por eso unaconstante siempre tiene valores inmutables pero puede tener contenidos mutables
const MIBOTON = document.getElementById('boton');

//Añadimos un evento cuando se hace pincha en el boton Go entramos en el evento
MIBOTON.addEventListener('click', ()=>{
    for(i=0;i<3;i++){//De esta forma cuado se produzca el evento (se pinche en el boton Go) el nombre aparecera 3 veces.
    console.log("Hola " + MYINPUT.value)
}});

//Bucle for
for(i=0; i<5; i++){
    console.log("iterando en javascript " + i);
}

//while do while
var x = 3;

/*while(x<5){//si x = 5 no entrare en el while.
    console.log("valor de x: " + x);
    x++;
}*/

//do while
do{//Haz "algo" lo que hay despues del do. y mientras se cumpla la condicion vuelves a iniciarlo.
    //De esta manera se x=5 si entro en el while una vez.
    console.log("valor de x: " + x);
    x++;
}while(x<5);