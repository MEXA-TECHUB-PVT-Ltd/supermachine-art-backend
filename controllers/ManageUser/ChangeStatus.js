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
        console.log(`result is : ${result}`);
        if (!result) {
            res.json({
                message: "Status Changing Failed",
                result: result,
            });
        } else {
            res.json({
                message: "Status Change Successfully!",
                result: result,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            result: "none",
        });
    }
};
module.exports = ChangeStatus;
