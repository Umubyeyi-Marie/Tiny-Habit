import { User, Shield, GraduationCap, Compass } from "lucide-react";
import Link from "next/link";

export default function Team() {
  const perks = [
    {
      icon: <User className="w-6 h-6 text-indigo-600" />,
      title: "1-on-1 Mentorship",
      desc: "Personalized guidance tailored to your unique journey, challenges, and aspirations.",
      points: ["Personalized sessions", "Customized growth plans", "Ongoing support between sessions"],
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Mental Health Support",
      desc: "Reduce stress, anxiety, and depression, and improve your overall mental health.",
      points: ["Emotional resilience building", "Stress management techniques", "Holistic wellbeing practices"],
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "Career Guidance & Direction",
      desc: "Align your career with your purpose and discover fulfilling professional pathways.",
      points: ["Skills assessment", "Career transition planning", "Professional identity alignment"],
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: "Life Direction",
      desc: "Find clarity, purpose, and meaning in your life’s journey through structured guidance.",
      points: ["Values and purpose clarification", "Decision-making frameworks", "Life vision development"],
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">Our Transformative Perks</h2>
      <p className="mt-2 text-gray-600 max-w-3xl mx-auto text-xl">
        Our team of experts is dedicated to provide you with comprehensive support for your personal and professional growth.
      </p>

      <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {perks.map((perk, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6 text-left hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
              {perk.icon}
            </div>
            <h3 className="mt-4 font-semibold text-gray-800">{perk.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{perk.desc}</p>
            <ul className="mt-4 space-y-1 text-sm text-indigo-600">
              {perk.points.map((point, j) => (
                <li key={j}>• {point}</li>
              ))}
            </ul>
            <button className="mt-4 text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1">
              Learn more →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/programs" className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600">
          Explore All Programs
        </Link>
      </div>
    </section>
  );
}
