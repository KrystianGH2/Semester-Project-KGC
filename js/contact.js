// const for labels
const nameLabel = document.querySelector("#nameLabel");
const emailLabel = document.querySelector("#emailLabel");
const topicLabel = document.querySelector("#topicLabel");
const messageLabel = document.querySelector("#messageLabel");

// const for inputs
const nameJs = document.querySelector("#name");
const emailJs = document.querySelector("#email");
const numberJs = document.querySelector("#number");
const topicJs = document.querySelector("#topic");
const messageJs = document.querySelector("#message");
const optionsJs = document.querySelector("#option");

// const for spans
const nameSpan = document.querySelector("#nameSpan");
const emailSpan = document.querySelector("#emailSpan");
const topicSpan = document.querySelector("#topicSpan");
const messageSpan = document.querySelector("#messageSpan");

// span error displays;

nameSpan.style.display = "none";
emailSpan.style.display = "none";
topicSpan.style.display = "none";
messageSpan.style.display = "none";

const regexEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regexName = /^[a-zA-Z]{2,}/;
// const regexNumber = \d{3}-\d{3}-\d{4}|\d{10}
const regexText = /^[a-zA-Z]{20,}/;

const contactForm = () => {
  nameJs.addEventListener("keyup", (e) => {
    const nameValue = e.target.value;
    const testedName = regexName.test(nameValue);

    if (!testedName) {
      nameJs.style.border = "2px solid red";
      nameSpan.style.display = "block";
    } else if (testedName) {
      nameSpan.style.display = "none";
      nameJs.style.border = "2px solid green";
    }

    if (nameValue.length > 0) {
      nameLabel.classList.remove("required");
    } else if (nameValue.length === 0) {
      nameLabel.classList.add("required");
    }
  });

  emailJs.addEventListener("keyup", (e) => {
    const emailValue = e.target.value;
    const testedEmail = regexEmail.test(emailValue);

    if (!testedEmail) {
      emailJs.style.border = "2px solid red";
      emailSpan.style.display = "block";
    } else if (testedEmail) {
      emailSpan.style.display = "none";
      emailJs.style.border = "2px solid green";
    }

    if (emailValue.length > 0) {
      emailLabel.classList.remove("required");
    } else if (emailValue.length === 0) {
      emailLabel.classList.add("required");
    }
  });

  optionsJs.addEventListener("change", () => {
    topicLabel.classList.remove("required");
  });

  messageJs.addEventListener("blur", (e) => {
    const messageValue = e.target.value;
    const testedMessage = regexText.test(messageValue);

    if (!testedMessage) {
      messageJs.style.border = "2px solid red";
      messageSpan.style.display = "block";
    } else if (testedMessage) {
      messageJs.style.border = "2px solid green";
      messageSpan.style.display = "none";
    }
  });

  messageJs.addEventListener("keyup", (e) => {
    const messageJs = e.target.value.length;
    if (messageJs > 0) {
      messageLabel.classList.remove("required");
    } else {
      messageLabel.classList.add("required");
    }
  });
};

contactForm();

const submitButton = document.querySelector(".submit-btn");
const popUp = document.querySelector("#popUp");

submitButton.addEventListener("click", () => {
  popUp.classList.add("fadeIn");
});
