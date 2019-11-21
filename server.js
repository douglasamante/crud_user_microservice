(async()=>{
    const restify = require('restify');
    const mongoose = require('mongoose');

    const DB_URL = "mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority"
    const DB_SETTINGS = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(DB_URL, DB_SETTINGS);
        console.log('Conexao concluida com o mongodb');
    } catch (e) {
        console.error('Erro na conexao com o mongodb:${DB_URL');
        console.error(e.message);
    }
    var server = restify.createServer({
        name: 'AdautoWork'
    });

    server.use(restify.plugins.bodyParser());
    server.use(restify.plugins.queryParser());
    

    const MemeController = require('./Controller/meme');
    const AuthMiddleware = require('./Middleware/middle');
    const {error404} = require('./Middleware/error');

    const AuthController = require('./Controller/auth');

    server.post('/auth/login',AuthController.login);
    server.get('/meme', AuthMiddleware.validateToken, MemeController.getRead);
    server.get('/meme/:id', AuthMiddleware.validateToken, MemeController.getById);
    server.post('/meme', AuthMiddleware.validateToken, MemeController.create);
    server.patch('/meme', AuthMiddleware.validateToken, MemeController.update);
    server.del('/meme', AuthMiddleware.validateToken, MemeController.deleteMeme);

    const PORT = process.env.PORT || 3000;

    server.listen(PORT);
})();