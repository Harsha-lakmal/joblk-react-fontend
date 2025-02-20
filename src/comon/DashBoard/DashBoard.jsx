import React from 'react';
import { Sun } from 'lucide-react';

const DashBoard = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 rounded p-1">
                  <svg 
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Base</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Pages</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Support</a>
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Sun className="w-5 h-5 text-gray-500" />
            </button>
            <button className="text-gray-500 hover:text-gray-900 font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashBoard;