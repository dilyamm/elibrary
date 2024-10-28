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

let allBooks = [...books];

function displayBooks(filteredBooks) {
    const bookContainer = document.getElementsByClassName('book-container')[0];
    bookContainer.innerHTML = '';
    filteredBooks.forEach(book => {
        const shortDescription = book.description.length > 100 
            ? book.description.substring(0, 100) + '...' 
            : book.description;
        
        const bookCard = `
            <div class="book-section card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h4 class="card-title">${book.title}</h4>
                    <p class="card-title">${book.author}</p>
                    <p class="card-text">${shortDescription}</p>
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

        readMoreButtons();
    });
}

function readMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const bookDetails = this.nextElementSibling;
            
            if (bookDetails.style.display === "none") {
                bookDetails.style.display = "block";
                this.textContent = "Read Less";
            } else {
                bookDetails.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
}

async function loadAPIBooks() {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=fiction`);
        const data = await response.json();

        const apiBooks = data.docs.slice(0, 10).map(doc => {
            return new Book(
                doc.title || 'Unknown Title',
                doc.author_name ? doc.author_name.join(', ') : 'Unknown Author',
                doc.first_sentence ? doc.first_sentence.join(' ') : 'No description available.',
                doc.first_publish_year || 'Unknown Year',
                doc.subject && Array.isArray(doc.subject) ? doc.subject.slice(0, 5).join(', ') : '',
                doc.number_of_pages_median || 'Unknown Pages',
                doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : 'images/default-cover.jpg'
            );
        });

        allBooks = allBooks.concat(apiBooks);
        displayBooks(allBooks);
    } catch (error) {
        console.error("Error loading API books: ", error);
    }
}

function filterBooks() {
    const genreSelect = document.getElementById('genres').value.toLowerCase();
    const authorInput = document.getElementById('search-author').value.toLowerCase();
    const titleInput = document.getElementById('search-title').value.toLowerCase();

    const filteredBooks = allBooks.filter(book => {
        const matchesGenre = genreSelect === 'all' || book.genre.toLowerCase().includes(genreSelect);
        const matchesAuthor = book.author.toLowerCase().includes(authorInput);
        const matchesTitle = book.title.toLowerCase().includes(titleInput);

        return matchesGenre && matchesAuthor && matchesTitle;
    });

    displayBooks(filteredBooks);
}

document.addEventListener('DOMContentLoaded', function() {
    loadAPIBooks();

    document.querySelectorAll('.search-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            filterBooks();
        });
    });
});