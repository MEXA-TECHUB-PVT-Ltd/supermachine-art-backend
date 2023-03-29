// const User = require("../../models/User");
const db = require("../../models");
const ImageFilters = db.ImageFilters;

const UpdateFilter = async (req, res) => {
    try {
        const { id, name } = req.body;
        const results = await ImageFilters.update(
            {
                name: name,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "No Filters Found try Again!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "Image Filter not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                name: name,
            }
            res.json({
                message: "Image Filters Updated Successfully!",
                status: true,
                result,
            });
        }
        }
    } catch (err) {
        res.json({
            message: "error",
            result: false,
        });
    }
};
module.exports = UpdateFilter;
