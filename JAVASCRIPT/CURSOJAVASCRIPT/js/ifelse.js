var respuesta = prompt("Indica un lenguaje de programación que sea el nombre de una animal en inglés");

if(respuesta.toLowerCase() === "python") {
    document.write("<p> es correcto!</p>");
}else{
    document.write("<p>No es correcto</p>");
}

//Comparadores
console.log(3>2);
console.log(3>=2);
console.log(3<=2);
console.log("3"==3); //true
console.log("3"===3);//comparacion estricta false
console.log("3"!=3); //false
console.log("3"!==3);//comparacion estricta true