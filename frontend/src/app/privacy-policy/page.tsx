import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const EFFECTIVE_DATE = "January 1, 2024";
const LAST_UPDATED_DATE = "March 2026";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out a contact form, request product information, or communicate with us. This may include your name, email address, phone number, company name, and the content of your message.",
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to respond to your inquiries, provide product information and quotations, improve our services, send relevant communications about our products and industry updates (with your consent), and comply with legal obligations.",
    },
    {
      title: "Data Sharing & Disclosure",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share data with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.",
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure.",
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict our processing of your data. To exercise these rights, please contact us at fortschritthealthcare@gmail.com.",
    },
    {
      title: "Cookies",
      content: "Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site. See our Cookie Policy for more details.",
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with a revised effective date.",
    },
    {
      title: "Contact Us",
      content: "If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at fortschritthealthcare@gmail.com or write to us at our registered office.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfe]">
      <Navbar />
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">{`Effective Date: ${EFFECTIVE_DATE} · Last Updated: ${LAST_UPDATED_DATE}`}</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
          <p className="text-slate-600 leading-relaxed mb-10 text-lg">
            Fortschritt Healthcare Limited ("we", "us", or "our") is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your personal information when you visit our website or interact with us.
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
