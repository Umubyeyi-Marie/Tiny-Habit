"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Users, Play, BookOpen, Lightbulb } from "lucide-react";

export default function ADHDQuiz(){
  return (
    <div className="min-h-screen bg-gray-30">

      <div className="h-16 bg-white shadow-sm"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8">
        
        <div className="mb-6">
          <Link href= "/quiz" className="inline-flex items-center border border-gray-300 gap-2 p-2 rounded-lg text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs font-medium">Back to Quizzes</span>
          </Link>
        </div>

  
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Do You Have ADHD ?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore if you exhibit signs of Attention-Deficit/Hyperactivity Disorder
          </p>
        </div>

        
        <div className="relative rounded-xl overflow-hidden mb-8 h-64 sm:h-80 md:h-96">
            <Image
              src="/image/quiz/adhd.jpeg"  
              alt="adhd"
              fill                              
              className="object-cover"         
            />
          <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/30 uppercase text-white text-xs rounded-md">
              Mental Health
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-black/20 backdrop-blur-sm border border-white/30 text-white text-sm rounded-md">
              <Clock className="w-4 h-4" />
              <span>4-5 minutes</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-2 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ">
            <div className="flex-1">
              <p className="text-gray-500 text-xs  leading-relaxed">
                This 12-question assessment will help you Explore if you exhibit signs of Attention-Deficit/Hyperactivity Disorder and provide tailored recommendations for articles (Blog posts), streaks, courses, and resources that match your unique needs.
             </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
                <Users className=" text-gray-500 w-4 h-4" />
                <span>10 people have taken this quiz</span>
              </div>
            </div>
            
            <div className="flex flex-row sm:flex-col items-center gap-6 mt-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">12</div>
                <div className="text-xs text-gray-500">Questions</div>
              </div>
              
              <button className="flex items-center mb-8 gap-2 bg-indigo-400 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-lg font-medium transition-colors">
                <Play className="w-4 h-4" />
                Start Quiz Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">About This Quiz</h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                Ths assessment screens for symptoms of ADHD, such as difficulty focusing, impulsivity, and restlessness, based on established psychological criteria. It provides insights into whether you may benefit from further evaluation by a professional and offers strategies to manage attention and productivity challenges. This quiz assesses potential symptoms of Attention-Deficit/Hyperactivity Disorder (ADHD) based on diagnostic criteria from the Diagnostic and Statistical Manual of Mental Disorders (DSM-5) and validated screening tools, such as the Adult ADHD Self-Report Scale (ASRS-v1.1), developed by the World Health Organisation. It incorporates research from peer-reviewed sources, such as studies in the Journal of Attention Disorders and guidelines from the National Institute of Mental Health (NIMH), focusing on core ADHD symptoms: inattention, hyperactivity, and impulsivity. The quiz is not a diagnostic tool but a screening aid to encourage professional consultation if needed.
              </p>
            </div>

            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">What You'll Discover</h3>
              <p className="text-gray-600 text-xs mb-6">This quiz will help you understand your current situation and provide personalized recommendations</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                      <div className="w-5 h-5 bg-indigo-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">Current Assessment</h4>
                      <p className="text-xs text-gray-500">Understand where you are in your journey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">Course Recommendations</h4>
                      <p className="text-xs text-gray-500">Find the best courses for your learning style</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-smtext-gray-900">Personalized Insights</h4>
                      <p className="text-xs text-gray-500">Get specific recommendations for your situation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg flex-shrink-0">
                      <div className="w-5 h-5 bg-indigo-500 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">Product Suggestions</h4>
                      <p className="text-xs text-gray-500">Discover tools and resources that can help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-6 w-85">
  
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-sm">Quiz Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Total Attempts</span>
                  <span className="font-semibold text-gray-900 text-sm">10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Avg Time</span>
                  <span className="font-semibold text-sm text-gray-900">0.8 min</span>
                </div>
              </div>
            </div>

        
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold  text-sm text-gray-900 mb-4">Related Topics</h3>
              
              <div className="flex flex-row space-x-2">
              <span className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5 rounded-xl">
                ADHD 
              </span>
               <span className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5 rounded-xl">
                 Attention
              </span>
               <span className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5 rounded-xl">
                Impulsivity
              </span>
               <span className="inline-block bg-indigo-50 text-blck text-xs px-1.5 py-0.5 rounded-xl">
                Hyperactivity
              </span>
              </div>
              <div className="flex flex-row space-x-2 mt-1.5">
               <span className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5  rounded-xl">
                Mental Health
              </span>
               <span className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5  rounded-xl">
                Attention Deficit
              </span>
                
                </div>
            </div>

            <div className=" border border-indigo-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Ready to Start?</h3>
              <button className="w-full flex items-center justify-center gap-2 bg-indigo-400 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-xs">
                <Play className="w-4 h-4" />
                Begin Quiz
              </button>
              <p className="text-xs text-blue-600 mt-3 text-center">
                Takes about 4-5 minutes • No registration needed
              </p>
            </div>

    
          </div>
        </div>
      </div>
      
    
      <div className="h-20 bg-white border-t border-gray-200 mt-16"></div>
    </div>
  );
};