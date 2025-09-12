import Image from "next/image"
export default function Support(){
    return(
<section className="max-w-4xl w-full mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <span className="text-purple-300 text-sm">Emotional Wellbeing</span>
            <h2 className="text-3xl font-bold mt-2">Mental Health Support</h2>
            <p className="text-gray-600 mt-2">Reduce stress, anxiety, and depression, and improve your overall mental health and well-being</p>
            <p className="text-gray-600 mt-4">Our mental health support program offers compassionate guidance to help you reduce stress, anxiety, and depression, and improve your overall mental health and well-being.</p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Building Emotional Resilience: Develop skills to navigate difficult emotions, stressful situations, anxiety and depression episodes with greater ease and confidence</li>
              <li>Addiction Recovery: With actionable steps and guidance, we help you recover from addiction and build a healthy, fulfilling life</li>
              <li>Holistic Wellbeing Practices: Integrative approaches that address mental, emotional, physical, and spiritual dimensions</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/wellbeing-image.jpg"
              alt="Mental Health Support"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    )
}