const addBookButton = document.querySelector('.add-book-button');
const controlPanel = document.querySelector('.control-panel');


let myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
};

function addBookToLibrary(array, book) {
    array.push(book);    
};


///////////////////////////////////////
///// Event Listeners
///////////////////////////////////////

addBookButton.addEventListener('click', () => {
    let form = document.createElement('form');
    controlPanel.appendChild(form);

});