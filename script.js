document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    errorMessage.textContent = '';

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Invalid email address. Please enter a valid email.';
    } else if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.';
		alert('Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.')
    } else {
        alert('Successful Sign Up!');
    }
});
