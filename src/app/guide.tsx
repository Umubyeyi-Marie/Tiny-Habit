import Image from "next/image"
import {
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Guide() {
  return (
    <footer className="bg-[#f4f8fc] py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
    
        <div className="flex flex-col justify-between">
          
          <div>
            <div className="flex items-center space-x-2">
              <Image
                  src="/image/logo.webp"
                  alt="logo"
                  width={22}
                  height={22}
                className="h-full rotate "
              />
              <h3 className="text-lg font-bold text-indigo-600">Tiny Steps A Day</h3>
            </div>

            <p className="mt-3 text-gray-600 text-m leading-relaxed">
              Guiding you through your journey of self-discovery,
              growth, and transformation.
            </p>
          </div>


          <div className="mt-8">
            <p className="font-medium text-gray-700 text-sm">Join our mindful community</p>
            <div className="mt-3 space-x-3 flex flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none"
              />
              <button className=" bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg py-2 px-2 hover:from-indigo-600 hover:to-purple-600">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 mt-3 text-xs">
              Get weekly insights and inspiration. No spam, ever.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-500 text-sm tracking-wide">PROGRAMS</h4>
          <ul className="mt-3 space-y-2 text-gray-800 text-sm">
            <li>1-on-1 Mentorship</li>
            <li>Group Coaching</li>
            <li>Intensive Programs</li>
            <li>Digital Courses</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-500 text-sm tracking-wide">RESOURCES</h4>
          <ul className="mt-3 space-y-2 text-gray-800 text-sm">
            <li>Blog</li>
            <li>Self-Assessment</li>
            <li>Courses</li>
            <li>Streaks</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-500 text-sm tracking-wide">COMPANY</h4>
          <ul className="mt-3 space-y-2 text-gray-800 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-500 text-sm tracking-wide">LEGAL</h4>
          <ul className="mt-3 space-y-2 text-gray-800 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-gray-500 text-sm">
          © 2025 Tiny Steps A Day. All rights reserved.
        </p>
        <div className="flex space-x-5 mt-4 md:mt-0 text-gray-600">
          <a href="#" className="hover:text-indigo-500">
            <Mail size={20} />
          </a>
          <a href="#" className="hover:text-indigo-500">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-indigo-500">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-indigo-500">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-indigo-500">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
