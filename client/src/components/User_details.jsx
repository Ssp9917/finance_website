import React, { useState } from "react";
import axios from "../config/axiosConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const User_details = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      aadharNo,
      pancardNo,
      aadharFrontImage,
      aadharBackImage,
      pancardImage,
    } = formData;

    // Validation
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
      !pincode ||
      !aadharNo ||
      !pancardNo ||
      !aadharFrontImage ||
      !aadharBackImage ||
      !pancardImage
    ) {
      Swal.fire("Error", "Please fill all the fields.", "error");
      return;
    }
    if (aadharNo.length !== 12) {
      Swal.fire("Error", "Aadhar Number should be exactly 12 digits.", "error");
      return;
    }
    if (pancardNo.length !== 10) {
      Swal.fire("Error", "PAN Number should be exactly 10 characters.", "error");
      return;
    }

    // Prepare form data
    const data = new FormData();
    const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    data.append("dob", dob);
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Submit data
    try {
      const response = await axios.post("/apply-user/create-user", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        Swal.fire("Success", "User created successfully!", "success");
        navigate("/profile");
      } else {
        Swal.fire("Error", response.error);
      }
    } catch (error) {
      Swal.fire("Error", error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className=" w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">User Details</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Personal Information */}
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

          {/* Date of Birth */}
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

          {/* Gender, Employment Type, Address */}
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

          <input
            type="text"
            name="houseNo"
            placeholder="House/Flat No."
            value={formData.houseNo}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            name="currentAddress"
            placeholder="Current Address Line 1"
            value={formData.currentAddress}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Identity Information */}
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
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_details;
