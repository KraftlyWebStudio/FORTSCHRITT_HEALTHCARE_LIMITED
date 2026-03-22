"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string, id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section id={id} ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.section>
  );
}

const jobs = [
  {
    id: 1,
    title: "Senior R&D Scientist",
    department: "Research & Development",
    location: "Baddi, HP",
    type: "Full-Time",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Quality Control Manager",
    department: "Quality Assurance",
    location: "Thane, MH",
    type: "Full-Time",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Regulatory Affairs Specialist",
    department: "Compliance",
    location: "Remote / Baddi",
    type: "Full-Time",
    posted: "2 weeks ago",
  },
  {
    id: 4,
    title: "Area Sales Manager",
    department: "Sales & Marketing",
    location: "Pan India",
    type: "Full-Time",
    posted: "Just now",
  }
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");

  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.department)))];
  
  const filteredJobs = activeDepartment === "All" ? jobs : jobs.filter(j => j.department === activeDepartment);

  return (
    <div className="min-h-screen bg-[#fdfdfe] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary pb-20 pt-32">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="material-icons text-[14px] text-secondary">work_outline</span>
            Join Our Team
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8">
            Shape the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              Global Healthcare
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            At Fortschritt Healthcare, we believe our greatest asset is our people. Be part of a culture that drives innovation, values precision, and works tirelessly to improve lives worldwide.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#positions"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-black/10 hover:scale-105 transition-all">
              <span className="material-icons">search</span>
              View Open Positions
            </a>
            <a href="#culture"
              className="bg-white/10 border border-white/25 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all">
              <span className="material-icons">favorite_border</span>
              Life at Fortschritt
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <Section id="culture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Why Build Your Career With Us?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed">
            We foster an environment where brilliant minds can thrive, collaborate, and create life-saving therapeutics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "public", title: "Global Impact", desc: "Contribute to pharmaceutical products that reach patients across the globe, making a tangible difference in their lives.", color: "primary" },
            { icon: "school", title: "Continuous Learning", desc: "We invest in your growth with regular training, certifications, and paths for rapid career advancement.", color: "secondary" },
            { icon: "health_and_safety", title: "Holistic Wellness", desc: "Comprehensive health coverage, well-being programs, and supportive work-life balance initiatives.", color: "green" },
            { icon: "groups", title: "Inclusive Culture", desc: "A diverse, highly collaborative, and meritocratic environment where every voice and idea is valued.", color: "primary" },
          ].map((card, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 32px 64px -16px rgba(30,58,138,0.15)" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                card.color === "green" ? "bg-green-100" : card.color === "secondary" ? "bg-sky-100" : "bg-primary/5"
              }`} />
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                card.color === "green" ? "bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white" :
                card.color === "secondary" ? "bg-sky-50 text-secondary group-hover:bg-secondary group-hover:text-white" :
                "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
              }`}>
                <span className="material-icons text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-3">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Positions Section */}
      <section id="positions" className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                Open Positions
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Explore our current openings and find where your expertise fits best within our growing operations.
              </p>
            </div>
            
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button 
                  key={dept} 
                  onClick={() => setActiveDepartment(dept)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeDepartment === dept 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-white text-slate-500 border border-slate-200 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-6">
            <AnimatePresence>
              {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease }}
                  key={job.id}
                  className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-sky-50 px-3 py-1 rounded-lg">
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <span className="material-icons text-[14px]">schedule</span>
                        {job.posted}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="material-icons text-[18px]">location_on</span>
                        {job.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-icons text-[18px]">work</span>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <a 
                      href={`mailto:fortschritthealthcare@gmail.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/5 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors w-full md:w-auto"
                    >
                      Apply Now
                      <span className="material-icons text-sm">arrow_forward</span>
                    </a>
                  </div>
                </motion.div>
              )) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="py-20 text-center bg-white rounded-[2rem] border border-slate-200 border-dashed"
                >
                  <span className="material-icons text-4xl text-slate-300 mb-4">search_off</span>
                  <h3 className="text-xl font-bold text-slate-600 mb-2">No positions found</h3>
                  <p className="text-slate-400">There are currently no openings in this department.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Spontaneous Application CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="bg-primary rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20">
              <span className="material-icons text-4xl">flight_takeoff</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Don't see a perfect fit?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              We are constantly looking for talented professionals to join our ranks. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:fortschritthealthcare@gmail.com?subject=Spontaneous Application"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3 group shadow-xl"
            >
              <span className="material-icons">mail</span>
              Send Your Resume
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
