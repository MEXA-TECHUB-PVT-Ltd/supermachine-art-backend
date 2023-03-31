// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlan;

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const { id, name, price, userType, noOfUsers, noOfImagesGenerates, validity, freeTrail, freeTrailDays, feature } = req.body;
        const results = await Plan.update(
            {
                name: name,
                price: price,
                userType: userType,
                noOfUsers: noOfUsers,
                noOfImagesGenerates: noOfImagesGenerates,
                validity: validity,
                freeTrail: freeTrail,
                freeTrailDays: freeTrailDays,
                feature: feature,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "Plan not Existeds!",
                status: false,
            });
        } else {
            if (results.includes(0)) {
                res.json({
                    message: "Plan not Exists!",
                    status: false,
                });
            } else {
                const result = await Plan.findOne({where:{id:id}});
                res.json({
                    message: "Plan  Updated Successfully!",
                    status: true,
                    result,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UpdateSubscriptionPlan;
