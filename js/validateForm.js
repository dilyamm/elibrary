function showError(message) {
    const errorMessageContainer = document.getElementById('error-message-container');
    const errorMessage = document.getElementById('error-message');
    const errorTimer = document.querySelector('.error-timer');

    errorMessage.textContent = message;
    errorMessageContainer.style.display = 'block';
    errorTimer.style.width = '100%';
    
    setTimeout(() => {
        errorTimer.style.width = '0';
    }, 100);
    
    setTimeout(() => {
        errorMessageContainer.style.display = 'none';
    }, 2000);
}

function showSuccess(message) {
    const successMessageContainer = document.getElementById('success-message-container');
    const successMessage = document.getElementById('success-message');
    const successTimer = document.querySelector('.success-timer');

    successMessage.textContent = message;
    successMessageContainer.style.display = 'block';
    successTimer.style.width = '100%';
    
    setTimeout(() => {
        successTimer.style.width = '0';
    }, 100);
    
    setTimeout(() => {
        successMessageContainer.style.display = 'none';
    }, 2000);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessageContainer = document.getElementById('error-message-container');
    
    errorMessageContainer.style.display = 'none';

    var nameParts = name.split(" ");
    if (nameParts.length < 2 || nameParts.some(part => part === "")) {
        showError("Please enter your full name (First and Last Name)!");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError("The email you entered is not valid!");
        return false;
    }

    if (message.length === 0) {
        showError("Please write a message!");
        return false;
    }

    showSuccess("Your message has been sent successfully!");

    clearForm();
    
    return true;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
});
