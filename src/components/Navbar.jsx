import React from 'react';

export default function Navbar() {
  return (
    <header id="navbar" className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Primary navigation" className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 shadow-[0_0_35px_rgba(59,130,246,0.12)] backdrop-blur-xl sm:px-6">
          <div className="flex-shrink-0">
            <a href="#hero" aria-label="Go to the homepage" className="text-[1.1rem] font-semibold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text drop-shadow-[0_0_14px_rgba(34,211,238,0.25)] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a] sm:text-xl">
              AetherAI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" aria-label="Jump to the features section" className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-gray-300 transition-all duration-200 before:absolute before:bottom-1 before:left-1/2 before:h-0.5 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:via-blue-400 before:to-indigo-400 before:transition-all before:duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)] hover:before:w-3/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">Features</a>
              <a href="#pricing" aria-label="Jump to the pricing section" className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-gray-300 transition-all duration-200 before:absolute before:bottom-1 before:left-1/2 before:h-0.5 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:via-blue-400 before:to-indigo-400 before:transition-all before:duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)] hover:before:w-3/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">Pricing</a>
              <a href="#social-proof" aria-label="Jump to testimonials" className="relative cursor-pointer rounded-full px-3 py-2 text-sm font-semibold text-gray-300 transition-all duration-200 before:absolute before:bottom-1 before:left-1/2 before:h-0.5 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:via-blue-400 before:to-indigo-400 before:transition-all before:duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)] hover:before:w-3/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">Testimonials</a>
            </div>
          </div>
          <div>
            <button type="button" aria-label="Get started with the platform" className="relative overflow-hidden rounded-md border border-cyan-400/30 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_22px_rgba(59,130,246,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
