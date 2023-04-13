var express = require('express');
var router = express.Router();

var Farmer = require('../models/farmer')
let jobids = []

router.get('/farmer/saved/:id', async (req, res) => {
    id = req.params.id;
    try {
        const users = await Farmer.findOne({ username: id }, { _id: 0, savedjobs: 1 });
        const abc = users.toArray()
        console.log(abc)
        res.send(jobids)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;