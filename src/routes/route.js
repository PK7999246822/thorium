const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authCheck = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authCheck.authChecker,userController.getUserData)

router.put("/users/:userId",authCheck.authChecker,userController.updateUser)

router.delete("/delete/:userId",authCheck.authChecker,userController.deleteUser)

module.exports = router;