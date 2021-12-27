/*Promesas*/
let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Aquí el texto devuelto");
    }, 5000);
});

myPromise.then((result) => {
    console.log(result);
});

//Vamos a obtener los usuarios del APIREST jsonplaceholder
let getUsers = () => {
    //Creamos una nueva promesa con un callback
    return new Promise((resolves, rejects)=>{
      //Almacenamos el APIREST en api
      let api = 'https://jsonplaceholder.typicode.com/users';
      //LLamamos al objecto que nos permite hacer la petición externa
      let request = new XMLHttpRequest();
      //Abrimos el APIREST con un apetición GET
      request.open('GET', api);
      request.onload = () =>{
        //Si nos da un 200, es decir, se hace bien la petición, parseamos la respuesta y la devolvemos como un JSON
        if(request.status === 200){
          resolves(JSON.parse(request.response));
        }else{
          // Si no tenemos un 200, es decir, no se hace bien la petición, devolvemos un error
          rejects(Error(request.statusText));
        }
      };
      request.onerror = err => rejects(err);
      //Ejecutamos la petición si no hay error
      request.send();
    });
  };
  
  //Una vez se hace la promesa y tenemos el resultado, lo mostramos en pantalla con un console.log
  getUsers().then(
    userData => console.log(userData[0]),
    //Si hay un error, quiere decir queno se ha podido completar la petición
    err => console.error(
      new Error('No se ha podido cargar')
    )
  );

  /*Fetch*/
  //Con fetch podemos realizar lo anterior de forma mas sencilla (Es una inteface para manejar XMLHttpRequest)
  //Fetch devuelve una promesa.

  fetch('https://jsonplaceholder.typicode.com/users')//Llamamos a la api
  .then(res => res.json())//el resultado lo parseamos en a nu json
  .then(data => {//con esta funcion recorremos cada usuario que sacamos del data con el for of y mostramos los email de cada usuario.
      for(const user of data){
          console.log(user.email);//si quisiera un valor que estuviera dentro de otro objeto como address pues pongo  console.log(user.address.city);
      }//email, address son propiedades del json user
  });

/*"Asincronicidad"*/
const tiempo = segundo => {
    return new Promise(
        resolve => setTimeout(resolve,  segundo *1000)
    )
};

const contador = async() => {//Por defecto javascript es sincrono si queremos mostrar esto de forma asincrona realizamos lo siguiente
    console.log("0 segundos");//Con async le indicamos a javascript que nuestra funcion sea asincrona
    await tiempo(5);//con await que espere el tiempo indicado en el parametro de entrada de la funcón
    console.log("5 segundos");
    await tiempo(3);
    console.log("3 segundos");
    await tiempo(2);
    console.log("2 segundos");
}

contador();

//Usaremos async cuando una llamada dependa de otra como por ejemplo cuando llamamos a una base de datos y para recuperar a los usuarios y a continuacion mostrar sus email
//hasta que no tenga todos los usuario no puedo mostrar todos los emails de cada usuario.

//Recuperar los seguidores de un api (github) de forma asincrona

const ghFollowers = async(username) => {
    try{
        let response = await fetch(`https://api.github.com/users/${username}/followers`);//interpolamos es decir al poner entre backtic la url podemos concatenar con ${var_loquesea} en la url y hacerla dinamica podriamos ver los seguidores de otros usuarios
        let json = await response.json();
        let followers = json.map(user => user.login);
        console.log(followers);
    }catch(e){
        console.error("No se ha podido cargar", e);
    }
}

ghFollowers("bypixelpro");