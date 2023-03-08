// const User = require("../../models/User");
const db = require("../../models");
const ImageFilters = db.ImageFilters;

const UpdateFilter = async (req, res) => {
    try {
        const { id, name } = req.body;
        const result = await ImageFilters.update(
            {
                name: name,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "No Filters Found try Again!",
                status: false,
            });
        } else {
            res.json({
                message: "Image Filters Updated Successfully!",
                status: true,
                result: result,
            });
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = UpdateFilter;
