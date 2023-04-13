const mongoose = require("mongoose");

const Merchant = mongoose.model('merchant', {
    phone: { type: String },
    password: { type: String },
    fName: { type: String },
    lName: { type: String },
    address: { type: String },
    gender: { type: String },
});

module.exports = Merchant