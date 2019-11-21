const errs = require('restify-errors');
const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: 'https:/ec021-2019-av2-auth.herokuapp.com/auth',
});

function validateToken(req, res, next) {
    const { token } = req.headers;
    if (!token) return next(new errs.ForbiddenError('Token não fornecido'));
    axiosInstance.post('/validateToken', {}, {
        headers: {
            token
        }
    })
        .then((response) => {
            next()
        })
        .catch((error) => {
            console.log(error);
            return next(new errs.UnauthorizeError('Token invalido'))
        });
    
}

module.exports = {
    validateToken
}