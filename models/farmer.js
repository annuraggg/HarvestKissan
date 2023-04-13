const mongoose = require("mongoose");

const Farmer = mongoose.model('farmer', {
    phone: { type: String },
    password: { type: String },
    fName: { type: String },
    lName: { type: String },
    address: { type: String },
    gender: { type: String },
    merchant: { type: Boolean }
});

module.exports = Farmer