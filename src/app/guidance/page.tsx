import Image from "next/image"

export default function Guidance (){
    return (
        <div className="h-screen bg-white flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12">
                        <div className="inline-block bg-indigo-100 rounded-full px-3 py-1 mb-4">
                            <span className="text-sm font-medium text-indigo-600">
                                Professional Development
                            </span>
                        </div>
                        
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Career Guidance & Direction
                        </h1>
                        
                        <p className="text-base text-gray-600 mb-6">
                            Align your career with your purpose and discover fulfilling professional pathways.
                        </p>
                        
                        <p className="text-sm text-black mb-6">
                            Remove blockers stopping you from achieving your career goals, visions, and performance. Our career guidance services help you discover and create a professional path that aligns with your authentic values, strengths, and vision.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-indigo-100 rounded-full p-1.5">
                                        <div className="bg-indigo-500 rounded-full w-1.5 h-1.5"></div>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-semibold text-gray-900">Skills Assessment & Development</h3>
                                    <p className="text-xs text-gray-600">
                                        Identify your core strengths and develop skills that align with your professional aspirations.
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
                                    <h3 className="text-sm font-semibold text-gray-900">Career Transition Planning</h3>
                                    <p className="text-xs text-gray-600">
                                        Strategic support for navigating career changes with confidence and clarity.
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
                                    <h3 className="text-sm font-semibold text-gray-900">Eliminate Blockers</h3>
                                    <p className="text-xs text-gray-600">
                                        Remove blockers, habits, and patterns that are stopping you from achieving your career goals, visions, and performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 px-5 rounded-full transition duration-200">
                            Explore Career Services
                        </button>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/image/program/guidance.webp"
                            alt="Career Guidance"
                            width={350}
                            height={250}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}