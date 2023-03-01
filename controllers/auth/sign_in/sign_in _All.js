const User = require("../../../models/User");
const Admin = require("../../../models/Admin");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sign_in_All = async (req, res) => {
	const { email, password } = req.body;
	let user_password = '';
	const user = await User.findOne({ email: email });
	if (!user) {
		const admin = await Admin.findOne({ email });
		if (!admin) {
			await res.json({
				message: "No User Found!",
				status: false,
			});
		} else {
			user_password = admin.password
		}
	} else {
		user_password = user.password
	}
	if (user_password === '') {
		await res.json({
			message: "No User Found!",
			status: false,
		});
	} else {
		const validPassword = await bcrypt.compare(password, user_password);
		if (!validPassword) {
			await res.json({
				message: "Incorrect Password",
				status: false,
			});
		} else {
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: "7d",
			});
			res.json({
				message: "sign In Successfully!",
				status: false,
				user,
				token
			});
		}
	}
};
module.exports = sign_in_All;