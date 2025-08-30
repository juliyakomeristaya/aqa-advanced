import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, format) {
		super(title, author, year);
		this._bookFormat = format;
	}
	get bookFormat() {
		return this._bookFormat;
	}

	set bookFormat(format) {
		if (format.length < 1) {
			console.log('Format is not valid.');
			return;
		}
		this._bookFormat = format;
	}
	get printInfo() {
		return `Title: ${this._bookTitle}, Author: ${this._bookAuthor}, Year: ${this._bookYear}, Format: ${this._bookFormat}`;
	}

	static fromBook(bookInstance, format) {
		if (!(bookInstance instanceof Book)) {
			throw new Error('First argument must be an instance of Book class');
		}
		if (typeof format !== 'string' || format.length === 0) {
			throw new Error('Format must be a non-empty string');
		}

		return new EBook(bookInstance.bookTitle, bookInstance.bookAuthor, bookInstance.bookYear, format);
	}
}
