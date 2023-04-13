var express = require('express');
var router = express.Router();

var Job = require('../models/job')

router.get('/getJobs/jobs', async (req, res) => {
    try {
        const users = await Job.find({ });
        res.send(users);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;