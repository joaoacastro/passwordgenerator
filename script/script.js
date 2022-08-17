let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let letters = document.querySelector("#letters");
let numbers = document.querySelector("#numbers");
let specialCharacters = document.querySelector("#specialCharacters");

let charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetLowerCase = "abcdefghijklmnopqrstuvwxyz";
let charsetSpecialCharacters = "!@#$%¨&*.-";
let charsetNumbers = "0123456789";

let charset =
  charsetUpperCase +
  charsetLowerCase +
  charsetSpecialCharacters +
  charsetNumbers;

let charsetLetters = charsetUpperCase + charsetLowerCase;
let charsetLettersAndNumbers = charsetLetters + charsetNumbers;
let charsetLettersAndSpecialCharacters =
  charsetLetters + charsetSpecialCharacters;
let charsetNumbersAndSpecialCharacters = charsetNumbers + charsetSpecialCharacters;

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  if (letters.checked) {
    let pass = "";
    for (let i = 0, n = charsetLetters.length; i < sliderElement.value; ++i) {
      pass += charsetLetters.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (numbers.checked) {
    let pass = "";
    for (let i = 0, n = charsetNumbers.length; i < sliderElement.value; ++i) {
      pass += charsetNumbers.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (specialCharacters.checked) {
    let pass = "";
    for (
      let i = 0, n = charsetSpecialCharacters.length;
      i < sliderElement.value;
      ++i
    ) {
      pass += charsetSpecialCharacters.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (letters.checked && numbers.checked) {
    let pass = "";
    for (
      let i = 0, n = charsetLettersAndNumbers.length;
      i < sliderElement.value;
      ++i
    ) {
      pass += charsetLettersAndNumbers.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (letters.checked && specialCharacters.checked) {
    let pass = "";
    for (
      let i = 0, n = charsetLettersAndSpecialCharacters.length;
      i < sliderElement.value;
      ++i
    ) {
      pass += charsetLettersAndSpecialCharacters.charAt(
        Math.floor(Math.random() * n)
      );
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (numbers.checked && specialCharacters.checked) {
    let pass = "";
    for (
      let i = 0, n = charsetNumbersAndSpecialCharacters.length;
      i < sliderElement.value;
      ++i
    ) {
      pass += charsetNumbersAndSpecialCharacters.charAt(
        Math.floor(Math.random() * n)
      );
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }

  if (letters.checked && numbers.checked && specialCharacters.checked) {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
  }
  if (!letters.checked && !numbers.checked && !specialCharacters.checked) {
    alert("Please select some of the items! 🤔")
  }
}

function copyPassword() {
  navigator.clipboard
    .writeText(newPassword)
    .then(() => alert("Password copied successfully! 😁"))
    .then(() => containerPassword.classList.add("hide"))
    .catch((err) => console.log("Failed to read clipboard contents: ", err));
}