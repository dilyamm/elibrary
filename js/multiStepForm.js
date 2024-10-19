document.addEventListener('DOMContentLoaded', function () {
    const steps = Array.from(document.getElementsByClassName('form-step'));
    const progressSteps = Array.from(document.getElementsByClassName('progress-step'));
    let currentStep = 0;

    function updateProgressBar(stepIndex) {
        progressSteps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index < stepIndex) {
                step.classList.add('completed');
            }
            if (index === stepIndex) {
                step.classList.add('active');
            }
        });
    }

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
                step.style.display = 'block';
                setTimeout(() => {
                    step.classList.add('show');
                }, 10);
            } else {
                step.classList.remove('show');
                step.style.display = 'none';
            }
        });
        updateProgressBar(stepIndex);
        currentStep = stepIndex;
    }

    showStep(0);

    function validateStep(stepIndex) {
        if (stepIndex === 0) {
            const name = document.getElementById('name').value.trim();
            const nameParts = name.split(" ");
            if (nameParts.length < 2 || nameParts.some(part => part === "")) {
                showError("Please enter your full name (First and Last Name)!");
                return false;
            }
        } else if (stepIndex === 1) {
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                showError("The email you entered is not valid!");
                return false;
            }
        } else if (stepIndex === 2) {
            const message = document.getElementById('message').value.trim();
            if (message.length === 0) {
                showError("Please write a message!");
                return false;
            }
        }
        return true;
    }

    document.getElementById('next-1').addEventListener('click', (event) => {
        event.preventDefault();
        if (validateStep(0)) {
            showStep(1);
        }
    });

    document.getElementById('next-2').addEventListener('click', (event) => {
        event.preventDefault();
        if (validateStep(1)) {
            showStep(2);
        }
    });

    document.getElementById('back-1').addEventListener('click', (event) => {
        event.preventDefault();
        showStep(0);
    });

    document.getElementById('back-2').addEventListener('click', (event) => {
        event.preventDefault();
        showStep(1);
    });

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateStep(2)) {
            showSuccess("Your message has been sent successfully!");
            clearForm();
            showStep(0);
        }
    });
});