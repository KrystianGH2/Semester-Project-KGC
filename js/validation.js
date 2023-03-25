const email = document.querySelector("#email");
const password = document.querySelector("#password");

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const regexName = /^[a-zA-Z]{2,}/;

const formJs = document.querySelector("#formJs");
const submitJs = document.querySelector("#submitJs");
let inputJs = document.querySelector(".input-box");

const validation = () => {
  submitJs.disabled = true;
  submitJs.classList.remove("sign-up-btn");

  password.addEventListener("keyup", (e) => {
    const value = e.target.value;
    if (value.length >= 8 && value.match(regexPassword)) {
      submitJs.disabled = false;
      submitJs.classList.add("sign-up-btn");
    } else if (value.length < 8 && !value.match(regexPassword)) {
      submitJs.disabled = true;
      submitJs.classList.remove("sign-up-btn");
    }
  });

  //Login button only appears when password matches the required RegexPattern
  //Login button has an link directed back to home page

  email.addEventListener("keyup", () => {
    let testedEmail = regexEmail.test(email.value);
    const emailError = document.querySelector("#email-error");
    if (!testedEmail) {
      emailError.style.display = "block";
      email.style.border = "2px solid red";
      return false;
    }
    emailError.style.display = "none";
    email.style.border = "2px solid green";
    return true;
  });

  password.addEventListener("keyup", () => {
    const testedPassword = regexPassword.test(password.value);
    const passwordError = document.querySelector("#password-error");
    if (!testedPassword) {
      passwordError.style.display = "block";
      password.style.border = "2px solid red";
      return false;
    }

    passwordError.style.display = "none";
    password.style.border = "2px solid green";
    return true;
  });
};
validation();
