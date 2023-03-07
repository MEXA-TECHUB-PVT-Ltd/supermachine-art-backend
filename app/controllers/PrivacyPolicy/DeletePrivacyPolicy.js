// const PrivacyPolicy = require("../../models/privacyPolicy");
const db = require("../../models");
const PrivacyPolicy = db.privacyPolicy;
const Op = db.Sequelize.Op;

const DeletePrivacyPolicy = async (req, res) => {
    try {
        const result = await PrivacyPolicy.destroy(
            // {
            //     onDelete: 'CASCADE',
            // },
            {
                where: { id: req.params.id }
            });
        if (result) {
            await res.json({
                message: "Privacy Policy Deleted Successfully!",
                status: true,
                result,
            });
        } else {
            await res.json({
                message: "Privacy Policy not Found ",
                status: false,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = DeletePrivacyPolicy;