// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlan;

const UpdateSubscriptionPlan = async (req, res) => {
    try {
        const {id, name, price, userType, noOfUsers, noOfImagesGenerates, validity, freeTrail, freeTrailDays } = req.body;
        const result = await Plan.update(
            {
                name: name,
                price: price,
                userType: userType,
                noOfUsers: noOfUsers,
                noOfImagesGenerates: noOfImagesGenerates,
                validity: validity,
                freeTrail: freeTrail,
                freeTrailDays: freeTrailDays,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Plan not Existeds!",
                status: false,
                result,
            });
        } else {
            res.json({
                message: "Plan Updated Successfully!",
                status: true,
                result,
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = UpdateSubscriptionPlan;
