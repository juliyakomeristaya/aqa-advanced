const booksController = require('./controllers/BooksController.js');
const authorizeController = require('./controllers/AuthorizeController.js');
const mainUser = require('./testData/users.js');
const mainBooks = require('./testData/books.js');

describe('Book store tests', () => {
	let token;

	beforeAll(async () => {
		const responseToken = await authorizeController.getToken(mainUser.userName, mainUser.password);
		token = responseToken.data.token;
	});

	describe('Books tests', () => {
		test('should return books list', async () => {
			const response = await booksController.getAllBooks();
			expect(response.status).toEqual(200);
			expect(response.data.books).toHaveLength(8);
		});

		test('should add book to user', async () => {
			const randomBookIndex = Math.floor(Math.random() * 8);
			isbn = mainBooks.books[randomBookIndex].isbn;
			const responseAddBook = await booksController.addBookToUser(isbn, token);
			expect(responseAddBook.status).toEqual(201);
			expect(responseAddBook.data.books[0].isbn).toBe(isbn);

			const responseCheck = await authorizeController.getUserInfo(mainUser.userId, token);
			expect(responseCheck.data.books).toHaveLength(1);
			expect(responseCheck.data.books[0].isbn).toBe(isbn);
		});

		test('should delete all book from user', async () => {
			const responseAddBook1 = await booksController.addBookToUser(mainBooks.books[0].isbn, token);
			expect(responseAddBook1.status).toEqual(201);
			const responseAddBook2 = await booksController.addBookToUser(mainBooks.books[1].isbn, token);
			expect(responseAddBook2.status).toEqual(201);

			const responseDeleteBook = await booksController.deleteBooksFromUser(mainUser.userId, token);
			expect(responseDeleteBook.status).toEqual(204);

			const responseCheck = await authorizeController.getUserInfo(mainUser.userId, token);
			expect(responseCheck.data.books).toHaveLength(0);
		});

		afterEach(async () => {
			const responseDeleteBook = await booksController.deleteBooksFromUser(mainUser.userId, token);
			expect(responseDeleteBook.status).toEqual(204);
		});
	});
});
