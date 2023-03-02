const userOTPVerificationModel = require("../../models/userOTPVerificationModel")
const User = require("../../models/User");
const bcrypt = require("bcryptjs");


const newPassword = async (req, res) => {
    const { email, password } = req.body;

    const user = userOTPVerificationModel.findOne({ email: email, status: "verified" })
    if (!user) {
        res.json({
            message: `No user with email ${email} has a password updation request `,
            status: false,
        })
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const result = await User.findOneAndUpdate({ email },
            {
                password: hashPassword
            },
            {
                new: true
            })
        if (result) {
            const results = await userOTPVerificationModel.deleteOne({ email: email });
            if (results.deletedCount > 0) {
                res.json({
                    message: "Password has been updated",
                    status:true,
                    result: result
                })
            }
            else {
                res.json({ message: "Password Updated (Otp Not Removed!)", status: true })
            }
        }
        else {
            res.json({
                message: "Password could not be updated successfully",
                status:false
            })
        }
    } 
}
module.exports = newPassword;
