import Image from "next/image"
export default function Direction(){
return(
<section className="min-h-screen w-full mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <span className="text-purple-300 text-sm">Purpose & Meaning</span>
            <h2 className="text-3xl font-bold mt-2">Life Direction</h2>
            <p className="text-gray-600 mt-2">Find clarity, purpose, and meaning in your life's journey through structured guidance</p>
            <p className="text-gray-600 mt-4">Our life direction program helps you discover your authentic path, clarify your purpose, and create a meaningful vision for your future.</p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Values & Purpose Clarification: Discover what truly matters to you and how to align your life accordingly</li>
              <li>Decision-Making Frameworks: Tools and processes to make aligned choices in moments of uncertainty or transition</li>
              <li>Life Vision Development: Create a compelling and authentic vision for your life that inspires meaningful action</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Start Your Journey</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/life-direction-image.jpg"
              alt="Life Direction"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      )
}