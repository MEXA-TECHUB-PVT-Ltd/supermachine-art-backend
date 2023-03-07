// const User = require("../../models/User");
const db = require("../../models");
const User = db.user;

const ChangeStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        // let NewStatus = '';
        // if (status === 'unBlock') {
        //     NewStatus = 'block'
        // } else if (status === 'block') {
        //     NewStatus = 'unBlock'
        // }
        const result = await User.update(
            {
                status: status,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Status Changing Failed",
                status: false,
            });
        } else {
            res.json({
                message: "Status Change Successfully!",
                status: true,
                result: result,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = ChangeStatus;
