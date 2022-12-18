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
		formData.append('image', imageEl.files[0]);
    console.log(formData.get('image'));
    console.log(formData.get('latitude'));
    console.log(formData.get('longitude'));

    //TODO: Uncomment following code block to actually send data to the server
		// fetch('/upload', {
		// 	method: 'POST',
		// 	body: formData,
		// })
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
	});
});
