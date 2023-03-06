// const AdvanceStyling = require("../../models/AdvanceStyling");
const db = require("../../models");
const AdvanceStyling = db.AdvanceStyling;
const Op = db.Sequelize.Op;

const UpdateAdvanceStyling = async (req, res) => {
    try {
        const { id, styleType } = req.body;
        const result = await AdvanceStyling.update(
            {
                styleType: styleType,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "style Type not Existeds!",
                status: false,
            });
        } else {
            res.json({
                message: "style Type  Updated Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "style Type Updation Failed!",
            status: "false",
        });
    }
};
module.exports = UpdateAdvanceStyling;
