const TOGGLE = document.getElementById('toggleList');
const LIST = document.querySelector('.list');
const LIST_UL = LIST.querySelector('ul');
const INPUT = document.querySelector('input.pixel'); 
const p = document.querySelector('p.pixel');
const button = document.querySelector('button.pixel');

const ADD_ITEM_INPUT = document.querySelector('input.addItemInput');
const ADD_ITEM_BUTTON = document.querySelector('button.addItemButton');
const REMOVE_ITEM_BUTTON = document.querySelector('button.removeItemButton');
const BUT = LIST_UL.children;
const FIRST_LIST_ITEM = LIST_UL.firstElementChild;
const LAST_LIST_ITEM = LIST_UL.lastElementChild;

FIRST_LIST_ITEM.style.backgroundColor = 'lightblue';
LAST_LIST_ITEM.style.backgroundColor = 'purple';

function agregarBotonesList(li) {
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Subir';
	li.appendChild(up);

	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Bajar';
	li.appendChild(down);

	let borrar = document.createElement('button');
	borrar.className = 'borrar';
	borrar.textContent = 'Borrar';
	li.appendChild(borrar);

}

for (let i = 0; i < BUT.length; i += 1) {
	agregarBotonesList(BUT[i]);
}


LIST_UL.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'borrar') {

			let li = event.target.parentNode ;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if (event.target.className == 'up') {

			let li = event.target.parentNode ;
			let prev = li.previousElementSibling;
			let ul = li.parentNode;
			if (prev) {
				ul.insertBefore(li, prev);
			}
		}
		if (event.target.className == 'down') {

			let li = event.target.parentNode ;
			let next = li.nextElementSibling;
			let ul = li.parentNode;
			if (next) {
				ul.insertBefore(next, li);
				
			}
		}
	}
});








TOGGLE.addEventListener('click', () => {

	if (LIST.style.display == 'none') {
		
		TOGGLE.textContent = 'Oculta la lista';
		LIST.style.display = 'block';	
	} else {
		TOGGLE.textContent = 'Muestra la lista';
		LIST.style.display = 'none';
	}
	
});

button.addEventListener( 'click', () => {
	p.innerHTML = INPUT.value + ':' ;
	INPUT.value = '';
});

ADD_ITEM_BUTTON.addEventListener( 'click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = ADD_ITEM_INPUT.value;
	agregarBotonesList(li);
	ul.appendChild(li);
	ADD_ITEM_INPUT.value = '';
});	

REMOVE_ITEM_BUTTON.addEventListener( 'click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child');
	
	ul.removeChild(li);
	
});	



/* Ejemplo:
Freepik
Pack: E-Learning

By Dave Gandy


Swifticons
Pack: Interaction Icon Set */













