"use client";

import React from "react";

const BrochureCTA = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Partner with Fortschritt Healthcare
            </h2>
            <p className="text-white/80 text-base mb-8 leading-relaxed">
              Experience medical innovation backed by trust and excellence. Join us in our journey towards a healthier future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/products"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 group shadow-xl shadow-black/10">
                <span>Download Brochure</span>
                <span className="material-icons group-hover:translate-y-1 transition-transform">download</span>
              </a>
              <a href="/contact"
                className="bg-white/10 text-white backdrop-blur px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureCTA;
