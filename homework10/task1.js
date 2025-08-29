import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('1984', 'George Orwell', 1949);

book3.bookAuthor = 'G';
book3.bookYear = 0;

console.log(book1.printInfo);
console.log(book2.printInfo);
console.log(book3.printInfo);

const eBook1 = new EBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'PDF');
const eBook2 = new EBook('Pride and Prejudice', 'Jane Austen', 1813, 'EPUB');

eBook1.bookFormat = "";

console.log(eBook1.printInfo);

const booksArray = [book1, book2, book3, eBook1, eBook2];

const oldestBook = Book.oldestBook(booksArray);

console.log(`Найдавніша книга: ${oldestBook.printInfo}`);

const eBook3 = EBook.fromBook(book2, 'MOBI');
console.log(`Створена електронна книга: ${eBook3.printInfo}`);