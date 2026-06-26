import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#03000a] px-4 sm:px-6 lg:px-8 py-20 lg:py-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: 'center center'
      }}
    >
      {/* Premium background radial glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full radial-glow-blue blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full radial-glow-purple blur-3xl pointer-events-none" />
      
      {/* Subtle floating background particle dots */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-500 rounded-full blur-[1px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-3.5 h-3.5 bg-purple-500 rounded-full blur-[2px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full blur-[1px] animate-float-delayed-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 bg-blue-400 rounded-full blur-[1px] animate-float-delayed-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left side content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 max-w-2xl">
          
          {/* Small badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner transition-all hover:bg-white/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">
              Next-Gen AI Automation Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            Automate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              Data
            </span>
            .<br />
            Scale With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Intelligence
            </span>
            .
          </h1>

          {/* Short description */}
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Transform complex workflows into intelligent automated pipelines with real-time AI decision making. Seamless integration, extreme speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button type="button" aria-label="Start a free trial" className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:shadow-[0_0_22px_rgba(99,102,241,0.35)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="relative z-10">Start Free Trial</span>
            </button>
            <button type="button" aria-label="Book a demo" className="bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 backdrop-blur-md font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03000a]">
              Book Demo
            </button>
          </div>

        </div>

        {/* Right side 3D Orb visual */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[450px] sm:h-[500px] w-full" style={{ perspective: '1200px' }}>
          
          {/* Inner Glow Spotlight */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

          {/* Rotating Ring 1 (Solid, rotated in 3D) */}
          <div 
            className="absolute border border-indigo-500/20 rounded-full w-[380px] h-[380px] animate-spin-slow pointer-events-none"
            style={{ 
              transform: 'rotateX(75deg) rotateY(15deg)',
              boxShadow: '0 0 40px rgba(99,102,241,0.05)'
            }}
          />

          {/* Rotating Ring 2 (Dashed, slightly offset, counter-rotating) */}
          <div 
            className="absolute border-2 border-dashed border-purple-500/15 rounded-full w-[320px] h-[320px] pointer-events-none"
            style={{ 
              transform: 'rotateX(60deg) rotateY(-20deg) rotateZ(0deg)',
              animation: 'spin-slow 15s linear infinite reverse'
            }}
          />

          {/* Center Glowing Orb */}
          <div className="relative animate-float-slow flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] pointer-events-none">
            
            {/* The Orb sphere */}
            <div 
              className="absolute inset-0 rounded-full backdrop-blur-sm"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #e0e7ff 0%, #6366f1 35%, #312e81 80%, #03000a 100%)',
                boxShadow: `
                  inset -10px -10px 40px rgba(0,0,0,0.8),
                  inset 10px 10px 30px rgba(255,255,255,0.4),
                  0 0 50px rgba(99,102,241,0.4),
                  0 0 100px rgba(168,85,247,0.2)
                `
              }}
            />
            
            {/* Pulsing Aura Overlay */}
            <div 
              className="absolute inset-[-10px] rounded-full opacity-30 animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Floating Glass Stats Cards */}
          
          {/* Card 1: 98% Accuracy (Top-Left) */}
          <div 
            className="absolute top-[10%] left-[5%] sm:left-[10%] animate-float-delayed-1 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 shadow-[0_8px_32px_0_rgba(99,102,241,0.2)] flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            style={{ transform: 'translateZ(60px)' }}
          >
            <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-blue-500/10 text-blue-400">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white leading-none">98%</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">AI Pipeline Accuracy</p>
            </div>
          </div>

          {/* Card 2: 300+ Hours Saved (Bottom-Right) */}
          <div 
            className="absolute bottom-[12%] right-[5%] sm:right-[8%] animate-float-delayed-2 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 shadow-[0_8px_32px_0_rgba(168,85,247,0.2)] flex items-center gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            style={{ transform: 'translateZ(80px)' }}
          >
            <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-purple-500/10 text-purple-400">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white leading-none">300+</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Developer Hours Saved</p>
            </div>
          </div>

          {/* Card 3: 10TB Processed (Top-Right / Back) */}
          <div 
            className="absolute top-[18%] right-[8%] sm:right-[15%] animate-float-slow backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-3 shadow-[0_8px_32px_0_rgba(99,102,241,0.15)] flex items-center gap-2.5 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            style={{ transform: 'translateZ(-40px)', opacity: 0.9 }}
          >
            <div className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-indigo-500/10 text-indigo-400">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-white leading-none">10TB</p>
              <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">Secure Data Processed</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
