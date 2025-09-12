"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Moon, ShoppingCart, UserRound, Luggage } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Quiz", href: "/quiz" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Explore", href: "/explore" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
  
        <div className="flex items-center gap-4">
          <Image
            src="/image/logo.webp"
            alt="logo"
            width={22}
            height={22}
            className="h-full"
          />
          <Link
            href="/"
            className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            Tiny Steps A Day
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-4 font-medium">
          {navLinks.map((link) => {
            if (link.name === "About") {
              return (
                <li
                  key="About"
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
              
                  <button
                    onClick={() => setAboutOpen((p) => !p)}
                    aria-expanded={aboutOpen}
                    className="flex items-center gap-1 rounded-md bg-white px-4 py-2 text-gray-700 dark:text-gray-200
                               hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    About
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  
                  {aboutOpen && (
                    <div className="absolute left-1/2 top-full mt-3 w-96 -translate-x-1/2 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-xl ring-1 ring-black/5 z-50">
                      <div className="space-y-6">
                        
                        <div className="relative h-32 w-full overflow-hidden rounded-md">
                          <Image
                            src="/image/about/about.jpg"
                            alt="Team photo"
                            fill
                            sizes="384px"
                            className="object-cover"
                          />
                        </div>

                        
                        <div className="flex items-start gap-3">
                          <UserRound className="w-6 h-6 text-gray-500 " />
                          <div>
                            <Link
                              href="/about"
                              className="font-semibold text-gray-900 dark:text-gray-100 hover:underline"
                            >
                              About Us
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Our Mission and Values
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Luggage className="w-6 h-6 text-gray-500" />
                          <div>
                            <Link
                              href="/careers"
                              className="font-semibold text-gray-900 dark:text-gray-100 hover:underline"
                            >
                              Careers
                            </Link>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              Join our growing team
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            }

          
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="rounded-md bg-white px-4 py-2 text-gray-700 dark:text-gray-200
                             hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        
        <div className="flex items-center gap-4">
          <div className="border border-indigo-100 rounded-full">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Moon size={22} />
            </button>
          </div>
          <div className="border border-indigo-100 rounded-full">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingCart size={22} />
            </button>
          </div>
          <Link
            href="/signin"
            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Sign In
          </Link>

      
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>


      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md bg-white px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
