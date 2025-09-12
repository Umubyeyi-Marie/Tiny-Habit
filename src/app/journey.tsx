export default function Journey() {
  const steps = [
    {
      number: "01",
      title: "Take the Self-Assessment",
      desc: "Begin with a comprehensive assessment to understand your current state, challenges, and goals. This will help us understand your needs and goals.",
    },
    {
      number: "02",
      title: "Discover Your Path",
      desc: "Receive personalized recommendations based on your assessment results and unique needs. This will help you understand your path and how to achieve your goals.",
    },
    {
      number: "03",
      title: "Start Exploring",
      desc: "Explore from a plethora of resources, insights, streaks, and courses to help you on your journey. With the recommendations, you can start right away.",
    },
    {
      number: "04",
      title: "Do you want to connect with a mentor?",
      desc: "Request a session and we will connect you with one of our mentors. Explore available subscription options to access our resources and support.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">
        Your Journey With Tiny Steps A Day
      </h2>
      <p className="mt-2 text-gray-600 text-lg mx-auto">
        A simple, structured process designed to guide you towards meaningful<br />
         transformation
      </p>

      <div className="mt-12 grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <div key={i} className="text-left">
            <h3 className="text-2xl font-bold text-indigo-600">{step.number}</h3>
            <h4 className="mt-2 font-semibold text-gray-800">{step.title}</h4>
            <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
