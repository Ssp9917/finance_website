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
    qrcode: {
      type: String, // URL of the QR code image
      default: "", // You can specify a default image URL if needed
    },
    footerNo: {
      type: String,
      default: "1234567890", // Default phone number
    },
    footerEmail: {
      type: String,
      default: "info@example.com", // Default footer email
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
