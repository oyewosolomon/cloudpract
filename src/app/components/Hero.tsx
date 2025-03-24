import React from 'react';

const Hero: React.FC = () => {
  return (
    
    <section className="text-black mx-auto h-screen max-w-6xl">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full ">
            {/* Text Content */}
            <div>
            <h1 className="text-5xl font-extrabold leading-tight">
                Master Cloud Computing with CloudPracts
            </h1>
            <p className="text-lg mt-4">
                Your pathway to certification for Microsoft Azure, Google Cloud, and AWS.
            </p>
            <div className="mt-6 space-x-4">
                <button className="bg-white text-red-600 px-6 py-3 rounded shadow hover:bg-gray-100">
                Explore Courses
                </button>
                <button className="bg-red-800 text-white px-6 py-3 rounded shadow hover:bg-red-700">
                Get Started
                </button>
            </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-center items-center h-full">
            <img
                src="/assets/cloud-server-3.svg" // Replace with actual image URL
                alt="Cloud computing illustration"
                className="max-w-full md:w-3/4"
            />
            </div>
        </div>
    </section>
  );
};

export default Hero;