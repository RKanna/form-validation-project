"use strict";

//Assigning input and output variables
const formElement = document.getElementById(`form`);
const userNameElement = document.getElementById(`username`);
const emailElement = document.getElementById(`email`);
const passwordElement = document.getElementById(`password`);
//Assigning input and output variables button
const buttonElement = document.getElementById(`btn`);
//functions
function isEmailAddress(str) {
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(str); // returns a boolean
}
isEmailAddress();

// btn.addEventListener("click", () => {
//   document.getElementById("form").reset();
// });

//eventListeners

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = userNameElement.value.trim();
  const email = emailElement.value.trim();
  const password = passwordElement.value.trim();
  document.getElementById(`error-username`).textContent = "";
  document.getElementById(`error-email`).textContent = "";
  document.getElementById(`error-password`).textContent = "";
  if (!username) {
    document.getElementById(
      `error-username`
    ).textContent = `Username is mandatory`;
  } else if (username.length < 5) {
    document.getElementById(
      `error-username`
    ).textContent = `Username must contain 5 or more characters`;
  } else if (username.length > 12) {
    document.getElementById(
      `error-username`
    ).textContent = `Username cannot exceed 12 characters`;
  } else if (/[@#_]/.test(username)) {
    document.getElementById(
      `error-username`
    ).textContent = `Special characters not allowed`;
  } else if (isNaN(username) === false) {
    document.getElementById(
      `error-username`
    ).textContent = `Numbers not allowed`;
  }

  if (!email) {
    document.getElementById(`error-email`).textContent = `Email is mandatory`;
  } else if (!isEmailAddress(email)) {
    document.getElementById(
      `error-email`
    ).textContent = `Incorrect Email Format`;
  }

  if (!password) {
    document.getElementById(
      `error-password`
    ).textContent = `Password is mandatory`;
  } else if (password.length < 8) {
    document.getElementById(
      `error-password`
    ).textContent = `Password must contain 8 or more characters`;
  } else if (password.length > 16) {
    document.getElementById(
      `error-password`
    ).textContent = `Password cannot exceed 16 characters`;
  }
});