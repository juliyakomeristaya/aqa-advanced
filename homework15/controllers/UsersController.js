const BaseController = require('./BaseController.js');

class UsersController extends BaseController {
	async getAllUsers() {
		return await this.axiosInstance.get('/users');
	}
	async getUserById(id) {
		return await this.axiosInstance.get(`/users/${id}`);
	}
	async deleteUserById(id) {
		return await this.axiosInstance.delete(`/users/${id}`);
	}
}

module.exports = new UsersController();
