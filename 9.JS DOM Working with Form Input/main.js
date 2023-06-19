function validateForm() {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  // error messages
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let confirmPasswordError = document.getElementById('confirmPasswordError');
  
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  let nameReg = /^[a-zA-Z]+$/;
  let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!nameInput.value.match(nameReg)) {
    nameError.textContent = 'Name should contain only letters.';
    return;
  }

  if (!emailInput.value.match(emailReg)) {
    emailError.textContent = 'Invalid email address.';
    return;
  }

  if (!passwordInput.value.match(passwordError)) {
    passwordError.textContent = 'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Confirm Password does not match Password.';
    return;
  }

  // Form is valid, do further processing or submission
  alert('Form submitted successfully!');
}       
