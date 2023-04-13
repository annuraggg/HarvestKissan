var express = require('express');
var router = express.Router();

var Merchant = require('../models/merchant')

router.get('/merchant/:id', async (req, res) => {
    id = req.params.id
    console.log(id)
    try {
        const users = await Merchant.find({ username: id, }, { _id: 0, username: 1, fName: 1, lName: 1, address: 1 });
        res.send(users);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;