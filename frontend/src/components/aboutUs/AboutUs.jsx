import React from 'react';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
        <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">About This Project</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            This Mental Health Web Application is designed to promote emotional well-being through 
            journaling, mood tracking, and AI-based mental health analysis. The system uses 
            <strong> React, Node.js, Express, MongoDB, and the Gemini API</strong> to deliver 
            a personalized and secure user experience.
          </p>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-blue-600">Developed By</h2>
            <p className="text-gray-800 text-lg mt-2 font-medium">Archita Gupta</p>
            <p className="text-gray-600">Undergraduate Student, VIT Chennai</p>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Mental Health App | All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
