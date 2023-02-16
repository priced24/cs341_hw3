var express = require('express');
var router = express.Router();

// function to JSON object
router.get('/', function(req, res, next) {
    // create new JSON object
    const json = {
        error: null,
        data: [
            {"topping":"cherry", "quantity":"2"},
            {"topping":"plain", "quantity":"6"},
            {"topping":"chocolate", "quantity":"3"}
        ]
    }
    res.send(json); // send JSON object to web /orders page
});

module.exports = router;