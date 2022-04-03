const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: "title is required",
            unique: true,
            trim: true
            },
        excerpt: {
            type:String,
            required: "excerpt is required",
            trim: true
            }, 
        userId: {
            type:ObjectId,
            required:"User Id is required",
            ref: 'User',
            trim: true
            },
        ISBN: {
            type: String,
            required: "ISBN is required",
            unique: true,
            trim: true
        },
        category: {
            type: String,
            required: "Category is required",
            trim: true
            },
        subcategory: {
            type: [String] , 
            required: "subcategory is required",
            trim: true
        },
        reviews: {
            type: Number, 
            default: 0
        },
        deletedAt: {
            type: Date
        }, 
        isDeleted: {
            type: Boolean, 
            default: false
        },

        bookCover:{
            type:String,
            Required:true
        },
        releasedAt: {
            type: Date,   // format("YYYY-MM-DD")
            required: "releasedAt is required", 
            trim: true
        }

},{ timestamps: true })

module.exports = mongoose.model('Books',bookSchema)