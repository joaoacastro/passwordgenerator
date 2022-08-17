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

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
}

function copyPassword() {
  navigator.clipboard
    .writeText(newPassword)
    .then(() => alert("Password copied successfully! 😁"))
    .then(() => containerPassword.classList.add("hide"))
    .catch((err) => console.log("Failed to read clipboard contents: ", err));
}
