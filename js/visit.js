const emailJs = document.querySelector("#emailJs");
const nameJs = document.querySelector("#nameJs");
const inputErrorJs = document.querySelector("#input-error");
const inputErrorEmail = document.querySelector("#input-error-email");
const dateJS = document.querySelector("#date");

// dateJS.datepicker({dateFormat: 'yyyy-MM-dd', autoclose: true});

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const regexName = /^[a-zA-Z]{5,}/;

const reservationForm = () => {
  emailJs.addEventListener("blur", (e) => {
    const emailValue = e.target.value;
    const testedEmail = regexEmail.test(emailValue);
    if (!testedEmail) {
      inputErrorEmail.style.display = "block";
      emailJs.style.border = "2px solid red";
    } else {
      inputErrorEmail.style.display = "none";
      emailJs.style.border = "2px solid green";
    }
  });

  nameJs.addEventListener("blur", (e) => {
    const nameValue = e.target.value;
    let testedName = regexName.test(nameValue);
    if (!testedName) {
      inputErrorJs.style.display = "block";
      nameJs.style.border = "2px solid red";
    } else {
      inputErrorJs.style.display = "none";
      nameJs.style.border = "2px solid green";
    }
  });
};

reservationForm();

let date = new Date();

let todaysDate = date.getDate();
if (todaysDate < 10) {
  todaysDate = "0" + todaysDate;
}

let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}

let year = date.getFullYear();
let minDate = year + "-" + month + "-" + todaysDate;
dateJS.setAttribute("min", minDate);
