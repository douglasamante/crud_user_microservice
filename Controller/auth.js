const axios = require('axios');
const axiosInstace = axios.create();

//URL used

const baseURL = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/login';

function login(req, res) {
    //data used to login(username and password)
    let { username, password } = req.body;
  
    let config = {
        headers: {},
    };

    axios.post(baseURL, { username, password }, config)
    .then((response) => {
       //return in relation the response
        return res.json(response.data);
    })
    .catch((error) => {
       //return in relation the error
        return res.json(error);
    });
}

module.exports = {
    login
}
