var express = require('express');
var router = express.Router();
var dbms = require('./dbms_promise');

router.post('/', async function(req, res, next) {
    var month = req.body.month;
    var [row, data] = await dbms.dbquery("select count(*) as numCherry from ORDERS where TOPPING='cherry' and MONTH='" + month + "'");
    var monthCherry = {"topping":"Cherry", "quantity":row.numCherry.toString()}; // monthly cherry orders

    var [row, data] = await dbms.dbquery("select count(*) as numPlain from ORDERS where TOPPING='plain' and MONTH='" + month + "'");
    var monthPlain = {"topping":"Plain", "quantity":row.numPlain.toString()}; // monthly plain orders

    var [row, data] = await dbms.dbquery("select count(*) as numChoco from ORDERS where TOPPING='chocolate' and MONTH='" + month + "'");
    var monthChoco = {"topping":"Chocolate", "quantity":row.numChoco.toString()}; // monthly choocolate orders

    // create new JSON object to display summary for the selected month
    const json = {
        error: null,
        data: [
            monthCherry,
            monthPlain,
            monthChoco
        ]
    }
    res.send(json);
});

router.get('/', async function(req, res, next) {
    var month = req.body.month;
    var [row, data] = await dbms.dbquery("select count(*) as numCherry from ORDERS where TOPPING='cherry' and MONTH='" + month + "'");
    var cherrySummary = {"topping":"Cherry", "quantity":row.numCherry.toString()};

    var [row, data] = await dbms.dbquery("select count(*) as numPlain from ORDERS where TOPPING='plain' and MONTH='" + month + "'");
    var plainSummary = {"topping":"Plain", "quantity":row.numPlain.toString()};

    var [row, data] = await dbms.dbquery("select count(*) as numChoco from ORDERS where TOPPING='chocolate' and MONTH='" + month + "'");
    var chocoSummary = {"topping":"Chocolate", "quantity":row.numChoco.toString()};

    // create new JSON object to reflect overall summary
    const json = {
        error: null,
        data: [
            cherrySummary,
            plainSummary,
            chocoSummary
        ]
    }
    res.send(json);
});

module.exports = router;