import Image from 'next/image';
import React from 'react';

export default function Personalize (){
  return (
    <div className="h-screen bg- white flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 md:pr-12">
            
            <div className="inline-block bg-indigo-100 rounded-full px-3 py-0.5 mb-4">
              <span className="text-xs font-medium text-indigo-600">
                1-on-1 Support
              </span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Personalized Mentorship
            </h1>
            
            <p className="text-base text-gray-600 mb-6">
              Dedicated guidance tailored to your unique journey, challenges, and aspirations
            </p>
            
            <p className="text-sm text-gray-900 mb-6">
              Our personalized mentorship program offers a transformative one-on-one experience with a dedicated mentor who will guide you through your unique journey of growth and self-discovery.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5 mt-1">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Weekly Personalized Sessions</h3>
                  <p className="text-xs text-gray-400">
                    Regular one-on-one sessions focused on your specific needs, challenges, and goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5 mt-1">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Customized Growth Plan</h3>
                  <p className="text-xs text-gray-400">
                    A structured yet flexible roadmap tailored to your unique journey and desired outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5 mt-1">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Ongoing Support</h3>
                  <p className="text-xs text-gray-400">
                    Access to resources, practices, and check-ins between your scheduled sessions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-1 px-3 rounded-full transition duration-200">
                Schedule a Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-medium py-1 px-3 rounded-full transition duration-200">
                Take the Assessment First
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/image/program/personalize.jpeg"
              alt="Mentorship Session"
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};