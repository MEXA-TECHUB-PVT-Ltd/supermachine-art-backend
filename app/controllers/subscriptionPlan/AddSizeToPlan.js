// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlanImageSize;

const AddSizeToPlan = async (req, res) => {
    try {
        const { SubscriptionPlanID, ImageSize ,SizeID } = req.body;
        const data = {
            SubscriptionPlanID:SubscriptionPlanID,
            ImageSize:ImageSize,
            SizeID:SizeID

        }
        Plan.create(data).then(result=>{
            res.json({
                message: "Plan Updated Successfully!",
                status:true,
                result,
            });

        });
            // res.json({
            //     message: "Plan not Existeds!",
            //     status:false,
            // });
    } catch (err) {
        res.json({
            message: "Plan Updation Failed!",
            status: false,
        });
    }
};
module.exports = AddSizeToPlan;
