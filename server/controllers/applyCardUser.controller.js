import ApplyCardUser from "../models/applyCardUser.model.js";
import jwt from "jsonwebtoken"; // Make sure to install this package if you haven't already

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
    // Find the ApplyCardUser document where userId matches the given id
    const user = await ApplyCardUser.findOne({ userId: id }).populate(
      "userId",
      "name mobile"
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const viewSingleUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the ApplyCardUser document where userId matches the given id
    const user = await ApplyCardUser.findById(id).populate(
      "userId",
      "name mobile"
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
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

// export const editUser = async (req, res) => {
//   const { id } = req.params;
//   const { process } = req.body;

//   try {
//     // Check if the first step's status is "active"
//     let walletUpdate = {};
//     if (process[0] && process[0].status === "active") {
//       walletUpdate = { wallet: 110000 };
//     }

//     // Find the user by ID and update the process steps and wallet if needed
//     const updatedUser = await ApplyCardUser.findByIdAndUpdate(
//       id,
//       { 
//         process,
//         ...walletUpdate
//       },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Process updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error("Error updating process:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export const editUser = async (req, res) => {
  const { id } = req.params;
  const { process, amount } = req.body;

  try {
    // Find the user by ID to get the current wallet balance and process state
    const user = await ApplyCardUser.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Correctly parse wallet as a number, defaulting to 0 if undefined
    let updatedWallet = Number(user.wallet) || 0; // or parseFloat(user.wallet) || 0
    console.log("Current wallet balance:", updatedWallet); // Debugging log

    // Ensure process is an array before accessing its elements
    if (Array.isArray(process) && process[0] && process[0].status === "active" && updatedWallet === 0) {
      console.log("Adding 110000 to wallet."); // Debugging log
      updatedWallet += 110000;
    }

    // If an additional amount is specified in the request, convert it to a number and add it to the wallet
    if (amount) {
      updatedWallet += Number(amount); // Convert amount to number
      console.log("Added amount to wallet:", amount); // Debugging log
    }

    // Prepare update object
    const updateFields = {
      process,
      wallet: updatedWallet,
    };

    // Update the user with the new process steps and wallet balance
    const updatedUser = await ApplyCardUser.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );

    res.status(200).json({ message: "Process updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating process:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





export const createUser = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // Assumes Bearer token format

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized: No token provided." });
    }

    // Verify and decode the token to get userId
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized: Invalid token." });
    }

    const userId = decoded.id; // Extract userId from decoded token
    console.log(userId);

    // Destructure required fields from req.body
    const {
      fatherName,
      dob, // This should be in 'DD/MM/YYYY' format or similar
      employmentType,
      currentAddress,
      email,
      gender,
      houseNo,
      pincode,
      aadharNo,
      pancardNo,
    } = req.body;

    // Validate required fields and provide specific error messages
    if (!fatherName) {
      return res.status(400).json({ error: "Father's name is required." });
    }
    if (!dob) {
      return res.status(400).json({ error: "Date of birth is required." });
    }
    if (!employmentType) {
      return res.status(400).json({ error: "Employment type is required." });
    }
    if (!currentAddress) {
      return res.status(400).json({ error: "Current address is required." });
    }
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }
    if (!gender) {
      return res.status(400).json({ error: "Gender is required." });
    }
    if (!houseNo) {
      return res.status(400).json({ error: "House number is required." });
    }
    if (!pincode) {
      return res.status(400).json({ error: "Pincode is required." });
    }
    if (!aadharNo) {
      return res.status(400).json({ error: "Aadhar number is required." });
    }
    if (!pancardNo) {
      return res.status(400).json({ error: "PAN number is required." });
    }

    // Validate Aadhar and PAN numbers
    if (aadharNo.length !== 12) {
      return res
        .status(400)
        .json({ error: "Aadhar number must be exactly 12 digits." });
    }
    if (pancardNo.length !== 10) {
      return res
        .status(400)
        .json({ error: "PAN number must be exactly 10 characters." });
    }

    // Get file paths for the uploaded images
    const aadharFrontImage = req.files["aadharFrontImage"]
      ? req.files["aadharFrontImage"][0].path
      : null;
    const aadharBackImage = req.files["aadharBackImage"]
      ? req.files["aadharBackImage"][0].path
      : null;
    const pancardImage = req.files["pancardImage"]
      ? req.files["pancardImage"][0].path
      : null;

    // Check if all required images are uploaded
    if (!aadharFrontImage) {
      return res.status(400).json({ error: "Aadhar front image is required." });
    }
    if (!aadharBackImage) {
      return res.status(400).json({ error: "Aadhar back image is required." });
    }
    if (!pancardImage) {
      return res.status(400).json({ error: "PAN card image is required." });
    }

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

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error.message);

    // Handle duplicate key error
    if (error.code === 11000) {
      if (error.keyValue && error.keyValue.pancardNo) {
        return res
          .status(400)
          .json({ error: "This PAN card number already exists." });
      }
      if (error.keyValue && error.keyValue.aadharNo) {
        return res
          .status(400)
          .json({ error: "This Adhar card number already exists." });
      }
      if (error.keyValue && error.keyValue.email) {
        return res
          .status(400)
          .json({ error: "This email address is already registered." });
      }
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};
