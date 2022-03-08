const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({

    Name:String,
	category:String,
	price:{
        type:Number,
        Required:true
    }


}, { timestamps: true });

module.exports = mongoose.model('Product1', productSchema)