const userOTPVerificationModel = require("../../models/userOTPVerificationModel")


async function verifyOTP (req, res)  {
    const { email, otp } = req.body;
    const status = "verified";
    const user = await userOTPVerificationModel.findOne({ email: email, otp: otp })
        if (user) {
            const result = await userOTPVerificationModel.findOneAndUpdate({ email: email },
                {
                    status: status
                },
                {
                    new: true
                })
                console.log(result);
            if (result) {
                res.json({
                    message: "user found , OTP successfully matched",
                    status: true,
                    data: 'result'
                })
            } else {
                // console.log(result);
                res.json({
                    message: "Enter OTP Again",
                    status: false,
                    data: foundResult
                })
            }
        }
        else {
            res.json({
                message: "no such record found with the following OTP =" + otp,
                status: false,
            })
        }

}
module.exports = verifyOTP;
