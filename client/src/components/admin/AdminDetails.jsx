import React, { useState, useEffect } from "react";
import axios from "../../config/axiosConfig";

const AdminDetails = () => {
  const [admin, setAdmin] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    footerNo: "",
    footerEmail: "",
    qrcode: null,
  });

  const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL

  // Fetch admin details on component mount
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get("/admin/getAdminDetails");
        setAdmin(response.data);
        setFormData({
          footerNo: response.data.footerNo,
          footerEmail: response.data.footerEmail,
        });
      } catch (error) {
        console.error("Error fetching admin details", error);
      }
    };

    fetchAdminDetails();
  }, []);

  // Handle form input changes for footerNo and footerEmail
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file upload for QR code
  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, qrcode: e.target.files[0] }));
  };

  // Submit updated details
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("footerNo", formData.footerNo);
    updateData.append("footerEmail", formData.footerEmail);
    if (formData.qrcode) {
      updateData.append("qrcode", formData.qrcode);
    }

    try {
      const response = await axios.put("/admin/updateAdminDetails", updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAdmin(response.data.admin); // Update displayed data after successful update
      setIsEditing(false); // Close the edit form
    } catch (error) {
      console.error("Error updating admin details", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Details</h1>

      {admin ? (
        <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-md">
          <div className="mb-4">
            <p className="font-semibold">Email:</p>
            <p className="text-gray-700">{admin.email}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Footer Phone Number:</p>
            <p className="text-gray-700">{admin.footerNo}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Footer Email:</p>
            <p className="text-gray-700">{admin.footerEmail}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">QR Code:</p>
            {admin.qrcode ? (
              <img
                src={backendUrl+'/'+admin.qrcode}
                alt="QR Code"
                className="w-24 h-24 object-contain border rounded-md"
              />
            ) : (
              <p className="text-gray-500">No QR Code available</p>
            )}
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Edit Details
          </button>
        </div>
      ) : (
        <p>Loading admin details...</p>
      )}

      {/* Edit Form Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Admin Details</h2>
            <form onSubmit={handleUpdate} encType="multipart/form-data">
              <div className="mb-4">
                <label className="block font-semibold">Footer Phone Number:</label>
                <input
                  type="text"
                  name="footerNo"
                  value={formData.footerNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Footer Email:</label>
                <input
                  type="email"
                  name="footerEmail"
                  value={formData.footerEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">QR Code:</label>
                <input
                  type="file"
                  name="qrcode"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded mr-2 hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDetails;
