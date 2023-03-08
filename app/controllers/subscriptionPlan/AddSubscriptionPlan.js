// const Plan = require("../../models/subscriptionPlan");
const db = require("../../models");
const Plan = db.subscriptionPlan;
const Op = db.Sequelize.Op;

const AddSubscriptionPlan = async (req, res) => {
    try {
        const { name, price, userType, noOfUsers, noOfImagesGenerates, validity, freeTrail, freeTrailDays } = req.body;
        if (!name) {
            await res.json({
                message: "name is required",
                status: false,
            });
        } else if (!price) {
            await res.json({
                message: "Price is required",
                status: false,
            });
        } else
            if (!userType) {
                await res.json({
                    message: "userType is required",
                    status: false,
                });
            } else
                if (!noOfUsers) {
                    await res.json({
                        message: "No. Of Users is required",
                        status: false,
                    });
                } else
                    if (!noOfImagesGenerates) {
                        await res.json({
                            message: "No. Of Images Generates is required",
                            status: false,
                        });
                    } else if (!validity) {
                        await res.json({
                            message: "validity is required",
                            status: false,
                        });
                    } else if (!freeTrail) {
                        await res.json({
                            message: "free Trail is required",
                            status: false,
                        });
                    } else {
                        if (!freeTrailDays) {
                            freeTrailDays = '7';
                        }
                        const plan = {
                            name: name,
                            price: price,
                            userType: userType,
                            noOfUsers: noOfUsers,
                            noOfImagesGenerates: noOfImagesGenerates,
                            validity: validity,
                            freeTrail: freeTrail,
                            freeTrailDays: freeTrailDays,

                        };
                        Plan.create(plan).then(result => {
                            res.json({
                                message: "Subscription Plan Added Successfully!",
                                status: true,
                                plan,
                            });

                        })
                    }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddSubscriptionPlan;