const apiKey = "ff2acf459277546564b4e7aba1956c9f"

const fetchWeather = (city) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
		.then((res) => {
			if (!res.ok) {
				alert("Weather not found!")
				throw new Error("Weather not found!")
			}
			return res.json()
		})
		.then((data) => displayWeather(data))
}

const displayWeather = (data) => {
	const { name } = data
	const { icon, description } = data.weather[0]
	const { temp, humidity } = data.main
	const { speed } = data.wind

	document.querySelector('.city').innerText = `Weather in ${name}`
	document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
	document.querySelector('.description').innerText = description
	document.querySelector('.temp').innerText = `${temp}°C`
	document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`
    document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`
    document.querySelector('.weather').style.display = 'block'
    document.body.style.backgroundImage = `https://source.unsplash.com/1600x900/?${name}`
}

const searchWeather = async () => {
	await fetchWeather(document.querySelector('.search-bar').value)
}

document.querySelector('.search button').addEventListener('click', function() {
	searchWeather()
})

document.querySelector('.search-bar').addEventListener('keyup', function(e) {
	if (e.key == "Enter") {
		searchWeather()
	}
})
