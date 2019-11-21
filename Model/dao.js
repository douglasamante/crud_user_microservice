const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority';
const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const dbName = 'ec021-av2-core';
const collName = 'memes';

module.exports = {
    uri,
    params
}