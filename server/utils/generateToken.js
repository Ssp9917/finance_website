import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

	// Set token as a cookie if desired
	res.cookie('token', token, { httpOnly: true, secure: true }); // Adjust cookie options as necessary

	return token; // Return the token for use in the response
};
