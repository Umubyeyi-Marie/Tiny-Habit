import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from "next/link"

export default function YourJourney() {
  return (
    <div className=" bg-white flex items-center justify-center p-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-2xl sm:text-3xl  font-bold text-gray-900 mb-4">
          Begin Your Transformative Journey Today
        </h1>
    
        <p className="text-m text-gray-600 mb-6  mx-auto">
          Take the first step towards personal growth, clarity, and authentic living with our expert <br />
           guidance
        </p>
        
        <Link href = "/schedule" className="bg-indigo-400 hover:bg-indigo-700 text-white font-medium py-2 px-3 rounded-full w-52 transition duration-200 text-xs flex items-center mx-auto group">
          <span>Schedule a Free Consultation</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};
