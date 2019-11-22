const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MemeSchema = new Schema({
    titulo : { type : String, required : true},
    descricao : { type : String, required : true},
    ano : {type : Number}
},  {
    timestamps: true
});

module.exports = mongoose.model('Meme', MemeSchema);
