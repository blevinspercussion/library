const addBookButton = document.querySelector('.add-book-button');
const controlPanel = document.querySelector('.control-panel');

const mainContent = document.querySelector('.main-content');


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

function displayLibrary(library) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.remove();
    });

    for (let book in library) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardContentTitle = document.createElement('h3');
        let cardContentAuthor = document.createElement('p');
        let cardContentPages = document.createElement('p');
        let cardContentRead = document.createElement('p');

        mainContent.appendChild(card);
        card.appendChild(cardContentTitle);
        card.appendChild(cardContentAuthor);
        card.appendChild(cardContentPages);
        cardContentTitle.textContent = `${library[book].title}`;
        cardContentAuthor.textContent = `${library[book].author}`;
        cardContentPages.textContent = `${library[book].pages} pages`;
        


    };
};


///////////////////////////////////////
///// Event Listeners
///////////////////////////////////////

addBookButton.addEventListener('click', () => {
    addBookButton.remove();

    let form = document.createElement('form');

    let titleLabel = document.createElement('label'); 
    let titleInput = document.createElement('input');
    let authorLabel = document.createElement('label');
    let authorInput = document.createElement('input');
    let pagesLabel = document.createElement('label');
    let pagesInput = document.createElement('input');
    let readLabel = document.createElement('label');
    let readInput = document.createElement('input')
    let bookSubmit = document.createElement('button');

    controlPanel.appendChild(form);
    form.setAttribute('onsubmit', 'return false');

    form.appendChild(titleLabel);
    titleLabel.textContent = 'Title: ';
    form.appendChild(titleInput);

    form.appendChild(authorLabel);
    authorLabel.textContent = 'Author: ';
    form.appendChild(authorInput);

    pagesInput.setAttribute('type', 'number');
    form.appendChild(pagesLabel);
    pagesLabel.textContent = 'Pages: '
    form.appendChild(pagesInput);

    readInput.setAttribute('type', 'checkbox');
    form.appendChild(readLabel);
    readLabel.textContent = 'Read: ';
    form.appendChild(readInput);

    form.appendChild(bookSubmit);
    bookSubmit.textContent = "Submit";

    if (readInput) {
        read = "read";
    } else {
        read = "not read yet";
    }




    bookSubmit.addEventListener('click', () => {
        let book = new Book (
            titleInput.value,
            authorInput.value,
            pagesInput.value,
            readInput.checked
        );
        addBookToLibrary(myLibrary, book);
        // console.log(book);
        // console.log(myLibrary);
        // form.remove();
        // controlPanel.appendChild(addBookButton);
        displayLibrary(myLibrary);
        form.reset();
    });

});