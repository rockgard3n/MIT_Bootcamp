import './books.js'
//this file is pulling data from the books.json file and making each iteratiion within the json file as mit book object
//there was also a change to the book.js file 

//we are watching for the document to load, when that does we are going to run a funciton 
window.addEventListener('load', ()=> {
    createBookList();
});

async function createBookList(){
    const response = await fetch('./books.json');
    const json     = await response.json();
    const books    = document.getElementById('books');

    json.books.forEach((book) => {
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);
    })
}
