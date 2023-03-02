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
                message: "Term Of Use not Exists!",
                status:false,
            });
        } else {
            res.json({
                message: "TermOfUse Updated Successfully!",
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
module.exports = UpdateTermOfUse;
