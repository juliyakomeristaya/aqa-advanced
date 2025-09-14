const axios = require('axios');

describe('Jsonplaceholder tests', () => {
	describe('Posts tests', () => {
		test('should return posts list', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(100);
		});

		test('should return post by id', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
			expect(response.status).toEqual(200);
			expect(response.data).toHaveProperty('id', 1);
			expect(response.data).toHaveProperty('userId', 1);
			expect(response.data).toHaveProperty(
				'title',
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			);
			expect(response.data).toHaveProperty(
				'body',
				'quia et suscipit\n' +
					'suscipit recusandae consequuntur expedita et cum\n' +
					'reprehenderit molestiae ut ut quas totam\n' +
					'nostrum rerum est autem sunt rem eveniet architecto',
			);
		});

		test('should return comments for post id', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(5);
		});

		test('should edit post by id', async () => {
			const responseEdit = await axios.put('https://jsonplaceholder.typicode.com/posts/1');
			{
				('new title');
				('new body');
			}
			expect(responseEdit.status).toEqual(200);
			expect(responseEdit.data).toHaveProperty('id', 1);
		});

		test('should delete post by id', async () => {
			const responseEdit = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
			expect(responseEdit.status).toEqual(200);
			expect(responseEdit.data).toBeEmptyObject;
		});
	});

	describe('Users tests', () => {
		test('should return users list', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(10);
		});

		test('should return user by id', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
			console.log(response.data);
			expect(response.status).toEqual(200);
			expect(response.data).toHaveProperty('id', 1);
			expect(response.data).toHaveProperty('name', 'Leanne Graham');
			expect(response.data).toHaveProperty('username', 'Bret');
			expect(response.data).toHaveProperty('email', 'Sincere@april.biz');
		});

		test('should delete user by id', async () => {
			const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1');
			expect(response.status).toEqual(200);
			expect(response.data).tobeEmptyObject;
		});
	});

	describe('Albums tests', () => {
		test('should return albums list', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(100);
		});

		test('should return albums by user id', async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
			expect(response.status).toEqual(200);
			expect(response.data.length).toBe(10);
		});
	});
});
