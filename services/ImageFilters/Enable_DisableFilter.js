// const imageFilter = require("../../models/ImageFilters");
const db = require("../../models");
const imageFilter = db.ImageFilters;
const Op = db.Sequelize.Op;
const Enable_DisableFilter = async (req, res) => {
    try {
        const { id, status } = req.body;
        const results = await imageFilter.update(
            {
                status: status,
            },
            { where: { id: id } }
        )
        if (!results) {
            res.json({
                message: "Filter not Exists!",
                status: true,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "Filter not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                status: status,
            }
            res.json({
                message: "Filter Updated Successfully!",
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
module.exports = Enable_DisableFilter;
