"use client";

import React from "react";
import { FadeIn, motion } from "@/utils/animations";

const milestones = [
  { year: "2012", title: "The Genesis", description: "Fortschritt Healthcare Limited was established with a mission to bring high-quality primary care formulations to the Indian market." },
  { year: "2015", title: "Manufacturing Milestone", description: "Inaugurated our advanced manufacturing facility in Baddi, Himachal Pradesh, significantly scaling our production capacity." },
  { year: "2018", title: "R&D Innovation HUB", description: "Established a dedicated Research & Development center focusing on complex generic formulations and critical therapeutics." },
  { year: "2023", title: "Therapeutic Excellence", description: "Broadened our portfolio to over 500+ specialized formulations, serving healthcare providers across every state in Bharat." },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-slate-50 overflow-hidden scroll-mt-20">
      <div id="legacy" className="absolute invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">

          <FadeIn direction="left" className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              A Decade of <br />
              <span className="text-primary-accent">Growth & Trust</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
              From our humble beginnings in 2012 to becoming a trusted name in Indian pharmaceuticals,
              we have consistently delivered excellence and hit every milestone of growth.
            </p>

            <div className="space-y-6">
              {[
                { icon: "history_edu", color: "primary", label: "12+ Years Legacy" },
                { icon: "inventory_2", color: "secondary", label: "500+ Formulations" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.color === "primary" ? "bg-primary/5 text-primary" : "bg-secondary/5 text-secondary"
                  }`}>
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <div className="text-primary font-bold">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" className="lg:w-2/3 relative pl-12">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary via-primary-accent to-transparent rounded-full opacity-20" />

            <div className="space-y-16">
              {milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[54px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-primary transition-all group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] shadow-sm" />

                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                    <span className="text-primary font-black text-3xl tabular-nums tracking-tighter">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
