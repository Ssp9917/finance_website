// Process.js - Main component rendering the list of steps
import React from 'react';
import { FaRegUser, FaMobileAlt, FaFileAlt, FaCreditCard } from 'react-icons/fa';

const steps = [
    {
        step: '01',
        title: 'Online Registration',
        description: 'First step of process is filling your personal details.',
        icon: <FaRegUser />,
    },
    {
        step: '02',
        title: 'Mobile Verification',
        description: 'Second step is verify your device with mobile verification.',
        icon: <FaMobileAlt />,
    },
    {
        step: '03',
        title: 'Filling Out a Form',
        description: 'Third step is filling out a form with KYC document.',
        icon: <FaFileAlt />,
    },
    {
        step: '04',
        title: 'Using a card',
        description: 'After registration, you can use your credit card with up to 80k credit limit.',
        icon: <FaCreditCard />,
    },
];

const Card = ({ step, title, description, icon }) => {
    return (
        <div className="bg-white shadow-lg p-5 h-[230px] rounded-lg flex flex-col justify-between items-center text-center">
            {/* Icon Section */}
            <div className="text-3xl text-purple-700 mb-2">
                {icon}
            </div>
            {/* Title and Description Section */}
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            {/* Step Section */}
            <div className="mt-4">
                <span className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">
                    {step}
                </span>
            </div>
        </div>
    );
};


const Process = () => {
    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">How to order a New Card</h2>
            <div className="px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {steps.map((stepData, index) => (
                        <div key={index} className="w-full md:w-[20%]">
                            <Card {...stepData} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
