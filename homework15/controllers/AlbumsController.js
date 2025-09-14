const BaseController = require('./BaseController.js');

class AlbumsController extends BaseController {
	async getAlbums() {
		return await this.axiosInstance.get('/albums');
	}
	async getAlbumsByUserId(id) {
		return await this.axiosInstance.get(`albums?userId=${id}`);
	}
}

module.exports = new AlbumsController();
