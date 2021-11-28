function nombreVacio(){
    var nombre = document.getElementById("nombre"); //obtenemos el elemento del html cuyo id es "nombre"
    if(nombre.value === ""){
        return true;
    }else{
        return false;
    }
}

var vacio = nombreVacio();

if(vacio === true){
    alert("Necesitamos tu nombre");
}