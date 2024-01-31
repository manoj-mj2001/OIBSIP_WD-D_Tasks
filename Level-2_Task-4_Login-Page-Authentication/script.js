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

const passwordField = document.getElementById('password');
const togglePassword = document.querySelector('.password-toggle-icon i');

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
