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
        <div className="bg-white shadow-lg p-5 flex flex-col justify-between items-center text-center h-full">
            {/* Title and Description Section */}
            <div>
                <p className="text-lg text-[24px] mb-2">{title}</p>
                <p>{list}</p>
                <div className="my-8 flex justify-center group">
                    <span className="text-[35px] border-l-4 border-[#590039] bg-[#ebe8e882] w-[100px] h-[70px] relative flex items-center ps-2 transition-colors duration-2000">
                        {icon} 
                        <div className="bg-[#590039] text-white rounded-full text-[20px] w-[33px] absolute top-5 -right-4 transition-colors duration-2000 group-hover:bg-[#7e8389]">
                            {step}
                        </div>
                    </span>
                </div>
                <p className="text-sm text-[#212529] text-[16px] mb-10 ">{description}</p>
            </div>
        </div>
    );
};

const Process = () => {
    return (
        <div className="py-12 bg-gray-50">
            <h2 className="text-5xl text-center text-[#212529] mb-8">How to order a New Card</h2>
            <div className="px-4">
                <div className="flex gap-8 justify-center">
                    {steps.map((stepData, index) => (
                        <div key={index} className="w-full md:w-[30%]">
                            <Card {...stepData} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
