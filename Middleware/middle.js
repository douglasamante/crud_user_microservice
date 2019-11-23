const errs = require('restify-errors');

const axios = require('axios');

const axiosInstance = axios.create();

//Url used to application
const baseURL = 'https://ec021-2019-2-av2-auth.herokuapp.com/auth/validateToken';

//function to validate the token
function validateToken(req, res, next) {
    const { token } = req.headers;

    if (!token) return next(new errs.ForbiddenError('Token did not provide'));

    axios.post(baseURL, {}, {
        headers: {
            token
        }
    })
    .then((response) => {
            next()
    })
    
    .catch((error) => {
            //Write of the error in relation in the token
            console.log(error);

                return res.send({menseger:'Token invalid'})
    });
    
}

module.exports = {
    validateToken
}
