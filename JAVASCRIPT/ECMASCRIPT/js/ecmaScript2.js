/*Mejoras en los objetos*/
let player = {
    
    andar: function(moves){
        console.log(Array(moves+1).join("Pasos Adelnte "))
    },

    saltar: function(moves){
        console.log(Array(moves+1).join("¡Salto! "))
    },

    ataque: function(moves){
        console.log(Array(moves+1).join("¡Disparo 1! "))
    }
}

player.andar(2);
player.saltar(3);
player.ataque(1);

//Mejora EcamScript
let jugador = {
    
    andar(moves){
        console.log("Pasos Adelnte ".repeat(moves))
    },

    saltar(moves){
        console.log("¡Salto! ".repeat(moves))
    },

    ataque(moves){
        console.log("¡Disparo 1! ".repeat(moves))
    }
}

jugador.andar(2);
jugador.saltar(3);
jugador.ataque(1);

/*Arrow Function & This Scope*/
//Sin Arrow Function
let playerA = function(actions){
    console.log("Player A: ", actions);
};

playerA(["andar", "saltar", "disparar"]);

//Con Arrow function
let playerB = (actions) => console.log("Player B: ", actions);//Si la funcion solo tiene un parametro no es necesario poner parentesis
playerB(["andar", "saltar", "disparar"]);

//Uso de arrow function para saltarse el ambito de una variable dentro de una funcion
let playerC = {
    playerName: "Diego",
    actions: ["andar", "saltar", "disparar"],
    verActions: function(){
        this.actions.forEach(function(action){
            let str = `${this.playerName} puede ${action}`;
            console.log(str);
        });//cierro el forEach
    }       
};

playerC.verActions();

/*de esta manera obtengo el siguiente resultado
undefined puede andar
undefined puede saltar
undefined puede disparar
 esto es debido a que dentro de la funcion (verActions: function()) no puedo hacer uso de playerName
  ya que esta en otro ambito para resolverlo puedo hacer dos cosas 
  */
 //1
 let playerD = {
    playerName: "Diego",
    actions: ["andar", "saltar", "disparar"],
    verActions: function(){
        let _this = this;
        this.actions.forEach(function(action){
            let str = `${_this.playerName} puede ${action}`;
            console.log(str);
        });//cierro el forEach
    }       
};

playerD.verActions();
/*Diego puede andar
Diego puede saltar
Diego puede disparar*/

//2 Haciendo uso de las arrow function que se "saltaran el ambito (scope) de la variable playerName"
let playerE = {
    playerName: "Diego",
    actions: ["andar", "saltar", "disparar"],
    verActions: function(){
        this.actions.forEach(action =>{//La flecha indica funcion y action el parametro como es solo uno no necesita parentesis
            let str = `${this.playerName} puede ${action}`;
            console.log(str);
        });//cierro el forEach
    }       
};

playerE.verActions();
/*Diego puede andar
Diego puede saltar
Diego puede disparar*/

/*Asignacion desestructurante*/
//Es una expresion que posibilita la extraccion de datos tanto de los arrays como de las propiedades de los objetos en distintas variables.

let inmuebleA = {
    tipo: "casa",
    m2: 120,
    precio: 200000,
    descuento: "20%"
};

function casaOferta(inmueble){
    return `Una vivienda tipo ${inmueble.tipo} por ${inmueble.precio} euros, con un ${inmueble.descuento} de descuento`
}

console.log(casaOferta(inmuebleA));

//Haciendo uso de la Asignacion desestructurante

function casaOfertaAsignacionDesestructurante({tipo, precio, descuento}){
    return `Otra vivienda tipo ${tipo} por ${precio} euros, con un ${descuento} de descuento`
}

console.log(casaOfertaAsignacionDesestructurante(inmuebleA));

/*Generadores*/
//Por ejemplo para llamadas asincronas hago una peticion y tengo que parar la ejecucion de mi codigo hasta esperar los resultados y los iteradores

function* steps(){//Con asterisco se indica que es un generador
    yield "Paso 1";//con yield se indica que se para en este punto y continue con los siguientes pasos
    yield "Paso 2";
    yield "Paso 3";
}

let run = steps();
console.log(run.next());
console.log(run.next());
console.log(run.next());
console.log(run.next());

/*{value: 'Paso 1', done: false}
  {value: 'Paso 2', done: false}
  {value: 'Paso 3', done: false}
  {value: undefined, done: true}
  En el ultimo paso se devuelve true cuando ya no hay mas pasos par realizar*/
  
  let string = "Esto es un string de twitter @user1 también habla el @user2, y firma el @user3";
let UserRegex = new RegExp(/@(\w+)/gm);

function* getUsers(string) {//si dejaramos solo function sin el asterisco y en el do dejaramos return solo nos devolveria el user1 de la cadena de texto @user user1
  let match = null;

  do {
    match = UserRegex.exec(string);
    if (match) {
      /*return*/yield match;
    }
  } while (match);
}

for (let username of getUsers(string)) {
  console.log(username);
}
  
  //Ver video y leer mas sobre este tema si fuera necesario.