import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Admin", adminSchema);

export default User;
