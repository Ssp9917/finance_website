import React, { useContext, useState } from "react";
import axios from "../config/axiosConfig";
import { UserAuthContext } from "../context/UserAuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const User_details = () => {
  const [step, setStep] = useState(1);
  // const {user} = useContext(UserAuthContext)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // userId:"",
    fatherName: "",
    email: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    employmentType: "",
    houseNo: "",
    currentAddress: "",
    pincode: "",
    aadharNo: "",
    pancardNo: "",
    aadharFrontImage: null,
    aadharBackImage: null,
    pancardImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateStep1 = () => {
    const {
      fatherName,
      email,
      day,
      month,
      year,
      gender,
      employmentType,
      houseNo,
      currentAddress,
      pincode,
    } = formData;
    if (
      !fatherName ||
      !email ||
      !day ||
      !month ||
      !year ||
      !gender ||
      !employmentType ||
      !houseNo ||
      !currentAddress ||
      !pincode
    ) {
      Swal.fire(
        "Error",
        "Please fill all fields in Personal Information",
        "error"
      );
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const {
      aadharNo,
      pancardNo,
      aadharFrontImage,
      aadharBackImage,
      pancardImage,
    } = formData;
    if (
      !aadharNo ||
      !pancardNo ||
      !aadharFrontImage ||
      !aadharBackImage ||
      !pancardImage
    ) {
      Swal.fire(
        "Error",
        "Please fill all fields in Identity Information",
        "error"
      );
      return false;
    }
    if (aadharNo.length !== 12) {
      Swal.fire("Error", "Aadhar Number should be exactly 12 digits", "error");
      return false;
    }
    if (pancardNo.length !== 10) {
      Swal.fire("Error", "PAN Number should be exactly 10 characters", "error");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep1()) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const data = new FormData();
    const { day, month, year, ...rest } = formData;
    const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

    data.append("dob", dob);
    for (const key in rest) {
      data.append(key, rest[key]);
    }

    try {
      const response = await axios.post("/apply-user/create-user", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status == 201) {
        Swal.fire("Success", "User created successfully!", "success");
        navigate("/profile");
      } else {
        Swal.fire("Error", response.error);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
        {/* Step Indicator */}
        <div className="flex justify-center mb-8 space-x-8">
          <div
            className={`flex items-center space-x-2 ${
              step === 1 ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <div className="rounded-full bg-yellow-500 p-2 text-white">
              <i className="fas fa-user"></i>
            </div>
            <span className="hidden sm:inline">Personal</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              step === 2 ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <div
              className={`rounded-full ${
                step === 2
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-400 text-white"
              } p-2`}
            >
              <i className="fas fa-id-card"></i>
            </div>
            <span className="hidden sm:inline">Identity</span>
          </div>
        </div>

        {/* Personal Information Form */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Personal Information
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fatherName"
                placeholder="Father Name (As per ID Proof)"
                value={formData.fatherName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Date of Birth (Day, Month, Year) */}
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Year</option>
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Gender */}
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {/* Employment Type */}
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Employment Type</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
              </select>

              {/* House/Flat No */}
              <input
                type="text"
                name="houseNo"
                placeholder="House/Flat No."
                value={formData.houseNo}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Current Address Line 1 */}
              <input
                type="text"
                name="currentAddress"
                placeholder="Current Address Line 1"
                value={formData.currentAddress}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Pincode */}
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Next Button */}
              <button
                type="button"
                onClick={nextStep}
                className="col-span-1 md:col-span-2 mt-4 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* Identity Information Form */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Identity Information
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="aadharNo"
                placeholder="Aadhar Number"
                value={formData.aadharNo}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                name="pancardNo"
                placeholder="Pancard Number"
                value={formData.pancardNo}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

              {/* Aadhar Front Image Upload */}
              <input
                type="file"
                name="aadharFrontImage"
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3"
              />
              <input
                type="file"
                name="aadharBackImage"
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3"
              />
              <input
                type="file"
                name="pancardImage"
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-3"
              />

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="py-3 px-6 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default User_details;
