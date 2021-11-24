function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() { //add books via inputs

}

function showBooks(){   //show all books in cards that have been added

}

function removeBook(){ //take away any shown books

}

function readStatus(){ //change read status on books in libary

}

function createForm(){ //create form
    const formMarkup = `
    <form onsubmit="return false">
        <ul>                
            <li>
                <label for="formTitle">Title</label>
                <input id="formTitle" required>
            </li>
            
            <li>
                <label for="formAuthor">Author</label>
                <input id="formAuthor" required>
            </li>
            
            <li>
                <label for="formPages">Number of Pages</label>
                <input id="formPages" required>
            </li>
            
            <li>
                <p>Have you read?</p>
                <label for="formReadYes">Yes</label><input name ="haveRead" type="radio" id="formReadYes" required>
            
                <label for ="formReadNo">No</label><input name ="haveRead" type="radio" id="formReadNo" required>
            </li>                             
            <li>
            <button>Submit</button>
            </li>
        </ul>
    </form>
    
    `;

    formContainer.innerHTML = formMarkup;


}

function removeForm(){ //remove form 

}

function buttonPress(target){
    console.log(target);
    switch(target){
        case 'addBooks':
            createForm();
            return;
        case 'viewBooks':
            showBooks();
            return;
        default:    //shouldn't happen.. do nothing
            return; 
    }                   
}

let myLibrary = [];

const formContainer = document.querySelector('#formContainer');
const buttons = document.querySelector('#buttonContainer');

console.log('buttons');

removeBook.prototype = Object.create(Book.prototype);

buttons.addEventListener('click', button => buttonPress(button.target.id))
