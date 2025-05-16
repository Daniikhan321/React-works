import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-12 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        HOW IT WORKS
      </h2>

      {/* Three Columns */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        {/* Upload a Photo */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3">
          <div className="w-16 h-16 mb-4">
            <img
              src="/src/assets/tooth.svg"
              alt="Tooth Icon"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            Upload a Photo
          </h3>
          <p className="text-gray-600">
            Snap Or Upload a Clear Image of Your Teeth
          </p>
        </div>

        {/* AI Analysis */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3">
          <div className="w-16 h-16 mb-4">
            <img
              src="/src/assets/tooth.svg"
              alt="Tooth Icon"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            AI Analysis
          </h3>
          <p className="text-gray-600">
            Our System Analyzes Your Dental Condition
          </p>
        </div>

        {/* Get Matched */}
        <div className="flex flex-col items-center text-center p-3 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3">
          <div className="w-16 h-16 mb-4">
            <img
             src="/src/assets/tooth.svg"
              alt="Tooth Icon"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">
            Get Matched
          </h3>
          <p className="text-gray-600">
            Instantly See Your Personalized Provider Recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;