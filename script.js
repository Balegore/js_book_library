
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readBook = function (index) {
console.log(this.index);

}

function addBookToLibrary() {       
    const formData = new FormData(bookForm); //gets all form data
    
    myLibrary.push(new Book(formData.get('title'), 
                            formData.get('author'), 
                            formData.get('pages'),
                            formData.get('read')));
    bookForm.reset();      
}

function renderHTML(){   //loop through all books to add cards to DOM 
    let fragment = document.createDocumentFragment();

    myLibrary.forEach(book => {                                   
        const bookInfoDiv = document.createElement('div');
        const cardDiv = document.createElement('div');
        const readButton = document.createElement('button');
        const removeButton = document.createElement('button');
        const index = myLibrary.indexOf(book);

        removeButton.innerText = 'Remove Book';             
        removeButton.style = 'removeBook';    
        removeButton.onclick = () => removeBook(index);

        readButton.innerText = (book.read === false)? 'Mark Read' : 'Mark Unread';
        readButton.style = 'readBook';
        readButton.onclick = () => book.readBook(index);

        bookInfoDiv.style = 'bookInfo';  

        cardDiv.style = 'bookCard';
        cardDiv.dataset.index = index;  //set a index for dom removal for remove button    
        
        for (const key in book){                    //goes through book object to make dom nodes
            let div = bookInfoDiv.cloneNode();      //clones original book info node to be able to add multiple different nodes of text 
            div.innerText = `${key}: ${book[key]}`;
            cardDiv.appendChild(div);
        }
        cardDiv.appendChild(readButton);
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

function removeBook(index){
    bookCards.removeChild(document.querySelector(`[data-index='${index}']`));          //remove node
    myLibrary.pop(index);       //remove book from library array      
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
            renderHTML();
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

buttons.addEventListener('click', button => buttonPress(button.target.id));