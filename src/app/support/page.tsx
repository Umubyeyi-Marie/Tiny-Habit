import Image from 'next/image';
import { ArrowRight } from 'lucide-react';



export default function Support(){
  return (
    <div className="h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center">
            <Image
              src="/image/program/support.jpeg"
              alt="Mentorship Session"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
          
      
          <div className="md:w-1/2 md:pl-12 max-w-2xl">
      
            <div className="mb-4">
              <span className="text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full tracking-wide bg-indigo-100">
                Emotional Wellbeing
              </span>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Mental Health Support
            </h1>
            
            <p className="text-m text-gray-600 mb-4 mt-0.5">
              Reduce stress, anxiety, and depression, and improve your overall mental health and well-being.
            </p>
            
            <p className="text-sm text-black mb-8">
              Our mental health support program offers compassionate guidance to help you reduce stress, anxiety, and depression, and improve your overall mental health and well-being.
            </p>
            
            <div className="space-y-6">
        
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Building Emotional Resilience</h3>
                  <p className="text-xs text-gray-500">
                    Develop skills to navigate difficult emotions, stressful situations, anxiety and depressing episodes with greater ease and confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
               <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Addiction Recovery</h3>
                  <p className="text-xs text-gray-500">
                    With actionable steps and guidance, we help you recover from addiction and build a healthy, fulfilling life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-1.5">
                    <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Holistic Wellbeing Practices</h3>
                  <p className="text-xs text-gray-500">
                    Integrative approaches that address mental, emotional, physical, and spiritual dimensions.
                  </p>
                </div>
              </div>
            </div>
            
            
            <button className="flex items-center text-white hover:text-indigo-100 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full text-sm font-medium transition duration-200 group mt-8">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}