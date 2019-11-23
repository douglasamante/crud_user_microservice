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
    //It will try do a conexion with the Mongodb 
    try {
        //do not there is error. Conexion completed with mongodb 
        await mongoose.connect(DB_URL, DB_SETTINGS);
        console.log('Conexion completed with the mongodb');
    } catch (e) {
        //there is an error
        console.error('Error in the conexion with the mongodb');
        console.error(e.message);
    }

    //server name used equal "AdautoWork"

    var server = restify.createServer({
        name: 'AdautoWork'
    });

    //configuration to server in relation body and query 
    server.use(restify.plugins.bodyParser());
    server.use(restify.plugins.queryParser());
    

    const MemeController = require('./Controller/meme');

    const AuthMiddleware = require('./Middleware/middle');

    const {error404} = require('./Middleware/error');

    const AuthController = require('./Controller/auth');


    //all available routes to application in the server

    //login route
    server.post('/auth/login',AuthController.login);

    //search route
    server.get('/meme', AuthMiddleware.validateToken, MemeController.getRead);
    //search route with id
    server.get('/meme/:id', AuthMiddleware.validateToken, MemeController.getById);
    //create route
    server.post('/meme', AuthMiddleware.validateToken, MemeController.create);
    //update route 
    server.patch('/meme/:id', AuthMiddleware.validateToken, MemeController.update);
    //delete route
    server.del('/meme', AuthMiddleware.validateToken, MemeController.deleteMeme);

    //port used to server
    const PORT = process.env.PORT || 3000;

    server.listen(PORT);
})();
