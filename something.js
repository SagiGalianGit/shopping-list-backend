const Axios = require('axios');

Axios.get('https://graceful-hotteok-266d0b.netlify.app/hello').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})