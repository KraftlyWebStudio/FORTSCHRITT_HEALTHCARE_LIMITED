"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const values = [
  { title: "Our Mission", description: "To enhance the quality of human life by providing innovative, high-quality, and affordable pharmaceutical products across the nation.", icon: "rocket_launch" },
  { title: "Our Vision", description: "To be a recognized pharmaceutical leader, admired for our scientific excellence, ethical standards, and patient-centric approach.", icon: "visibility" },
  { title: "Our Values", description: "Integrity in Action, Innovation for Patients, Quality Without Compromise, and Social Responsibility.", icon: "verified" },
];

const MissionValues = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.12)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="bg-white rounded-[40px] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 group hover:border-primary/20 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform">
                <span className="material-icons text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-primary mb-6 group-hover:text-primary-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10 flex-grow">
                {item.description}
              </p>
              <div className="pt-8 border-t border-slate-100">
                <a href="/#about" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group/link">
                  Learn More
                  <span className="material-icons text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default MissionValues;
