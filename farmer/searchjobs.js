var express = require('express');
var router = express.Router();

var Job = require('../models/job')

router.get('/farmer/searchjobs/:job', async (req, res) => {
    search = req.params.job
    console.log(search)
    try {
        const users = await Job.find({ name: { $regex: search, '$options' : 'i' } });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;