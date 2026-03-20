"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    badge: "Legacy of Excellence",
    heading: "Advancing Human Health Through",
    highlight: "Precision Medicine",
    sub: "Fortschritt Healthcare Limited delivers world-class pharmaceutical solutions, combining modern innovation with a decade of trusted expertise.",
    image: "/images/home/hero-lab.png",
  },
  {
    badge: "Quality First",
    heading: "State-of-the-Art Manufacturing",
    highlight: "Certified Standards",
    sub: "Our WHO-GMP and ISO certified facilities ensure every dosage meets the highest international benchmarks for safety and efficacy.",
    image: "/images/home/hero-facility.png",
  },
  {
    badge: "Innovation Driven",
    heading: "Pioneering Formulations for a",
    highlight: "Healthier Future",
    sub: "From complex APIs to critical life-saving therapeutics, we are dedicated to making quality healthcare accessible to all.",
    image: "/images/home/hero-packaging.png",
  },
];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const s = heroSlides[slide];

  return (
    <section id="home" className="relative min-h-[90vh] lg:h-[95vh] flex items-center overflow-visible bg-[#fdfdfe]">
      {/* ── Background Layer ────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* ── Content Container ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text Side */}
          <div className="max-w-2xl">
            {isMounted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold mb-8 tracking-wider uppercase"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {s.badge}
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.05] mb-8">
                    {s.heading} <br />
                    <motion.span
                      initial={{ backgroundSize: "0% 100%" }}
                      animate={{ backgroundSize: "100% 100%" }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-accent to-secondary"
                    >
                      {s.highlight}
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl font-medium"
                  >
                    {s.sub}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-wrap gap-5"
                  >
                    <a
                      href="/products"
                      className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.05] hover:shadow-primary/40 active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group"
                    >
                      Explore Portfolio
                      <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                    <a
                      href="/#about"
                      className="glass text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/90 hover:scale-[1.05] transition-all flex items-center gap-3 border border-slate-200"
                    >
                      Our History
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-12 lg:mt-0 px-6 lg:px-0"
          >
            <div className="relative z-10 w-full aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-[48px] overflow-hidden shadow-[0_48px_100px_-20px_rgba(30,58,138,0.3)] border-[12px] border-white group/hero">
              {heroSlides.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === slide ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover animate-subtle-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60" />
                </div>
              ))}
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-6 lg:-top-16 lg:-right-12 z-20 glass p-7 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/60 hover:scale-110 transition-transform cursor-default group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">verified</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Certification</div>
                  <div className="text-xl font-black text-primary">WHO-GMP</div>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 lg:-bottom-12 lg:-left-12 z-20 glass p-7 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/60 hover:scale-110 transition-transform cursor-default group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">biotech</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Innovation</div>
                  <div className="text-xl font-black text-primary">R&D Lab</div>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </motion.div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === slide ? "w-12 bg-primary" : "w-6 bg-slate-200 hover:bg-slate-400 hover:w-8"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
