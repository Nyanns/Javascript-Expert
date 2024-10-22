// Constructor function for creating new Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Method to get book information
    this.myInfo = function () {
        return `${this.title} by ${this.author} has ${this.pages} pages and is ${this.read}`;
    };
}

// Create new Book objects
const book1 = new Book("The Hobbit", "JRR Tolkien", 295, "unread");
const book2 = new Book("The Lord of the Rings", "JRR Tolkien", 500, "read");
const book3 = new Book("The Catcher in the Rye", "JRR Tolkien", 320, "unread");

// Function to display book info in HTML
function displayBookInfo(book, elementId) {
    const bookElement = document.getElementById(elementId);
    bookElement.querySelector('.book-title').textContent = book.title;
    bookElement.querySelector('.book-author').textContent = `by ${book.author}`;
    bookElement.querySelector('.book-pages').textContent = `${book.pages} pages`;

    // Set status class and text based on read status
    const statusElement = bookElement.querySelector('.book-status');
    if (book.read === 'read') {
        statusElement.textContent = 'Status: Read';
        statusElement.classList.add('book-read-status');
    } else {
        statusElement.textContent = 'Status: Unread';
        statusElement.classList.add('book-unread-status');
    }
}

// Display book info on the page
displayBookInfo(book1, 'book1');
displayBookInfo(book2, 'book2');
displayBookInfo(book3, 'book3');