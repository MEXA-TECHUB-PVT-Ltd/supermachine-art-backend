const User = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const passwordReset = async (req, res) => {
    try {
        const { email, password, newPassword } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        const user = await User.findOne({ email });
        if (!user) {
            res.json("No users found");
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            console.log(validPassword);

            if (!validPassword) {
                res.json("Password Incorrect");
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
                    result: result
                })
            }
            else {
                res.json({
                    message: "Password could not be updated successfully",
                    result: null
                })
            }
        }
    }

    }
    catch (err) {
    res.json({
        message: "Error occurred while updating passwords",
        error: err.message
    })
}
};
module.exports = passwordReset;