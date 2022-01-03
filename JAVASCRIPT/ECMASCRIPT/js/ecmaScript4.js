/*Clases*/
//Patron solid(cada clase conlleva una responsabilidad)
//Mensajes class file
class Mensajes {
    constructor(name, cod){
      this.name = name;
      this.cod = cod;
    };
    
    saludo(){
      return `Hola ${this.name}, su código es ${this.cod}`;
    };
  };

//Index app para llamar a nuestra clase desde otro archivo
let men = new Mensajes('Diego', '007');//Si pongo 007 sin comillas lo toma como un number y qita los dos ceros de la izquierda.
console.log(men.saludo());

/*Herencia*/
class MensajesVip extends Mensajes {
    constructor(name, cod, vip){
      super(name, cod)
      this.vip = ` - CODVIP: ${vip}`
    };
    
    saludoVip(){
      console.log(this.saludo() + this.vip);
    };
  };

let menVip = new MensajesVip('Diego', '007', 'rxjs');//Si pongo 007 sin comillas lo toma como un number y qita los dos ceros de la izquierda.
menVip.saludoVip();

/*Setters And Getters*/

//con una funcion
let user = {
    name:"Diego",
    lastname:"de Haro Martínez",
    fullname:function(){
        console.log(this.name + ' ' + this.lastname);
    }
};

user.fullname();

//Con un getter
let user2 = {
    name:"Diego",
    lastname:"de Haro Martínez",
    get fullname(){//Se trata a una propiedad como si de un metodo se tratase.
        console.log(this.name + ' ' + this.lastname);
    }
};

user2.fullname;

//Con un getter añadiendo algo al get en este caso dentro del get hacemos que cod se muestre en mayusculas.
let user3 = {
    name:"Diego",
    lastname:"de Haro Martínez",
    cod:"rxjs",
    get code(){//Se trata a una propiedad como si de un metodo se tratase.
        console.log(this.cod.toUpperCase());
    }
};

user3.code;

//Ejemplo de setter por ejemplo para escribir un dato
let user4 = {
    name:"Diego",
    lastname:"de Haro Martínez",
    cod:"",
    set code(code){//Se trata a una propiedad como si de un metodo se tratase.
        this.cod = code.toUpperCase() + " user4";
        console.log(this.cod);
    }
};

user4.code = "rxjs"; //no puedo pasar user4.code('rxjs'); ya que no es una funcion es una propiedad luego hago user4.code = "rxjs"; 
//user4.cod;