const User = require("../../../models/User");
const Admin = require("../../../models/Admin");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sign_in_All = async (req, res) => {
	const { email, password } = req.body;
	let user_password = '';
	const user = await User.findOne({ email:email });
	if (!user) {
		const admin = await Admin.findOne({ email });
		if (!admin) {
			res.json("No users found");
		} else {
			user_password = admin.password
		}
	} else {
		user_password = user.password
	}
	if (user_password === '') {
		console.log(user_password);
		res.json("No users found");
	} else {
		const validPassword = await bcrypt.compare(password, user_password);
		if (!validPassword) {
			res.json("Incorrect Password");
		} else {
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
				expiresIn: "7d",
			});
			res.json({
				message:"sign In Successfully!",
				user,
				token,
			});
		}
	}
};
module.exports = sign_in_All;