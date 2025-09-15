import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export default function Direction(){
    return(
        <div className="h-screen bg-gray-50 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex justify-center">
            <Image
              src="/image/program/direction.jpeg"
              alt="Life Direction"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
     
                    <div className="md:w-1/2 md:pl-12">
                        <div className="inline-block bg-indigo-100 rounded-full px-3 py-1 mb-4">
                            <span className="text-sm font-medium text-indigo-600">
                                Purpose & Meaning
                            </span>
                        </div>
                        
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Life Direction
                        </h1>
                        
                        <p className="text-base text-gray-600 mb-6">
                            Find clarity, purpose, and meaning in your life's journey through structured guidance
                        </p>
                        
                        <p className="text-sm text-gray-700 mb-6">
                            Our life direction program helps you discover your authentic path, clarify your purpose, and create a meaningful vision for your future.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-indigo-100 rounded-full p-1.5">
                                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-gray-900">Values & Purpose Clarification</h3>
                                    <p className="text-xs text-gray-600">
                                        Discover what truly matters to you and how to align your life accordingly.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-indigo-100 rounded-full p-1.5">
                                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-gray-900">Decision-Making Frameworks</h3>
                                    <p className="text-xs text-gray-600">
                                        Tools and processes to make aligned choices in moments of uncertainty or transition.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-indigo-100 rounded-full p-1.5">
                                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-gray-900">Life Vision Development</h3>
                                    <p className="text-xs text-gray-600">
                                        Create a compelling and authentic vision for your life that inspires meaningful action.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 px-5 rounded-full transition duration-200 flex items-center group">
                            <span>Start Your Journey</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}