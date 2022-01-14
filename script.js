const form = document.forms.form,
			email = form.email,
			phone = form.phone,
			password = form.pass,
			passwordCheck = form.passCheck,
			username = form.username,
			file = form.file,
			comment = form.comment,
			dataUser = form.dataUser,
			inputs = document.querySelectorAll('.inputForm');

let emailValue = email.value;
let phoneValue = phone.value;


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
			}
		}
	});

		if(!dataUser.checked){
			let dataField = document.querySelector('.datauser-fieldset');

			if (dataUser.nextElementSibling){
				dataUser.nextElementSibling.remove()
			}

			dataField.classList.add('error');
			dataUser.parentElement.insertAdjacentHTML(
						"beforeend",
						`<span class="errorText">Это обязательный пункт</span>`
					);
			evt.preventDefault();
		} else {
			if (el.classList.contains('error')) {
				el.classList.remove('error');
				el.classList.add('success');
			}

			if (dataUser.nextElementSibling){
				dataUser.nextElementSibling.remove()
			}
		}

			if (isValidEmail(email)){
				if (email.nextElementSibling){
					email.nextElementSibling.remove()
				}
				email.classList.remove('success');
				email.classList.add('error');
				email.parentElement.insertAdjacentHTML(
					"beforeend",
					`<span class="errorText">Неккоректно заполнено</span>`
				);
				evt.preventDefault();
			} else {
				if (email.nextElementSibling){
					email.nextElementSibling.remove()
				}
				email.classList.remove('error');
				email.classList.add('success');
			};

			if (isValidPhone(phone)){
				if (phone.nextElementSibling){
					phone.nextElementSibling.remove()
				}
				phone.classList.remove('success');
				phone.classList.add('error');
				phone.parentElement.insertAdjacentHTML(
					"beforeend",
					`<span class="errorText">Неккоректно заполнено</span>`
				);
				evt.preventDefault();
			} else {
				if (phone.nextElementSibling){
					phone.nextElementSibling.remove()
				}
				phone.classList.remove('error');
				phone.classList.add('success');
			}

			if (isValidName(username)){
				if (username.nextElementSibling){
					username.nextElementSibling.remove()
				}
				username.classList.remove('success');
				username.classList.add('error');
				username.parentElement.insertAdjacentHTML(
					"beforeend",
					`<span class="errorText">Неккоректно заполнено</span>`
				);
				evt.preventDefault();
			} else {
				if (username.nextElementSibling){
				username.nextElementSibling.remove()
				}
				username.classList.remove('error');
				username.classList.add('success');
			}

			if (password.value != passwordCheck.value){
				if (passwordCheck.nextElementSibling){
					passwordCheck.nextElementSibling.remove()
				}
				password.classList.remove('success');
				passwordCheck.classList.remove('success');
				passwordCheck.classList.add('error');
				passwordCheck.parentElement.insertAdjacentHTML(
					"beforeend",
					`<span class="errorText">Пароли не совпадают</span>`
				);
				evt.preventDefault();
			} else {
				if (passwordCheck.nextElementSibling){
					passwordCheck.nextElementSibling.remove()
				}
				passwordCheck.classList.remove('error');
				if (passwordCheck.value != '') {
					passwordCheck.classList.add('success');
				}
			}
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
	return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
};

function isValidName(input){
	return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
};

file.addEventListener('change', function (e){
	let selectedFile = file.files[0];

	let fileURL = URL.createObjectURL(selectedFile);

	file.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="file-image">
			<img alt="userpic" title="${selectedFile.name}" src="${fileURL}">
		</div>
		`
	);
});

comment.addEventListener("paste", function (event) {
	event.preventDefault();
	alert('Вставка запрещена');
});
