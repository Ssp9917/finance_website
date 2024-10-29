import React from 'react';
import { FaRegUser, FaMobileAlt, FaFileAlt, FaCreditCard } from 'react-icons/fa';

const steps = [
    {
        step: '01',
        title: 'Online Registration',
        list: 'First step of process',
        description: 'First step of process is filling your personal details.',
        icon: <FaRegUser />,
    },
    {
        step: '02',
        title: 'Mobile Verification',
        list: 'Our second easy',
        description: 'Second step is verify your device with mobile verification.',
        icon: <FaMobileAlt />,
    },
    {
        step: '03',
        title: 'Filling Out a Form',
        list: 'Important third step',
        description: 'Third step is filling out a form with KYC document and personal and professional information and stay forward.',
        icon: <FaFileAlt />,
    },
    {
        step: '04',
        title: 'Using a card',
        list: 'Solution in final step',
        description: 'After registration, you can use your credit card with up to 80k credit limit.',
        icon: <FaCreditCard />,
    },
];

const Card = ({ step, title, description, icon, list }) => {
    return (
        <div className="bg-white shadow-lg p-3 flex flex-col justify-between items-center text-center h-full rounded-lg">
            {/* Title and Description Section */}
            <div>
                <p className="text-xl md:text-2xl font-semibold text-[#212529] mb-2">{title}</p>
                <p className="text-sm md:text-base text-gray-600 mb-4">{list}</p>
                <div className="my-6 flex justify-center group">
                    <span className="text-3xl md:text-4xl border-l-4 border-[#590039] bg-[#ebe8e882] w-[80px] h-[60px] md:w-[100px] md:h-[70px] flex items-center justify-center relative transition-colors duration-2000">
                        {icon}
                        <div className="bg-[#590039] text-white rounded-full text-sm md:text-lg w-8 md:w-[33px] h-8 md:h-[33px] flex items-center justify-center absolute top-5 -right-3 md:-right-4 transition-colors duration-2000 group-hover:bg-[#7e8389]">
                            {step}
                        </div>
                    </span>
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-700 mb-6">{description}</p>
            </div>
        </div>
    );
};

const Process = () => {
    return (
        <div className="py-10 md:py-12 bg-gray-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-[#212529] font-bold mb-8">How to order a New Card</h2>
            <div className="px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {steps.map((stepData, index) => (
                        <div key={index} className="w-full">
                            <Card {...stepData} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
