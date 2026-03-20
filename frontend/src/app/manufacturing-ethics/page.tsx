import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ManufacturingEthicsPage() {
  const pillars = [
    { icon: "groups", title: "People First", desc: "We ensure safe working conditions, fair wages, and continuous training for all our employees. Every team member is treated with dignity and respect." },
    { icon: "eco", title: "Environmental Responsibility", desc: "Our manufacturing processes minimize waste generation. We follow green chemistry principles and maintain compliant effluent treatment systems." },
    { icon: "verified", title: "Quality Without Compromise", desc: "We never compromise on product quality. Every batch is tested rigorously against specification before release, ensuring patient safety above all." },
    { icon: "gavel", title: "Regulatory Compliance", desc: "We operate within the bounds of all applicable laws — from drug manufacturing regulations to labor laws and environmental statutes." },
    { icon: "handshake", title: "Ethical Supply Chain", desc: "We source raw materials only from vetted, ethical suppliers. We conduct supplier audits and require adherence to our supplier code of conduct." },
    { icon: "visibility", title: "Transparency", desc: "We maintain transparent communication with regulators, partners, and customers. Our quality records and audit trails are always accessible." },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-icons text-sm">balance</span>
            Our Commitment
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Manufacturing Ethics</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Responsible manufacturing is at the core of everything we do at Fortschritt Healthcare Limited.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-primary mb-6">The Fortschritt Ethics Framework</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We believe that true pharmaceutical excellence goes beyond product quality — it encompasses how we treat people, protect the environment, and uphold the values our company was built on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                <span className="material-icons text-2xl">{p.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-10 md:p-14 text-center text-white">
          <span className="material-icons text-5xl mb-4 block opacity-80">diversity_3</span>
          <h2 className="text-2xl font-extrabold mb-4">Questions About Our Practices?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">We are transparent about our manufacturing practices and welcome questions from partners, regulators, and the public.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Contact Our Ethics Officer
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
