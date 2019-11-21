const axios = require('axios');
const axiosInstace = axios.create({
    baseURL: 'https:/ec021-2019-av2-auth.herokuapp.com/auth',
});

function login(req, res) {
    const { username, password } = req.body;
    axiosInstace.post('/login', { username, password })
    .then((response) => {
        return res.json(response.data);
    })
    .catch((error) => {
        return res.json(error);
    });
}

module.exports = {
    login
}