const errs = require('restify-errors');

//as the function 404 will catch the error.
function error404(request, response){
    return next (new errs.NotFoundError('Route does not find'));
}

module.exports = {
    error404
}
