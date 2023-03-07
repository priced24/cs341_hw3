var express = require('express');
var router = express.Router();
var dbms = require('./dbms_promise');

/* GET users listing. */
router.post('/', async function(req, res, next) {
    const quantity = req.body.quantity;
    const topping = req.body.topping;
    const notes = req.body.notes;
    var newOrder = await dbms.dbquery("insert into ORDERS(MONTH, DAY, QUANTITY, TOPPING, NOTES) values('AUG', 26, " + quantity + ", '" + topping + "', '" + notes + "')");
    res.send(newOrder);
});

module.exports = router;