const userRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,10}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phonenumberRegex = /^[0-9]{6,16}$/;

//selectores
const countries = document.querySelector(`#countries`);
const usernameInput = document.querySelector(`#username`);
const emailInput = document.querySelector(`#email`);
const phoneCode = document.querySelector(`#phonecode`);
const phoneInput = document.querySelector(`#phone`);
const passwordInput = document.querySelector(`#password`);
const confirmPasswordInput = document.querySelector(`#confirm-password`);

//Validacion
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;

//Funcion

const validation = (e, validation, element) => {
    // e = event
  const information = e.target.parentElement.children[1];
  if (validation) {
    //Se esta agregando el color a la linea del imput
    element.classList.add(`correct`);
    element.classList.remove(`incorrect`);
    information.classList.remove(`show-info`);
  } else {
    element.classList.add(`incorrect`);
    element.classList.remove(`correct`);
    information.classList.add(`show-info`);
  }
};

//Validacion
[...countries].forEach((option) => {
  option.innerHTML = option.innerHTML.split(`(`)[0];
});

usernameInput.addEventListener(`input`, e => {
  usernameValidation = userRegex.test(e.target.value);
  validation(e, usernameValidation, usernameInput);
});
//e.target.value es lo que el usuario escribe en el input

emailInput.addEventListener(`input`, e => {
  emailValidation = emailRegex.test(e.target.value);
  validation(e, emailValidation, emailInput);
});

countries.addEventListener(`input`, e => {
  const optionSelected = [...e.target.children].find(
    option => option.selected);
  phoneCode.innerHTML = `+${optionSelected.value}`
});

phoneInput.addEventListener('input', e => {
  phoneValidation = phonenumberRegex.test(e.target.value);
  const information = e.target.parentElement.parentElement.children[1];
  if (phoneValidation) {
    //Se esta agregando el color a la linea del input
    phoneInput.classList.add(`correct`);
    phoneInput.classList.remove(`incorrect`);
    information.classList.remove(`show-info`);
  } else {
    phoneInput.classList.add(`incorrect`);
    phoneInput.classList.remove(`correct`);
    information.classList.add(`show-info`);
  }
});

passwordInput.addEventListener(`input`, e => {
  passwordValidation = passwordRegex.test(e.target.value);
  validation(e, passwordValidation, passwordInput);
});

confirmPasswordInput.addEventListener(`input`, e => {
  confirmPasswordValidation = passwordInput.value == e.target.value;
  validation(e, confirmPasswordValidation, confirmPasswordInput);
});

