const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".drop-down-menu");
const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

const first = document.querySelector('.form-name');
const signupBtn = document.querySelector('.sign-up-btn');
const signupCont = document.querySelector('.signup-cont');
const signinBtn = document.querySelector('.sign-in-btn');

if (signupBtn.onclick = function() {
  first.style.visibility="visible";
  first.style.height="100%";
  first.style.width="100%";
  signupCont.style.display="none";
  signinBtn.innerHTML= "Sign Up"
}) {
}