const TOGGLE = document.getElementById('toggleList');
const LIST = document.querySelector('.list');
const INPUT = document.querySelector('input'); 
const p = document.querySelector('p.pixel');
const button = document.querySelector('button.pixel');



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
});

