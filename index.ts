// TypeScript Code

// Interfaces
interface Book {
  title: string;
  pages: number;
  published: boolean;
  authors: string[];
}

// Variables
let bookTitle: string = "TypeScript in Practice";
let numPages: number = 250;
let isPublished: boolean = true;
let authors: string[] = ["Alice", "Bob", "Charlie"];

// Object representing a book
let book: Book = {
  title: "JavaScript: The Good Parts",
  pages: 176,
  published: true,
  authors: ["Douglas Crockford"]
};

function calculateReadingTime(pages: number, readingSpeed: number): number {
  return pages / readingSpeed;
}

function printBookDetails(title: string, pages: number, published: boolean, authorList: string[]): void {
  console.log(`Title: ${title}`);
  console.log(`Pages: ${pages}`);
  console.log(`Published: ${published}`);
  console.log(`Authors: ${authorList.join(", ")}`);
}

let readingTime: number = calculateReadingTime(numPages, 30);
printBookDetails(bookTitle, numPages, isPublished, authors);