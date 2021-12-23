/*Let*/
//Variable de alcance local con ambito de bloque no se puede definir otra variable con el mismo nombre dentro del bloque

function validar(nombre){
    if(nombre === "Diego"){
        let apellido = "de Haro";//var apellido = "Martinez"
        let apellidoDos = "Martínez"//var apellido = "García" si hago esto tomara como apellido García por eso el uso de let y asi no puedo poner el mismo nombre de variable
        console.log(`${nombre} ${apellido} ${apellidoDos}`);
    }else{
        console.log("No eres Diego")
    }
}
validar("Diego");
validar("Paco");

/*Const*/
//Constantes no se pueden modificar ni crear otra variable del tipo que sea con el mismo nombre.
const ANYO_NACIMIENTO = 1983;
//SI ANYO_NACIMIENTO la declaro como un var podria pasar lo siguiente
//var ANYO_NACIMIENTO = 2021

var anyoActual = new Date().getFullYear();
var edad = anyoActual - ANYO_NACIMIENTO; //SI ANYO_NACIMIENTO la declaro como un var podria pasar lo siguiente aqui ANYO_NACIMIENTO tomaria el valor de 2021 y la resta seria 0.(cuando hice este ejemplo)
console.log(edad);

/*Templates (plantillas de cadena de texto)*/
function saludo(nombre){
    console.log("Hola " + nombre);
}

saludo("Diego");

//En EcmaScript
function saludoEcmaScript(nombre){
    console.log(`Hola ${nombre}`);//`backtick`
}

saludoEcmaScript("Caracola");

function email(nombreUsuario, importe){
    let envio = 7.20;
    console.log(
        "Estimado " + nombreUsuario + ",gracias por su compra. "
         +"\nTotal: " + importe
         +"\nEnvío: " + envio
         +" \nPrecio final: " + importe + envio
    );
}

email("Pedro", 50);

//Ejemplo a la hora de componer una plantilla de email
function emailEcmaScript(nombreUsuario, importe){//Ademas el texto lo saca con formato
    let envio = 7.20;
    console.log(
        `Estimado ${nombreUsuario}, gracias por su compra.
          Total: ${importe}
          Envío: ${envio}
          Precio final: ${importe + envio}`
    );
}

emailEcmaScript("Diego", 70);

/*operadores de propagacion;*/

let mon = ["Alma", "Oyz", "Rallon"];

let carr = ["Orca", "Avant", "Terra"];

//Si hacemos lo siguiente

let bicis = ["Gain", mon, "Keram", carr, "Optima"];
//Se nos muestra un array y dentro un array mas para cada uno de los arrays añadidos
console.log(bicis);
//(5) ['Gain', Array(3)Aqui los tres valores de mon, 'Keram', Array(3)Aqui los tres valores de carr, 'Optima']


//Si utilizamos el operador de propagacion ...
let bicisPropagacion = ["Gain", ...mon, "Keram", ...carr, "Optima"];
//Aparecera un solo array con todos los valores 
console.log(bicisPropagacion);
//(9) ['Gain', 'Alma', 'Oyz', 'Rallon', 'Keram', 'Orca', 'Avant', 'Terra', 'Optima']

/*Mapas*/
//Si queremos iterar de forma ordenaca por insercion
let curso = new Map();
curso.set("angular", {lang: "typescript"});//mapa de clave valor cuyo valor tiene otra clave valor.
curso.set("synfony", {lang: "php"});
//para ver un valor del mapa
console.log(curso.get('angular'));

let festivos = new Map([
    [new Date(), "hoy"],
    ["festivos", [11, 24]]
]);

festivos.forEach(function(dias){
    console.log(dias);
});

/*Sets*/
//Es un objeto que nos permite almacenar valores ÚNICOS DE CUALQUIER TIPO
let correo = new Set();
correo.add("hola@pixelpro.es")
.add("diego@pixelpro.es");//Para añadir un elemento no hace falta volver a poner email.add.
//Para ver el contenido
console.log(correo);
//Para saber el tamaño
console.log(correo.size);
//Para saber si contiene un valor
console.log(correo.has("diego@pixelpro.es"));

//Un ejemplo para eliminar duplicados
//Si tengo un array con algun valor duplicado y lo paso a un set el valor duplicado se eliminará
let nombres = ["Diego", "Lidia", "Paco", "Manolo", "Diego"];
let nombresUnicos = new Set(nombres);
console.log(nombres.length);//5
console.log(nombresUnicos.size);//4

/*for of*/

for(let letra of "Diego"){
    console.log(letra);
};

let rutas = new Map();
rutas.set("index", "/index.html");
rutas.set("services", "/services.html");
rutas.set("about", "/about.html");
rutas.set("contact", "/contact.html");

for(let ruta of rutas){
    console.log(ruta);
};

//Si quiero solo mostrar las claves
for(let ruta of rutas.keys()){
    console.log(ruta);
};

//Si quiero mostrar solo los valores
for(let ruta of rutas.values()){
    console.log(ruta);
};
