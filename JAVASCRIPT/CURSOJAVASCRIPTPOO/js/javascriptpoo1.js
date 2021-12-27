//Objeto persona
class Persona{

    //constructor(es una especie de "plantilla" se encarga de dar forma al objeto clase es una fabrica de creacion de objetos de tipo Persona)
    constructor(nombre, edad, altura, peso){//propiedades
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    };

    //Metodos
    ahoraPrograma(){
        //programa
    };

    ahoraCome(){
        //come
    }
}

//Objeto Literal con 4 propiedades 2 de cadena de texto una numérica y otra que devuelve una función
var alumnos = {
    nombre:"Diego",
    apellidos:"de Haro Martínez",
    id:007,
    nombreCompleto:function(){
        return this.nombre + this.apellidos + this.id;
    }
};

//Objeto Literal especifico para un alumno
const diego = {
    nombre:"Diego",
    apellidos:"de Haro Martínez",
    edad:38,
    nombreCompleto:function(){
        return this.nombre + " " + this.apellidos + " " + this.edad;
    }
};

//Como acceder a las propiedades y métodos de un objeto dos tipos de anotaciones distintas anotacion de punto(la que usaremos en los objetos) y anotacion de corchete
//anotacion de punto para acceder a una propiedad
console.log(diego.edad);
console.log(diego.nombre);
//anotacion de punto para acceder a una funnción/método
console.log(diego.nombreCompleto());
//anotacion de corchete para acceder a una propiedad
console.log(diego['edad']);
console.log(diego['nombre']);
//anotacion de corchete para acceder a una función
console.log(diego['nombreCompleto']());

//Modificar un objeto
//Antes de modificar
console.log(diego);
//Modificar una propiedad
diego.nombre = "Diego José";
//Añadir una propiedad
diego.altura = 1.75;//Para los float(decimales) ponerlo con punto si pongo coma lo toma como entero truncando es decir quitando la parte decimal
//Despues de modificar
console.log(diego);

//Ejercicio
/*
En una nueva línea después del código existente, cambia el valor de la propiedad 'suTurno' para player1 a true, usando la notación de puntos para ver este mensaje en consola: "Bob esta jugando ahora!"
*/

const player1 = {
    nombre: 'Bob',
    color: 'Amarillo',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);//Interpolacion backtick(comillas invertidas)
         };
    }
};

const player2 = {
    nombre: 'Patricio',
    color: 'Rosa',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);
         };
    }
};

//Modificamos la propiedad suTurno de player1 a true para que aparezca lo que indica el ejercicio en consola
player1.suTurno = true;
player1.play();
player2.play();