// const AdvanceStyling = require("../../models/AdvanceStyling");
const db = require("../../models");
const AdvanceStyling = db.AdvanceStyling;
const Op = db.Sequelize.Op;

const UpdateAdvanceStyling = async (req, res) => {
    try {
        const { id, styleType } = req.body;
        const results = await AdvanceStyling.update(
            {
                styleType: styleType,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "style Type not Exists!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "style Type not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                styleType:styleType,
            }
            res.json({
                message: "style Type  Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "style Type Updation Failed!",
            status: "false",
        });
    }
};
module.exports = UpdateAdvanceStyling;
