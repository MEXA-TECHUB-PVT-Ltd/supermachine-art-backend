const Plan = require("../../models/subscriptionPlan");

const AddSizeToPlan = async (req, res) => {
    try {
        const { plan_id, imageSize,size_id } = req.body;
        console.log("ID "+ plan_id);
        const result = await Plan.findOneAndUpdate({ _id: plan_id },
            {
                $push: { imageDownloadSize: imageSize }
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                status:false,
            });
        } else {
            res.json({
                message: "Plan Updated Successfully!",
                status:true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Plan Updation Failed!",
            status: false,
        });
    }
};
module.exports = AddSizeToPlan;
