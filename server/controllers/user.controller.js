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
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: 'Invalid username or password' });
		}

		// Generate a token using the function and set it as a cookie
		const token = generateTokenAndSetCookie(user._id, res);

		// Send user details along with the token
		res.status(200).json({
			_id: user._id,
			name: user.name,
			mobile: user.mobile,
			city: user.city,
			income: user.income,
			terms: user.terms,
			token, // Include token in the response
		});
	} catch (error) {
		console.log('Error in login controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
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


export const getAllUsers = async (req, res) => {
	try {
		// Fetch all users from the database
		const users = await User.find({}).select("-password"); // Exclude password from response for security

		// Check if users exist
		if (!users || users.length === 0) {
			return res.status(404).json({ error: "No users found" });
		}

		// Send the list of users in response
		res.status(200).json(users);
	} catch (error) {
		console.log("Error in getAllUsers controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
