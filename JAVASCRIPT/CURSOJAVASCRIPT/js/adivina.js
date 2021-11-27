/* 
    1) Obtenemos un número aleatorio
    2) Pedimos al usuario acertar ese número...
*/

// Obtenemos el número al azar, redondeamos a la baja
var numAleatorio = Math.floor(Math.random() *10 ) + 1;

var adivinaUsuario = prompt("Estoy pensando en un número del 1 al 10");

// Por defecto el usuario no ha acertado
var acertado = false;

/*
    1) Revisamos si el usuario ha acertado
    2) Si el número indicado por el usuario es menor, le damos otra oportunidad
    3) Si se pasa entonces pierde
*/ 

if(parseInt(adivinaUsuario) === numAleatorio){
    acertado = true
}else if(parseInt(adivinaUsuario) < numAleatorio) {
    var adivinaBaja = prompt("Última oporutunidad... ");
    if(parseInt(adivinaBaja) === numAleatorio){
        acertado = true;
    }else{
        document.write("<p>por poco...");
    }
}else if (parseInt(adivinaUsuario) > numAleatorio){
    document.write("<p>¡Te has pasado!");
}

// Mensaje que mostramos al usuario al finalizar
if(acertado){
    document.write("<p>¡Cierto! You win!")
} else {
    document.write("<p>Game Over! el número era " + numAleatorio + ".</p>")
}

var max = 20;

var min = 10;

var num = 21;

if(num > min && num < max) { // Se tienen que cumplir las dos condiciones para entrar al if si la primera condición es falsa ya no se evalua la segunda.
    document.write("<p>El número es válido </p>");
}else{
    document.write("<p>El número NO es válido </p>");
}

if(num > min || num < max) { // Con que se cumpla una de las dos condiciones entro al if. Si no se cumple ninguna de las dos no entro. Primero evalua la primera condicion
    document.write("<p>El número es válido </p>");//y si no se cumple evalua la segunda condicion si tampoco se cumple ambas son falsas y no entro
}else{
    document.write("<p>El número NO es válido </p>");
}