import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { name, mobile, password, city, income, terms } = req.body;

		// Check if the mobile number already exists
		const user = await User.findOne({ mobile });

		if (user) {
			return res.status(400).json({ error: "Mobile Number already exists" });
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user instance
		const newUser = new User({
			name,
			mobile,
			password: hashedPassword,
			city,
			income,
			terms,
		});

		if (newUser) {
			// Generate JWT token
			const token = generateTokenAndSetCookie(newUser._id, res); // Adjust if necessary

			// Save the new user to the database
			await newUser.save();

			// Send user details and token in response
			res.status(201).json({
				_id: newUser._id,
				name: newUser.name,
				mobile: newUser.mobile,
				city: newUser.city,
				income: newUser.income,
				terms: newUser.terms,
				token, // Include the token in the response
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { mobile, password } = req.body;
		const user = await User.findOne({ mobile });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		// Generate a token using a function and return the token
		const token = generateTokenAndSetCookie(user._id); // Assuming this function generates the token

		// Send user details along with the token
		res.status(200).json({
			_id: user._id,
			name: user.name,
			mobile: user.mobile,
			city: user.city,
			income: user.income,
			terms: user.terms,
			token: token, // Include token in the response
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};