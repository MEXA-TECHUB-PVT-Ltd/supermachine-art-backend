// const Plan = require("../../models/subscriptionPlan");

const db = require("../../models");
const Plan = db.subscriptionPlanImageSize;
const removeAlotedSize = async (req, res) => {
    try {
        const { id } = req.params.id;
        console.log("ID :    " + id);
        const result = await Plan.destroy({ where: { id: req.params.id } });
        if (!result) {
            res.json({
                message: "Plan Size not Exists!",
                status: false
            });
        } else {
            res.json({
                message: "Size Removed Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error",
            status: false,
        });
    }
};
module.exports = removeAlotedSize;
