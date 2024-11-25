let inputCity = document.querySelector('.search-input')
let appContent = document.querySelectorAll('.content')
let contentCity = document.querySelectorAll('.content-city-name')
let noCityText = document.querySelector('.not-found-text-hidden')
let noCityBtn = document.querySelector('.not-found-btn-hidden')

const checkAndSetCity = currentCity => {
	let countHiddenCity = 0
	for (let i = 0; i < appContent.length; i++) {
		let cityName = String(
			appContent[i].querySelector('.content-city-name').textContent
		).toLowerCase()
		if (cityName.indexOf(currentCity) >= 0) {
			appContent[i].classList.remove('content-hidden')
		} else {
			countHiddenCity++
			appContent[i].classList.add('content-hidden')
		}
	}
	return countHiddenCity
}

const setTextAndBtnNotFound = countHiddenCity => {
	if (countHiddenCity == appContent.length) {
		noCityText.textContent = 'Городов не найдено'
		noCityText.classList.add('not-found-text')
		noCityText.classList.remove('not-found-text-hidden')

		noCityBtn.classList.add('not-found-btn')
		noCityBtn.classList.remove('not-found-btn-hidden')
	} else {
		noCityText.textContent = ''
		noCityText.classList.add('not-found-text-hidden')
		noCityText.classList.remove('not-found-text')

		noCityBtn.classList.add('not-found-btn-hidden')
		noCityBtn.classList.remove('not-found-btn')
	}
}

const startSearch = () => {
	let currentCity = String(inputCity.value).toLowerCase()
	countHiddenCity = checkAndSetCity(currentCity)
	setTextAndBtnNotFound(countHiddenCity)
}

noCityBtn.onclick = () => {
	inputCity.value = ''
	startSearch()
}

inputCity.oninput = () => {
	startSearch()
}
