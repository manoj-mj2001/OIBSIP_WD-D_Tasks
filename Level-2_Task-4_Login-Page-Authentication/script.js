async function Login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users'));

  if (
    users.some((item) => item.name === username) ||
    users.some((item) => item.email === username)
  ) {
    const userIndex =
      users.findIndex((item) => item.name === username) ||
      users.findIndex((item) => item.email === username);
    const user = users[userIndex];

    try {
      if (await authenticateLogin(user.hashedPassword, password)) {
        alert('Login Successful..!');
        window.location.reload();
      } else {
        alert('Incorrect E-mail or Password..!');
        window.location.reload();
      }
    } catch (error) {
      alert('Error during Login..!');
    }
  } else {
    alert('User not found..!');
    window.location.reload();
  }
}

async function authenticateLogin(saved_password, password) {
  const inputPass = await hashData(password);
  return inputPass === saved_password ? true : false;
}

async function registerForm(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;

  if (password !== confirmpassword) {
    return alert('Password and Confirm Password must be Same..!');
  }
  const hashedPassword = await hashData(password);
  if (!localStorage.getItem('users')) {
    localStorage.setItem(
      'users',
      JSON.stringify([{ name, email, hashedPassword }])
    );
  } else {
    const users = JSON.parse(localStorage.getItem('users'));
    if (
      users.some((item) => item.name === name) ||
      users.some((item) => item.email === email)
    ) {
      alert('User already existed..!');
      return window.location.reload();
    } else {
      users.push({ name, email, hashedPassword });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registered Successfully..!...Go to Login Page');
      return window.location.reload();
    }
  }
}

async function hashData(data) {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);

  const hashedData = Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

  return hashedData;
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
