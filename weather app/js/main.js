// hamburger menu toggle.

const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".drop-down-menu");
const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

// end of hamburger menu toggle.

// automatic image slider 

let counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 7){
		counter = 1;
	}
}, 5000);

