import { Calendar, Clock, Search, Book, User } from "lucide-react";

export default function DiscoverPath() {
  const items = [
    { icon: <Calendar className="w-6 h-6 text-blue-600" />, label: "Master Your Habits", bg: "bg-blue-100" },
    { icon: <Clock className="w-6 h-6 text-red-600" />, label: "Break Free From Addictions", bg: "bg-red-100" },
    { icon: <Search className="w-6 h-6 text-purple-600" />, label: "Find Your Purpose", bg: "bg-purple-100" },
    { icon: <Book className="w-6 h-6 text-green-600" />, label: "Heal Your Past", bg: "bg-green-100" },
    { icon: <User className="w-6 h-6 text-yellow-600" />, label: "General Assessment", bg: "bg-yellow-100" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Discover Your Path</h2>
      <p className="mt-2 text-gray-600">
        Take our quick quiz to find personalized courses and routines for your journey
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bg}`}>
              {item.icon}
            </div>
            <p className="mt-3 font-medium text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600">
          Explore All Quizzes
        </button>
      </div>
    </section>
  );
}
