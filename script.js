const form = document.getElementById('form'),
			email = document.getElementById('email'),
			phone = document.getElementById('phone'),
			username = document.getElementById('username');

const emailValue = email.value;

form.addEventListener('submit', function(evt) {
	if (emailTest(email)) {
		email.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="error">
				Ошибка в написании
			</div>`
		)

		evt.preventDefault();
	}
});

email.addEventListener('focus', function(evt) {
	if (email.nextElementSibling) {
		email.nextElementSibling.remove();
	}
});

function emailTest(email) {
	return !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.value);
};