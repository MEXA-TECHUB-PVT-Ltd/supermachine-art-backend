const UserType = require("../../models/UserType");

const AddUserType = async (req, res) => {
    try {
        const { type } = req.body;
        if (!type) {
            res.status(400).send("type is required");
        }
        const result =  new UserType({ type });
        result.save();
        await res.json({
            message: "type Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "type Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddUserType;