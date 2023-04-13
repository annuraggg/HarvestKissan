var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
var Job = require('../models/job')

router.post('/merchants/jobs/create',
    body('merchant_id').not().isEmpty().trim().escape(),
    body('payout').not().isEmpty().trim().escape().isNumeric(),
    body('duration').not().isEmpty().trim().escape(),
    body('date').not().isEmpty().trim().escape(),
    body('expiry').not().isEmpty().trim().escape(),
    async (req, res) => {
        let { merchant_id, name, description, payout, duration, date, category, address } = req.body
        console.log(req.body)
        const add = await Job.create([
            {
                merchant_id: merchant_id,
                name: name,
                description: description,
                payout: payout,
                duration: duration,
                date: date,
                category: category,
                address:address
            }
        ]);

        if (add) {
            res.send(true)
        } else {
            res.send(false)
        }
    })

module.exports = router;

