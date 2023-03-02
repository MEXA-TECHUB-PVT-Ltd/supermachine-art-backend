const User = require("../../models/User");

const ChangeStatus = async (req, res) => {
    try {
        const { _id, status } = req.body;
        console.log(_id);
        console.log(status);
        let NewStatus = '';
        if (status === 'unBlock') {
            NewStatus = 'block'
        } else if (status === 'block') {
            NewStatus = 'unBlock'
        }
        const result = await User.findOneAndUpdate({ _id: _id },
            {
                status: NewStatus,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Status Changing Failed",
                status: false,
            });
        } else {
            res.json({
                message: "Status Change Successfully!",
                status:true,
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
