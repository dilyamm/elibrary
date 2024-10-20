document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
        document.getElementById('language').value = savedLanguage;
    }
});

document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    switch (language) {
        case 'en':
            document.getElementById('welcome-message').textContent = 'Welcome to the E-Library';
            document.getElementById('greeting').textContent = 'Your gateway to unlimited knowledge';
            document.getElementById('description').textContent = 'Welcome to our online library! Here you can find a wide variety of books, audiobooks, and educational materials available at your fingertips, anytime and anywhere. Explore thousands of titles in various genres and discover your next favorite book.';
            document.getElementById('cta-button').textContent = 'Browse Catalogue';
            document.getElementById('catalogue-description').textContent = 'Browse our extensive catalogue today and discover new worlds, ideas, and stories. Whether you\'re looking for the latest bestsellers or classic literature, we\'ve got something for everyone!';
            document.getElementById('home-link').textContent = 'Home';
            document.getElementById('catalogue-link').textContent = 'Browse Catalogue';
            document.getElementById('contact-link').textContent = 'Contact us';
            document.getElementById('utilities-link').textContent = 'Utilities';
            break;
        case 'ru':
            document.getElementById('welcome-message').textContent = 'Добро пожаловать в электронную библиотеку';
            document.getElementById('greeting').textContent = 'Ваши ворота к необъятным знаниям';
            document.getElementById('description').textContent = 'Добро пожаловать в нашу библиотеку! Здесь вы можете найти различные книги, аудиокниги и учебные материалы в один клик, всегда и везде. Исследуйте тысячи произведений любого жанра и найдите вашу следующую любимую книгу.';
            document.getElementById('cta-button').textContent = 'Просмотреть каталог';
            document.getElementById('catalogue-description').textContent = 'Просмотрите наш обширный каталог сегодня и откройте для себя новые миры, идеи и истории. Ищете ли вы последние бестселлеры или классическую литературу, у нас найдется что-то для каждого!';
            document.getElementById('home-link').textContent = 'Главная';
            document.getElementById('catalogue-link').textContent = 'Каталог';
            document.getElementById('contact-link').textContent = 'Контакты';
            document.getElementById('utilities-link').textContent = 'Утилиты';
            break;
        case 'kk':
            document.getElementById('welcome-message').textContent = 'Электрондық кітапханаға қош келдіңіз';
            document.getElementById('greeting').textContent = 'Сіздің кең білімге апаратын шлюз';
            document.getElementById('description').textContent = 'Мұнда сіз кітаптар, аудиокітаптар және оқу материалдарының кең таңдауын таба аласыз.';
            document.getElementById('cta-button').textContent = 'Каталогты қарау';
            document.getElementById('catalogue-description').textContent = 'Біздің кең каталогты бүгін қарап шығыңыз және жаңа әлемдерді, идеяларды және оқиғаларды ашыңыз. Соңғы бестселлерлерді немесе классикалық әдебиетті іздесеңіз де, бізде әркімге арналған бір нәрсе бар!';
            document.getElementById('home-link').textContent = 'Басты бет';
            document.getElementById('catalogue-link').textContent = 'Каталог';
            document.getElementById('contact-link').textContent = 'Байланыс';
            document.getElementById('utilities-link').textContent = 'Пайдалы құралдар';
            break;
        default:
            document.getElementById('welcome-message').textContent = 'Welcome to the E-Library';
            document.getElementById('greeting').textContent = 'Your gateway to unlimited knowledge';
            document.getElementById('description').textContent = 'Welcome to our online library! Here you can find a wide variety of books, audiobooks, and educational materials available at your fingertips, anytime and anywhere. Explore thousands of titles in various genres and discover your next favorite book.';
            document.getElementById('cta-button').textContent = 'Browse Catalogue';
            document.getElementById('catalogue-description').textContent = 'Browse our extensive catalogue today and discover new worlds, ideas, and stories. Whether you\'re looking for the latest bestsellers or classic literature, we\'ve got something for everyone!';
            document.getElementById('home-link').textContent = 'Home';
            document.getElementById('catalogue-link').textContent = 'Browse Catalogue';
            document.getElementById('contact-link').textContent = 'Contact us';
            document.getElementById('utilities-link').textContent = 'Utilities';
    }
}
