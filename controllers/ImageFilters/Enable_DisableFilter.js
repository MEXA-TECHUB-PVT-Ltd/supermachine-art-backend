const imageFilter = require("../../models/ImageFilters");

const Enable_DisableFilter = async (req, res) => {
    try {
        const { _id } = req.body;
        const result = await imageFilter.findOneAndUpdate({ _id: _id },
            {
                filterStatus: !filterStatus,
            },
            {
                new: true
            })
        if (!result) {
            res.json({
                message: "Filter not Exists!",
                status: true,
                result,
            });
        } else {
            res.json({
                message: "Filter Updated Successfully!",
                status:true,
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
module.exports = Enable_DisableFilter;
