import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const {password, email } = req.body;

		// Check if the mobile number already exists
		const user = await Admin.findOne({ email });

		if (user) {
			return res.status(400).json({ error: "Email already exists" });
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user instance
		const newUser = new Admin({
			password: hashedPassword,
			email
		});

		if (newUser) {
			// Generate JWT token
			const token = generateTokenAndSetCookie(newUser._id, res); // Adjust if necessary

			// Save the new user to the database
			await newUser.save();

			// Send user details and token in response
			res.status(201).json({
				_id: newUser._id,
                email:newUser.email,
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
		const { email, password } = req.body;
		const user = await Admin.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: 'Invalid username or password' });
		}

		// Generate a token using the function and set it as a cookie
		const token = generateTokenAndSetCookie(user._id, res);

		// Send user details along with the token
		res.status(200).json({
			_id: user._id,
			email:user.email,
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