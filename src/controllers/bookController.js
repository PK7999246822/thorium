const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"}).select({author_id:1,_id:0})
    console.log(authorDetails[0])
    const booksName = await bookModel.find(authorDetails[0]).select({bookName:1,_id:0})
    res.send( {msg:booksName})
}
const upadatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.findOne({bookName:"two states"})
    const id = bookDetails.author_id
    console.log(id)
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    const bkName = bookDetails.bookName
    console.log(bkName)
    const updatedPrice = await bookModel.findOneAndUpdate({bookName:bkName}, {price:100},{new:true}).select({price:1, _id:0})
    res.send({msg:authorN, updatedPrice}
    )}   
const authorsName = async function (req,res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
 let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
   const authorName = temp.flat()
  res.send({msg:authorName})
}
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.createAuthore=createAuthore
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
