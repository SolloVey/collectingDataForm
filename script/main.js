// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';
// new AirDatepicker('#select-date');

const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
let application = [];

class Request {
	constructor(tower, floor, room, text) {
		(this.tower = tower),
			(this.floor = floor),
			(this.room = room),
			(this.text = text);
	}
}

function getFormInput() {
	return new FormData(form);
}

function showDataToConsole(e) {
	e.preventDefault();

	let applicationJSON;
	let formData = getFormInput();
	let request = new Request(
		formData.get('tower'),
		formData.get('floor'),
		formData.get('room'),
		formData.get('text')
	);

	for (key in request) {
		application.push(request[key]);
	}

	requestJSON = JSON.stringify(request);
	applicationJSON = JSON.stringify(application);
	console.log(requestJSON);
	console.log(applicationJSON);
}

function resetDataForm() {
	application.length = 0;
}

form.addEventListener('submit', showDataToConsole);
resetBtn.addEventListener('click', resetDataForm);
