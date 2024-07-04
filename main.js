const msg = 'Please provide a valid email address';
const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');
// ^^^^ Selecting elemetns to be affected/manipulated ^^^^^^
const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = msg;
// ^^^^ Creating a variable and also creating the classlisst^^^^
function checkEmail (e) {
	e.preventDefault();
	const email = e.target.querySelector('[type="email"]').value;
	if (!validateEmail(email)) {
		form.classList.add('error');
		form.insertBefore(error, button);
	} else {
		form.removeChild(error);
		form.classList.remove('error');
	}
}
// ^^^^ Logic/rules for adding/removing classlists depending on input validity^^^
function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
// ^^^^ form email input logic^^^^
form.addEventListener('submit', checkEmail);
// ^^^Stating the form will handle the submit event^^^