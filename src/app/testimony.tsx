"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimony() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      img: "/image/testimony/1.jpeg",
      text: "The streak system at Tiny Steps A Day completely transformed my approach to building habits. Instead of trying to change everything at once, I learned to focus on one small practice at a time. Now I'm on day 47 of my morning meditation streak, and the daily check-ins keep me accountable in a way that feels sustainable.",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      img: "/image/testimony/4.jpeg",
      text: "After feeling stuck in my career for years, the self-discovery quiz helped me identify exactly where I needed to focus. The personalized recommendations led me to their career guidance program, and within 3 months, I had clarity on my next steps. The 'tiny steps' approach made the transition feel manageable rather than overwhelming.",
    },
    {
      name: "Aisha Patel",
      role: "Healthcare Professional",
      img: "/image/testimony/2.jpeg",
      text: "The mental health support program taught me practical techniques to manage stress through small, daily practices. Instead of feeling like I needed to meditate for hours, I learned that just 5 minutes of mindful breathing could make a huge difference. The community support and progress tracking kept me motivated during difficult times.",
    },
    {
      name: "David Rodriguez",
      role: "Small Business Owner",
      img: "/image/testimony/6.jpeg",
      text: "The life direction program helped me clarify my vision and purpose at a time when I felt completely lost. What I loved most was how they broke down big goals into tiny, actionable steps. I went from feeling overwhelmed about my future to having a clear roadmap with daily practices that actually fit into my busy schedule.",
    },
    {
      name: "Emma Thompson",
      role: "Graduate Student",
      img: "/image/testimony/3.jpeg",
      text: "I was skeptical about the 'tiny steps' approach at first, but the habit-building streaks completely changed my perspective. Starting with just 2 minutes of journaling each day, I've built a consistent practice that's now part of my routine. The platform's focus on small, sustainable changes rather than dramatic overhauls made all the difference.",
    },
        {
      name: "James Wilson",
      role: "Retirement Coach",
      img: "/image/testimony/7.jpeg",
      text:"As someone who helps others navigate life transitions, I was impressed by how Tiny Steps A Day approaches personal growth. Their emphasis on working with life's natural rhythms rather than against them resonated with my philosophy. The daily check-ins and progress tracking provide the accountability many of my clients need to stay on track.",
    },
  ];

  return (
    <section className="bg-[#f4f8fc] py-16 ">
      <div className="max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Transformation Stories
        </h2>
        <p className="mt-2 text-xl text-gray-600">
          Hear from individuals who have experienced profound shifts through our
          programs
        </p>
      </div>

    
      <div className="relative mt-12 max-w-6xl mx-auto px-10">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-2xl shadow-lg p-8 gap-8">
                
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-3 text-2xl">
                    ★★★★★
                  </div>
                  <p className="text-gray-700 font-semibold text-xl leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold italic text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
            
                <div className="flex-shrink-0">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <button
          className="testimonial-prev absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow  p-0.5  rounded-full hover:bg-purple-100 transition"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          className="testimonial-next absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow p-0.5 rounded-full hover:bg-purple-100 transition"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
    </section>
  );
}
