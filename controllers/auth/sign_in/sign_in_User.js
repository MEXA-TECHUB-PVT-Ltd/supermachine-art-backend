const User = require("../../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sign_in_User = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	console.log(user);
	if (!user) {
		res.json("No users found");
	} else {
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			res.status(400).send("Incorrect Password");
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
module.exports = sign_in_User;