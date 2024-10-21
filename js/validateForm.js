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
