const mongoose = require('mongoose');

var MemeSchema = new mongoose.MemeSchema({
    titulo : { type : String, required : true},
    descricao : { type : String, required : true},
    ano : {type : Number}
},  {
    timestamps: true
});

module.exports = mongoose.model('Meme', MemeSchema);
