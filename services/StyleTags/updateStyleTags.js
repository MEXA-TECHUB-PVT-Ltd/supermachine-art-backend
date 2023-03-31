// const StyleTags = require("../../models/StyleTags");
const db = require("../../models");
const StyleTags = db.StyleTags;

const UpdateStyleTags = async (req, res) => {
    try {
        const { TagID,AdvanceStylingID, Tags } = req.body;
        const results = await StyleTags.update(
            {
                Tags: Tags,
            },
            { where: { id: TagID, AdvanceStylingID:AdvanceStylingID } }
        )
        if (!results) {
            res.json({
                message: "Style Tag not Existeds!",
                status: false,
            });
        } else {
            if(results.includes(0)){
                res.json({
                    message: "style Tag not Exists!",
                    status: false,
                });    
            }else {
            const result = {
                Tags: Tags,
            }
            res.json({
                message: "style Tag  Updated Successfully!",
                status: true,
                result,
            });
        }
        }    } catch (err) {
        res.json({
            message: "Error!",
            status: False,
        });
    }
};
module.exports = UpdateStyleTags;
