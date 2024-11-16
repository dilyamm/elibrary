document.addEventListener('DOMContentLoaded', function () {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.isLoggedIn === true);
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('current-username').value = currentUser.username;
    document.getElementById('current-email').value = currentUser.email;

    function renderBooks() {
        const readingContainer = document.getElementById('currently-reading');
        const finishedContainer = document.getElementById('finished-books');

        readingContainer.innerHTML = '<h3>Currently Reading</h3>';
        finishedContainer.innerHTML = '<h3>Finished Books</h3>';

        if (currentUser.currentlyReading.length == 0) {
            readingContainer.innerHTML += '<p id="reading-empty">No books yet!</p>';
        } else {
            currentUser.currentlyReading.forEach((book, index) => {
                const bookElement = createBookElement(book, 'currentlyReading', index);
                readingContainer.appendChild(bookElement);
            });
        }

        if (currentUser.finishedBooks.length == 0) {
            finishedContainer.innerHTML += '<p id="finished-empty">No books yet!</p>';
        } else {
            currentUser.finishedBooks.forEach((book, index) => {
                const bookElement = createBookElement(book, 'finishedBooks', index);
                finishedContainer.appendChild(bookElement);
            });
        }
    }

    function createBookElement(book, type, index) {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';
        bookElement.draggable = true;
        bookElement.textContent = book;
        bookElement.dataset.type = type;
        bookElement.dataset.index = index;

        bookElement.addEventListener('dragstart', handleDragStart);
        return bookElement;
    }

    let draggedBook = null;

    function handleDragStart(event) {
        draggedBook = event.target;
    }

    function handleDrop(event) {
        event.preventDefault();

        const targetContainer = event.target.closest('.book-area');
        if (!targetContainer || !draggedBook) return;

        const sourceType = draggedBook.dataset.type;
        const targetType = targetContainer.id === 'currently-reading' ? 'currentlyReading' : 'finishedBooks';

        if (sourceType === targetType) return;

        const sourceArray = currentUser[sourceType];
        const targetArray = currentUser[targetType];
        const bookIndex = draggedBook.dataset.index;

        const [movedBook] = sourceArray.splice(bookIndex, 1);
        targetArray.push(movedBook);

        localStorage.setItem('users', JSON.stringify(users));
        renderBooks();
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    const deleteArea = document.getElementById('delete-area');

deleteArea.addEventListener('dragover', function (event) {
    event.preventDefault();
    deleteArea.classList.add('drag-over');
});

deleteArea.addEventListener('dragleave', function () {
    deleteArea.classList.remove('drag-over');
});

deleteArea.addEventListener('drop', function (event) {
    event.preventDefault();
    deleteArea.classList.remove('drag-over');

    if (!draggedBook) return;

    const sourceType = draggedBook.dataset.type;
    const sourceArray = currentUser[sourceType];
    const bookIndex = draggedBook.dataset.index;

    sourceArray.splice(bookIndex, 1);

    localStorage.setItem('users', JSON.stringify(users));

    renderBooks();
    showSuccess("Book removed successfully!");
});

    document.getElementById('currently-reading').addEventListener('dragover', handleDragOver);
    document.getElementById('currently-reading').addEventListener('drop', handleDrop);
    document.getElementById('finished-books').addEventListener('dragover', handleDragOver);
    document.getElementById('finished-books').addEventListener('drop', handleDrop);

    renderBooks();

    document.getElementById('update-profile-btn').addEventListener('click', function () {
        const newUsername = document.getElementById('new-username').value.trim();
        const newEmail = document.getElementById('new-email').value.trim();

        if (newUsername || newEmail) {
            if (newUsername) currentUser.username = newUsername;
            if (newEmail) currentUser.email = newEmail;

            localStorage.setItem('users', JSON.stringify(users));

            showSuccess("Profile updated successfully!");
            window.location.reload();
        } else {
            showError("Please provide new information to update");
        }
    });

    document.getElementById('change-password-btn').addEventListener('click', function () {
        const oldPassword = document.getElementById('old-password').value.trim();
        const newPassword = document.getElementById('new-password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (oldPassword !== currentUser.password) {
            showError("Old password is incorrect!");
            return;
        }

        if (newPassword !== confirmPassword) {
            showError("New passwords do not match!");
            return;
        }

        if (newPassword.length < 6) {
            showError("Password must be at least 6 characters long!");
            return;
        }

        currentUser.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));

        showSuccess("Password updated successfully!");
        window.location.reload();
    });

    document.getElementById('logout-btn').addEventListener('click', function () {
        users.forEach(u => u.isLoggedIn = false);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';
    });

    
});
