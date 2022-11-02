const form = document.querySelector(".form__input");
const name = document.getElementById("form__name");
const number = document.getElementById("form__number");
const year = document.getElementById("expire__year");
const month = document.getElementById("expire__month");
const cvc = document.getElementById("expire__cvc");

const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const monthInput = document.getElementById("expire-month");
const yearInput = document.getElementById("expire-year");
const cvcInput = document.getElementById("cvc");

const thanksBtn = document.querySelector(".thanks__button");

const inputs = form.querySelectorAll("input");

fillFields(name, nameInput);
fillNumber(number, numberInput);
fillFields(year, yearInput);
fillFields(month, monthInput);
fillFields(cvc, cvcInput);

let inputCounter = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  if (inputCounter < 5) {
    inputCounter = 0;
  } else if (inputCounter === 5) {
    document.querySelector(".thanks").style.display = "grid";
  }
});

function validateForm() {
  checkName(name, 6, 15);
  checkNumber(number, 16);
  checkMonth(month);
  checkYear(year);
  checkNumber(cvc, 3);
}

thanksBtn.addEventListener("click", () => {
  form.reset();
  document.location.reload();
});

function showError(input, value) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.classList.add("show");
  small.textContent = `${value}`;
  small.style.color = "red";
  input.style.outline = "2px solid red";
}
function showSucces(input) {
  input.style.outline = "2px solid green";
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.textContent = ``;
}

function checkName(input, min, max) {
  if (input.value.length < min) {
    showError(input, `The name entered is bellow 6 characters`);
  } else if (input.value.length > max) {
    showError(input, `The name entered is larger than 15 characters`);
  } else {
    showSucces(input);
    inputCounter++;
  }
}

function checkNumber(input, min) {
  if (input.value.length < min) {
    showError(input, `The card number is invalid`);
  } else if (input.value.length > min) {
    showError(input, `The card number is invalid`);
  } else {
    showSucces(input);
    inputCounter++;
  }
}

function checkMonth(input) {
  if (input.value.length === 2 && input.value > 0 && input.value <= 12) {
    showSucces(input);
    inputCounter++;
  } else {
    showError(input, `Invalid value entered`);
  }
}

function checkYear(input) {
  if (input.value.length === 2 && input.value >= 22 && input.value <= 99) {
    showSucces(input);
    inputCounter++;
  } else {
    showError(input, `Invalid value entered`);
  }
}

function fillFields(input, value) {
  input.addEventListener("keyup", () => {
    value.textContent = input.value;
  });
}

function fillNumber(input, value) {
  input.addEventListener("keyup", () => {
    const number = input.value.slice(0, 4);
    const number2 = input.value.slice(4, 8);
    const number3 = input.value.slice(8, 12);
    const number4 = input.value.slice(12, 17);
    console.log(number);
    value.textContent = `${number} ${number2} ${number3} ${number4}`;
  });
}
