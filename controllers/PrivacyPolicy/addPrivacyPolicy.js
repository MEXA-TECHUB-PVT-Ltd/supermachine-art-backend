const PrivacyPolicy = require("../../models/privacyPolicy");

const AddPrivacyPolicy = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.status(400).send("title is required");
        }
        if (!content) {
            res.status(400).send("content is required");
        }
        const result = await new PrivacyPolicy({ title, content });
        result.save();
        await res.json({
            message: "Privacy policy Added Successfully!",
            result,
        });
    } catch (err) {
        res.json({
            message: "Privacy policy Addition failed!",
            status: "none",
            err
        });
        console.log(err)
    }
};
module.exports = AddPrivacyPolicy;