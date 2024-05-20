// JavaScript Code
var bookTitle = "TypeScript in Practice";
var numPages = 250;
var isPublished = true;
var authors = ["Alice", "Bob", "Charlie"];
var book = {
    title: "JavaScript: The Good Parts",
    pages: 176,
    published: true,
    authors: ["Douglas Crockford"]
};
function calculateReadingTime(pages, readingSpeed) {
    return pages / readingSpeed;
}
function printBookDetails(title, pages, published, authorList) {
    console.log("Title: ".concat(title));
    console.log("Pages: ".concat(pages));
    console.log("Published: ".concat(published));
    console.log("Authors: ".concat(authorList.join(", ")));
}
var readingTime = calculateReadingTime(numPages, 30);
printBookDetails(bookTitle, numPages, isPublished, authors);
