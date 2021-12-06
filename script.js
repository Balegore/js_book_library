
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readBook = function (index) {
    const card = document.querySelector(`[data-index="${index}"]`);                    
    const listRead = card.querySelector(`[data-id="read"]`);
    const buttonRead = card.querySelector(`.readBook`);
    this.read = !this.read;

    listRead.innerText = (this.read === true)? 'Read: Yes': 'Read: No';
    buttonRead.innerText = (this.read === true)? 'Mark as Unread': 'Mark as Read';

}

function addBookToLibrary() {       
    const formData = new FormData(bookForm); //gets all form data
    
    myLibrary.push(new Book(formData.get('title'), 
                            formData.get('author'), 
                            formData.get('pages'),
                            formData.get('read')));
    bookForm.reset();      
}

function createCardHTML(book){
    let read = (book.read === true)? 'Yes': 'No';
    let html =`
            <ul style="listCard">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li data-id="read">Read: ${read}</li>
            </ul>        
            `
    return html;
}

function renderCardHTML(){   //loop through all books to add cards to DOM 
    let fragment = document.createDocumentFragment();

    myLibrary.forEach(book => {                                   
        const index = myLibrary.indexOf(book); //used to match array index to div amd buttons
        const bookInfoDiv = document.createElement('div');
        const cardDiv = document.createElement('div');
        const readButton = document.createElement('button');
        const removeButton = document.createElement('button');

        removeButton.innerText = "Remove Book";             
        removeButton.className = "removeBook";    
        removeButton.onclick = () => removeBook(index);

        readButton.innerText = (book.read === false)? 'Mark Read' : 'Mark Unread';
        readButton.className = "readBook";
        readButton.onclick = () => book.readBook(index);

        bookInfoDiv.innerHTML = createCardHTML(book);

        cardDiv.className = "bookCard";
        cardDiv.dataset.index = index;   
        
        cardDiv.appendChild(bookInfoDiv);
        cardDiv.appendChild(readButton);
        cardDiv.appendChild(removeButton);            
        fragment.appendChild(cardDiv);
    });  
    bookCards.appendChild(fragment);
}   

function clearCardHTML(){    
    
    while (bookCards.firstChild) {
        bookCards.removeChild(bookCards.firstChild);
    }

}

function removeBook(index){
    myLibrary.splice(index, 1);       //remove book from library array
    clearCardHTML();         
    renderCardHTML();
}



function showForm(){
    //bookForm.style.display = 'block';
    bookForm.parentElement.style.display = 'block';
}

function hideForm(){ 
   // bookForm.style.display = 'hidden';
    bookForm.parentElement.style.display = 'none';
}

function buttonPress(target){
    switch(target){
        case 'addLibrary':
            clearCardHTML();
            showForm();
            break;
        case 'viewLibrary':
            hideForm();
            clearCardHTML();
            renderCardHTML();
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


buttons.addEventListener('click', button => buttonPress(button.target.id));

myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', '100', true));

console.log('buttons');
console.log(myLibrary);
