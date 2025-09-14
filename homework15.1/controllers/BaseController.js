const axios = require('axios');

class BaseController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://bookstore.toolsqa.com',
			headers: {
				accept: 'application/json',
			},
			validateStatus: function () {
				return true;
			},
		});
	}
}
module.exports = BaseController;
