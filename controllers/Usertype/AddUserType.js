const UserType = require("../../models/UserType");

const AddUserType = async (req, res) => {
    try {
        const { type } = req.body;
        if (!type) {
            res.json({
                message: "type is required",
                status: false,
            });
        } else {
            const result = new UserType({ type });
            result.save();
            await res.json({
                message: "type Added Successfully!",
                status:true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddUserType;