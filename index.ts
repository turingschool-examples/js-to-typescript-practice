// JavaScript Code

let bookTitle = "TypeScript in Practice";
let numPages = 250;
let isPublished = true;
let authors = ["Alice", "Bob", "Charlie"];

let book = {
  title: "JavaScript: The Good Parts",
  pages: 176,
  published: true,
  authors: ["Douglas Crockford"]
};

function calculateReadingTime(pages, readingSpeed) {
  return pages / readingSpeed;
}

function printBookDetails(title, pages, published, authorList) {
  console.log(`Title: ${title}`);
  console.log(`Pages: ${pages}`);
  console.log(`Published: ${published}`);
  console.log(`Authors: ${authorList.join(", ")}`);
}

let readingTime = calculateReadingTime(numPages, 30);
printBookDetails(bookTitle, numPages, isPublished, authors);
