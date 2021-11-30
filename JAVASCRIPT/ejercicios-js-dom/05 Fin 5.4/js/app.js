const TOGGLE = document.getElementById('toggleList');
const LIST = document.querySelector('.list');
const INPUT = document.querySelector('input.pixel'); 
const p = document.querySelector('p.pixel');
const button = document.querySelector('button.pixel');

const ADD_ITEM_INPUT = document.querySelector('input.addItemInput');
const ADD_ITEM_BUTTON = document.querySelector('button.addItemButton');
const REMOVE_ITEM_BUTTON = document.querySelector('button.removeItemButton');

const LIST_ITEMS = document.getElementsByTagName( 'li');

for (let i = 0; i < LIST_ITEMS.length; i += 1) {

	LIST_ITEMS[i].addEventListener('mouseover', () => {
	LIST_ITEMS[i].textContent = LIST_ITEMS[i].textContent.toUpperCase();
	});


	LIST_ITEMS[i].addEventListener('mouseout', () => {
	LIST_ITEMS[i].textContent = LIST_ITEMS[i].textContent.toLowerCase();
	});

}



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
	ul.appendChild(li);
	ADD_ITEM_INPUT.value = '';
});	

REMOVE_ITEM_BUTTON.addEventListener( 'click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child');
	
	ul.removeChild(li);
	
});	














