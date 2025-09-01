function getTodo(id) {
   return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

getTodo(1)
   .then(response => response.json())
   //.then(data => console.log(data))
   .catch(error => console.error(error))

function getUser(id) {
   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}

getUser(1)
   .then(response => response.json())
   //.then(data => console.log(data))
   .catch(error => console.error(error))

const collectionAll = Promise.all([getTodo(1), getUser(1)])
collectionAll
   .then(responses => Promise.all(responses.map(response => response.json())))
   .then(data => console.log(data))
   .catch(error => console.error(error))

const collectionRase = Promise.race([getUser(1), getTodo(1)])
collectionRase
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error(error))

