import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Guidance() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
    
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 md:pr-8">
            
              <div className="inline-block bg-indigo-100 rounded-full px-3 py-1 mb-4">
                <span className="text-sm font-medium text-indigo-600">
                  Professional Development
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Career Guidance &amp; Direction
              </h1>

              <p className="text-base text-gray-600 mb-6">
                Align your career with your purpose and discover fulfilling
                professional pathways.
              </p>

              <p className="text-sm text-gray-800 mb-6 leading-relaxed">
                Remove blockers stopping you from achieving your career goals,
                visions, and performance. Our career guidance services help you
                discover and create a professional path that aligns with your
                authentic values, strengths, and vision.
              </p>


              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Skills Assessment & Development",
                    desc: "Identify your core strengths and develop skills that align with your professional aspirations.",
                  },
                  {
                    title: "Career Transition Planning",
                    desc: "Strategic support for navigating career changes with confidence and clarity.",
                  },
                  {
                    title: "Eliminate Blockers",
                    desc: "Remove blockers, habits, and patterns that are stopping you from achieving your career goals, visions, and performance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-indigo-100 rounded-full p-1.5 mt-1">
                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            
              <Link
                href="/get-in-touch"
                className="inline-block bg-indigo-400 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 px-5 rounded-full transition duration-200"
              >
                Explore Career Services
              </Link>
            </div>

        
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/image/program/guidance.webp"
                alt="Career Guidance"
                width={500}
                height={320}
                className="rounded-lg object-cover shadow-md w-full max-w-sm md:max-w-md"
                priority
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
