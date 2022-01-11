const form = document.forms.form,
			email = form.email,
			phone = form.phone,
			password = form.pass,
			passwordCheck = form.passCheck,
			username = form.username;

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

function validateInput(){
    //check username is empty
    if(username.value.trim()===""){
       onError(username,"User Name cannot be empty");
    }else{
        onSuccess(username);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //password
    if(password.value.trim()===""){
        onError(password,"User Name cannot be empty");
     }else{
         onSuccess(password);
     }
     if(passwordCheck.value.trim()===""){
        onError(passwordCheck,"User Name cannot be empty");
     }else{
         if(password.value.trim()!==passwordCheck.value.trim()){
            onError(passwordCheck,"Password & Confirm password not matching");
         }
         else
         onSuccess(passwordCheck);
     }
}

form.addEventListener('submit', function(evt) {
	event.preventDefault();
    validateInput();
});

function onSuccess(input){
	let parent=input.parentElement;
	parent.insertAdjacentHTML(
		"beforeend",
		`<p class="small">
		error
		</p>`
	);
	let messageEle=document.querySelector(".small");
	messageEle.style.visibility="hidden"; 
	parent.classList.remove("error");
	parent.classList.add("success");  
}

function onError(input,message){
	let parent=input.parentElement;
	parent.insertAdjacentHTML(
		"beforeend",
		`<p class="small">
		error
		</p>`
	);
	let messageEle=document.querySelector(".small");
	messageEle.style.visibility="visible";
	messageEle.innerText=message;
	parent.classList.add("error");
	parent.classList.remove("success");

}

function isValidEmail(email){
	return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(emailValue);
};
