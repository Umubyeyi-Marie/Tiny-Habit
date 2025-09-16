import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function Personalize() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
            <div className="md:w-1/2 md:pr-8">
  
              <div className="inline-block bg-indigo-100 rounded-full px-3 py-0.5 mb-4">
                <span className="text-xs font-medium text-indigo-600">
                  1-on-1 Support
                </span>
              </div>

            
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Personalized Mentorship
              </h1>
              <p className="text-base text-gray-600 mb-6">
                Dedicated guidance tailored to your unique journey, challenges,
                and aspirations
              </p>
              <p className="text-sm text-gray-900 mb-6 leading-relaxed">
                Our personalized mentorship program offers a transformative
                one-on-one experience with a dedicated mentor who will guide you
                through your unique journey of growth and self-discovery.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Weekly Personalized Sessions",
                    desc: "Regular one-on-one sessions focused on your specific needs, challenges, and goals.",
                  },
                  {
                    title: "Customized Growth Plan",
                    desc: "A structured yet flexible roadmap tailored to your unique journey and desired outcomes.",
                  },
                  {
                    title: "Ongoing Support",
                    desc: "Access to resources, practices, and check-ins between your scheduled sessions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-indigo-100 rounded-full p-1.5 mt-1">
                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

  
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/schedule"
                  className="bg-indigo-400 hover:bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-full transition duration-200 text-center"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/quiz"
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-full transition duration-200 text-center"
                >
                  Take the Assessment First
                </Link>
              </div>
            </div>

    
            <div className="md:w-1/2 flex items-center justify-center md:justify-end">
              <Image
                src="/image/program/personalize.jpeg"
                alt="Mentorship Session"
                width={500}
                height={350}
                className="rounded-lg object-cover shadow-lg w-full max-w-sm md:max-w-md"
                priority
              />
            </div>
          </div>
        </section>
      </main>

  
    </div>
  );
}
