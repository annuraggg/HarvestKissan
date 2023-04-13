const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const { body } = require('express-validator');
const Merchant = require('../models/merchant')

router.post('/merchant/login',
    body('id').not().isEmpty().trim().escape(),
    body('password').not().isEmpty().trim().escape().isLength({ min: 5 }),
    async (req, res) => {
        const { id, password } = req.body
        try {
            const users = await Merchant.findOne({ phone: id, }, { _id: 0, phone: 1, password: 1 });
            if (users) {
                const compare = await bcrypt.compare(password, users.password)
                if (compare) {
                    console.log("Auth")
                    res.send({
                        auth: true,
                        username: users.username,
                        phone: users.phone,
                        password: users.password,
                        address: users.address,
                        gender: users.gender,
                    })
                } else {
                    console.log("Bad")
                    res.send({ auth: false })
                }
            } else {
                console.log("Bad")
                res.send({ auth: false })
            }
        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;