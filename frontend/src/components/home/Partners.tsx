"use client";

import React from "react";

const partners = [
  { name: "National Pharma", type: "Research Collaborator", icon: "science" },
  { name: "Himachal Bio", type: "Manufacturing Partner", icon: "factory" },
  { name: "Apex Labs", type: "Quality Assurance", icon: "verified" },
  { name: "LifeCare", type: "Distribution Network", icon: "local_shipping" },
  { name: "EuroHealth", type: "Supply Chain", icon: "inventory" },
  { name: "MedTech", type: "R&D Innovations", icon: "biotech" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 reveal-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              Collaborations
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Strategic Pharmaceutical <span className="text-primary-accent text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Partnerships</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              We collaborate with healthcare leaders and research institutions to drive innovation and maintain the highest standards of pharmaceutical excellence across the nation.
            </p>
          </div>
          
          <a
            href="#"
            className="group flex items-center gap-4 bg-white px-8 py-4 rounded-2xl font-bold text-slate-700 hover:text-primary transition-all border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            Partner With Us 
            <span className="material-icons text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Infinite Scroll Logo Cloud (CSS Only) */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 py-4">
          {[...partners, ...partners].map((p, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-64 glass p-8 rounded-[24px] border border-white/50 hover-lift group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all shadow-sm">
                  <span className="material-icons text-3xl">{p.icon}</span>
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-base tracking-tight group-hover:text-primary transition-colors">{p.name}</div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">{p.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-256px * 6 - 32px * 6)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
