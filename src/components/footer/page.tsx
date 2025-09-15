"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-3 max-w-7xl mx-auto">

        <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
          This website uses cookies to enhance your experience on our website.
          <span className="text-indigo-500 cursor-pointer hover:underline ml-1">
            Learn more
          </span>
        </p>

        
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm sm:text-base self-center sm:self-auto">
          Got it!
        </button>
      </div>
    </footer>
  );
}
