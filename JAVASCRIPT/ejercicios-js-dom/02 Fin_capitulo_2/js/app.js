const lista = document.getElementsByTagName('li');

for (let i = 0; i < lista.length; i +=1 ){
	lista[i].style.color = 'green'; 
}

const MARCADO = document.getElementsByClassName('marcado');

for (let i = 0; i < MARCADO.length; i +=1 ){
	MARCADO[i].style.color = 'red'; 
}

const ODD = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < ODD.length; i +=1 ){
	ODD[i].style.backgroundColor = 'pink'; 
}
const EVEN = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < EVEN.length; i +=1 ){
	EVEN[i].style.backgroundColor = 'lightblue'; 
}



var x = document.querySelector('p');
