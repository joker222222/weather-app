AOS.init()
let inputCity = document.querySelector('.search-input')
let appContent = document.querySelectorAll('.content')
let parentAppContent = document.querySelector('.parent')
let contentCity = document.querySelectorAll('.content-city-name')
let noCityText = document.querySelector('.not-found-text-hidden')
let noCityBtn = document.querySelector('.not-found-btn-hidden')
const speedOpacity = 0.25

const contentHideFn = contents => {
	contents.forEach(element => {
		element.classList.add('content-hidden')
	})
}

const contentShowFn = contents => {
	contents.forEach(element => {
		element.classList.remove('content-hidden')
		// element.style.opacity = '0'
		// let opacity = 0
		// const increaseOpacity = () => {
		// 	opacity += 0.05
		// 	element.style.opacity = opacity
		// 	if (opacity >= 1) {
		// 		clearInterval(increaseOpacity)
		// 	} else {
		// 		requestAnimationFrame(increaseOpacity)
		// 	}
		// }
		// requestAnimationFrame(increaseOpacity)
	})
}

const checkAndSetCity = currentCity => {
	let countHiddenCity = 0
	let contentHide = []
	let contentShow = []
	for (let i = 0; i < appContent.length; i++) {
		let content = appContent[i]
		let cityName = String(
			content.querySelector('.content-city-name').textContent
		).toLowerCase()
		if (cityName.indexOf(currentCity) >= 0) {
			contentShow.unshift(content)
		} else {
			countHiddenCity++
			contentHide.unshift(content)
		}
	}
	contentHideFn(contentHide)
	contentShowFn(contentShow)
	return countHiddenCity
}

const setTextAndBtnNotFound = countHiddenCity => {
	if (countHiddenCity == appContent.length) {
		noCityText.textContent = 'No cities found'
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
