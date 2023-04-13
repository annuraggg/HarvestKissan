const mongoose = require("mongoose");

const Jobs = mongoose.model('job', {
    merchant_id: { type: String },
    // farmer_id: { type: String },
    name: { type: String },
    description: { type: String },
    payout: { type: String },
    duration: { type: String },
    date: { type: String },
    category: { type: String },
    address: { type: String }
});

module.exports = Jobs