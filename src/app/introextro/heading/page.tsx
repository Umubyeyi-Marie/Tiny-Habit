"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";

const Heading = () => {
  return (
    <main className="min-h-screen bg-gray-30">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8">
    
        <div className="mb-6">
          <Link
            href="/quiz"
            className="inline-flex items-center border border-gray-300 gap-2 p-2 rounded-lg text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-medium">Back to Quizzes</span>
          </Link>
        </div>

        
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Are you Introverted, Extroverted, or Ambiverted
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover where you fall on the personality spectrum
          </p>
        </div>

        
        <div className="relative rounded-xl overflow-hidden mb-8 h-64 sm:h-80 md:h-96">
          <Image
            src="/image/quiz/intro.webp"
            alt="Introvert vs Extrovert illustration"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/30 text-white text-xs rounded-md">
              Personal Development
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/30 text-white text-sm rounded-md">
              <Clock className="w-4 h-4" />
              <span>4-5 minutes</span>
            </div>
          </div>
        </div>
        </div>
        </main>
  )
}

export default Heading;