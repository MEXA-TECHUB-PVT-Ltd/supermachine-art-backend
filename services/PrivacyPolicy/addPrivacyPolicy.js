// const PrivacyPolicy = require("../../models/privacyPolicy");
const db = require("../../models");
const PrivacyPolicy = db.privacyPolicy;
const Op = db.Sequelize.Op;

const AddPrivacyPolicy = async (req, res) => {
    try {
        const { title, content } = req.body;
        console.log("TITLE : "+ title);
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
            const privicy = {
                title: title,
                content: content
            }
            // const result = await new PrivacyPolicy({ title, content });
            PrivacyPolicy.create(privicy).then(result => {
                res.json({
                    message: "Privacy policy Added Successfully!",
                    status: true,
                    result,
                });
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