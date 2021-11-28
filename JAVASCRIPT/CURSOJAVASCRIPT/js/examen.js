correctas = 0

var primeraPregunta = prompt("¿Cúal es el resultado de sumar 2+2?");
if(parseInt(primeraPregunta) === 4){
    correctas++; //o correctas+=1;
}

var segundaPregunta = prompt("¿Cúal es el resultado de multiplicar 2*2?");
if(parseInt(segundaPregunta) === 4){
    correctas++;
}

var terceraPregunta = prompt("¿Cúal es el resultado de dividir 2/2?");
if(parseInt(terceraPregunta) === 1){
    correctas++;
}

var cuartaPregunta = prompt("¿Cúal es el resultado de multiplicar 4*9?");
if(parseInt(cuartaPregunta) === 36){
    correctas++;
}

var quintaPregunta = prompt("¿Cúal es el resultado de multiplicar 7*8?");
if(parseInt(quintaPregunta) === 56){
    correctas++;
}

document.write("<p>Total de preguntas acertadas = "+ correctas + "</p>");

if(correctas === 5){
    document.write("<p>Su nota es Sobresaliente</p>");
}else if(correctas >= 3){
    document.write("<p>Su nota es Notable</p>");
}else if(correctas >= 1){
    document.write("<p>Necesita Mejorar</p>");
}else {
    document.write("<p>Su nota es Suspenso</p>");
}

/*if('perro' == 'gato'){
    console.log(true);
}else {
    console.log(false);
}*/