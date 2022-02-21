const obj = require("./logger")
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    obj.printMyMessage('thorium')
    console.log(obj.endpoint)
});

module.exports = router;