import { UserRound, Clock, Book } from "lucide-react";

export default function WhyTakeQuizzes() {
  const features = [
    {
      icon: <UserRound className="w-8 h-8 text-blue-600" />,
      title: "Personalized Guidance",
      text: "Get recommendations tailored specifically to your unique needs and goals.",
      bg: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Quick & Effective",
      text: "Just 3-5 minutes to complete, delivering immediate actionable insights.",
      bg: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: <Book className="w-8 h-8 text-purple-600" />,
      title: "Science-Based",
      text: "Our assessments are grounded in proven psychological frameworks and research.",
      bg: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section className="max-w-6xl px-4 md:px-10 py-16 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        Why Take Our Quizzes?
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`${f.bg} rounded-2xl p-8 flex flex-col items-center text-center shadow hover:shadow-md transition`}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow mb-4">
              {f.icon}
            </div>
            <h3 className={`text-xl font-semibold ${f.textColor}`}>{f.title}</h3>
            <p className={`mt-2 text-sm ${f.textColor}`}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
