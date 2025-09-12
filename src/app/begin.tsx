
import Image from "next/image";
import Link from "next/link";

export default function Begin() {
  return (
    <div>
      <section className=" min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pb-24 md:pb-32 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
        
          <div>
            <button className="px-4 py-2 text-sm rounded-full bg-indigo-100 text-indigo-600 mb-4">
              Begin Your Transformative Journey
            </button>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
              Make <span className="text-indigo-600">Tiny Steps A Day</span> to Growth, <br />
              change and Fulfillment.
            </h1>
            <p className="mt-4 text-gray-600">
              Small but practical and powerful steps, guidance, and support
              to help you activate the hero in you and your true potential.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="/quiz" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
                Start your journey 
              </Link>
              <Link href="/programs" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                Explore Programs
              </Link>
            </div>

        
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Safe Space</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Guided Process</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Transformative Results</span>
              </div>
            </div>
          </div>

          
          <div className="relative">
            <Image
              src="/image/steps.jpeg" 
              alt="Tiny Steps"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
