
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
			//console.log(data);
			showWeatherData(data);
		})		
	})
}

let tempScale = ' °C';

function showWeatherData (data){

		timezone.innerHTML = data.timezone;

		let otherDayForcast = '';
		data.daily.forEach((day, idx) => {
		if(idx !=0){
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

// End of OPENWEATHERMAP API //