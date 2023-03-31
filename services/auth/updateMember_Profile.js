// const User = require("../../models/User");
const db = require("../../models");
const bcrypt = require("bcryptjs");
const User = db.user;

const updateMember_Profile = async (req, res) => {
    try {
        const {id, name, gender,phone , email} = req.body;


        let photo;
        if (req.file) {
            const { path } = req.file;
            photo = path;
        } else {
            photo = ''
        }
        const results = await User.update(
            {
                name: name,
                gender: gender,
                phone:phone,
                profileImage:photo,
                email:email


            }, {
            where: {
                id: id
            }
        })
        if (!results) {
            res.json({
                message: "Profile Not Updated!",
                status: false,
            });
        } else {
            if (results.includes(0)) {
                res.json({
                    message: "Profile not Exists!",
                    status: false,
                });
            } else {
                const result = await User.findOne({
                    where:{id:id}
                })
                res.json({
                    message: "Profile  Updated Successfully!",
                    status: true,
                    result,
                });
            }
        }
    } catch (err) {
        res.json({
            message: "error",
            status: false,
        });
    }
};
module.exports = updateMember_Profile;
