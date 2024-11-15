document.addEventListener('DOMContentLoaded', function () {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const profileItem = document.getElementById('profile-item');
    const logoutItem = document.getElementById('logout-item');
    const logoutLink = document.getElementById('logout-link');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.isLoggedIn === true);

    function updateNavbar() {
        if (currentUser) {
            registerLink.style.display = 'none';
            loginLink.style.display = 'none';
            profileItem.style.display = 'block';
            logoutItem.style.display = 'block';
        } else {
            registerLink.style.display = 'block';
            loginLink.style.display = 'block';
            profileItem.style.display = 'none';
            logoutItem.style.display = 'none';
        }
    }

    logoutLink.addEventListener('click', function (event) {
        event.preventDefault();

        users.forEach(u => u.isLoggedIn = false);
        localStorage.setItem('users', JSON.stringify(users));

        updateNavbar();
        window.location.href = 'login.html';
    });

    updateNavbar();
});

