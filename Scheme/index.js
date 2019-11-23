const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//describe the memeSchema in relation the params(title, describe, year)
var MemeSchema = new Schema({
    titulo : { type : String, required : true},
    descricao : { type : String, required : true},
    ano : {type : Number}
},  {
    timestamps: true
});


//export to module

module.exports = mongoose.model('Meme', MemeSchema);
