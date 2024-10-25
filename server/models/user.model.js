import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		income:{
			type:String,
			required:true,
		},
		city:{
			type:String,
			required:true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		terms:{
			type:Boolean,
			required:true
		}
		// gender: {
		// 	type: String,
		// 	required: true,
		// 	enum: ["male", "female"],
		// },
		// profilePic: {
		// 	type: String,
		// 	default: "",
		// },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;