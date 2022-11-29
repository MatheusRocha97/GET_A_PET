const mongoose = require('../db/conn');
const {Schema} = mongoose;

const pet = mongoose.model(
    'Pet',
    new Schema({
        name:{
            name: String,
            required: true
        },
        age:{
            name:String,
            required:true
        },
        weight:{
            name:String,
            required:true
        },
        color:{
            name:String,
            required:true
        },
        images:{
            type:Array,         // * conjunto de imagens para 1 animal
            required:true       
        },
        available:{
            type: Boolean       // * se ta ou não disponível o pet
        },
    user: Object,
    adopter: Object
    },

    {timestamps: true},
    ),

);

module.exports = User;