
import Image from "next/image"
export default function Guidance (){
    return (
        <section className="max-w-4xl w-full mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <span className="text-purple-300 text-sm">Professional Development</span>
            <h2 className="text-3xl font-bold mt-2">Career Guidance & Direction</h2>
            <p className="text-gray-600 mt-2">Align your career with your purpose and discover fulfilling professional pathways.</p>
            <p className="text-gray-600 mt-4">Remove blockers stopping you from achieving your career goals, visions, and performance. Our career guidance services help you discover and create a professional path that aligns with your authentic values, strengths, and vision.</p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Skills Assessment & Development: Identify your core strengths and develop skills that align with your professional aspirations</li>
              <li>Career Transition Planning: Strategic support for navigating career changes with confidence and clarity</li>
              <li>Eliminate Blockers: Remove blockers, habits, and patterns that are stopping you from achieving your career goals</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Explore Career Services</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/career-image.jpg"
              alt="Career Guidance"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    )
}