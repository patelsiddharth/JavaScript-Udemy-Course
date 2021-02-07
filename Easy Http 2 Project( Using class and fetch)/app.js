const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err));

const userData = {
    name : 'Siddharth',
    username : 'siddharth425',
    email : 'siddharth425@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/posts',userData)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2',userData)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));