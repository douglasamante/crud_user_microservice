const axios = require('axios');
const axiosInstace = axios.create({
});

const baseURL = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/login';

function login(req, res) {
    let { username, password } = req.body;
    //console.log(`${username} | ${password}`);
    //console.log(`${req.body}`);
    let config = {
        headers: {},
    };
    axios.post(baseURL, { username, password }, config)
    .then((response) => {
        //console.log(response);
        return res.json(response.data);
    })
    .catch((error) => {
        //console.error(error);
        return res.json(error);
    });
}

module.exports = {
    login
}
