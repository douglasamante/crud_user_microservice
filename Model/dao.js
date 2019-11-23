const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

//uri used 
const uri = 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority';
const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//configuration in relation the documentation proposed
const dbName = 'ec021-av2-core';
const collName = 'memes';

//export the module
module.exports = {
    uri,
    params
}
