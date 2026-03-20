"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const sections = [
  {
    id: "rnd",
    icon: "biotech",
    title: "R&D Center",
    subtitle: "Cutting-Edge Research Facility",
    description: "Our state-of-the-art Research & Development center is the engine of innovation at Fortschritt Healthcare. Equipped with modern analytical instruments and staffed by experienced scientists, our R&D team continually works on novel formulations, bioavailability enhancement, and stability studies to bring tomorrow's medicines to patients today.",
    highlights: [
      "Advanced analytical laboratory (HPLC, GC, Mass Spec)",
      "Pilot-scale manufacturing for clinical batches",
      "Stability testing chambers (ICH guidelines)",
      "Dedicated API synthesis lab",
      "Formulation development — solid, liquid & semisolid",
      "Preformulation and compatibility studies",
    ],
  },
  {
    id: "manufacturing",
    icon: "factory",
    title: "Manufacturing",
    subtitle: "GMP-Compliant Plant & Processes",
    description: "Our manufacturing facility in Baddi, Himachal Pradesh operates under WHO-GMP guidelines with strict adherence to Good Manufacturing Practices. The facility features end-to-end production lines for multiple dosage forms, ensuring consistency, purity, and efficacy in every batch produced.",
    highlights: [
      "WHO-GMP certified manufacturing floors",
      "Multi-product manufacturing capability",
      "Automated weighing and dispensing systems",
      "HVAC systems with controlled environments",
      "ERP-driven batch tracking and compliance",
      "Capacity: 10+ million tablets / day",
    ],
  },
  {
    id: "quality",
    icon: "verified",
    title: "Quality Control",
    subtitle: "Rigorous QA/QC Protocols",
    description: "Quality is non-negotiable at Fortschritt Healthcare. Our Quality Control and Assurance teams operate independently to ensure every product released to the market meets stringent specifications. From raw material testing to finished product release, we follow a zero-compromise quality philosophy.",
    highlights: [
      "In-process quality checks at every stage",
      "Validated analytical methods (ICH Q2)",
      "Microbiology & sterility testing labs",
      "Retained sample repository",
      "Regular internal and third-party audits",
      "Complete batch traceability system",
    ],
  },
  {
    id: "certs",
    icon: "workspace_premium",
    title: "Certifications",
    subtitle: "WHO-GMP, ISO & International Standards",
    description: "Fortschritt Healthcare has earned a robust set of international certifications that validate our commitment to quality, safety, and regulatory compliance. These certifications enable us to supply to regulated and semi-regulated markets across the globe.",
    highlights: [
      "WHO-GMP Certified Facility",
      "ISO 9001:2015 Quality Management System",
      "DCGI Approved Manufacturing Site",
      "US-FDA Compliance Readiness",
      "CDSCO Registered",
      "GLP Certified Testing Laboratory",
    ],
  },
];

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-icons text-sm">factory</span>
            Our Infrastructure
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            World-Class Infrastructure
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From research to manufacturing and quality control — every facility built to the highest international standards.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/20">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {sections.map((sec, idx) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="material-icons text-sm">{sec.icon}</span>
                  {sec.subtitle}
                </div>
                <h2 className="text-4xl font-extrabold text-primary mb-6">{sec.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">{sec.description}</p>
                <div className="space-y-3">
                  {sec.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="material-icons text-primary mt-0.5 text-base">check_circle</span>
                      <span className="text-slate-600 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`bg-primary/5 rounded-[40px] p-12 flex items-center justify-center min-h-[320px] ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl flex items-center justify-center text-primary mb-6">
                    <span className="material-icons text-6xl">{sec.icon}</span>
                  </div>
                  <p className="text-primary font-bold text-xl">{sec.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{sec.subtitle}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-extrabold text-white mb-4">Schedule a Facility Tour</h2>
          <p className="text-white/70 mb-8">We welcome delegations, auditors, and partners to visit our state-of-the-art facilities.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Request a Visit
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
