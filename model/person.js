const mongoose = require('mongoose');
const personSchema =  new mongoose.Schema({
    nom : {type:String,required:true},
    age : {type: Number ,required:true},
    favoriteFood : {type : [String],required:true}
})
module.exports = mongoose.model('Person', personSchema)