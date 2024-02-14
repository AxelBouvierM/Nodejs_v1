const axios = require('axios');
const URL = 'https://jsonplaceholder.typicode.com/todos';

axios.get(URL).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});