"use client";

import React from "react";

const verticals = [
  {
    title: "Soft Gelatin Capsules",
    description: "Superior grade soft gelatin capsules made available in different formulations, emerging as a promising manufacturer in Himachal Pradesh.",
    icon: "medication",
    image: "/images/home/capsules.png",
    tag: "High Bioavailability",
  },
  {
    title: "Oral Liquid Solutions",
    description: "Comprehensive range of liquid orals including calcium preparations, antacids, and specialty syrups for pediatric and geriatric care.",
    icon: "water_drop",
    image: "/images/home/injectables.png",
    tag: "Flavor-Optimized",
  },
  {
    title: "Oncology Therapeutics",
    description: "Reputed manufacturers of critical oncology medicines across various dosage forms, meeting stringent safety protocols.",
    icon: "science",
    image: "/images/home/hero-lab.png",
    tag: "Critical Care",
  },
  {
    title: "Nutrition Supplements",
    description: "Extensive range including protein powder, multivitamins, and specialty supplements kept in line with industry norms.",
    icon: "health_and_safety",
    image: "/images/home/tablets.png",
    tag: "Wellness Focused",
  },
  {
    title: "Dermatological Care",
    description: "Specialized hair and skin care formulations including ketoconazole and medicinal soaps tested on all quality parameters.",
    icon: "clean_hands",
    image: "/images/home/shampoo.png",
    tag: "Clinical Grade",
  },
  {
    title: "Medicinal Soaps",
    description: "Foremost manufacturers of medicinal soaps in Himachal Pradesh, tested on all crucial quality parameters.",
    icon: "bubble_chart",
    image: "/images/home/soap.png",
    tag: "Quality Tested",
  },
];

const Verticals = () => {
  return (
    <section id="verticals" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Core Therapeutic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Verticals</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Our state-of-the-art facilities produce a wide range of therapeutic formulations across multiple delivery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {verticals.map((item, idx) => (
            <div
              key={item.title}
              className={`group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover-lift reveal-up stagger-${(idx % 4) + 1}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute top-6 right-6 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary shadow-xl border border-white/40">
                   <span className="material-icons text-3xl">{item.icon}</span>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest bg-primary/80 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  {item.tag}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium line-clamp-3">
                  {item.description}
                </p>
                
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-tight group-hover:gap-4 transition-all"
                >
                  Explore Range 
                  <span className="material-icons text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
