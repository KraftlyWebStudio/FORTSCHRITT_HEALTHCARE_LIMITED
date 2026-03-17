"use client";

import React from "react";

const verticals = [
  {
    title: "Soft Gelatin Capsules",
    description: "Superior grade soft gelatin capsules made available in different formulations, emerging as a promising manufacturer in Himachal Pradesh.",
    icon: "medication",
    image: "/images/home/capsules.png",
    stat: "High Bioavailability",
  },
  {
    title: "Oral Liquid",
    description: "Comprehensive range of liquid orals including calcium preparations, iron preparations, antacids, and specialty syrups.",
    icon: "water_drop",
    image: "/images/home/injectables.png", // Reusing relevant image
    stat: "Flavor-Optimized",
  },
  {
    title: "Oncology Medicines",
    description: "Reputed manufacturers and suppliers of critical oncology medicines across various dosage forms in Baddi, Himachal Pradesh.",
    icon: "science",
    image: "/images/home/hero-lab.png", // Reusing relevant image
    stat: "Critical Care",
  },
  {
    title: "Nutrition Supplements",
    description: "Extensive range including protein powder, multivitamins, and specialty supplements kept in line with industry norms.",
    icon: "health_and_safety",
    image: "/images/home/tablets.png", // Reusing relevant image
    stat: "Wellness Focused",
  },
  {
    title: "Hair Care Shampoo",
    description: "Specialized hair care formulations including ketoconazole with piroctone olamine, selenium sulphide, and more.",
    icon: "clean_hands",
    image: "/images/home/shampoo.png",
    stat: "Dermatological Grade",
  },
  {
    title: "Medicinal Soap",
    description: "Foremost manufacturers of medicinal soaps in Himachal Pradesh, tested on all crucial quality parameters.",
    icon: "bubble_chart",
    image: "/images/home/soap.png",
    stat: "Quality Tested",
  },
];

const Verticals = () => {
  return (
    <section id="verticals" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Core Therapeutic Verticals
          </h2>
          <p className="text-lg text-slate-600">
            Our state-of-the-art facilities produce a wide range of therapeutic formulations across multiple delivery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-primary shadow-lg">
                   <span className="material-icons text-2xl">{item.icon}</span>
                </div>
              </div>
              <div className="p-8 pb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="px-8 pb-8 mt-auto">
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  {item.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
