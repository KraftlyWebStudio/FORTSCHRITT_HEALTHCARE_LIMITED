"use client";

import React from "react";

const Welcome = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side — Overlapping Premium Layout */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-4/5 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white hover-lift">
              <img 
                src="/images/about-facility.png" 
                alt="State-of-the-Art Facility"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-0 w-3/5 z-20 rounded-[24px] overflow-hidden shadow-2xl border-8 border-white animate-float hidden md:block">
              <img 
                src="/images/home/hero-scientist.png" 
                alt="Pharmaceutical Research"
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Decorative Glass Badge */}
            <div className="absolute top-1/2 -right-12 translate-y-[-50%] z-30 glass p-6 rounded-3xl shadow-xl hidden lg:block border border-white/50">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary mb-1">12+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Years of <br /> Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Our Legacy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.15]">
              Pioneering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-accent">
                Pharmaceutical Care
              </span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Fortschritt Healthcare Limited stands at the intersection of medical science and compassionate care. 
                As a rapidly ascending force in the Indian pharmaceutical landscape, we combine clinical precision 
                with a steadfast commitment to accessibility.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-icons text-lg">workspace_premium</span>
                    Quality Assured
                  </div>
                  <p className="text-sm text-slate-500">WHO-GMP and ISO certified manufacturing protocols.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-bold">
                    <span className="material-icons text-lg">public</span>
                    Bharat Presence
                  </div>
                  <p className="text-sm text-slate-500">Serving healthcare providers across every Indian state.</p>
                </div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Established in 2012, we have evolved from a visionary startup into a trusted name, 
                registered with the Registrar of Companies and delivering excellence in every dosage.
              </p>
            </div>

            <div className="mt-12">
              <a href="#about" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group">
                Discover Our Heritage
                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
