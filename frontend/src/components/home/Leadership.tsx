"use client";

import React from "react";
import { FadeUp, StaggerGrid, staggerItem, motion } from "@/utils/animations";

const leaders = [
  { name: "Dr. Marcus Weber", role: "Chief Executive Officer", bio: "20+ years in pharmaceutical management and strategic growth.", image: "https://i.pravatar.cc/300?img=11" },
  { name: "Dr. Elena Rodriguez", role: "Head of R&D", bio: "Lead researcher in advanced molecular drug delivery systems.", image: "https://i.pravatar.cc/300?img=26" },
  { name: "Julian Schmidt", role: "Operations Director", bio: "Expert in global supply chain and lean manufacturing protocols.", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Sarah Jenkins", role: "Quality Assurance Lead", bio: "Ensuring world-class standards across all manufacturing units.", image: "https://i.pravatar.cc/300?img=32" },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-white scroll-mt-20">
      <div id="team" className="absolute invisible" style={{marginTop: "-80px"}} />
      <div id="ceo" className="absolute invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Visionary Leadership
          </h2>
          <p className="text-slate-600">
            Our executive team combines decades of scientific expertise with a passion for transforming global healthcare.
          </p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={staggerItem}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[4/5] bg-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-white text-xs font-bold tracking-widest uppercase mb-1">{leader.role}</p>
                  <h4 className="text-white text-xl font-bold">{leader.name}</h4>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h4 className="text-xl font-bold text-primary mb-1">{leader.name}</h4>
                <p className="text-primary font-bold text-sm mb-3">{leader.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default Leadership;
