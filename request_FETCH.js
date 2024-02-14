import('node-fetch').then(({ default: fetch }) => {

const URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
});