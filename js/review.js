document.addEventListener('DOMContentLoaded', function() {
    // Функция для отображения отзывов на странице
    function displayReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const actionButtons = document.querySelector('.action-buttons');
        
        reviews.forEach(review => {
            const newReviewDiv = document.createElement('div');
            newReviewDiv.classList.add('review');
            newReviewDiv.innerHTML = `<p><strong>${review.name}:</strong> "${review.text}"</p>`;
            actionButtons.parentNode.insertBefore(newReviewDiv, actionButtons);
        });
    }

    // Вызываем функцию для отображения отзывов при загрузке страницы
    displayReviews();

    document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const reviewText = document.getElementById('review').value.trim();

        if (!name || !reviewText) {
            alert('Please fill in all fields.');
            return;
        }

        // Создаем новый элемент для отзыва
        const newReviewDiv = document.createElement('div');
        newReviewDiv.classList.add('review');
        newReviewDiv.innerHTML = `<p><strong>${name}:</strong> "${reviewText}"</p>`;

        // Вставляем новый отзыв перед блоком с кнопками
        const actionButtons = document.querySelector('.action-buttons');
        actionButtons.parentNode.insertBefore(newReviewDiv, actionButtons);

        // Сохраняем отзыв в LocalStorage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({ name: name, text: reviewText });
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Очищаем форму после отправки
        this.reset();
    });
});
