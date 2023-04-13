var express = require('express');
var router = express.Router();

var Merchant = require('../models/merchant')

router.get('/merchant/nearme/:area', async (req, res) => {
    area = req.params.area
    try {
        const users = await Merchant.find({ address: { $regex: area, '$options' : 'i' } });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;