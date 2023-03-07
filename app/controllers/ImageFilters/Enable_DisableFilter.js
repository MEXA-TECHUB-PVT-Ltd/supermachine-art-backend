// const imageFilter = require("../../models/ImageFilters");
const db = require("../../models");
const imageFilter = db.ImageFilters;
const Op = db.Sequelize.Op;
const Enable_DisableFilter = async (req, res) => {
    try {
        const { id, filterStatus } = req.body;
        const result = await imageFilter.update(
            {
                filterStatus: filterStatus,
            },
            { where: { id: id } }
        )
        if (!result) {
            res.json({
                message: "Filter not Exists!",
                status: true,
                result,
            });
        } else {
            res.json({
                message: "Filter Updated Successfully!",
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
module.exports = Enable_DisableFilter;
