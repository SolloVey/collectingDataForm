console.log('Started APP!!!');

const form = document.querySelector('.form');
const towerSlt = document.querySelector('#tower');
const floorSlt = document.querySelector('#floor');
const roomSlt = document.querySelector('#room');
const area = document.querySelector('.area');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');

class Request {
	constructor(tower, floor, room, text) {
		(this.tower = tower),
			(this.floor = floor),
			(this.room = room),
			(this.text = text);
	}
}

function getDataForm() {
	return new FormData(form);
}

function showDataToConsole(e) {
	e.preventDefault();

	const formData = getDataForm();

	const request = new Request(
		formData.get('tower'),
		formData.get('floor'),
		formData.get('room'),
		formData.get('text')
	);

	console.log(request);
}

function resetDataForm() {
	console.log('Reset');
}

form.addEventListener('submit', showDataToConsole);
resetBtn.addEventListener('click', resetDataForm);
