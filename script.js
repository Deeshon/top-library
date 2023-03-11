let myLibrary = []

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function createCard(book) {
    const cardContainer = document.querySelector(".card-container")
    const card = document.createElement("div")
    card.classList.add("card")
    cardContainer.appendChild(card)

}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}
console.log(myLibrary)
const book1 = new Book("Man's Search For Meaning", "Dr. Frankl", "304", "Read")
const book2 = new Book("Man's Search For Death", "Dr. Frankl", "344", "Read")
addBookToLibrary(book1)
addBookToLibrary(book2)

document.querySelector(".add").addEventListener('click', createCard)
