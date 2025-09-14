const BaseController = require('./BaseController.js');

class AuthorizeController extends BaseController {
	async getToken(userName, password) {
		return await this.axiosInstance.post(
			'Account/v1/GenerateToken',
			{
				userName,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}
	async getUserInfo(userId, token) {
		return await this.axiosInstance.get(`Account/v1/User/${userId}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	}
}
module.exports = new AuthorizeController();
