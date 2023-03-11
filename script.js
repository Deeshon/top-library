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
    const title = document.createElement("p")
    const author = document.createElement("p")
    const page = document.createElement("p")
    const btnP = document.createElement("p")
    const removeBtnP = document.createElement("p")
    const btn = document.createElement("button")
    const removeBtn = document.createElement("button")

    title.textContent = book.title
    author.textContent = book.author
    page.textContent = book.pages
    btn.textContent = book.status
    removeBtn.textContent = "Remove"

    if (book.status == "Not read") {
        btn.style.backgroundColor = "#ff9c9c"
    }

    card.classList.add("card")
    title.classList.add("content")
    author.classList.add("content")
    page.classList.add("content")
    btnP.classList.add("content")
    removeBtnP.classList.add("content")
    btn.classList.add("read")
    removeBtn.classList.add("remove")

    cardContainer.appendChild(card)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(page)
    card.appendChild(btnP)
    btnP.appendChild(btn)
    card.appendChild(removeBtnP)
    removeBtnP.appendChild(removeBtn)


}


function addBookToLibrary() {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const page = document.querySelector("#page").value
    const checkBox = document.querySelector("#status")

    if (checkBox.checked == true) {
        var status = "Read"
    } else {
        var status = "Not read"
    }

    const book = new Book(title, author, page, status)
    myLibrary.push(book)


}

document.querySelector(".add").addEventListener('click', () => {
    addBookToLibrary()
    
    console.log(myLibrary)
    for (let i = 0; i < myLibrary.length; i++) {
        if (i == myLibrary.length -1) {
            createCard(myLibrary[i])
        }
        
    }
})


