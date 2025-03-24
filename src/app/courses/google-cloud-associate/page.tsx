import Footer from '@/app/components/Footer';
import Nav from '@/app/components/Nav';
import React from 'react';

const GoogleCloudAssociate: React.FC = () => {
  // Mock course list for Google Cloud Courses
  const courses = [
    {
      title: "Google Cloud Platform Fundamentals",
      description: "An introduction to core Google Cloud services and concepts, including Compute Engine, App Engine, and BigQuery.",
      duration: "5 hours",
      link: "https://cloud.google.com/training/fundamentals"
    },
    {
      title: "Architecting with Google Kubernetes Engine",
      description: "Learn how to deploy and manage containerized applications on Google Kubernetes Engine.",
      duration: "6 hours",
      link: "https://cloud.google.com/training/kubernetes"
    },
    {
      title: "Data Engineering on Google Cloud",
      description: "Gain insights into building scalable data pipelines and analytics solutions using Google Cloud.",
      duration: "8 hours",
      link: "https://cloud.google.com/training/data-engineering"
    },
    {
      title: "Machine Learning with TensorFlow on Google Cloud",
      description: "A hands-on guide to building and deploying machine learning models on Google Cloud.",
      duration: "10 hours",
      link: "https://cloud.google.com/training/tensorflow"
    },
    {
      title: "Security Best Practices in Google Cloud",
      description: "Learn essential security practices for securing resources and services on Google Cloud.",
      duration: "4 hours",
      link: "https://cloud.google.com/training/security"
    }
  ];

  return (
    <>
    <Nav/>
    <section className="py-24 px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Google Cloud Associate Courses</h1>
        <p className="text-lg text-gray-600 mb-12">
          Unlock the power of Google Cloud and gain hands-on experience with industry-leading tools and technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
              <div className="p-4 bg-red-50 rounded-t-lg">
                <h3 className="text-xl font-semibold text-red-800">{course.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
                <a 
                  href={course.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 text-sm py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default GoogleCloudAssociate;