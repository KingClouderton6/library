// let bookCard = document.querySelector('.card');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.book-info');
let read = document.querySelector('.book-read');

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Not read');

let myLibrary = [theHobbit];
let myLibraryLength = myLibrary.length;

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

const cardContainer = document.querySelector('div.card-container');

function addBookToLibraryTest(){
    const bookCard = document.createElement('div');
    bookCard.classList.add('card');
    cardContainer.appendChild(bookCard);
}

function addContentToCard(){

}

function addBookToLibrary(){
    for(let i = 0 ; i < myLibraryLength ; i++){

    }
}
