"use client";

import React from "react";

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

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Our Journey & Milestones
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From humble beginnings in 2012 to a global pharmaceutical presence, we have consistently hit our targets of growth and excellence.
            </p>
            <div className="hidden md:block">
               <div className="w-24 h-1 bg-primary/20 rounded-full mb-4"></div>
               <div className="text-primary font-bold text-sm tracking-widest uppercase mb-6">Over a decade of legacy</div>
               <a 
                 href="/history" 
                 className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline underline-offset-4"
               >
                 View Full History <span className="material-icons text-sm">arrow_forward</span>
               </a>
            </div>
          </div>

          <div className="md:w-2/3 space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-primary/10 pl-10 ml-4">
            {milestones.slice(0, 3).map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[45px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary transition-all group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(43,27,123,0.3)]"></div>
                <div className="text-primary font-black text-xl mb-1 tabular-nums">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
