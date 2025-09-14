const axios = require('axios');

class BaseController {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://jsonplaceholder.typicode.com',
			validateStatus: function () {
				return true;
			},
		});
	}
}
module.exports = BaseController;
