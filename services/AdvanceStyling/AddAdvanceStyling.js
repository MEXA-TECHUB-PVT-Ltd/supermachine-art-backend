// const AdvanceStyling = require("../../models/AdvanceStyling");
const db = require("../../models");
const AdvanceStyling = db.AdvanceStyling;
const Op = db.Sequelize.Op;

const AddAdvanceStyling = async (req, res) => {
    try {
        const { styleType } = req.body;
        if (!styleType) {
            res.json({
                message: "style Type is required",
                status: false,
            })
        }
        const style = {
            styleType: styleType
        }
        // const result = new AdvanceStyling({ styleType });
        AdvanceStyling.create(style).then(result => {
            res.json({
                message: "style Type Added Successfully!",
                status: true,
                result,

            })
        });
    } catch (err) {
        res.json({
            message: "style Type Addition failed!",
            status: false,
        });
    }
};
module.exports = AddAdvanceStyling;