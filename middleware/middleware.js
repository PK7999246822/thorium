const userModel = require("../src/models/userModel");

const mid1 = function (req, res, next) {
    let data = req.headers.isfreeappuser
    if (data===undefined) {
        return res.send("request is missing a mandatory header")
    }
    next();
}

const mid2 = async function (req, res, next) {

    let data = req.headers.isfreeappuser

    if (data==undefined) {

        let userId1 = req.body.userId;
        let user = await userModel.findById(userId1);
        if (user==null) {
            return res.send({ msg: "user not valid" })
        }
        let productId1 = req.body.productId;
        let product = await productModel.findById(productId1);
        if (product===null) {
            return res.send({ msg: "product not valid" })

        }
        
    }next()
}

module.exports.mid1=mid1
module.exports.mid2=mid2