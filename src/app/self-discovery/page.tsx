"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Clock,
  Activity,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

type Quiz = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  questions: number;
  image: string;
  categoryColor: string; 
  link: string;
};

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Myers-Briggs Personality Type Indicator (MBTI) Assessment",
    description:
      "Discover your unique personality type and gain insights into your preferences and behaviors",
    category: "Personal Growth",
    duration: "10–15 minutes",
    questions: 32,
    image: "/image/quiz/people.jpeg",
    categoryColor: "bg-blue-100 text-blue-600 w-29",
    link: "/mbti",   
  },
  {
    id: 2,
    title: "Do You Have ADHD?",
    description:
      "Explore if you exhibit signs of Attention-Deficit/Hyperactivity Disorder",
    category: "Mental Health",
    duration: "4–5 minutes",
    questions: 12,
    image: "/image/quiz/adhd.jpeg",
    categoryColor: "bg-red-100 text-red-600 uppercase w-30",
     link: "adhd", 
  },
  {
    id: 3,
    title: "Are You a Highly Sensitive Person?",
    description:
      "Discover if you have heightened sensory and emotional sensitivity",
    category: "Mental Health",
    duration: "4–5 minutes",
    questions: 12,
    image: "/image/quiz/baby.webp",
    categoryColor: "bg-red-100 text-red-600 capitalize uppercase w-30",
    link: "/hsp",
  },
  {
    id: 4,
    title: "Are you Introverted, Extroverted, or Ambiverted",
    description: "Discover where you fall on the personality spectrum",
    category: "Personal Development",
    duration: "4–5 minutes",
    questions: 12,
    image: "/image/quiz/intro.webp",
    categoryColor: "bg-blue-100 text-blue-600 w-37",
    link: "/introextro",
  },
];

export default function SelfDiscoveryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Latest");
  const [order, setOrder] = useState("Descending");

  const categories = ["All Categories", "Art", "Books", "Career", "Design", "Entrepreneurship", "Family", "Fashion", "Finance","Fitness", "Food", "Gaming", "Goal Setting", "Habit building", "Health","Leadership", "Life Purpose", "Listening", "Marketing","Mental Health", "Meditation", "Mindfulness","Movies", "Music", "Onboarding", "Personal Development", "Personal Growth", "Podcasts", "Productivity","Reading", "Relationship", "Sales","Self-Improvement", "Sleep","Social","Speaking","Spiritual", "Technology","Time", "Travel", "TV", "Wellness"];

  const filtered = quizzes.filter(
    (q) =>
      (category === "All Categories" || q.category === category) &&
      (q.title.toLowerCase().includes(search.toLowerCase()) ||
        q.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="px-4 md:px-10 py-10">
    
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Self-Discovery Quizzes
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Take a quick assessment to receive personalized recommendations tailored
        to your unique journey
      </p>

    
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search quizzes by title, description and categories"
            className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
          />
        </div>

        <div className="flex gap-3">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {category}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={category}
                onValueChange={setCategory}
              >
                {categories.map((c) => (
                  <DropdownMenuRadioItem key={c} value={c}>
                    {c}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      
      <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <p className="text-sm text-gray-500">
          Showing {filtered.length} of {quizzes.length} quizzes
        </p>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {sortBy}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="Latest">Latest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Title">Title</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Popular">Popular</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Rating">Rating</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {order}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={order} onValueChange={setOrder}>
                <DropdownMenuRadioItem value="Ascending">Ascending</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Descending">Descending</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((q) => (
          <div
            key={q.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
          >
            <div className="relative w-full h-40">
              <Image
                src={q.image}
                alt={q.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {q.duration} • {q.questions} questions
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{q.title}</h3>
              <p className="text-sm text-gray-600 mt-1 flex-1">
                {q.description}
              </p>
              <div className={`inline-block mt-3 px-3 py-1  rounded-full text-xs font-medium ${q.categoryColor}`}>
                {q.category}
              </div>
                <Link href={q.link} className="mt-4">
      <Button className="w-full flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600">
        <Activity className="h-4 w-4" /> Start Quiz
      </Button>
    </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
