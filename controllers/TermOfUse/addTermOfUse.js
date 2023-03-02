const TermOfUse = require("../../models/termOfUse");

const AddTermOfUse = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.json({
                message: "title is required",
                status: false,
            });
        } else
            if (!content) {
                res.json({
                    message: "content is required",
                    status: false,
                });
            } else {
                const result = await new TermOfUse({ title, content });
                result.save();
                await res.json({
                    message: "TermOfUse Added Successfully!",
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
module.exports = AddTermOfUse;