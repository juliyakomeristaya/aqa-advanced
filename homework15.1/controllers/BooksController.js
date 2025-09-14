const BaseController = require('./BaseController.js');
const mainUser = require('../testData/users.js');
const userId = mainUser.userId;

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}
	async addBookToUser(isbn, token) {
		return await this.axiosInstance.post(
			'/BookStore/v1/Books',
			{
				userId,
				collectionOfIsbns: [
					{
						isbn,
					},
				],
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}
	async deleteBooksFromUser(userId, token) {
		return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}
module.exports = new BooksController();
