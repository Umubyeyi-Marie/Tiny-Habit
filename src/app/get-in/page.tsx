"use client";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { FormEvent } from "react";

export default function GetInTouch() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

  };

  return (
    <main className="min-h-screen bg-white p-8 max-w-5xl mx-auto ">
      <div className="flex flex-col items-center justify-between mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-600 text-center">
          We're here to answer your questions on your journey.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <div className="w-full md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4 border border-gray-300 rounded-lg shadow-lg p-6">
            <h2 className="text-m font-semibold mb-4">Send us a Message</h2>
            <div>
              <label htmlFor="name" className="block text-xs font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-xl text-xs px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What is this about?"
                className="w-full border border-gray-300 text-xs rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-medium py-2 rounded-xl hover:bg-purple-600 transition text-xs"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4 mt-6 md:mt-0 md:ml-6 space-y-6">
          <div>
            <h3 className="text-m font-bold">Contact Information</h3>
            <p className="text-sm text-gray-600 mt-2">
              Have questions or need support? Reach out to us through any of these channels.
            </p>
            <div className="flex items-start space-x-4 mt-4">
              <Mail className="w-8 h-8 text-indigo-500 bg-indigo-100 p-2 rounded-full " />
              <div>
                <p className="font-medium text-sm">Email Us</p>
                <p className="text-gray-600 text-sm">hello@tinystepsaday.com</p>
                <p className="text-sm text-gray-500 text-sm">We aim to respond within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mt-4">
              <MessageSquare className="w-8 h-8 text-indigo-500 bg-indigo-100 p-2 rounded-full" />
              <div>
                <p className="font-medium text-sm">Live Chat</p>
                <p className="text-gray-600 text-sm">Available Monday–Friday</p>
                <p className="text-sm text-gray-500 text-sm">9:00 AM – 5:00 PM EAT</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mt-4">
              <Phone className="w-8 h-8 text-indigo-500 bg-indigo-100 p-2 rounded-full" />
              <div>
                <p className="font-medium text-sm">Phone</p>
                <p className="text-gray-600 text-sm">+250 780 599 859</p>
                <p className="text-sm text-gray-500 text-sm">For urgent inquiries only</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-medium mb-2 text-m">Subscribe to Our Newsletter</p>
            <p className="text-sm text-gray-500  mb-2.5">Stay updated with our latest articles, events, and offerings.</p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-300 rounded-xl px-3 py-1.5 items-center text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-600 transition text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}