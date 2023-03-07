// const imageSize = s("../../models/ImgSizeRatio");
const db = require("../../models");
const imageSize = db.ImgSizeRatio;
const Op = db.Sequelize.Op;

const deleteimageSizeRatio = async (req, res) => {
	try {
		const result = await imageSize.destroy(
			// {
			//     onDelete: 'CASCADE',
			// },
			{
				where: { id: req.params.id }
			}
		).then((result) => {
			if (result == 1) {
				res.json({
					message: "image Size Delected Successfully!",
					status: true,
					result,
				});
			} else {
				res.json({
					message: "No image Size found",
					status: false,
					result,
				});
			}

		});
	} catch (err) {
		res.json({
			message: "error",
			status: false,
		});
	}
};
module.exports = deleteimageSizeRatio;