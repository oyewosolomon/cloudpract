import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Courses: React.FC = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Popular Courses</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          <Link
            href="/courses/azure-fundamentals"
            className="block bg-[#f3f3f7] shadow-sm p-6 hover:shadow-red-300 rounded-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">Azure Fundamentals</h3>
              <img
                src="/assets/azure-cloud-logo.svg"
                alt="Azure"
                className="ml-3 w-8 h-8"
              />
            </div>
            <p className="mt-2 mb-5 text-gray-600">
              Prepare for the Azure Fundamentals certification exam with comprehensive material.
            </p>
            <FaArrowRight className="mt-28" />
          </Link>

          <Link
            href="/courses/aws-solutions-architect"
            className="block bg-[#f3f3f7] shadow-sm p-6 hover:shadow-red-300 rounded-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">AWS Solutions Architect</h3>
              <img
                src="/assets/aws-cloud-logo.svg"
                alt="AWS"
                className="ml-3 w-8 h-8"
              />
            </div>
            <p className="mt-2 mb-5 text-gray-600">
              Prepare for the AWS Solutions Architect certification exam with comprehensive material.
            </p>
            <FaArrowRight className="mt-28" />
          </Link>

          <Link
            href="/courses/google-cloud-associate"
            className="block bg-[#f3f3f7] shadow-sm p-6 hover:shadow-red-300 rounded-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">Google Cloud Associate</h3>
              <img
                src="/assets/google-cloud-logo.svg"
                alt="Google Cloud"
                className="ml-3 w-8 h-8"
              />
            </div>
            <p className="mt-2 mb-5 text-gray-600">
              Prepare for the Google Cloud Associate certification exam with comprehensive material.
            </p>
            <FaArrowRight className="mt-28" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Courses;
