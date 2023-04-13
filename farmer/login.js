const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const Farmer = require('../models/farmer')
const { body } = require('express-validator');

router.post('/farmer/login',
    body('id').not().isEmpty().trim().escape().isNumeric(),
    body('password').not().isEmpty().trim().escape().isLength({ min: 5 }),
    async (req, res) => {
        const { id, password } = req.body
        console.log(id + password)
        try {
            const users = await Farmer.findOne({ phone: id, }, { _id: 0 });
            console.log(users)
            if (users) {
                const compare = await bcrypt.compare(password, users.password)
                console.log(compare)
                if (compare) {
                    res.send({
                        auth: true,
                        phone: users.phone,
                        address: users.address,
                        gender: users.gender,
                        name: users.name,
                        merchant: users.merchant
                    })

                    // res.send({auth: true})
                } else {
                    res.send({ auth: false, msg: "compare" })
                }
            } else {
                res.send({ auth: false, msg: "username" })
            }
        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;