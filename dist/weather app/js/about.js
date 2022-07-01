const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".drop-down-menu");
const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});