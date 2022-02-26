const userModel = require("../models/userModels");
let createBooks = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    console.log(data);
    res.send({msg:savedData});
};

let getBooksData = async function (req, res) {
    let allUsers = await userModel.find();
    res.send({msg:allUsers})
}

module.exports.createBooks = createBooks;
module.exports.getBooksData = getBooksData;