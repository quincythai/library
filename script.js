const libraryDiv = document.getElementById('library');
const addBookButton = document.getElementById('add-book-button');

let bookObj1 = new Book("Sin-Leqi-Unninni", "The Epic of Gilgamesh", 128, false);
let bookObj2 = new Book("Jane Austen", "Pride and Prejudice", 279, true);
let bookObj3 = new Book("George Orwell", "1984", 328, true);

let myLibrary = [bookObj1, bookObj2, bookObj3];
// length = myLibrary.size


// Object constructor
function Book(author, title, numPages, completed) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.completed = Boolean(completed);
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
    displayLibrary();
}

// loops through library and displays each book in a table or "card"
function displayLibrary() {
    // First, clear library div
    libraryDiv.innerHTML = "";

    myLibrary.forEach(book => {
        let card = document.createElement('div'); // card container
        card.classList.add('book-card'); // add class 'book-card' with predefined style in stylesheet

        let title = document.createElement('h4');
        title.textContent = book.title;

        let author = document.createElement('p');
        author.textContent = `By: ${book.author}`;
        // notice we're altering textContent
        // equivalent to <p>Pages: ###</p>

        let numPages = document.createElement('p');
        numPages.textContent = `Number of Pages: ${book.numPages}`; 

        let completed = document.createElement('p');
        completed.textContent = `Completed: ${book.completed}`;

        // Attach all our html elements to the card
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(numPages);
        card.appendChild(completed)

        // Finally, add the entire completed card to the libraryContainer
        libraryDiv.appendChild(card);
    });
}

/* On load up, display the library */
document.addEventListener('DOMContentLoaded', displayLibrary);

/* On click, prompts form asking for title, author, pages, completed to create an object. Then, we must push this object to our myLibrary array */

const bookFormDialog = document.getElementById('book-form-dialog');

// .showModal will display dialog (the interactive component popup)
addBookButton.addEventListener('click', () => {
    bookFormDialog.showModal();
});
const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', (event) => {
    event.preventDefault(); // don't want to submit the form, instead want to create an object with it
    
    const author = document.getElementById('book_author').value;
    const title = document.getElementById('book_title').value;
    const numPages = document.getElementById('book_num_pages').value;
    const bookCompleted = document.getElementById('book_isCompleted').value;

    const book = new Book(author, title, numPages, bookCompleted);
    addBookToLibrary(book);

    bookFormDialog.close();
})