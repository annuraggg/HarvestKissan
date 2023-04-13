var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const { body } = require('express-validator');
var Merchant = require('../models/merchant')

router.post('/merchant/create',
    body('password').not().isEmpty().trim().escape().isLength({ min: 5 }),
    body('name').not().isEmpty().trim().escape(),
    body('gender').not().isEmpty().trim().escape(),
    body('phone').not().isEmpty().trim().escape().isLength({ min: 13, max: 13 }),
    body('address').not().isEmpty().trim().escape(),
    async (req, res) => {
        let { password, name, gender, phone, address, merchant } = req.body

        newpw = await bcrypt.hash(password, 10)

        const add = await Merchant.create([
            {
                phone: phone,
                password: newpw,
                name: name,
                address: address,
                gender: gender,
                merchant: merchant
            }
        ]);

        if (add) {
            res.send(true)
        } else {
            res.send(false)
        }
    })

module.exports = router;