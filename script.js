const form = document.forms.form,
			email = form.email,
			phone = form.phone,
			password = form.pass,
			passwordCheck = form.passCheck,
			username = form.username,
			inputs = document.querySelectorAll('.inputForm');

let emailValue = email.value;
// let phoneValue = phone.value;
let classError = 'error';

// const errorText = 'Проверьте символы ';

// form.addEventListener('submit', function(evt) {
// 	if (emailTest(email)) {
// 		email.parentElement.insertAdjacentHTML(
// 			"beforeend",
// 			`<div class="${classError}">
// 				Введите email
// 			</div>`
// 		);
// 		email.style.border = "1px solid red";
// 		evt.preventDefault();
// 	} else {
// 		email.style.border = "1px solid green";
// 		evt.preventDefault();
// 	}

// 	// if (phoneTest(phone)) {
// 	// 	phone.parentElement.insertAdjacentHTML(
// 	// 		"beforeend",
// 	// 		`<div class="${classError}">
// 	// 			Введите phone
// 	// 		</div>`
// 	// 	);
// 	// 	phone.style.border = "1px solid red";
// 	// 	evt.preventDefault();
// 	// } else {
// 	// 	phone.style.border = "1px solid green";
// 	// }
// });

// email.addEventListener('focus', function(evt) {
// 	if (email.nextElementSibling) {
// 		email.nextElementSibling.remove();
// 	}
// 	// if (phone.nextElementSibling) {
// 	// 	phone.nextElementSibling.remove();
// 	// }
// });

// form.addEventListener('click', function(evt)  {
// 	if (email.nextElementSibling) {
// 		email.nextElementSibling.remove();
// 	}
// 	// if (phone.nextElementSibling) {
// 	// 	phone.nextElementSibling.remove();
// 	// }
// });

// function emailTest(email) {
// 	return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(emailValue);
// };

// function phoneTest(phone) {
// 	return !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(phoneValue);
// };

///////////////
/////////////////



form.addEventListener('submit', function(evt) {
	inputs.forEach(el => {
		if (el.nextElementSibling){
			el.nextElementSibling.remove()
		}

		if (el.value === '') {
			el.classList.add('error');
			el.parentElement.insertAdjacentHTML(
				"beforeend",
				`<span class="errorText">поле должно быть заполнено</span>`
			);
			evt.preventDefault();
		} else {
			if (el.classList.contains('error')) {
				el.classList.remove('error');
				el.classList.add('success');
			};

			if (isValidEmail(email) && isValidPhone(phone)){
				el.classList.add('error');
				el.parentElement.insertAdjacentHTML(
					"beforeend",
					`<span class="errorText">Неккоректно заполнено</span>`
				);
			} else {
				el.classList.remove('error');
				el.classList.add('success');
			}
		}



	})
	evt.preventDefault();
});

email.addEventListener('focus', () => {
	if (email.classList.contains('error') || email.classList.contains('errorText')) {
		email.classList.remove('error');
		email.nextElementSibling.remove();
	} else {
		email.classList.add('success');
	}
})

function isValidEmail(input){
	return !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(input.value);
};

function isValidPhone(input){
	return !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(input.value)
};
