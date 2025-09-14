const postsController = require('./controllers/PostsController.js');
const usersController = require('./controllers/UsersController.js');
const albumsController = require('./controllers/AlbumsController.js');
const faker = require('faker');

describe('Jsonplaceholder tests', () => {
	const randomId = Math.floor(Math.random() * 10) + 1;
	let title;

	describe('Posts tests', () => {
		test('should return posts list', async () => {
			const response = await postsController.getAllPosts();
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(100);
			title = response.data[randomId - 1].title;
		});

		test('should return post by id', async () => {
			const response = await postsController.getPostById(randomId);
			expect(response.status).toEqual(200);
			expect(response.data).toHaveProperty('id', randomId);
			expect(response.data).toHaveProperty('userId', 1);
			expect(response.data).toHaveProperty('title', title);
			expect(response.data).toHaveProperty('body');
		});

		test('should return comments for post id', async () => {
			const response = await postsController.getCommentsForPost(randomId);
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(5);
		});

		test('should edit post by id', async () => {
			const responseEdit = await postsController.editPostById(randomId);
			{
				faker.name.firstName();
				faker.random.words();
			}
			expect(responseEdit.status).toEqual(200);
			expect(responseEdit.data).toHaveProperty('id', randomId);
		});

		test('should delete post by id', async () => {
			const responseEdit = await postsController.deletePostById(randomId);
			expect(responseEdit.status).toEqual(200);
			expect(responseEdit.data).toBeEmptyObject;
		});
	});

	describe('Users tests', () => {
		let name;
		let email;
		test('should return users list', async () => {
			const response = await usersController.getAllUsers();
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(10);
			name = response.data[randomId - 1].name;
			email = response.data[randomId - 1].email;
		});

		test('should return user by id', async () => {
			const response = await usersController.getUserById(randomId);
			expect(response.status).toEqual(200);
			expect(response.data).toHaveProperty('id', randomId);
			expect(response.data).toHaveProperty('username');
			expect(response.data).toHaveProperty('name', name);
			expect(response.data).toHaveProperty('email', email);
		});

		test('should delete user by id', async () => {
			const response = await usersController.deleteUserById(randomId);
			expect(response.status).toEqual(200);
			expect(response.data).tobeEmptyObject;
		});
	});

	describe('Albums tests', () => {
		test('should return albums list', async () => {
			const response = await albumsController.getAlbums();
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(100);
		});

		test('should return albums by user id', async () => {
			const response = await albumsController.getAlbumsByUserId(randomId);
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(10);
		});
	});
});
