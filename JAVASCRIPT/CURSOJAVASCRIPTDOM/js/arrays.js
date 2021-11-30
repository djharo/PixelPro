var paleta = ["verde", "rojo", "naranja"];
//var nombres = new Array(2);
var nombres = ["Diego","Lidia","Agobiao","Perezosa"];

//console.log(nombres.length);

//console.log(nombres.sort());

//Algunos métodos pertenecientes a los arrays
paleta.reverse();//invierte el orden
//paleta.shift();//Elimina el primero de los elementos
//paleta.pop();//Elimina el ultimo elemento.
//paleta.push("amarillo");//Agrega elemento al final
//paleta.splice(1,2);//Elimina desde el primer argumeto items a borrar segundo elemento
//Es decir en este caso borra el elemento "Lidia" hasta "Agobiao" ambos incluidos;
var borrador = paleta.slice();//Copia el array
console.log(borrador);

console.log(paleta);
var colores = paleta.join(" | "); //toma los elementos del array y los convierte en un string "verde, rojo, naranja" 
//si no se añade argumento al metodo por defecto el string se separa por comas(como está en el array) si se añade como en este caso | se separa con el simbolo indicado.
console.log(colores);
