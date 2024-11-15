document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    function validateRegistration(username, email, password) {
        if (!username || !email || !password) {
            showError("All fields are required!");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            showError("The email you entered is not valid!");
            return false;
        }

        if (users.some(user => user.username === username)) {
            showError("Username is already taken!");
            return false;
        }

        if (users.some(user => user.email === email)) {
            showError("Email is already registered!");
            return false;
        }

        if (username.length < 3) {
            showError("Username must be at least 3 characters long!");
            return false;
        }

        if (password.length < 6) {
            showError("Password must be at least 6 characters long!");
            return false;
        }

        return true;
    }

    function validateLogin(username, password) {
        const user = users.find(user => user.username === username);
        if (!user) {
            showError("User not found!");
            return false;
        }

        if (user.password !== password) {
            showError("Incorrect password!");
            return false;
        }

        return true;
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('reg-username').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const password = document.getElementById('reg-password').value.trim();

            if (validateRegistration(username, email, password)) {
                const newUser = { 
                    username, 
                    email, 
                    password, 
                    isLoggedIn: true, 
                    currentlyReading: [], 
                    finishedBooks: []
                };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                showSuccess(`Welcome, ${username}! Registration successful.`);
                registerForm.reset();
                window.location.href = 'profile.html';
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (validateLogin(username, password)) {
                const user = users.find(user => user.username === username);
                users.forEach(u => u.isLoggedIn = false);
                user.isLoggedIn = true;
                localStorage.setItem('users', JSON.stringify(users));
                showSuccess(`Welcome back, ${username}!`);
                loginForm.reset();
                window.location.href = 'profile.html';
            }
        });
    }

    const toLogin = document.getElementById('to-login');
    const toRegister = document.getElementById('to-register');

    if (toLogin) {
        toLogin.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    if (toRegister) {
        toRegister.addEventListener('click', function () {
            window.location.href = 'register.html';
        });
    }
});
