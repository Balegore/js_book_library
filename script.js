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

function showBooks(){   //show all books in cards that have been added

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
    console.log(target);
    switch(target){
        case 'addLibrary':
            showForm();
            break;
        case 'viewLibrary':
            hideForm();
            showBooks();
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

Book('the hobbit', 'j.r.r tolkien', '200', 'no');

console.log('buttons');
console.log(myLibrary);

buttons.addEventListener('click', button => buttonPress(button.target.id))
