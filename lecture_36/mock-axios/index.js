const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios);

mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
});

axios.get('/users').then(function(response) {
    console.log(response.data);
});


