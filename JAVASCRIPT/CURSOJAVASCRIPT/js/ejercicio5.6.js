
/*function aleatorio(min, max){
    // Obtenemos el número al azar, redondeamos a la baja entre 1 y 10
    var numAleatorio = Math.floor(Math.random() *10 ) + 1;
    console.log(numAleatorio);
    if(numAleatorio >= min && numAleatorio < max){
        return numAleatorio;
    }else{
        return "El numero aleatorio no está comprendido entre " + min + " y " + max;
    }
}*/

function aleatorioRandom(min, max){
    
    //"Programación defensiva" evaluamos que los dos valores de la entrada al metodo sean numéricos ya que no sabemos que nos puede llgar a la entrada de la función.
    if(isNaN(min) || isNaN(max)){
        throw new Error("Ambos valores han de ser un número");
    }

    var aleatorio = Math.random();
    console.log(aleatorio);
    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    var numAleatorio = Math.floor(aleatorio * (max-min)) + min;//redondeo a la baja truncando
    console.log(numAleatorio);
    return numAleatorio
}

//console.log(aleatorio(1,5));
console.log(aleatorioRandom(1,5));
console.log(aleatorioRandom(3,5));