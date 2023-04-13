var express = require('express');
var router = express.Router();

var Farmer = require('../models/farmer')

router.get('/farmer/nearme/:area', async (req, res) => {
    area = req.params.area
    try {
        const users = await Farmer.find({ address: { $regex: area, '$options' : 'i' } });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;