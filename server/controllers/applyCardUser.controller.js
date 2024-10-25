import ApplyCardUser from "../models/applyCardUserModel.js";

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await ApplyCardUser.find().populate("userId", "name mobile");
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// View a single user
export const viewSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await ApplyCardUser.findById(id).populate("userId", "name mobile");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Edit a user
export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await ApplyCardUser.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await ApplyCardUser.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// Create a new applyCardUser
import ApplyCardUser from "../models/ApplyCardUser.js"; // Import your model

export const createUser = async (req, res) => {
    try {
        const {
            userId,
            fatherName,
            dob,
            employmentType,
            currentAddress,
            email,
            gender,
            houseNo,
            pincode,
            aadharNo,
            pancardNo,
        } = req.body;

        // Get file paths for the uploaded images
        const aadharFrontImage = req.files["aadharFrontImage"] ? req.files["aadharFrontImage"][0].path : "";
        const aadharBackImage = req.files["aadharBackImage"] ? req.files["aadharBackImage"][0].path : "";
        const pancardImage = req.files["pancardImage"] ? req.files["pancardImage"][0].path : "";

        // Create a new ApplyCardUser document
        const newUser = new ApplyCardUser({
            userId,
            fatherName,
            dob,
            employmentType,
            currentAddress,
            email,
            gender,
            houseNo,
            pincode,
            aadharNo,
            pancardNo,
            aadharFrontImage,
            aadharBackImage,
            pancardImage,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

