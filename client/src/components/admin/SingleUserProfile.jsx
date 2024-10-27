import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from '../../config/axiosConfig'; // Adjust the import based on your axios configuration

const SingleUserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL

    // Function to fetch user details
    const getSingleUserDetail = async () => {
        try {
            const response = await axios.get(`/apply-user/getAllUserDetails/${id}`);
            setUser(response.data); // Assuming response.data contains the user object
        } catch (error) {
            console.error('Error fetching user details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSingleUserDetail();
    }, [id]);

    const formatDOB = (dob) => {
        const date = new Date(dob); // Convert the ISO string to a Date object
        const day = String(date.getDate()).padStart(2, '0'); // Get day and format
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed, so add 1)
        const year = date.getFullYear(); // Get full year
        return `${day}/${month}/${year}`; // Return formatted date as DD/MM/YYYY
    };

    if (loading) {
        return <div className="text-center">Loading...</div>; // Loading state
    }

    if (!user) {
        return <div className="text-center">User not found.</div>; // Handle case where user is not found
    }

    return (
        <div className=" p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="flex-shrink-0">
                    <img
                        src={'https://via.placeholder.com/150'}
                        alt="User"
                        className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
                    />
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="text-3xl font-bold text-gray-800">{user.userId.name}</h2>
                    <p className="text-gray-600 flex items-center">
                        <FaEnvelope className="mr-2" /> {user.email}
                    </p>
                    <p className="text-gray-600 flex items-center">
                        <FaPhone className="mr-2" /> {user.userId.mobile}
                    </p>
                    <p className="text-gray-600 flex items-center">
                        <FaMapMarkerAlt className="mr-2" /> {user.currentAddress}
                    </p>
                    <div className="mt-2">
                        <span className="text-gray-500">Gender: </span>
                        <span className="text-gray-800">{user.gender}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-500">Employment Type: </span>
                        <span className="text-gray-800">{user.employmentType}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-500">Date of Birth: </span>
                        <span className="text-gray-800">{formatDOB(user.dob)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Documents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h4 className="font-medium text-gray-700">Aadhar Front</h4>
                        <img
                            src={backendUrl+'/'+user.aadharFrontImage || 'https://via.placeholder.com/150'}
                            alt="Aadhar Front"
                            className="mt-2 w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h4 className="font-medium text-gray-700">Aadhar Back</h4>
                        <img
                            src={backendUrl+'/'+user.aadharBackImage || 'https://via.placeholder.com/150'}
                            alt="Aadhar Back"
                            className="mt-2 w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h4 className="font-medium text-gray-700">Pancard</h4>
                        <img
                            src={backendUrl+'/'+user.pancardImage || 'https://via.placeholder.com/150'}
                            alt="Pancard"
                            className="mt-2 w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUserProfile;
