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
        card.setAttribute('id', 'card' + book);

        let cardContentTitle = document.createElement('h3');
        let cardContentAuthor = document.createElement('p');
        let cardContentPages = document.createElement('p');
        let cardContentRead = document.createElement('p');
        let trashIcon = document.createElement('img');



        trashIcon.setAttribute('src', './icons8-square-30.png');
        trashIcon.classList.add('trash');

        trashIcon.addEventListener('click', () => {
            myLibrary.splice(book, 1);
            displayLibrary(myLibrary);
        });

        
        mainContent.appendChild(card);
        card.appendChild(trashIcon);
        card.appendChild(cardContentTitle);
        card.appendChild(cardContentAuthor);
        card.appendChild(cardContentPages);
        card.appendChild(cardContentRead);
        cardContentTitle.textContent = `${library[book].title}`;
        cardContentAuthor.textContent = `${library[book].author}`;
        cardContentPages.textContent = `${library[book].pages} pages`;

        cardContentRead.classList.add('read');

        if (library[book].read) {
            cardContentRead.textContent = 'Read';
            cardContentRead.classList.add('yes-read');
        } else {
            cardContentRead.textContent = 'Not Read';
            cardContentRead.classList.add('not-read');
        };

        cardContentRead.addEventListener('click', () => {
            if (cardContentRead.classList.contains('yes-read')) {
                cardContentRead.classList.remove('yes-read');
                cardContentRead.classList.add('not-read');
                cardContentRead.textContent = 'Not Read';
            } else {
                cardContentRead.classList.remove('not-read');
                cardContentRead.classList.add('yes-read');
                cardContentRead.textContent = 'Read';
            };
        });

        

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