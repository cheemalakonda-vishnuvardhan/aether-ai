import React from 'react';

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-semibold tracking-wider text-gray-500 uppercase mb-8">
          Trusted by Lead Engineers at Global Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          <span className="text-2xl font-bold tracking-tight">VERTEX</span>
          <span className="text-2xl font-bold tracking-tight">KINETIC</span>
          <span className="text-2xl font-bold tracking-tight">PULSE</span>
          <span className="text-2xl font-bold tracking-tight">SPHERE</span>
        </div>
      </div>
    </section>
  );
}
