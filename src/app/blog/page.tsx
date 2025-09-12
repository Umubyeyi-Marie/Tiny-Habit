// src/app/blog/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, BookOpen, ArrowRight } from "lucide-react";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  imageAlt?: string;
  imageSrc?: string;
  href?: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "A Strong Extrovert's Guide to Enjoy Solitude",
    excerpt:
      "As a strong extrovert, alone time can feel daunting. Learn how to reframe solitude as an opportunity for personal growth and creativity, and discover practical...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Person enjoying quiet time",
    imageSrc: "/image/man.jpeg",
    href: "/posts/strong-extrovert-solitude",
  },
  {
    id: "2",
    title: "Finding a Deeper Connection as the Strongest Extrovert",
    excerpt:
      "As a strong extrovert, you're a natural connector. But how do you move past the party to build authentic, meaningful relationships? This guide...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Two people in deep conversation",
    imageSrc: "/image/intro.webp",
    href: "/posts/deeper-connection-extrovert",
  },
  {
    id: "3",
    title: "Excel in Any Situation: A guide for Ambivert",
    excerpt:
      "As an extroverted ambivert, you have the rare ability to thrive in any social setting. This guide shows you how to switch seamlessly from...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Person blending into different social settings",
    imageSrc: "/image/_3.jpeg",
    href: "/posts/ambivert-excel",
  },
  {
    id: "4",
    title: "Why You Feel Both Energized and Drained",
    excerpt:
      "As an extroverted ambivert, your energy can feel like a puzzle. Learn why you feel both energized and drained by social events, and discover how t...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Person with mixed emotions",
    imageSrc: "/image/_4.jpeg",
    href: "/posts/energized-and-drained",
  },
  {
    id: "5",
    title: "How to Network as an Introvert Ambivert",
    excerpt:
      "Are you an introverted ambivert who wants to build a stronger network? This guide offers actionable tips for making meaningful connection...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Networking quietly but effectively",
    imageSrc: "/image/_5.jpeg",
    href: "/posts/network-as-introvert-ambivert",
  },
  {
    id: "6",
    title: "The art of Social Flexibility: A Guide for the Ambivert",
    excerpt:
      "As a mild introvert or ambivert, you enjoy both solitude and company. Learn how to master the art of social flexibility, find your perfect balance, and...",
    date: "28/8/2025",
    readTime: "5 min",
    likes: 0,
    comments: 0,
    category: "Self-awareness",
    imageAlt: "Balanced social life",
    imageSrc: "/image/_5.jpeg",
    href: "/posts/social-flexibility-ambivert",
  },
];

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold text-black">Latest Blog Post</h1>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          Discover the latest insights and guidance for your personal growth journey
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
            >
        
              <div className="relative w-full h-48">
                {post.imageSrc && (
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt ?? "Post image"}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                )}
              </div>

              
              <div className="flex items-center justify-between bg-white px-4 py-3">
                <Link
                  href={post.href ?? "#"}
                  aria-label={`Category ${post.category}`}
                  className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {post.category}
                </Link>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>

              {/* Content */}
              <div className="px-4 py-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-black leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 text-gray-500 text-sm flex-1">{post.excerpt}</p>

                
<div className="mt-4 flex items-center justify-between text-sm text-gray-500">

  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-1">
      <Heart className="h-5 w-5" />
      <span>{post.likes}</span>
    </div>

    <div className="flex items-center space-x-1">
      <MessageCircle className="h-5 w-5" />
      <span>{post.comments}</span>
    </div>
  </div>

  
  <div className="flex items-center space-x-1">
    <BookOpen className="h-5 w-5" />
    <span>{post.readTime}</span>
  </div>
</div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Centered button at bottom */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center border border-gray-300 rounded-full px-6 py-3 text-black hover:border-gray-500 transition-colors"
        >
          View All Blog Posts
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}
