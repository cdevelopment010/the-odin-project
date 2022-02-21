const bookTable = document.querySelector('tbody'); 
const bookCount = document.querySelector('#book-count'); 
const bookRead = document.querySelector('#book-read');
const pagesRead = document.querySelector('#pages-read');
const overlay = document.querySelector('.overlay'); 
const openFormBtn = document.querySelector('#open-form'); 
const cancelBookBtn = document.querySelector('#cancel-book'); 
const addBookBtn = document.querySelector('#add-book'); 
const modal = document.querySelector('.modal'); 

let myLibrary = []


openFormBtn.addEventListener('click', openForm); 
cancelBookBtn.addEventListener('click', closeForm); 
addBookBtn.addEventListener('click', addBook); 

// constructor
function Book(author, title, pages, read) {
    this.author = author; 
    this.title = title; 
    this.pages = pages; 
    this.read = read; 
}

Book.prototype.toggleRead = function() {
    this.read = this.read ? false : true; 
    displayBooks(); 
}


// function to add to myLibrary array   
function addBookToLibrary(book) {
    myLibrary.push(book); 
    displayBooks(); 
}

// Display books function
function displayBooks() {
    bookTable.innerText = ''; 
    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr'); 
        const author = document.createElement('td');
        const title = document.createElement('td');
        const pages = document.createElement('td');
        const read = document.createElement('td');
        const updateRead = document.createElement('td');
        const deleteBookBtn = document.createElement('td');

        author.innerText = myLibrary[i].author; 
        title.innerText = myLibrary[i].title; 
        pages.innerText = myLibrary[i].pages; 
        read.innerText = myLibrary[i].read;
        updateRead.innerHTML = '<i class="fa-solid fa-pen"></i>'; 
        deleteBookBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; 
        deleteBookBtn.style.textAlign = 'center'; 
        updateRead.style.textAlign = 'center'


        updateRead.addEventListener('click', function() {myLibrary[i].toggleRead()});
        deleteBookBtn.addEventListener('click', deleteBook);

        row.setAttribute('data-index', i); 

        row.append(author); 
        row.append(title); 
        row.append(pages); 
        row.append(read); 
        row.append(updateRead); 
        row.append(deleteBookBtn); 

        bookTable.append(row); 
    }
    updateStatus(); 
}


// New book button that brings up a form
// Need: author, title, number of pages, if it has been read, and anything else you want

function addBook() {

    if (modal.querySelector('form').checkValidity()) {
        console.log('passed')
        const author = modal.querySelector('#author').value;
        const title = modal.querySelector('#title').value;
        const pages = Number(modal.querySelector('#pages').value);
        const read = modal.querySelector('#read').value; 
        const newBook = new Book(author, title, pages, read); 
    
        addBookToLibrary(newBook); 
        if (!modal.classList.contains('hidden')) {
            closeForm();
        } 
    } else {
        console.log('failed!'); 
        // if (modal.querySelector('#author').value === '') {
        //     modal.querySelector('#author').classList.add('error'); 
        // }
    }

}


// Add a button on each book's display to remove the book
// give the books a data-attribute that corresponds to the index in the array
function deleteBook() {
    let index = this.parentElement.getAttribute('data-index'); 
    myLibrary.splice(index, 1); 
    displayBooks(); 
}


// Add a button to each book's display to update the read status
// Create this using a toggle. 


function updateStatus() {
    bookCount.innerText = myLibrary.length; 
    bookRead.innerText = myLibrary.filter(book=> !book.read).length; 
    pagesRead.innerText = myLibrary.reduce((prev, curr) => {
        return curr.read ? prev + curr.pages : prev;
    }, 0)
}


function openForm() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');

}

function closeForm() {
    modal.querySelector('#author').value = '';
    modal.querySelector('#title').value = '';
    modal.querySelector('#pages').value = '';
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}