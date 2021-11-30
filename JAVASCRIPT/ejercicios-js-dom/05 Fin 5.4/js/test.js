

window.setTimeout((algo) => {
	console.log(algo);
}, 5000, 'Hola Javascript');



var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 5000);
}

function slowAlert() {
  alert('Aquí está el mensaje');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}