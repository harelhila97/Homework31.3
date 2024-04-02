function init() {
    let counter = 0;
    const headerdiv = document.getElementById("headdiv")
    const countershow = document.createElement("span")
    countershow.innerText ="selected: " + counter + " books"
    const clearselected = document.createElement("button")
    clearselected.innerText = "clear select"
    clearselected.id = "clearselected"
    headerdiv.append(clearselected)
    headerdiv.append(countershow)
    const booksListDiv = document.getElementById("booksList") // create the books list container
    booksListDiv.className = "booklistdiv"
    booksListDiv.style.border = "1px solid black"
    booksListDiv.style.textAlign = "center"
   
   

    for (let index = 0; index < books.length; index++) {
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div") // create the single book container
        bookContainerDiv.className= "bookcontainer"
        const bookTitleH3 = document.createElement("h3") // create header for title
        const bookauthorH4 = document.createElement("h4")
        const bookcountry  = document.createElement("h5")
        const bookimageLink = document.createElement("img")
        const booklanguage = document.createElement("h5")
        const booklink = document.createElement("a")
        const bookpages = document.createElement("h5")
        const bookyear = document.createElement("h5")
        

        bookTitleH3.innerText = currentBook.title // insert the title from the Data into UI 
        bookauthorH4.innerText = currentBook.author
        bookcountry.innerText = "country: " + currentBook.country
        bookimageLink.innerHTML = "img"
        bookimageLink.src = currentBook.imageLink
        bookimageLink.alt = "no image available"
        booklanguage.innerText = "language: " + currentBook.language
        booklink.innerHTML = "about the book"
        booklink.href = currentBook.link
        bookpages.innerText ="pages: " + currentBook.pages
        bookyear.innerText ="year: " + currentBook.year
        
        booksListDiv.append(bookContainerDiv) // append single book container into books list container

        bookContainerDiv.append(bookimageLink)
        bookContainerDiv.append(bookTitleH3) // append title (h3) into single book container
        bookContainerDiv.append(bookauthorH4)
        bookContainerDiv.append(bookcountry)
        bookContainerDiv.append(booklanguage)
        bookContainerDiv.append(bookpages)
        bookContainerDiv.append(bookyear)
        bookContainerDiv.append(booklink)
        

        const buttonsdiv = document.createElement("div");
        buttonsdiv.id = "buttonsdiv"
        const button = document.createElement("button");
        button.innerText = "Select"
        button.addEventListener("click", function () {
            if (bookContainerDiv.style.background == "lightblue"){
            bookContainerDiv.style.background = "white"
            counter = counter-1;
            countershow.innerText ="selected: " + counter + " books"
            }else{
                bookContainerDiv.style.background = "lightblue"
                counter=counter+1;
                countershow.innerText ="selected: " + counter + " books"
            }
        })

        const buttonDelete = document.createElement("button");
        buttonDelete.id = "buttonDelete"
        buttonDelete.innerText = "🗑"

        buttonDelete.addEventListener("click", function () {
            if(confirm("are you sure you want to delete book?")){
            bookContainerDiv.remove()
            }else{
                return
            }
        })

        bookContainerDiv.append(buttonsdiv);
        buttonsdiv.append(button, buttonDelete);

        clearselected.addEventListener("click", function(){
            bookContainerDiv.style.background = "white"
            counter=0;
            countershow.innerText ="selected: " + counter + " books"
        })
        
    }

}


init();

// "country": "Nigeria",
//   "imageLink": "images/things-fall-apart.jpg",
//   "language": "English",
//   "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
//   "pages": 209,
 
//   "year": 1958