import mongoose from 'mongoose';

const applyCardUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the logged-in user
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ['Employed', 'Self-Employed', 'Unemployed', 'Student', 'Retired'], // Enum for employment types
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Enum for gender options
    required: true,
  },
  houseNo: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
    unique: true,
    minlength: 12,
    maxlength: 12,
  },
  pancardNo: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  aadharFrontImage: {
    type: String,
    required: true,
  },
  aadharBackImage: {
    type: String,
    required: true,
  },
  pancardImage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ApplyCardUser = mongoose.model('ApplyCardUser', applyCardUserSchema);

export default ApplyCardUser;