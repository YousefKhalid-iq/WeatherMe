
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

const button = document.getElementById('container');
const toggle = document.getElementById('toggle-btn');

function btnToggle() {
	if (lol != true) {
		function getWeatherData() {
			navigator.geolocation.getCurrentPosition((success) => {
				let {latitude, longitude} = success.coords;
				fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {
					//console.log(data);
					showWeatherData(data);
				})		
			})
		}
	} 	
	getWeatherData()
}

let lol = button.addEventListener("click", function() {
	toggle.classList.toggle('active');
})

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
const country = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const API_KEY = 'd684266e7037509f2bb5963473d09819';

getWeatherData()
function getWeatherData() {
	navigator.geolocation.getCurrentPosition((success) => {
		let {latitude, longitude} = success.coords;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
			//console.log(data);
			showWeatherData(data);
		})		
	})
}

function showWeatherData (data){
		let otherDayForcast = '';
		data.daily.forEach((day, idx) => {
		if(idx !=0){
			otherDayForcast += `
			<div class="daily-weather-cont">
				<p class="date-p">${window.moment(day.dt*1000).format('dddd')}</p>
				<img class="weather-icon" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="" role="presentation">
				<p ${'class="max-weather"'}>${day.temp.max + ' °C'}</p>
				<p class="break-p">||</p>
				<p ${'class="min-weather"'}>${day.temp.min + ' °C'}</p>
			</div>
		`
		}
	})

	weatherForecastEl.innerHTML = otherDayForcast;
}

// End of OPENWEATHERMAP API //