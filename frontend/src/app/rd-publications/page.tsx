import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const publications = [
  { title: "Bioavailability Enhancement of BCS Class II Drugs via Solid Dispersion Techniques", journal: "Journal of Pharmaceutical Sciences", year: "2023", authors: "R. Sharma, P. Gupta, M. Kapoor", category: "Formulation" },
  { title: "Novel Approach to Targeted Drug Delivery in Oncology Using Polymeric Nanoparticles", journal: "Drug Delivery & Translational Research", year: "2023", authors: "A. Singh, S. Mehta, R. Verma", category: "Oncology" },
  { title: "Stability Studies of Critical Parenteral Formulations Under ICH Q1A Guidelines", journal: "AAPS PharmTech", year: "2022", authors: "M. Patel, D. Joshi", category: "Quality" },
  { title: "Development of Extended-Release Matrix Tablets for Cardiovascular Drug Delivery", journal: "International Journal of Pharmaceutics", year: "2022", authors: "P. Kumar, A. Nair", category: "Formulation" },
  { title: "Comparative Dissolution Studies of Generic vs. Branded Anti-infective Formulations", journal: "Dissolution Technologies", year: "2021", authors: "S. Bose, N. Rajput", category: "Analytics" },
  { title: "Green Chemistry Approaches in API Synthesis — A Review", journal: "Organic Process Research & Development", year: "2021", authors: "A. Chaturvedi, R. Menon", category: "R&D" },
];

const categoryColors: Record<string, string> = {
  "Formulation": "bg-primary/5 text-primary",
  "Oncology": "bg-red-50 text-red-600",
  "Quality": "bg-green-50 text-green-600",
  "Analytics": "bg-purple-50 text-purple-600",
  "R&D": "bg-secondary/5 text-secondary",
};

export default function RDPublicationsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-icons text-sm">biotech</span>
            Research & Development
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">R&D Publications</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Peer-reviewed research and scientific publications from Fortschritt Healthcare's R&D division.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:border-primary/20 hover:shadow-md transition-all group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[pub.category] || "bg-slate-100 text-slate-500"}`}>
                  {pub.category}
                </span>
                <span className="text-slate-400 text-sm font-semibold">{pub.year}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-accent transition-colors">{pub.title}</h3>
              <p className="text-slate-500 text-sm mb-1"><span className="font-semibold">Authors:</span> {pub.authors}</p>
              <p className="text-slate-400 text-sm italic">{pub.journal}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-3xl p-10 text-center border border-primary/10">
          <span className="material-icons text-primary text-5xl mb-4 block">science</span>
          <h2 className="text-2xl font-extrabold text-primary mb-3">Collaborate With Our R&D Team</h2>
          <p className="text-slate-500 mb-6">Interested in joint research, licensing, or scientific collaboration? We welcome academic and industry partnerships.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">
            Get in Touch
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
