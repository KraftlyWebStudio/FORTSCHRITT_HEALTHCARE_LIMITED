"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const categories = [
  {
    id: "pharmaceuticals",
    icon: "medication",
    title: "Pharmaceuticals",
    subtitle: "Tablets, Capsules & Injectables",
    description: "Our pharmaceutical portfolio covers a wide spectrum of dosage forms manufactured under WHO-GMP certified conditions. From solid oral dosage forms to parenteral preparations, we deliver consistent quality at every stage.",
    products: ["Tablets & Capsules", "Softgel Capsules", "Injectables", "Oral Liquids", "Topical Formulations", "Suppositories"],
    color: "bg-primary/5 text-primary",
  },
  {
    id: "api",
    icon: "science",
    title: "Active Pharma Ingredients",
    subtitle: "High-Purity API Manufacturing",
    description: "We manufacture a range of high-purity Active Pharmaceutical Ingredients (APIs) that comply with international pharmacopeial standards including IP, BP, and USP. Our synthesis processes are backed by rigorous QA/QC protocols.",
    products: ["Cardiovascular APIs", "Anti-infective APIs", "Oncology Intermediates", "NSAIDs", "Antidiabetic APIs", "Vitamins & Cofactors"],
    color: "bg-secondary/5 text-secondary",
  },
  {
    id: "nutra",
    icon: "local_pharmacy",
    title: "Nutraceuticals",
    subtitle: "Wellness & Dietary Supplements",
    description: "Our nutraceuticals division produces a comprehensive range of health supplements formulated with clinically researched ingredients. Every product adheres to FSSAI guidelines and international quality benchmarks.",
    products: ["Protein Powders", "Multivitamins", "Omega-3 Supplements", "Probiotics", "Mineral Complexes", "Herbal Extracts"],
    color: "bg-primary/5 text-primary",
  },
  {
    id: "vet",
    icon: "pets",
    title: "Veterinary Products",
    subtitle: "Animal Healthcare Solutions",
    description: "Fortschritt Healthcare extends its pharmaceutical expertise to veterinary medicine, offering a complete line of products for companion animals and livestock. Our vet products meet all regulatory requirements set by the CVMA and international bodies.",
    products: ["Antiparasitic Treatments", "Antibiotics", "Nutritional Supplements", "Skin & Coat Care", "Digestive Health", "Vaccines (Cold Chain)"],
    color: "bg-secondary/5 text-secondary",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-icons text-sm">inventory_2</span>
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Product Portfolio
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            High-quality pharmaceutical formulations across multiple therapeutic segments, manufactured to international standards.
          </p>
          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/20">
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {categories.map((cat, idx) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${cat.color} bg-opacity-10`}>
                  <span className="material-icons text-sm">{cat.icon}</span>
                  {cat.subtitle}
                </div>
                <h2 className="text-4xl font-extrabold text-primary mb-6">{cat.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">{cat.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {cat.products.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <span className="material-icons text-primary text-base">check_circle</span>
                      {p}
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">
                  <span className="material-icons text-sm">mail_outline</span>
                  Enquire Now
                </Link>
              </div>
              <div className={`bg-primary/5 rounded-[40px] p-12 flex items-center justify-center ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl flex items-center justify-center text-primary mb-6">
                    <span className="material-icons text-6xl">{cat.icon}</span>
                  </div>
                  <p className="text-primary font-bold text-lg">{cat.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{cat.subtitle}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-extrabold text-white mb-4">Want the Full Product Catalog?</h2>
          <p className="text-white/70 mb-8">Get in touch with our team for detailed specifications, pricing, and regulatory documentation.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Contact Our Team
            <span className="material-icons">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
