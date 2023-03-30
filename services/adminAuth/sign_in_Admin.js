// const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const Admin = db.admin;

const sign_in_Admin = async (req, res) => {
	const { email, password } = req.body;
	console.log("Email : "+email);
	const user = await Admin.findOne({
		where: { email: email },
	  });	
	  if (!user) {
		res.json({
			message: "No users found",
			status: false,
		})
	} else {
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			res.json({
				message: "Password Incorrect",
				status: false,
			})
		} else {
			const token = jwt.sign({ _id: user.id }, 'IhTRsIsUwMyHAmKsA', {
				expiresIn: "7d",
			});
			res.json({
				message: "sign In Successfully!",
				status:true,
				user,
				token,
			});
		}
	}
};
module.exports = sign_in_Admin;