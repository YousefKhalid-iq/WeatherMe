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

const signUpEvent = (signupBtn.onclick = function() {
  first.style.display="block";
  signupCont.style.display="none";
  signinBtn.innerHTML= "Sign Up";
  firstName.setAttribute('required', "");
  lastName.setAttribute('required', "");
});


const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('re-password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be blank')
  } else {
    setSuccessFor(firstName)
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be blank')
  } else {
    setSuccessFor(lastName)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (rePasswordValue === '') {
    setErrorFor(rePassword, 'Re-Enter Password cannot be blank');
  } else if (passwordValue !== rePasswordValue) {
    setErrorFor(rePassword, 'Passwords do not match')
  } else {
    setSuccessFor(rePassword);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}