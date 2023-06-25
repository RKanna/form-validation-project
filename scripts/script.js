"use strict";

//Assigning input and output variables
const formElement = document.getElementById(`form`);
const userNameElement = document.getElementById(`username`);
const emailElement = document.getElementById(`email`);
const passwordElement = document.getElementById(`password`);
const confirmPassEl = document.getElementById(`confirm-password`);
const errorConfirmPass = document.getElementById(`passError-confirm`);
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
  document.getElementById('passError-confirm').textContent = "";
  userNameElement.classList.remove('userID');
  userNameElement.classList.remove('userIDGreen');
  emailElement.classList.remove('emailID');
  emailElement.classList.remove('emailIDGreen');
  passwordElement.classList.remove('passCode');
  passwordElement.classList.remove('passCodeGreen');


  





  if (!username) {
    document.getElementById(
      `error-username`
    ).textContent = `Username is mandatory`;
    userNameElement.classList.add('userID');
  } else if (username.length < 5) {
    document.getElementById(
      `error-username`
    ).textContent = `Username must contain 5 or more characters`;
    userNameElement.classList.add('userID');
  } else if (username.length > 12) {
    document.getElementById(
      `error-username`
    ).textContent = `Username cannot exceed 12 characters`;
    userNameElement.classList.add('userID');
  } else if (/[@#_]/.test(username)) {
    document.getElementById(
      `error-username`
    ).textContent = `Special characters not allowed`;
    userNameElement.classList.add('userID');
  } else if (isNaN(username) === false) {
    document.getElementById(
      `error-username`
    ).textContent = `Numbers not allowed`;
    userNameElement.classList.add('userID');
  } else {
    userNameElement.classList.add('userIDGreen');
  }

  if (!email) {
    document.getElementById(`error-email`).textContent = `Email is mandatory`;
    emailElement.classList.add('emailID');
  } else if (!isEmailAddress(email)) {
    document.getElementById(
      `error-email`
    ).textContent = `Incorrect Email Format`;
    emailElement.classList.add('emailID');
  } else {
    emailElement.classList.add('emailIDGreen');
  }

  if (!password) {
    document.getElementById(
      `error-password`
    ).textContent = `Password is mandatory`;
    passwordElement.classList.add('passCode');
  } else if (password.length < 8) {
    document.getElementById(
      `error-password`
    ).textContent = `Password must contain 8 or more characters`;
    passwordElement.classList.add('passCode');
  } else if (password.length > 16) {
    document.getElementById(
      `error-password`
    ).textContent = `Password cannot exceed 16 characters`;
    passwordElement.classList.add('passCode');
  } else {
    passwordElement.classList.add('passCodeGreen');
  }




  if (!confirmPassEl.value) {
    errorConfirmPass.textContent = 'Confirm Password is Mandotory';
    
    
  } else if(confirmPassEl.value == passwordElement.value) {
    document.getElementById('passError-confirm').textContent = 'Success';
  } else if(confirmPassEl.value !== passwordElement.value) {
    errorConfirmPass.textContent = 'Password Mismatch';
  }
});
