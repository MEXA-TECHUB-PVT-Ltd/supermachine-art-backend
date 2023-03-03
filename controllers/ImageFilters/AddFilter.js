const imageFilter = require("../../models/ImageFilters");

const AddFilter = async (req, res) => {
    try {
        const { filterStatus } = req.body;
        if (!filterStatus) {
            res.json({
                message: "filter Status is required",
                status: false,
            });
        } else {
            const result = new imageFilter({ filterStatus });
            result.save();
            await res.json({
                message: "Filter Added Successfully!",
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
module.exports = AddFilter;