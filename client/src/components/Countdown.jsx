import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const stats = [
  { id: 1, label: 'Finished Projects', value: 12627, icon: '📄' },
  { id: 2, label: 'Working Hours', value: 1470, icon: '⏱️' },
  { id: 3, label: 'Happy Clients', value: 14647, icon: '😊' },
  { id: 4, label: 'Issued Cards', value: 22527, icon: '💳' },
];

const Countdown = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when the component first mounts
    setStartAnimation(true);
  }, []);

  return (
    <div className=" bg-gray-50 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 text-center rounded-lg shadow-lg relative overflow-hidden">
            <div className="text-5xl mb-4">{stat.icon}</div>
            {startAnimation && (
              <h3 className="text-4xl font-bold">
                <CountUp start={0} end={stat.value} duration={3} />
              </h3>
            )}
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
