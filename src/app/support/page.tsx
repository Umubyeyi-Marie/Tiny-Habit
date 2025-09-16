import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/image/program/support.jpeg"
                alt="Mentorship Session"
                width={500}
                height={320}
                className="rounded-lg object-cover shadow-md w-full max-w-sm md:max-w-md"
                priority
              />
            </div>

    
            <div className="md:w-1/2 md:pl-8">
            
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-500 text-sm font-semibold px-3 py-1 rounded-full tracking-wide">
                  Emotional Wellbeing
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Mental Health Support
              </h1>

              <p className="text-base text-gray-600 mb-4">
                Reduce stress, anxiety, and depression, and improve your overall
                mental health and well-being.
              </p>

              <p className="text-sm text-gray-800 mb-8 leading-relaxed">
                Our mental health support program offers compassionate guidance
                to help you reduce stress, anxiety, and depression, and improve
                your overall mental health and well-being.
              </p>

  
              <div className="space-y-6">
                {[
                  {
                    title: "Building Emotional Resilience",
                    desc: "Develop skills to navigate difficult emotions, stressful situations, anxiety and depressing episodes with greater ease and confidence.",
                  },
                  {
                    title: "Addiction Recovery",
                    desc: "With actionable steps and guidance, we help you recover from addiction and build a healthy, fulfilling life.",
                  },
                  {
                    title: "Holistic Wellbeing Practices",
                    desc: "Integrative approaches that address mental, emotional, physical, and spiritual dimensions.",
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

          
              <Link
                href="/get-in-touch"
                className="flex items-center mt-8 px-2 py-1 rounded-full text-sm font-medium bg-indigo-400 text-white hover:bg-indigo-600 transition-colors w-31 duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
