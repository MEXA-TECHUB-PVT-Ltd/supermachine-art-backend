const PrivacyPolicy = require("../../models/privacyPolicy");

const AddPrivacyPolicy = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            res.json({
                message: "title is required",
                status: false,
            });
        } else if (!content) {
            res.json({
                message: "content is required",
                status: false,
            });
        } else {
            const result = await new PrivacyPolicy({ title, content });
            result.save();
            await res.json({
                message: "Privacy policy Added Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Privacy policy Addition failed!",
            status: false,
        });
    }
};
module.exports = AddPrivacyPolicy;