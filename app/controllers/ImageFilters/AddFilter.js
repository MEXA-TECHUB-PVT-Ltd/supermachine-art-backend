// const imageFilter = require("../../models/ImageFilters");
const db = require("../../models");
const imageFilter = db.ImageFilters;
const Op = db.Sequelize.Op;
const AddFilter = async (req, res) => {
    try {
        const { filterStatus } = req.body;
        if (!filterStatus) {
            res.json({
                message: "filter Status is required",
                status: false,
            });
        } else {
            const data = {
                filterStatus: filterStatus,
            }
            // const result = await new LicenseAgreement({ title, content });
            imageFilter.create(data).then(result => {
                res.json({
                    message: "Filter Added Successfully!",
                    status: true,
                    result,
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
module.exports = AddFilter;