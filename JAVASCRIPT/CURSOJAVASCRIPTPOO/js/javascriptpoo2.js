//Diseño de nuestro objeto/clase
//Por ejemplo si tenemos varios objetos literales con las mismas propiedades y funciones
//podemos crear una clase que contenga esas propiedades y funciones y luego ir llamandolas

//Objeto Literal
/*const lidia = {
    puesto:"tutor",
    edad:38,
    perfil:"fullstack",
    saludo:function(){
        console.log("Hola Mundo!");
    }
};

//Objeto Literal
const diego = {
    puesto:"tutor",
    edad:38,
    perfil:"fullstack",
    saludo:function(){
        console.log("Hola Mundo!");
    }
};
*/

class Tutores{
    constructor(puesto, edad, perfil){
        this.puesto = puesto;
        this.edad = edad;
        this.perfil = perfil;
    };

    get accion(){
        const hoy = new Date();
        const horas = hoy.getHours();

        if(horas > 9 && horas <= 18){
            return "Trabajando";
        }else{
            return "Descansando";
        }
    }

    set experiencia(experiencia){
        this._experiencia = experiencia;//_experiencia es el valor que voy a manejar en el ambito que sera igual al valor de experiencia que viene desde fuera(es decir el pasado por parametro); 
        console.log(`El setter de exp es ${experiencia}`);
    }

    get experiencia(){
        return this._experiencia;
    }

    saludo(){
        console.log("Hola soy un " + this.perfil);
    };
};

//Una vez creada nuestra clase podremos crear todos los objetos que queramos;
//Crear una instancia de mi clase
const diego = new Tutores("tutor", 38, "fullstack");//esta clase espera tres parametros (los mismos que tiene el constructor);//Clase instanciada se crea un objeto Tutores con los parametros especificados en el parametro.
console.log(diego);

//Ahora queremos que el tutor haga algo(funcion/metodo) para ello nos vamos a la clase Tutores y creamos nuestro método.
//Para ejecutar el método
diego.saludo();//ojo los parentesis si es una funcion.

//Getters
console.log(diego.accion);

diego.experiencia = "Senior";
console.log(diego.experiencia);//Esoto solo si tengo el get experiencia si no me devuelve un undefined