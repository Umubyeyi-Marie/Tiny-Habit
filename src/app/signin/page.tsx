'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-purple-50 text-gray-800">
      <h1 className="text-xl font-bold text-indigo-600 mb-15">Tiny Steps A Day</h1>

      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
        <h2 className="text-xl font-semibold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          Sign in to continue your journey
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-2 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

      
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 pl-10 pr-10 py-2 focus:border-purple-500 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <span>Remember</span>
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 text-white py-2 font-semibold hover:bg-indigo-400 transition-colors"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Tiny Steps A Day. All rights reserved.
      </footer>
    </div>
  );
}
