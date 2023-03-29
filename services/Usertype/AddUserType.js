// const UserType = require("../../models/UserType");
const db = require("../../models");
const UserType = db.UserType;
const Op = db.Sequelize.Op;

const AddUserType = async (req, res) => {
    try {
        const { type } = req.body;
        if (!type) {
            res.json({
                message: "type is required",
                status: false,
            });
        } else {
            const usertype ={
                type:type,
            }
            UserType.create(usertype).then(result => {
                res.json({
                    message: "type Added Successfully!",
                    status: true,
                    result,
                });
            });
        }
    } catch (err) {
        res.json({
            message: "Error!",
            status: false,
        });
    }
};
module.exports = AddUserType;