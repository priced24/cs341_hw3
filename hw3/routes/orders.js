var express = require('express');
var router = express.Router();

// function to JSON object
router.post('/', function(req, res, next) {
    // create new JSON object
    const json = {
        error: null,
        data: [
            {"topping":"Cherry", "quantity":"2"},
            {"topping":"Plain", "quantity":"6"},
            {"topping":"Chocolate", "quantity":"3"}
        ]
    }
    res.send(json); // send JSON object to web /orders page
});

module.exports = router;