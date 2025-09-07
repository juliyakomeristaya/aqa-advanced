export class GetUserInfo {
    constructor(url,id) {
        this._id = id;
        this._url = url
    }

async getTodo(_url,_id) {
   const resultTodo = await fetch(`${this._url}/todos/${this._id}`)
   const dataTodo = await resultTodo.json();
   return dataTodo;
}

async getUser(_url,_id) {
   const resultUser = await fetch(`${this._url}/users/${this._id}`)
   const dataUser = await resultUser.json();
   return dataUser;
}

}