const express = require('express'); 
const app = express()
const bodyParser = require('body-parser')

const dotenv = require('dotenv').config()
const mongoose = require("mongoose");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var uri = "mongodb+srv://annuraggggg:sCY05y9oRp1wPGyP@kissanharvest.zbcnjdt.mongodb.net/KissanHarvest?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options).then(() => {
}, err => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});


app.use(require('./merchant/find'))
app.use(require('./merchant/create'))
app.use(require('./merchant/nearme'))
app.use(require('./merchant/login'))
app.use(require('./merchant/postjob'))

app.use(require('./farmer/find'))
app.use(require('./farmer/create'))
app.use(require('./farmer/nearme'))
app.use(require('./farmer/savedjobs'))
app.use(require('./farmer/login'))
app.use(require('./farmer/searchjobs'))
app.use(require('./farmer/getjobs'))

app.use(require('./api/otp'))

app.listen(5000)











