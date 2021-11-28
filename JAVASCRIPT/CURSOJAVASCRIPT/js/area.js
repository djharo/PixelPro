function area(ancho, alto){
    var area = ancho*alto;
    return area;
}

console.log(area(50,2) + " m2");

console.log(area(50,23) + " m2");

console.log(area(36,12) + " m2");

//Con javaSript podemos hacer lo siguiente al ser no tipado o tipado dinamico

function areaUnidad(ancho, alto, unidad){
    var area = ancho*alto;
    return area + " " + unidad;
}

console.log(areaUnidad(2,2, "m2"));