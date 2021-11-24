var segundosMinuto = 60; //Ojo con poner "60" que seria un string y concatenaria no haria ninguna operacion.
var minutosHora = 60;
var horasDia = 24;

//¿Cuantos segundos tiene un día?

var segundosDia = segundosMinuto * minutosHora * horasDia;

//document.write("Un dia tiene " + segundsDia + " segundos");
console.log("Un dia tiene " + segundosDia + " segundos");

//¿Cuantos segundos lleva una persona viviendo?
var diasAnyo = 365;
var edadPersonaAnyos = 38;
var edadPersonaDias = diasAnyo * edadPersonaAnyos;

var edadPerosonaSegundos = segundosDia * edadPersonaDias
//document.write("La edad de una persona en dias es " + edadPerosonaSegundos + " segundos");
console.log("La edad de una persona en dias es " + edadPerosonaSegundos + " segundos");

//3.2 Ejercicio Números
//Calcular el tiempo en llegar a un destino concreto
//Distancia, velocidad la introduce el usuario
//Indicar el tiempo necesario en pantalla
// e = v*t => t = e/v
/*var distancia = prompt("Indica la distancia:")
//var distancia = 300; //km
var velocidad = prompt("Indica la velocidad: km/h")

var tiempo = parseFloat(distancia)/parseFloat(velocidad);

alert("El tiempo en recorrer una distancia de: " + distancia  + " metros a una velocidad de: " + velocidad + " m/s es igual a: " + tiempo + " horas");*/

//Math.floor(Math.random() * 10) //solo da numeros del 1 al 9 para que de del 1 al 10 
//Math.floor(Math.random() * 10) + 1

//3.7
//Cual va a ser el numero tope
var numeroTopeUsuario = parseInt(prompt("Introduzca un número:"));
var numeroAleatorio = Math.floor(Math.random() * numeroTopeUsuario) + 1 // mas uno para que el numero aletario este entre 1 y el numero proporcionado por el usuario si no seria uno menos.
mensaje = "<p>" + numeroAleatorio + " es un número aleatorio entre 1 y " + numeroTopeUsuario + ". </p>";
document.write(mensaje);
