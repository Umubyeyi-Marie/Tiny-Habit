"use client";    
import { Users, Play, Lightbulb, Target, Package, Book,} from "lucide-react";
        
  const Content = () => {
  return (      
        <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-2 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 px-3">
            <div className="flex-1">
              <p className="text-gray-500 text-xs leading-relaxed">
                This 12-question assessment will help you discover where you
                fall on the personality spectrum and provide tailored
                recommendations for articles, streaks, courses, and resources
                that match your unique needs.
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
                <Users className="text-gray-500 w-4 h-4" />
                <span>5 people have taken this quiz</span>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center gap-6 mt-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">12</div>
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
              <h2 className="text-sm font-semibold text-gray-900 mb-4">
                About This Quiz
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                This assessment explores your social energy, preferences for
                interaction, and how you recharge, based on psychological
                research into extraversion and introversion…
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-6">
                What You'll Discover
              </h3>
              <p className="text-gray-600 text-xs mb-6">
                This quiz will help you understand your current situation and
                provide personalized recommendations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-full">
                      <Target className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Current Assessment
                      </h4>
                      <p className="text-xs text-gray-500">
                        Understand where you are in your journey
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-full">
                      <Book className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Course Recommendations
                      </h4>
                      <p className="text-xs text-gray-500">
                        Find the best courses for your learning style
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-50 rounded-full flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Personalized Insights
                      </h4>
                      <p className="text-xs text-gray-500">
                        Get specific recommendations for your situation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-full">
                      <Package className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900">
                        Product Suggestions
                      </h4>
                      <p className="text-xs text-gray-500">
                        Discover tools and resources that can help
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="space-y-6 w-80">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quiz Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Total Attempts</span>
                  <span className="font-semibold text-gray-900 text-sm">10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Avg Time</span>
                  <span className="font-semibold text-sm text-gray-900">
                    1.3 min
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Topics
              </h3>
              <div className="flex flex-row flex-wrap gap-2">
                {[
                  "introvert",
                  "extrovert",
                  "personality",
                  "social energy",
                  "carl jung",
                  "personality traits",
                  "spectrum",
                  "big five personality traits",
                  "ocean model",
                  "susan cain",
                  "quiet",
                  "eysenck personality inventory",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-indigo-50 text-black text-xs px-1.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-indigo-200 rounded-xl p-6 mt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Ready to Start?
              </h3>
              <button className="w-full flex items-center justify-center gap-2 bg-indigo-400 mt-4 hover:bg-indigo-700 text-white px-4 py-3 mb-4 rounded-lg font-medium transition-colors text-xs">
                <Play className="w-4 h-4" />
                Begin Quiz
              </button>
              <p className="text-[10px] text-gray-600 mt-3 text-center">
                Takes about 4-5 minutes • No registration needed
              </p>
            </div>
          </div>
        </div>
    

  );
};

export default Body;