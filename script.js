function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {       
    const formData = new FormData(bookForm); //gets all form data
    
    myLibrary.push(new Book(formData.get('title'), 
                            formData.get('author'), 
                            formData.get('pages'),
                            formData.get('read')));
    bookForm.reset();      
}

function addCard(){   //loop through all books to add cards to DOM 
    let fragment = document.createDocumentFragment();

    myLibrary.forEach(book => {                                   
        let bookInfoDiv = document.createElement('div');
        let cardDiv = document.createElement('div');
        let removeButton = document.createElement('button');

        removeButton.innerText = "Remove Book";             
        removeButton.style = "removeBook";
        
        bookInfoDiv.style = ('bookInfo');         
        cardDiv.style = ('bookCard');
        
        for (const key in book){
            let div = bookInfoDiv.cloneNode();
            div.innerText = `${key}: ${book[key]}`;
            cardDiv.appendChild(div);
        }

        cardDiv.appendChild(removeButton);
        fragment.appendChild(cardDiv);
    });
    
    bookCards.appendChild(fragment);        
}    
function clearLibraryCards(){    
    
    while (bookCards.firstChild) {
        bookCards.removeChild(bookCards.firstChild);
}

}

function removeBook(){ //take away any shown books
}


function readStatus(){ //change read status on books in libary

}

function showForm(){ 
    bookForm.style.display = "block";
}

function hideForm(){ 
    bookForm.style.display = "none";   
}

function buttonPress(target){
    switch(target){
        case 'addLibrary':
            clearLibraryCards();
            showForm();
            break;
        case 'viewLibrary':
            hideForm();
            addCard();
            break;
        case 'addBook':
            addBookToLibrary();
            break;
        default:    //shouldn't happen.. do nothing
            break; 
    }               
   
}

let myLibrary = new Array;

const bookForm = document.querySelector('#bookForm');
const buttons = document.querySelector('body');
const bookCards = document.querySelector('#bookContainer');


console.log('buttons');
console.log(myLibrary);

buttons.addEventListener('click', button => buttonPress(button.target.id))
