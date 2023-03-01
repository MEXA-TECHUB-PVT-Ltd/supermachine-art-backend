const User = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const passwordReset = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        const user = await User.findOne({ email });
        if (!user) {
            res.json({
                message: "No users found",
                status:false,
            })
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            console.log(validPassword);

            if (!validPassword) {
                res.json({
                    message: "Password Incorrect",
                    status:false,
                })
            } else {
            const result = await User.findOneAndUpdate({ email },
                {
                    password: hashPassword
                },
                {
                    new: true
                })
            console.log(result);
            if (result) {
                res.json({
                    message: "Password has been updated",
                    status:true,
                    result: result
                })
            }
            else {
                res.json({
                    message: "Password could not be updated successfully",
                    status:false
                })
            }
        }
    }

    }
    catch (err) {
    res.json({
        message: "Error occurred while updating passwords",
        status:false,
        result: err.message
    })
}
};
module.exports = passwordReset;