const errs = require('restify-errors');
const axios = require('axios');
const axiosInstance = axios.create({ 
});

const baseURL = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken';

function validateToken(req, res, next) {
    const { token } = req.headers;
    if (!token) return next(new errs.ForbiddenError('Token não fornecido'));
    axios.post(baseURL, {}, {
        headers: {
            token
        }
    })
        .then((response) => {
            next()
        })
        .catch((error) => {
            console.log(error);
                return res.send({menseger:'Token invalido'})
        });
    
}

module.exports = {
    validateToken
}
