class Book {
    constructor(title, author, description, year, genre, pages, image) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.image = image;
    }
}

const books = [
    new Book("A Little Life", "Hanya Yanagihara", "Four college friends from a small Massachusetts school move to New York, driven by ambition and their deep bond, despite having little direction or money. At the heart of it all is Jude—brilliant yet deeply scarred by a traumatic past.", 2015, "Fiction, Contemporary, Mental Health", 720, "images/alittlelife.jpg"),
    new Book("The Bell Jar", "Sylvia Plath", "The Bell Jar chronicles the mental breakdown of Esther Greenwood: a young, brilliant woman who struggles with her identity and society's expectations.", 1963, "Fiction, Semi-Autobiographical", 294, "images/thebelljar.jpg"),
    new Book("Schoolgirl", "Osamu Dazai", "Osamu Dazai's novella explores a day in the life of a Tokyo schoolgirl, renowned for its ironic language and its depiction of an individual's struggle against societal norms.", 1939, "Fiction, Classics, Novella", 103, "images/schoolgirl.jpg")
];

function displayBooks(filteredBooks) {
    const bookContainer = document.getElementsByClassName('book-container')[0];
    bookContainer.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookCard = `
            <div class="book-section card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h4 class="card-title">${book.title}</h4>
                    <p class="card-title">${book.author}</p>
                    <p class="card-text">${book.description}</p>
                    <a href="${book.title}.html" class="btn">Open book page</a>
                    <button class="btn read-more-btn">Read More</button>

                    <div class="book-details" style="display: none;">
                        <p>Publication Year: ${book.year}</p>
                        <p>Genre: ${book.genre}</p>
                        <p>Pages: ${book.pages}</p>
                    </div>
                </div>
            </div>
        `;
        bookContainer.innerHTML += bookCard;
    });
}

function filterBooks() {
    const genreSelect = document.getElementById('genres').value.toLowerCase();
    const authorInput = document.getElementById('search-author').value.toLowerCase();
    const titleInput = document.getElementById('search-title').value.toLowerCase();

    const filteredBooks = books.filter(book => {
        const matchesGenre = genreSelect === 'all' || book.genre.toLowerCase().includes(genreSelect);
        const matchesAuthor = book.author.toLowerCase().includes(authorInput);
        const matchesTitle = book.title.toLowerCase().includes(titleInput);

        return matchesGenre && matchesAuthor && matchesTitle;
    });

    displayBooks(filteredBooks);
}

document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);

    document.querySelectorAll('.genre-select').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            filterBooks();
            console.log(1);
        });
    });

    document.getElementById('genres').addEventListener('change', filterBooks);
    document.querySelector('.search-author').addEventListener('input', filterBooks);
    document.querySelector('.search-title').addEventListener('input', filterBooks);
});