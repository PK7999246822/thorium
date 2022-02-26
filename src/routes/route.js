const express = require('express');
const userModel = require ('../models/userModels');
const router = express.Router();
const userControllers = require ('../controllers/userController');
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});



router.post('/createBooks', userControllers.createBooks) //this function userController is called handler



router.get('/getBooksData', userControllers.getBooksData);
module.exports = router;
// adding this comment for no reason