import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-black/40 border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tight text-white">AetherAI</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AetherAI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
