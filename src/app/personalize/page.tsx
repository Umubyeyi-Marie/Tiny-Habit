import Image from "next/image";

export default function Personalize() {
  return (
    <div className="bg-purple-300">
      <div className="max-w-4xl w-full mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <span className="text-purple-300 text-sm">1-on-1 Support</span>
            <h2 className="text-3xl font-bold mt-2">Personalized Mentorship</h2>
            <p className="text-gray-600 mt-2">
              Dedicated guidance tailored to your unique journey, challenges, and aspirations
            </p>
            <p className="text-gray-600 mt-4">
              Our personalized mentorship program offers a transformative one-on-one experience with a dedicated mentor who will guide you through your unique journey of growth and self-discovery.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Weekly one-on-one sessions focused on your specific needs, challenges, and goals</li>
              <li>Customized Growth Plan: A structured yet flexible roadmap tailored to your unique journey and desired outcomes</li>
              <li>Ongoing Support: Access to resources, practices, and check-ins between scheduled sessions</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full mr-4">
                Schedule a Consultation
              </button>
              <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">
                Take the Assessment First
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mentorship-image.jpg"
              alt="Mentorship Session"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
