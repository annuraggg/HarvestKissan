var express = require('express');
var router = express.Router();

const accountSid = "AC4b0a9513be69e7835ec06b50ad021ac5";
const authToken = "6d64d08ff448cf57b453c65c230dda6d"
const verifySid = "VAc784be47a60f48e9bba82f29b89515d2"
const twilioClient = require('twilio')(accountSid, authToken);

router.post('/api/otp/', (req, res) => {

    const { auth, phone, otp } = req.body;
    if (auth === "generate") {
        twilioClient.verify.v2
            .services(verifySid)
            .verifications.create({ to: phone, channel: "sms" })
            .then((verification) => console.log(verification.status))
            .then(() => {
                const readline = require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout,
                });
            })
        res.send(true)
    }
    if (auth === "verify") {

        console.log(otp)
        twilioClient.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: phone, code: otp })
            .then((verification_check) => {

                if (verification_check.status == "approved") {
                    res.send(true)
                } else {
                    res.send(false)
                }
                console.log(verification_check.status)
            })

    }
}
);


module.exports = router;