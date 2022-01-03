//Ajax
fetch("http://localhost:8081/alumnos/listarAlumnos")
    .then(respuesta => respuesta.json().then(lista =>{
        lista.forEach(alumno => {
            console.log(alumno.id + " " + alumno.nombre);
        });
    })).catch(error => console.error('Error = ' + error));