const middleware1= async function(req, res){
    res.send("this is my first middleware")
}

module.exports.middleware1=middleware1