// hamburger menu toggle. //

const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".drop-down-menu");
const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

//end of hamburger menu toggle. //

// toggle C -> F feature //

function btnToggle() {
	let arrow = document.getElementById('arrow-btn');
	if (units === "metric") {
		units = "imperial";
		tempScale = ' °F';
		arrow.style.transform="rotate(270deg)";
	
	} else {
		units = "metric";
		tempScale = ' °C'
		arrow.style.transform="rotate(90deg)";
	}
	getWeatherData()
	/*nycWeather()
	londonWeather()
	parisWeather()
	rioWeather()
	dubaiWeather()
	istanbulWeather()
	bangkokWeather()*/
}

// end of toggle C -> F feature //


// automatic image slider //

let counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 7){
		counter = 1;
	}
}, 5000);

// end of automatic image slider //

// OPENWEATHERMAP API //

const timezone = document.getElementById('local-city-p');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-weather');

const API_KEY = 'd684266e7037509f2bb5963473d09819';
let units = "metric";

getWeatherData()
function getWeatherData() {
	navigator.geolocation.getCurrentPosition((success) => {
		let {latitude, longitude} = success.coords;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherData(data);
		})		
	})
}

let tempScale = ' °C';

function showWeatherData (data){

		timezone.innerHTML = data.timezone;

		let otherDayForcast = '';
		data.daily.forEach((day, idx) => {
		if(idx == 0){
			currentTempEl.innerHTML = `
			<p class="date-p">${window.moment(day.dt*1000).format('dddd')}</p>
        <img class="weather-icon" class="weather-icon small1" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="" role="presentation">
        <p ${'class="max-weather"'}>${day.temp.max + tempScale}</p>
        <p class="break-p">||</p>
        <p ${'class="min-weather"'}>${day.temp.min + tempScale}</p>
			`
		} else {
			otherDayForcast +=
			`
			<div class="daily-weather-cont">
				<p class="date-p">${window.moment(day.dt*1000).format('dddd')}</p>
				<img class="weather-icon" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="" role="presentation">
				<p ${'class="max-weather"'}>${day.temp.max + tempScale}</p>
				<p class="break-p">||</p>
				<p ${'class="min-weather"'}>${day.temp.min + tempScale}</p>
			</div>
		`
		}
	})

	weatherForecastEl.innerHTML = otherDayForcast;
}

// Calling Weather for cities in main

// NYC Call

/*

const currentNyc = document.getElementById('nyc-temp');

nycWeather()
function nycWeather () {
	let latNyc = 40.7143;
	let lonNyc = -74.0060;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latNyc}&lon=${lonNyc}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherNyc(data);
		})
}

function showWeatherNyc (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentNyc.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/nyc.jpg" alt="an image of the statue of liberty">
      <h2 class="main-img-text">
        NYC, US
        <br>
        <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
        <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}


// London Call

const currentLondon = document.getElementById('london-temp');

londonWeather()
function londonWeather () {
	let latLondon = 51.5085;
	let lonLondon = -0.1257;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLondon}&lon=${lonLondon}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherLondon(data);
		})
}

function showWeatherLondon (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentLondon.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/london.jpg" alt="an image of the Big Ben">
    <h2 class="main-img-text">
      LONDON, UK
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

// Paris Call

const currentParis = document.getElementById('paris-temp');

parisWeather()
function parisWeather () {
	let latParis = 48.8534;
	let lonParis = 2.3488;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latParis}&lon=${lonParis}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherParis(data);
		})
}

function showWeatherParis (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentParis.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/paris.jpg" alt="an image of the Eiffel Tower">
    <h2 class="main-img-text">
		  PARIS, FRANCE
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

// Rio Call

const currentRio = document.getElementById('rio-temp');

rioWeather()
function rioWeather () {
	let latRio = -22.9028;
	let lonRio = -43.2075;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latRio}&lon=${lonRio}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherRio(data);
		})
}

function showWeatherRio (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentRio.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/rio-de-janeiro.jpg" alt="an image of rio de janeiro">
    <h2 class="main-img-text">
		  RIO DE JANEIRO, BRAZIL
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

// Dubai Call

const currentDubai = document.getElementById('dubai-temp');

dubaiWeather()
function dubaiWeather () {
	let latDubai = 25.2582;
	let lonDubai = 55.3047;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latDubai}&lon=${lonDubai}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherDubai(data);
		})
}

function showWeatherDubai (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentDubai.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/dubai.jpg" alt="an image of the city Dubai">
    <h2 class="main-img-text">
		DUBAI, UAE
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

// Istanbul Call

const currentIstanbul = document.getElementById('istanbul-temp');

istanbulWeather()
function istanbulWeather () {
	let latIstanbul = 41.0351;
	let lonIstanbul = 28.9833;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latIstanbul}&lon=${lonIstanbul}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherIstanbul(data);
		})
}

function showWeatherIstanbul (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentIstanbul.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/istanbul.jpg" alt="an image of the city Istanbul">
    <h2 class="main-img-text">
		ISTANBUL, TURKEY
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

// Bangkok Call

const currentBangkok = document.getElementById('bangkok-temp');

bangkokWeather()
function bangkokWeather () {
	let latBangkok = 13.75;
	let lonBangkok = 100.5167;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latBangkok}&lon=${lonBangkok}&exclude={part}&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			showWeatherBangkok(data);
		})
}

function showWeatherBangkok (data) {
	data.daily.forEach((day, idx) => {
	if (idx == 0) {
		currentBangkok.innerHTML = `
		<img class="main-img" src="/weather app/images/main-images/bangkok.jpg" alt="an image of the city Bangkok">
    <h2 class="main-img-text">
		  BANGKOK, THAILLAND
      <br>
      <span id="temp-city-max">${day.temp.max + tempScale + ' /'}</span>
      <span id="temp-city-min">${day.temp.min + tempScale}</span>
      </h2>
		`
	}
	})
}

*/

// End Calling Weather for cities in main

// Search Functionality 

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('searchbar-btn');
let errorMsg = document.getElementById('error-msg-search');

searchBtn.addEventListener('click', function() {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+ searchBar.value +'&appid=' + API_KEY + '')
	.then(response => response.json())
	.then(data => {
		let latValue = data['coord']['lat']
		let lonValue = data['coord']['lon']
		searchBar.value = "";
		errorMsg.style.backgroundColor='#fff';
	  errorMsg.innerHTML = "Make Sure To Pronounce The Names Correctly!";
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latValue}&lon=${lonValue}&exclude=hourly,minutely&units=${units}&appid=${API_KEY}`).then(res => res.json()).then(data => {
			
			showWeatherData(data);
		})
	})
	.catch(err => searchBar.value="",
	errorMsg.style.backgroundColor='#ec6e4c',
	errorMsg.innerHTML = "You've entered an invalid city name, please try again")
})

// End of OPENWEATHERMAP API //