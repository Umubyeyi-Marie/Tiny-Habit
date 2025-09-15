import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Lightbulb } from "lucide-react"; 

export default function Begin() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-50 pb-20 md:pb-32 flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
  
        <div>
          <button
            className="px-4 py-2 sm:ml-2 text-xs rounded-full bg-indigo-100 text-indigo-600 m-8"
            aria-label="Begin your transformative journey"
          >
            Begin Your Transformative Journey
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Make <span className="text-indigo-500">Tiny Steps A <br />
               Day</span> to Growth, <br className="hidden sm:block" />
            Change and Fulfillment.
          </h1>

          <p className="mt-4 text-gray-600 text-m sm:text-base">
            Small but practical and powerful steps, guidance, and support to
            help you activate the hero in you and your true potential.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
           <Link
           href="/quiz"
           className="flex items-center gap-2 px-3 py-2 text-sm sm:text-xs bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition-colors duration-200"
           >
           Start your journey <span>→</span>
           </Link>
            <Link
              href="/Programs"
              className="px-3 py-2 text-sm sm:text-xs bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              Explore Programs
            </Link>
          </div>

      
          <div className="mt-10 text-center">
            <p className="text-indigo-600 flex justify-start text-sm sm:text-xs p-2 mb-2">
              Trusted by seekers and professionals worldwide
            </p>

            <div className="flex justify-start gap-4 sm:gap-2">
              
              <div className="flex flex-row items-center w-26 p-2 gap-2">
               <ShieldCheck className="w-4 h-4 text-indigo-500" strokeWidth={2.5} />
                <span className=" text-sm sm:text-xs text-gray-700">
                  Safe Space
                </span>
              </div>

            
              <div className="flex flex-row items-center w-34 gap-2 p-2 ">
        
                   < Compass className="w-4 h-4 text-indigo-500" strokeWidth={2.5} />
            
                <span className=" text-sm sm:text-xs text-gray-700">
                  Guided Process
                </span>
              </div>

            
              <div className="flex flex-row items-center gap-2 w-42 p-2">
      
                  <Lightbulb  className="w-4 h-4 text-indigo-500" strokeWidth={2.5} />
                
                <span className=" text-sm sm:text-xs text-gray-700">
                  Transformative Results
                </span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="relative w-full">
          <Image
            src="/image/steps.jpeg"
            alt="Tiny Steps Illustration"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
