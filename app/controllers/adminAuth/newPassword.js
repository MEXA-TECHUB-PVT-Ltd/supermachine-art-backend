// const userOTPVerificationModel = require("../../models/userOTPVerificationModel")
const bcrypt = require("bcryptjs");
const db = require("../../models");
const Admin = db.admin;
const userOTPVerificationModel = db.userOTPVerificationModel;

const newPassword = async (req, res) => {
    const { email, password } = req.body;

    const user = userOTPVerificationModel.findOne(
        {
            where: { email: email, status: "verified" }
        }
    )
    if (!user) {
        res.json({
            message: `No user with email ${email} has a password updation request `,
            status: false,
        })
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const result = await Admin.update(
            {
                password: hashPassword
            },
            { where: { email: email } })
        if (result) {
            const results = await userOTPVerificationModel.destroy({where:{ email: email }});
            console.log(results);
            if (results) {
                res.json({
                    message: "Password has been updated",
                    status: true,
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
                status: true,
                result: result
            })
        }
    }
}
module.exports = newPassword;
