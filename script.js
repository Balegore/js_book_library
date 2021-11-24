function books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}.`
    };
}

const theHobbit = new books('The Hobbit', 'J.R.R Tolkien', '295', 'not read');

console.log(theHobbit.info());

console.log(theHobbit.constructor);
