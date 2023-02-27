const TermOfUse = require("../../models/termOfUse");

const AddTermOfUse = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.status(400).send("title is required");
        }
        if (!content) {
            res.status(400).send("content is required");
        }
        const result = await new TermOfUse({ title, content });
        result.save();
        await res.json({
            message: "TermOfUse Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "TermOfUse Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddTermOfUse;