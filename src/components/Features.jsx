import React, { useState } from 'react';
import { features } from '../data/featuresData';

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(2); // Workflow Automation (index 2) active by default

  return (
    <section id="features" className="relative py-24 bg-[#03000a] overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decoration glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Scale With Intelligent Features
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-light">
            Engineered for computational speed, built for complete workflow automation. Hover to inspect pipeline components.
          </p>
        </div>

        {/* ========================================== */}
        {/* DESKTOP BENTO GRID VIEW (lg:grid)          */}
        {/* ========================================== */}
        <div className="hidden lg:grid grid-cols-3 gap-6 auto-rows-[240px] max-w-6xl mx-auto mt-16">

          {features.map((item, index) => {
            const isActive = activeIndex === index;

            // Bento Grid grid placement classes:
            // Index 0: Row 1, Col 1
            // Index 1: Row 2, Col 1
            // Index 2 (Workflow Automation): Row 1-2, Col 2 (Center double-height)
            // Index 3: Row 1, Col 3
            // Index 4: Row 2, Col 3
            let gridPlacement = '';
            if (index === 0) gridPlacement = 'col-start-1 row-start-1';
            if (index === 1) gridPlacement = 'col-start-1 row-start-2';
            if (index === 2) gridPlacement = 'col-start-2 row-start-1 row-span-2';
            if (index === 3) gridPlacement = 'col-start-3 row-start-1';
            if (index === 4) gridPlacement = 'col-start-3 row-start-2';

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer ${gridPlacement} ${isActive
                    ? '-translate-y-1.5 border-indigo-500/40 bg-indigo-950/20 shadow-[0_8px_30px_rgb(99,102,241,0.08)]'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
              >
                {/* Glowing radial accent gradient behind active card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                />

                {/* Top: Icon + Badge */}
                <div className="flex justify-between items-start relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-gray-400 group-hover:text-indigo-400 group-hover:bg-white/10'
                    }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                    </svg>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all duration-300 ${isActive ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : 'bg-white/5 border-white/10 text-gray-500'
                    }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Bottom or Center: Details */}
                <div className="space-y-2 relative z-10 mt-4">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Additional content rendered ONLY for the larger center Workflow Automation card */}
                  {index === 2 && (
                    <div className="mt-4 pt-4 border-t border-indigo-500/25 space-y-3 animate-fade-in">
                      <p className="text-xs text-gray-400 leading-relaxed font-light">
                        {item.longDescription}
                      </p>
                      {/* Fake Interactive Pipeline Visualization */}
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-2 text-center text-[10px] text-indigo-300">
                          Data Ingest
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2 text-center text-[10px] text-purple-300 animate-pulse">
                          AI Parsing
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-center text-[10px] text-blue-300">
                          Edge Deploy
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* ========================================== */}
        {/* MOBILE ACCORDION VIEW (lg:hidden)          */}
        {/* ========================================== */}
        <div className="lg:hidden mt-12 space-y-4 max-w-xl mx-auto">
          {features.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 rounded-2xl"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between p-5 text-left border transition-all duration-300 focus:outline-none ${isOpen
                      ? 'bg-indigo-950/20 border-indigo-500/40 rounded-b-none'
                      : 'bg-white/5 border-white/10 hover:bg-white/8'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-gray-400'
                      }`}>
                      <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                      </svg>
                    </div>
                    <span className="font-bold text-white text-base">
                      {item.title}
                    </span>
                  </div>

                  {/* Accordion Open indicator */}
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-gray-500'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen
                      ? 'max-h-[350px] border-x border-b border-indigo-500/40 rounded-b-2xl p-6 bg-indigo-950/10'
                      : 'max-h-0 border-x border-b border-transparent p-0'
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-indigo-500/20 border-indigo-500/30 text-indigo-300">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed font-light border-t border-white/5 pt-3">
                      {item.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
