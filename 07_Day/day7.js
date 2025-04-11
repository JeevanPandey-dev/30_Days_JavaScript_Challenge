// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const bookProp = {
    title : "The Subtle Art of Not Giving a F*ck",
    author : "Mark Manson",
    year : 2016
}
console.log(bookProp);


// Task 2: Access and log the title and author properties of the book object.

console.log(bookProp.title);
console.log(bookProp.author);

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

bookProp.getProp = function(){
    return `${this.title} by ${this.author}`
}
// console.log(bookProp.getProp());


// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

bookProp.updateYear = function(newYear){
    this.year = newYear;
}
bookProp.updateYear(2000);
// console.log(bookProp);


// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name : "Ace Library",
    books : [
        {title: "Pride and Prejudice" , author: "Jane Austen" , year: 1813},
        {title: "The Red and the Black" , author: "Stendhal" , year: 1830},
        {title: "Le Père Goriot" , author: "Honoré de Balzac" , year: 1835},
        {title: "David Copperfield" , author: "Charles Dickens" , year: 1849},
        {title: "Madame Bovary" , author: "Gustave Flaubert" , year: 1856}
    ]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(`Name of the Library is : ${library.name}`);
library.books.forEach(books => console.log(books.title));


// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

bookProp.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
}

// console.log(bookProp.getTitleAndYear());


// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let key in library) {
    console.log(`${key}: ${library[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(library));
console.log(Object.values(library));


// Feature Request 1: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
const bookFeature = {
    title : "The Subtle Art of Not Giving a F*ck",
    author : "Mark Manson",
    year : 2016,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

console.log(bookFeature);
console.log(bookFeature.getDetails());
bookFeature.updateYear(1926);
console.log(bookFeature);
console.log(bookFeature.getTitleAndYear());


// Feature Request 2: Create a script that defines a library object containing an array of book objects and logs the library's details.
const libraryFeature = {
    name: "City Library",
    books: [
        {title: "Pride and Prejudice" , author: "Jane Austen" , year: 1813},
        {title: "The Red and the Black" , author: "Stendhal" , year: 1830},
        {title: "Le Père Goriot" , author: "Honoré de Balzac" , year: 1835},
        {title: "David Copperfield" , author: "Charles Dickens" , year: 1849},
        {title: "Madame Bovary" , author: "Gustave Flaubert" , year: 1856}
    ],
    getLibraryDetails: function() {
        console.log(`Library Name: ${this.name}`);
        this.books.forEach(book => console.log(`Book Title: ${book.title}`));
    }
};

console.log(libraryFeature);
libraryFeature.getLibraryDetails();


// Feature Request 3: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
const bookIteration = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869
};

console.log('Using for...in loop:');
for (let key in bookIteration) {
    console.log(`${key}: ${bookIteration[key]}`);
}

console.log('Using Object.keys and Object.values:');
console.log(Object.keys(bookIteration));
console.log(Object.values(bookIteration));