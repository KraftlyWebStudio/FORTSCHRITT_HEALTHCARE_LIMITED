"use client";

import React from "react";

const values = [
  {
    title: "Our Mission",
    description: "To enhance the quality of human life by providing innovative, high-quality, and affordable pharmaceutical products across the nation.",
    icon: "rocket_launch",
  },
  {
    title: "Our Vision",
    description: "To be a recognized pharmaceutical leader, admired for our scientific excellence, ethical standards, and patient-centric approach.",
    icon: "visibility",
  },
  {
    title: "Our Values",
    description: "Integrity in Action, Innovation for Patients, Quality Without Compromise, and Social Responsibility.",
    icon: "verified",
  },
];

const MissionValues = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white rounded-[40px] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 group hover:border-primary/20 transition-all duration-500 flex flex-col h-full reveal-up stagger-${idx + 1}`}
            >
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                <span className="material-icons text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10 flex-grow">
                {item.description}
              </p>
              
              <div className="pt-8 border-t border-slate-100">
                <a href="#about" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group/link">
                  Learn More
                  <span className="material-icons text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
