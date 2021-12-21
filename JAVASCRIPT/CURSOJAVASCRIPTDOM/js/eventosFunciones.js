//Pasar funciones por parametros
function di(algo){
    console.log(algo);
}

function exec(func, arg){
    func(arg);//dentro del bloque de la funcion se ejecuta la propia funcion con el argumento que hayamos proporcionado.
}

exec(di, 'Hola Mundo, Javascript 1');

//Otra forma de ejecutar la funcion exec
exec(function di(algo){//como primer argumento pasamos la construccion entera de la funcion
    console.log(algo);
}, 'Hola Mundo, Javascript 2');

//Otra forma mas de ejecutar la funcion exec
//eliminamos el elemento function como el nombre de la funcion
//de esta forma pasaria a se una **funcion anónima
exec((algo) => {//Funcion anónima
    console.log(algo);
}, 'Hola Mundo, Javascript 3');

//Funcion setTimeout
window.setTimeout((algo) => {
    console.log(algo);
}, 5000, 'Hola Mundo, Javascript 5 segundos');//Primer parametro una funcion en este caso la funcion anonima
                    //Segundo parametro el tiempo en milisegundos que quiero que se tarde en ver el mensaje
                    //Tercero el mensaje que quiero mostrar.

var timeoutID;

function delayedAlert(){//Sustituimos slowAlert por una fucion anonima
    timeoutID = window.setTimeout((alerta) =>{
        alert('Aquí está el mensaje');
    }, 5000);
}

/*function slowAlert(){
    alert('Aquí está el mensaje');
}*/

function clearAlert(){
    window.clearTimeout(timeoutID);
}

                    