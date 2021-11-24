//Introduccion
/*alert("Hola a todos");//Crea una imagen informativa para el usuario
document.write("<p>Esto es un texto JS</p>");
console.log("Todo Correcto");//Esto no aparecera en la página pero si en la consola del explorador si llegamos a este log es que todo ha ido bien De esta forma podemos debuguear nuestro código.
alert("Nos vemos!");*/

//Código ejercicio debug
/*document.write("Esto es un texto insertado con JS");
alert("El texto se ha insertado correctamente");
document.write("<br>Este es mi primer debug");//En document.write como lo que escribo es html para hacer el salto de linea utilizo el <br> en el alert usaria \n que si es javaScript
alert("Todos los errores han sido resueltos");*/

//Variables
//En JavaScript la declaracion de variables se indica con la palabar var y a continuación el nombre de la variable
//var saludo = "Hola Diego!"; //No podría llamarla var porque es una palabra reservada. Se puede hacer una busqueda para ver cuales son las palabras reservadas
                            //Tampoco puedo empezar un nombre con un número un arroba lo suyo es utilizar camelCase primera palabra en minuscula y las siguientes que empiecen con mayúscula.    
//var miNombreCompleto = "Diego José de Haro Martínez"
// Para varibles númericas no utilizar comillas var edad = 25; asi podre hacer operaciones con la variable                                
//Tambien se puede hacer uso de la comilla simple para las variables de tipo cadena pero no es buena practica.(empieza y termina con comilla doble)
//var saludoDos = 'he\'s a good man' //En este caso tendría que escapar la comilla del he's por eso lo pongo entre comillas dobles y listo
//var saludoTres = "he's a good man"
//alert(saludo); //No son necesarias las comillas
//Si queremos cambiar el valoar de la variable solo ponemos el nombre de la variable y el nuevo valor
//saludo = "Hola Perezosa!"
//alert(saludo);

//Devolver un valor (interactuar con el usuario)
//prompt abre un cuadro muy similar al alert para que el usuario pueda realizar alguna accion (Devolver un valor)
//prompt("¿Me puede indicar su nombre?");//De esta manera el nombre introducido no se almacena en ninguna variable.
//var nombreUsuario = prompt("¿Me puede indicar su nombre?")//Ahora si lo almacenamos en una variable
//alert(nombreUsuario);//alert lo iremos dejando para hacer uso de console.log y ver en la consola del navegador si esta todo correcto y aparece el nombreUsuario
//console.log(nombreUsuario);

//Concatenar un valor
/*var nombreUsuario = prompt("¿Me puede indicar su nombre?");
var saludo = "Hola " + nombreUsuario; //Podriamos eliminar la parte de "bienvenido a tu espacio personal... y concaterna con +=
saludo+= ", bienvenido a tu espacio personal...";
saludo+= " úsalo como mejor te guste."
document.write(saludo);*/

//Propiedades y Métodos
/*var password = prompt("¿Me puede indicar su contraseña?");
//password sería un objeto y por ejemplo si pongo password.length length seria una propiedad de este objeto.
console.log(password.length);

var userMail = prompt("¿Me puede indicar su correro electrónico?");
console.log(userMail.toLowerCase());//toLowerCase() es un Método del objeto userMail*/

//Ejercicio 2.6
/*var nombreProta = prompt("Escribe el nombre del personaje de la historia");
var historia = "Un buen día, " + nombreProta;
var paisDestino = prompt("Escribe el nombre de la ciudad donde se fue de viaje ");
historia+= " se fue de viaje a " + paisDestino;
var nombreAmigo = prompt("Escribe el nombre de quien se hizo amigo ");
historia+= " y se hizo amig@ de " + nombreAmigo;
document.write(historia);*/