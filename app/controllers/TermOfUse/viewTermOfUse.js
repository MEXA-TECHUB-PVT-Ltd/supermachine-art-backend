// const TermOfUse = require("../../models/termOfUse");
const db = require("../../models");
const TermOfUse = db.termOfUse;

const ViewTermOfUse = async (req, res) => {
	try {
		const result = await TermOfUse.findAll();
		if (!result) {
			res.json({
                message: "No TermOfUse found",
                status:false,
            });
		} else {
			res.json({
                message: "Term Of Use Data!",
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
module.exports = ViewTermOfUse;