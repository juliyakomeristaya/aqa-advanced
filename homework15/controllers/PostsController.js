const BaseController = require('./BaseController.js');

class PostsController extends BaseController {
	async getAllPosts() {
		return await this.axiosInstance.get('/posts');
	}
	async getPostById(id) {
		return await this.axiosInstance.get(`/posts/${id}`);
	}
	async getCommentsForPost(id) {
		return await this.axiosInstance.get(`/posts/${id}/comments`);
	}
	async editPostById(id) {
		return await this.axiosInstance.put(`/posts/${id}`);
	}
	async deletePostById(id) {
		return await this.axiosInstance.delete(`/posts/${id}`);
	}
}

module.exports = new PostsController();
