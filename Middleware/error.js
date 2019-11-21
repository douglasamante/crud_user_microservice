const errs = require('restify-errors');

function error404(request, response){
    return next (new errs.NotFoundError('rota nao encontrada'));
}

module.exports = {
    error404
}