const User = require("../../../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sign_in_All = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email: email });
	if (!user) {
		await res.json({
			message: "No User Found!",
			status: false,
		});
	} else {
		const validPassword = await bcrypt.compare(password, user.password);
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
				status: true,
				user,
				token
			});
		}
	}
};
module.exports = sign_in_All;