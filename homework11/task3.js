async function getTodo(id) {
   const resultTodo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
   const dataTodo = await resultTodo.json();
   return dataTodo;
}

getTodo(1).then(dataTodo => console.log(dataTodo))

async function getUser(id) {
   const resultUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
   const dataUser = await resultUser.json();
   return dataUser;
}

getUser(1).then(dataUser => console.log(dataUser))
