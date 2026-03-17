"use client";

import React from "react";

const Welcome = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome To <span className="text-secondary">Fortschritt</span>
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Fortschritt Healthcare Limited is a rapidly growing pharmaceutical force. 
                Currently ranked among the trusted names in the Indian healthcare landscape, 
                Fortschritt is backed by a robust network of business units and a dedicated 
                workforce committed to medical excellence.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Established in 2012, our company stands as a beacon of quality 
                and innovation. Registered with the Registrar of Companies, we have 
                consistently delivered excellence in therapeutic solutions across India.
              </p>
            </div>
            <button className="mt-10 bg-gradient-to-r from-secondary to-pink-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
              Read More
            </button>
          </div>

          {/* Visual Side with Custom Butterfly Shape */}
          <div className="lg:w-1/2 relative group">
            {/* Butterfly/Organic Shape Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-square flex items-center justify-center">
              {/* Outer Decorative Glow */}
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Complex Butterfly Shape Mask */}
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath: 'path("M232,23.3C212.7,46.5,200,81.4,200,120s12.7,73.5,32,96.7c18.5,22.4,59.3,43.3,118,43.3 c24.6,0,50-1.8,75-5c24,24,35,45,35,85c0,100-80,160-260,160S0,440,0,340c0-40,11-61,35-85c25,3.2,50.4,5,75,5 c58.7,0,99.5-20.9,118-43.3c19.3-23.2,32-58.1,32-96.7s-12.7-73.5-32-96.7C209.5,72.4,168.7,51.5,110,51.5 c-24.6,0-50,1.8-75,5C11,32,0,11,0-29c0-100,80-160,260-160s260,60,260,160c0,40-11,61-35,85 c-25-3.2-50.4-5-75-5C311.3,74.5,270.5,95.4,232,23.3z")',
                  // Note: Simplified for now as clip-paths are complex, using a more manageable organic shape for reliable rendering
                  borderRadius: '35% 65% 69% 31% / 46% 38% 62% 54%',
                  border: '8px solid white',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <img 
                  src="/images/about-facility.png" 
                  alt="Inside Fortschritt Facility"
                  className="w-full h-full object-cover"
                />
                
                {/* Accent Colors as per reference */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400 opacity-80 mix-blend-multiply rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary opacity-60 mix-blend-multiply rounded-full -ml-16 -mb-16"></div>
              </div>

              {/* Decorative Border Layer to simulate the double lines in reference */}
              <div 
                className="absolute inset-0 -z-10 bg-gradient-to-tr from-secondary to-cyan-400 opacity-20"
                style={{
                  borderRadius: '35% 65% 69% 31% / 46% 38% 62% 54%',
                  transform: 'scale(1.05)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
