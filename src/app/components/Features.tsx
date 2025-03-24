import React from 'react';

const Features: React.FC = () => {
  return (
    
    <section className="mx-auto py-16 px-4 bg-gray-100">
    <div className='max-w-6xl mx-auto'>
      <h2 className="text-3xl font-bold text-center">Why Choose CloudPracts?</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 shadow rounded hover:shadow-sm hover:shadow-red-600">
          <h3 className="font-bold text-xl">Comprehensive Courses</h3>
          <p className="mt-2 text-gray-600">Cover all major cloud platforms with in-depth lessons.</p>
      </div>
      <div className="bg-white p-6 shadow rounded hover:shadow-sm hover:shadow-red-600">
          <h3 className="font-bold text-xl">Certification Prep</h3>
          <p className="mt-2 text-gray-600">Tailored for certification exams to ensure success.</p>
      </div>
      <div className="bg-white p-6 shadow rounded hover:shadow-sm hover:shadow-red-600">
          <h3 className="font-bold text-xl">Expert Instructors</h3>
          <p className="mt-2 text-gray-600">Learn from industry experts with real-world experience.</p>
      
      </div>
      </div>
      </div>
  </section>
  );
};

export default Features;