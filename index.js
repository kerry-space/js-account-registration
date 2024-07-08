document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
  
    const checkPasswords = () => {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password.length >= 8 && password === confirmPassword) {
        submitButton.disabled = false;
        confirmPasswordInput.setCustomValidity('');
      } else {
        submitButton.disabled = true;
        if (password !== confirmPassword) {
          confirmPasswordInput.setCustomValidity('Passwords do not match');
        } else {
          confirmPasswordInput.setCustomValidity('');
        }
      }
    };
  
    passwordInput.addEventListener('input', checkPasswords);
    confirmPasswordInput.addEventListener('input', checkPasswords);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const registrationData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };
  
      console.log(registrationData);
      alert(JSON.stringify(registrationData, null, 2));
    });
  });