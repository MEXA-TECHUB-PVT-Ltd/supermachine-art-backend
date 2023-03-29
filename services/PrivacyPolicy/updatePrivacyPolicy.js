// const PrivacyPolicy = require("../../models/privacyPolicy");
const db = require("../../models");
const PrivacyPolicy = db.privacyPolicy;
const Op = db.Sequelize.Op;

const UpdatePrivacyPolicy = async (req, res) => {
    try {
        const { id, title, content } = req.body;
        // const result = await PrivacyPolicy.update(req.body, {
        await PrivacyPolicy.update(
            { title: title, content: content },
            { where: { id: id } }
        ).then((results) => {
            if (results.includes(0)) {
                res.json({
                    message: "Privacy Policy not Exists!",
                    status: false,
                });
            } else {
                const result = {
                    title: title,
                    content: content
                }
                res.json({
                    message: "Privacy Policy  Updated Successfully!",
                    status: true,
                    result,
                });
            }
        });
    } catch (err) {
        res.json({
            message: "Privacy Policy Updation Failed!",
            status: false,
        });
    }
};
module.exports = UpdatePrivacyPolicy;
