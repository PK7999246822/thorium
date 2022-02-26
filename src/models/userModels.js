const mongoose = require('mongoose');
// const { Schema } = mongoose;

const booksSchema = new mongoose.Schema({
    bookName: String, // String is shorthand for {type: String}
    bookAuthor: String,
    category: String,
    year:Number,
    // date: { type: Date, default: Date.now },

}, {timestamps:true});//mark a time stamp in database

module.exports = mongoose.model('Books', booksSchema)//name of schema/model =>User

//multiple types of data - string, number, object/json, array
//ypu can add new entries in model later also...power of noSQL... the new entries can co-exist with new entries.