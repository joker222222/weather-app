let inputCity = document.querySelector('.search-input')
let appContent = document.querySelectorAll('.content')
let contentCity = document.querySelectorAll('.content-city-name')

inputCity.oninput = () => {
	let currentCity = String(inputCity.value)
	for (let i = 0; i < appContent.length; i++) {
		let cityName = appContent[i].querySelector('.content-city-name').textContent
		if (cityName.indexOf(String(currentCity)) >= 0) {
			appContent[i].classList.remove('content-hidden')
		} else {
			appContent[i].classList.add('content-hidden')
		}
	}
}
