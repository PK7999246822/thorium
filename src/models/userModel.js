const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,

    gender: {
        type: String,
        enum: ["male", "female", "others"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },

    balance:{
        type:Number,
        default:100
    } // Default balance at user registration is 100

}, { timestamps: true });

module.exports = mongoose.model('User12', userSchema) //users



// String, Number
// Boolean, Object/json, array