export class Book {
	constructor(title, author, year) {
		this._bookTitle = title;
		this._bookAuthor = author;
		this._bookYear = year;
	}

	get bookTitle() {
		return this._bookTitle;
	}
	get bookAuthor() {
		return this._bookAuthor;
	}
	get bookYear() {
		return this._bookYear;
	}

	set bookAuthor(value) {
		if (value.length < 2) {
			console.log('Author is too short.');
			return;
		}
		this._bookAuthor = value;
	}

	set bookTitle(value) {
		if (value.length < 2) {
			console.log('Title is too short.');
			return;
		}
		this._bookTitle = value;
	}

	set bookYear(value) {
		if (value <= 0) {
			console.log('Year is not valid.');
			return;
		}
		this._bookYear = value;
	}

	get printInfo() {
		return `Title: ${this._bookTitle}, Author: ${this._bookAuthor}, Year: ${this._bookYear}`;
	}

	static oldestBook(bookArray) {
		if (!Array.isArray(bookArray) || bookArray.length === 0) {
			return null;
		}

		let oldestBook = bookArray[0];

		for (let i = 1; i < bookArray.length; i++) {
			if (bookArray[i].bookYear < oldestBook.bookYear) {
				oldestBook = bookArray[i];
			}
		}

		return oldestBook;
	}
}
