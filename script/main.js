document.addEventListener('DOMContentLoaded', function () {
	new AirDatepicker('#select-date', {
		multipleDates: true,
		timepicker: true,
		isMobile: true,
		autoClose: true,
	});

	const form = document.querySelector('#form');
	const submitBtn = document.querySelector('#submit');
	const resetBtn = document.querySelector('#reset');
	let application = [];

	class Request {
		constructor(tower, floor, room, text, date) {
			(this.tower = tower),
				(this.floor = floor),
				(this.room = room),
				(this.text = text),
				(this.date = date);
		}
	}

	function getFormInput() {
		return new FormData(form);
	}

	function showDataToConsole(e) {
		e.preventDefault();

		let requestJSON;
		let applicationJSON;
		let formData = getFormInput();
		let request = new Request(
			formData.get('tower'),
			formData.get('floor'),
			formData.get('room'),
			formData.get('text'),
			formData.get('date')
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
});
