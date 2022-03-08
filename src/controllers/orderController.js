const orderModel= require("../models/orderModel")

const createOrder= async function (req, res) {
    let data= req.body
    let savedData= await orderModel.create(data)
    // console.log(req.newAtribute)
    res.send({msg: savedData})
}
// const createOrder = async function ( req ,res) { 
//     let data = req.body 
//     data.date=Date.now() 
//  //console.log(data) 
//  let productId=req.body.productId; 
//  let userId = req.body.userId; 
//  let requiredUser=await userModel.findById(userId); 
//  let requiredProduct=await productModel.findById(productId); 
// //console.log(requiredProduct,requiredUser); 
  
// if(requiredUser===null||requiredProduct===null){ 
//  return res.send("The product or user do not exist in our database"); 
//  } 
// let savedData=await 

module.exports.createOrder= createOrder
