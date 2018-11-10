const axios = require('axios');

listAllUsers = () => {
    return new Promise((resolve, reject) => {
        console.log('PASSEI AQUI 1');
        axios.get('/user')
        .then(function(response){
            resolve(response);
        });  
    });
};

getUserByRA = (ra) => {
    const response = await listAllUsers();
    console.log(response);
};

module.exports.getUserByRA = getUserByRA;
module.exports.listAllUsers = listAllUsers;
