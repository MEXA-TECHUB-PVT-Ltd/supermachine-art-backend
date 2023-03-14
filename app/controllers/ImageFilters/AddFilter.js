// const imageFilter = require("../../models/ImageFilters");
const db = require("../../models");
const imageFilter = db.ImageFilters;
const Op = db.Sequelize.Op;
const AddFilter = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            res.json({
                message: "name is required",
                status: false,
            });
        } else {
            const data = {
                name: name,
                status:true
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