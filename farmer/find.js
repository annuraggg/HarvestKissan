var express = require('express');
var router = express.Router();

var Farmer = require('../models/farmer')

router.get('/farmer/:id', async (req, res) => {
    id = req.params.id
    console.log(id)
    try {
        const users = await Farmer.find({ _id: id }, { _id: 0, name: 1, address: 1 });
        res.send(users);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;