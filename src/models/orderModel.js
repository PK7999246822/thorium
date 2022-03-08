const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    userId: {type: ObjectId, ref:"users"},
    productId: {type: ObjectId, ref:"orders"},
    amount: Number,
    isFreeAppUser: {type:Boolean, default:true},
    date: String
}, { timestamps: true });

module.exports = mongoose.model('Orders1', orderSchema)