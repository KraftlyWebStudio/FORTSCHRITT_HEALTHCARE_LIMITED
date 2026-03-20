import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing and using the Fortschritt Healthcare Limited website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website." },
    { title: "Use of the Website", content: "This website is provided for informational purposes only. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website." },
    { title: "Intellectual Property", content: "All content on this website — including text, graphics, logos, images, and software — is the property of Fortschritt Healthcare Limited and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our express written permission." },
    { title: "Medical Disclaimer", content: "The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical guidance. Our products are prescription-only unless otherwise specified and must be used under medical supervision." },
    { title: "Product Information", content: "Product descriptions and specifications are subject to change. While we strive for accuracy, we do not warrant that product information is complete, current, or error-free. Availability may vary by region and applicable regulations." },
    { title: "Limitation of Liability", content: "Fortschritt Healthcare Limited shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of, or inability to use, this website or its content, to the maximum extent permitted by law." },
    { title: "Third-Party Links", content: "This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them." },
    { title: "Governing Law", content: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Himachal Pradesh, India." },
    { title: "Changes to Terms", content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the website after changes constitutes your acceptance of the revised terms." },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70">Effective Date: January 1, 2024 · Last Updated: March 2024</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
          <p className="text-slate-600 leading-relaxed mb-10 text-lg">
            Please read these Terms of Service carefully before using the Fortschritt Healthcare Limited website. These terms govern your access to and use of our website and services.
          </p>
          <div className="space-y-8">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-primary mb-3">{i + 1}. {s.title}</h2>
                <p className="text-slate-500 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            <span className="material-icons text-sm">mail_outline</span>
            Contact Us With Questions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
