const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const imageEl = document.querySelector('input[type="file"]');

	navigator.geolocation.getCurrentPosition((position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		const formData = new FormData();
		formData.append('latitude', latitude);
		formData.append('longitude', longitude);
		formData.append('file', imageEl.files[0]);
    console.log(formData.get('file'));
    console.log(formData.get('latitude'));
    console.log(formData.get('longitude'));

		fetch('http://localhost:3000/upload', {
			method: 'POST',
			body: formData,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	});
});
