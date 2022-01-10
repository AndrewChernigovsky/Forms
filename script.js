const form = document.forms.form,
			email = form.email,
			phone = form.phone,
			username = form.username;

let emailValue = email.value;
let phoneValue = phone.value;

const errorText = 'Проверьте символы ';

form.addEventListener('submit', function(evt) {
	if (emailTest(email)) {
		email.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="error">
				Введите email
			</div>`
		);
		evt.preventDefault();
	}

	if (phoneTest(phone)) {
		phone.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="error">
				Введите phone
			</div>`
		);
		evt.preventDefault();
	}
});

email.addEventListener('focus', function(evt) {
	if (email.nextElementSibling) {
		email.nextElementSibling.remove();
	}
	if (phone.nextElementSibling) {
		phone.nextElementSibling.remove();
	}
});

form.addEventListener('click', function(evt)  {
	if (email.nextElementSibling) {
		email.nextElementSibling.remove();
	}
	if (phone.nextElementSibling) {
		phone.nextElementSibling.remove();
	}
});

function emailTest(email) {
	return !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(emailValue);
};

function phoneTest(phone) {
	return !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(phoneValue);
};