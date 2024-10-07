const books = [ // place books in the array
    "Raiders of the Lost Ark",
    "Star Wars: Revenge of the Sith",
    "Ranger's Apprentice",
    "Star Wars: Heir to the Empire",
    "Star Wars (Legends): Kenobi",
    "Star Wars: Revan",
    "Chronicles of Narnia: The Lion, Witch, and the Wardrobe",
    "Star Wars: Children of the Jedi",
    "Star Wars: The Last Command",
    "Kingdom Keepers: Disney After Dark"
]

// function to display the books in ascending order
function displayTopToBottom() {
    const sortedBooks = books.slice();
    displayBooks(sortedBooks); // display the sorted list of books
}

// function to show books in descending order
function displayBottomToTop() {
    const sortedBooks = books.slice().reverse();
    displayBooks(sortedBooks); // display the reverse sorted books
}

// function to display the book array
function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '<ol>' + bookArray.map(book => `<li>${book}</li>`).join('') + '</ol>';
}

// display the initial list of books
displayBooks(books);