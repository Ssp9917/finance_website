import React, { useState } from 'react';

const User_details = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 md:p-8">
                {/* Step Indicator */}
                <div className="flex justify-center mb-8 space-x-8">
                    <div className={`flex items-center space-x-2 ${step === 1 ? 'text-yellow-500' : 'text-gray-400'}`}>
                        <div className="rounded-full bg-yellow-500 p-2 text-white">
                            <i className="fas fa-user"></i>
                        </div>
                        <span className="hidden sm:inline">Personal</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${step === 2 ? 'text-yellow-500' : 'text-gray-400'}`}>
                        <div className={`rounded-full ${step === 2 ? 'bg-yellow-500 text-white' : 'bg-gray-400 text-white'} p-2`}>
                            <i className="fas fa-id-card"></i>
                        </div>
                        <span className="hidden sm:inline">Identity</span>
                    </div>
                </div>

                {/* Personal Information Form */}
                {step === 1 && (
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Father Name (As per ID Proof)"
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Date of Birth (Day, Month, Year) */}
                            <div className="grid grid-cols-3 gap-2">
                                <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                    <option>Day</option>
                                    {/* Day options */}
                                </select>
                                <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                    <option>Month</option>
                                    {/* Month options */}
                                </select>
                                <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                    <option>Year</option>
                                    {/* Year options */}
                                </select>
                            </div>

                            {/* Gender */}
                            <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                <option>Gender</option>
                                {/* Gender options */}
                            </select>

                            {/* Employment Type */}
                            <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                <option>Employment Type</option>
                                {/* Employment options */}
                            </select>

                            {/* House/Flat No */}
                            <input
                                type="text"
                                placeholder="House/Flat No."
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Current Address Line 1 */}
                            <input
                                type="text"
                                placeholder="Current Address Line 1"
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Pincode */}
                            <input
                                type="text"
                                placeholder="Pincode"
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
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Identity Information</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Identity fields (add fields as needed) */}
                            <input
                                type="text"
                                placeholder="Aadhaar Number"
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <input
                                type="text"
                                placeholder="Pan Card Number"
                                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Aadhaar Front Image */}
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-gray-700">Upload Aadhaar Front Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                />
                            </div>

                            {/* Aadhaar Back Image */}
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-gray-700">Upload Aadhaar Back Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                />
                            </div>

                            {/* PAN Card Image */}
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-gray-700">Upload PAN Card Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                                />
                            </div>

                            {/* Back Button */}
                            <button
                                type="button"
                                onClick={prevStep}
                                className="mt-4 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
                            >
                                Back
                            </button>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-4 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User_details;
