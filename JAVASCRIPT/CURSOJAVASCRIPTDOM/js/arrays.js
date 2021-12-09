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


//Arrays asociativos(Clave->Valor)
var alumno1 = [];
alumno1["Nombre"] = "Carlos";
alumno1["Curso"] = "Java";

var alumno2 = {"Nombre":"David", "Curso":"Angular"};

for(var key in alumno2){//for in
    console.log(key + " - " + alumno2[key]);
}

//Arrays multidimensionales(Arrays que contienen arrays.)

var multiArray = new Array(2);

multiArray[0] = new Array(3);
multiArray[1] = new Array(2);

multiArray[0][0] = 23;
multiArray[1][0] = 32;

var hiArray = new Array(5);
for(var i = 0; i<hiArray.length; i++){
    hiArray[i] = new Array(2);
}

for(var i = 0; i<hiArray.length; i++){
    for(var j = 0; j<hiArray[i].length; j++){
        hiArray[i][j] = i+j;
    }
}

for(var i = 0; i<hiArray.length; i++){
    for(var j = 0; j<hiArray[i].length; j++){
        console.log(hiArray[i][j]);
    }
}