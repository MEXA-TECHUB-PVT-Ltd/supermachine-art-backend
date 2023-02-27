const TermOfUse = require("../../models/termOfUse");

const UpdateTermOfUse = async (req, res) => {
    try {
        const { _id, title,content } = req.body;
        const result = await TermOfUse.findOneAndUpdate({ _id: _id },
            {
                title: title,
                content: content,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "TermOfUse not Exists!",
                result,
            });
        } else {
            res.json({
                message: "TermOfUse Updated Successfully!",
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "TermOfUse Updation Failed!",
            status: "none",
            err
        });
    }
};
module.exports = UpdateTermOfUse;
