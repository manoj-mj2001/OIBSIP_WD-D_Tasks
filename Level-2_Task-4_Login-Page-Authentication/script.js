// import fs from 'fs';
// const fs = require('fs');

function authenticateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var validUsername = 'admin';
  var validPassword = 'admin@123';

  if (username === validUsername && password === validPassword) {
    alert('Login Successful..!');
  } else {
    alert('Invalid Username or Password. Please try again..!');
  }
}

function registerForm(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;

  const user = fetch('user.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  if (password !== confirmpassword) {
    return alert('Password and Confirm Password Must Be Same..!');
  }

  if (
    user.length &&
    user.some((user) => user.username === usernameToCheck).length !== 0
  ) {
    return alert('User already registered..!');
  }

  const data = {
    name,
    email,
    password,
  };
  user.push(data);
}

const passwordField = document.getElementById('password');
const confirmpasswordField = document.getElementById('confirmpassword');
const togglePassword = document.querySelector('.password-toggle-icon i');
const toggleconfirmPassword = document.querySelector(
  '.confirmpassword-toggle-icon i'
);

togglePassword.addEventListener('click', function () {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  } else {
    passwordField.type = 'password';
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  }
});

toggleconfirmPassword.addEventListener('click', function () {
  if (confirmpasswordField.type === 'password') {
    confirmpasswordField.type = 'text';
    toggleconfirmPassword.classList.remove('fa-eye-slash');
    toggleconfirmPassword.classList.add('fa-eye');
  } else {
    confirmpasswordField.type = 'password';
    toggleconfirmPassword.classList.remove('fa-eye');
    toggleconfirmPassword.classList.add('fa-eye-slash');
  }
});
