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
    if (user) {
        await userOTPVerificationModel.update(
            {
                status: "verified"
            },
            {
                where: { email: email }
            }
        ).then((result) => {
            if (result.includes(0)) {
                res.json({
                    message: "OTP not Exists!",
                    status: false,
                });
            } else {
                const result = {
                    email: email, otp: otp
                }
                res.json({
                    message: "OTP Verified Successfully!",
                    status: true,
                    result,
                });
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
