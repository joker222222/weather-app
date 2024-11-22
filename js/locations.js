let inputCity = document.querySelector('.search-input')
let appContent = document.querySelectorAll('.content')
let contentCity = document.querySelectorAll('.content-city-name')
let noCity = document.querySelector('.not-found')

inputCity.oninput = () => {
	let currentCity = String(inputCity.value)
	let countHiddenCity = 0
	for (let i = 0; i < appContent.length; i++) {
		let cityName = appContent[i].querySelector('.content-city-name').textContent
		if (cityName.indexOf(String(currentCity)) >= 0) {
			appContent[i].classList.remove('content-hidden')
		} else {
			countHiddenCity++
			appContent[i].classList.add('content-hidden')
		}
	}
	if (countHiddenCity == appContent.length) {
		console.log(1)
		noCity.textContent = 'Городов не найдено'
		noCity.classList.add('weather-text')
	} else {
		noCity.textContent = ''
		noCity.classList.remove('weather-text')
	}
}
