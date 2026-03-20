import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function CookiePolicyPage() {
  const sections = [
    { title: "What Are Cookies?", content: "Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience." },
    { title: "How We Use Cookies", content: "We use cookies to keep the site functioning correctly (essential cookies), remember your preferences (functional cookies), and understand how visitors interact with our content (analytics cookies). We do not use cookies for advertising." },
    { title: "Types of Cookies We Use", content: "Essential Cookies: Required for the website to function properly — cannot be disabled. Functional Cookies: Remember your preferences such as language and region. Analytics Cookies: Help us understand website traffic and usage patterns (anonymized)." },
    { title: "Managing Cookies", content: "You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website. Most browsers allow you to refuse cookies entirely or to accept cookies from specific websites." },
    { title: "Third-Party Cookies", content: "Some pages on our website may include content from third-party services (such as Google Analytics). These third parties may set their own cookies subject to their own privacy policies." },
    { title: "Updates to This Policy", content: "We may update this Cookie Policy as our website or applicable laws change. Any updates will be posted here with a new effective date." },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Cookie Policy</h1>
          <p className="text-white/70">Effective Date: January 1, 2024</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 space-y-8">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-primary mb-3">{i + 1}. {s.title}</h2>
              <p className="text-slate-500 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            <span className="material-icons text-sm">mail_outline</span>Contact Us With Questions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
