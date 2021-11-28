//Scope(Contexto alcance de una variable)

function saludar(){
    var nombre = "Diego"; //el scope es a nivel de funcion si no pongo var definimos la variable como global y en 
    alert("Hola " + nombre);//var nombre = "Lidia" la variable se redefinira y tomará el valor de Lidia.
}

var nombre = "Lidia";
saludar();
alert(nombre);
saludar();