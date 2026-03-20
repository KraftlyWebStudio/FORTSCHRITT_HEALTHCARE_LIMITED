import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const sitemapData = [
  {
    section: "Main Pages",
    icon: "home",
    links: [
      { label: "Home", href: "/" },
      { label: "History & Journey", href: "/history" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    section: "Products",
    icon: "inventory_2",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products#pharmaceuticals" },
      { label: "Active Pharma Ingredients", href: "/products#api" },
      { label: "Nutraceuticals", href: "/products#nutra" },
      { label: "Veterinary Products", href: "/products#vet" },
    ],
  },
  {
    section: "Infrastructure",
    icon: "factory",
    links: [
      { label: "R&D Center", href: "/infrastructure#rnd" },
      { label: "Manufacturing Facility", href: "/infrastructure#manufacturing" },
      { label: "Quality Control", href: "/infrastructure#quality" },
      { label: "Certifications", href: "/infrastructure#certs" },
    ],
  },
  {
    section: "Company",
    icon: "domain",
    links: [
      { label: "Company Overview", href: "/#about" },
      { label: "Leadership Team", href: "/#team" },
      { label: "Legacy & Milestones", href: "/#legacy" },
      { label: "R&D Publications", href: "/rd-publications" },
      { label: "Manufacturing Ethics", href: "/manufacturing-ethics" },
    ],
  },
  {
    section: "Legal",
    icon: "gavel",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Sitemap</h1>
          <p className="text-white/70">A complete overview of all pages on the Fortschritt Healthcare website.</p>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((group) => (
            <div key={group.section} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-icons">{group.icon}</span>
                </div>
                <h2 className="font-extrabold text-primary text-lg">{group.section}</h2>
              </div>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                      <span className="material-icons text-sm text-primary/40">chevron_right</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
