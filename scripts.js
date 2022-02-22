// let bookCard = document.querySelector('.card');

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Not read');
const theWar = new Book('The War', 'Alexander Wiltshire', 363, 'Read');
const theGreekWar = new Book('The Peloponessian War', 'Thucydides', 584, 'Not read');

let myLibrary = [theHobbit, theWar, theGreekWar];
let myLibraryLength = myLibrary.length;

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

const cardContainer = document.querySelector('div.card-container');

function addBookToLibraryTest(){
    for (let i = 0 ; i < myLibrary.length ; i++ ){
        console.log(myLibrary[i].title, myLibrary[i].author);
        
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        cardContainer.appendChild(bookCard);
        
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = myLibrary[i].title
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('h3');
        bookAuthor.textContent = myLibrary[i].author
        bookCard.appendChild(bookAuthor);

        const bookLength = document.createElement('h3');
        bookLength.textContent = myLibrary[i].pages + ' pages'
        bookCard.appendChild(bookLength);

        const bookRead = document.createElement('h3');
        bookRead.textContent = myLibrary[i].read
        bookCard.appendChild(bookRead);

    }
}


function addBookToLibrary(){
    for(let i = 0 ; i < myLibraryLength ; i++){

    }
}
