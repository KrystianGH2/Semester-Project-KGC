// Const for labels
const nameLabel = document.querySelector("#nameLabel");
const emailLabel = document.querySelector("#emailLabel");
const passwordLabel = document.querySelector("#passwordLabel");
const confirmPassLabel = document.querySelector("#confirmPassLabel");

// Const for span elements

const nameSpan = document.querySelector("#nameSpan");
const emailSpan = document.querySelector("#emailSpan");
const passwordSpan = document.querySelector("#passwordSpan");
const confirmPasswordSpan = document.querySelector("#confirmPasswordSpan");

//Const for inputs

const nameJs = document.querySelector("#name");
const emailJs = document.querySelector("#email");
const passwordJs = document.querySelector("#password");
const confirmPassJs = document.querySelector("#confirmPassword");

const popUpJs = document.querySelector("#popUp");

//const for regex

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const regexName = /^[a-zA-Z]{2,}/;

const signupJs = document.querySelector("#signUpBtn");

const formValidation = () => {
  signupJs.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  signupJs.disabled = true;
  signupJs.classList.remove("sign-up-btn");

  nameJs.addEventListener("keyup", (e) => {
    const nameValue = e.target.value;
    const testedName = regexName.test(nameValue);

    if (!testedName) {
      nameJs.style.border = "2px solid red";
      nameSpan.innerHTML = "Name must have at least 2 characters.";
    } else {
      nameJs.style.border = "2px solid green";
      nameSpan.innerHTML = " ";
    }

    if (nameValue.length > 0) {
      nameLabel.classList.remove("required");
    } else {
      nameLabel.classList.add("required");
    }
  });

  emailJs.addEventListener("keyup", (e) => {
    const emailValue = e.target.value;
    const testedEmail = regexEmail.test(emailValue);

    if (!testedEmail) {
      emailJs.style.border = "2px solid red";
    } else if (testedEmail) {
      emailJs.style.border = "2px solid green";
    }

    if (emailValue.length > 0) {
      emailLabel.classList.remove("required");
    } else {
      emailLabel.classList.add("required");
    }
  });

  emailJs.addEventListener("blur", (e) => {
    const emailValue = e.target.value;
    const testedEmail = regexEmail.test(emailValue);

    if (!testedEmail) {
      emailSpan.innerHTML = "Please enter your email.";
    } else if (testedEmail) {
      emailSpan.innerHTML = "";
    }
  });

  passwordJs.addEventListener("keyup", (e) => {
    const passwordValue = e.target.value;
    const testedPassword = regexPassword.test(passwordValue);

    if (!testedPassword) {
      passwordJs.style.border = "2px solid red";
      passwordSpan.innerHTML = "Password mush have at least 8 characters.";
    } else {
      passwordJs.style.border = "2px solid green";
      passwordSpan.innerHTML = "";
    }

    if (passwordValue.length > 0) {
      passwordLabel.classList.remove("required");
    } else {
      passwordLabel.classList.add("required");
    }
  });

  confirmPassJs.addEventListener("keyup", (e) => {
    const confirmPassValue = e.target.value;
    console.log(confirmPassValue);

    if (confirmPassValue !== passwordJs.value) {
      confirmPassJs.style.border = "2px solid red";
      confirmPasswordSpan.innerHTML = "Password does not match";
    } else if (confirmPassValue === passwordJs.value) {
      confirmPassJs.style.border = "2px solid green";
      confirmPasswordSpan.innerHTML = "";

      signupJs.disabled = false;
      signupJs.classList.add("sign-up-btn");
    }
  });

  confirmPassJs.addEventListener("keyup", (e) => {
    const confirmPassValue = e.target.value;
    if (confirmPassValue.length > 0) {
      confirmPassLabel.classList.remove("required");
    } else {
      confirmPassLabel.classList.add("required");
    }
  });
};

formValidation();

popUpJs.style.display = "none";

signupJs.onclick = () => {
  popUpJs.style.display = "block";
};
