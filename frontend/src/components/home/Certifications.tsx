"use client";

import React from "react";
import { FadeUp, FadeIn, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const certifications = [
  { title: "WHO-GMP", description: "Compliance with World Health Organization Good Manufacturing Practices ensuring consistent quality.", code: "WHO" },
  { title: "ISO 9001:2015", description: "International standard for quality management systems ensuring customer satisfaction and safety.", code: "ISO" },
  { title: "DCGI Approved", description: "Regulatory compliance and approval from the Drug Controller General of India.", code: "DCGI" },
  { title: "US-FDA Compliance", description: "Adherence to stringent international standards for global pharmaceutical distribution.", code: "US-FDA" },
];

const Certifications = () => {
  return (
    <section id="quality" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <FadeIn direction="left" className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Quality Assurance Standards
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Quality is at the heart of everything we do. Our manufacturing processes adhere to the most stringent international standards, ensuring every dosage form that leaves our facility is safe, effective, and reliable.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-icons">check_circle</span>
                <span>Rigorous Testing</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-icons">science</span>
                <span>Advanced R&D</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center w-64"
            >
              <div className="text-primary mb-4">
                <span className="material-icons text-5xl">verified</span>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Verified</p>
              <h4 className="text-primary font-bold text-lg mb-4">WHO-GMP</h4>
              <p className="text-slate-500 text-xs leading-tight">World Health Organization - Good Manufacturing Practice</p>
            </motion.div>
          </FadeIn>
        </div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6, borderColor: "rgba(30,58,138,0.2)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                <span className="text-xs font-bold">{item.code}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-xs font-bold mt-auto group-hover:translate-x-1 transition-transform">
                <span>Download Certificate</span>
                <span className="material-icons text-sm">download</span>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default Certifications;
