// const userOTPVerificationModel = require("../../models/userOTPVerificationModel")

const db = require("../../models");
const userOTPVerificationModel = db.userOTPVerificationModel;

async function verifyOTP(req, res) {
    const { email, otp } = req.body;
    // const status = "verified";
    const user = await userOTPVerificationModel.findOne(
        {
            where: { email: email, otp: otp }
        });
        console.log(user);
    if (user) {
        await userOTPVerificationModel.update(
            {
                status: "verified"
            },
            {
                where: { email: email }
            }
        ).then((result) => {
            if (result == 1) {
                res.json({
                    message: "user found , OTP successfully matched",
                    status: true,
                    data: 'result'
                });
            } else {
                res.json({
                    message: "Enter OTP Again",
                    status: false,
                    result
                })
            }

        });

    }
    else {
        res.json({
            message: "no such record found with the following OTP =" + otp,
            status: false,
        })
    }

}
module.exports = verifyOTP;
