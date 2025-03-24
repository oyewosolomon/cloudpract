import Link from 'next/link';
import React from 'react';

const AzureFundamentals: React.FC = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Azure Fundamentals Course</h1>
        <p className="mt-4 text-gray-600">
          This course will help you understand the core concepts of Microsoft Azure, covering cloud services, security, and compliance.
        </p>
        <ul className="list-disc mt-4 ml-5">
          <li>Comprehensive preparation for Azure certification</li>
          <li>Hands-on practice with cloud services</li>
          <li>Expert guidance and detailed tutorials</li>
        </ul>
        <Link href="/" className="mt-8 inline-block text-blue-600 underline">
          Back to Courses
        </Link>
      </div>
    </section>
  );
};

export default AzureFundamentals;
