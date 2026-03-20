"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const milestones = [
  {
    year: "2012",
    title: "Foundation",
    description: "Fortschritt Healthcare Limited established with a vision to revolutionize primary care medication.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Initiated exports to Southeast Asian and Middle Eastern markets, doubling production capacity.",
  },
  {
    year: "2018",
    title: "R&D Excellence",
    description: "Inaugurated state-of-the-art research and development center for complex generic formulations.",
  },
  {
    year: "2023",
    title: "Global Player",
    description: "Recognized as a leading manufacturing partner in over 45 countries with WHO-GMP compliance.",
  },
];

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6"> Our Full History & Journey </h1>
            <p className="text-lg text-slate-600"> From our origins to our global presence, explore every milestone that has shaped Fortschritt Healthcare. </p>
          </div>

          <div className="space-y-16 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-primary/10">
            {milestones.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 shadow-[0_0_15px_rgba(43,27,123,0.3)]"></div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary font-black text-3xl mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
                </div>

                {/* Spacer Side for large screens */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
