"use client";

import React, { useState, useRef } from "react";
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

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const WHATSAPP = "https://wa.me/919999999999";
const PHONE = "tel:+919999999999";
const EMAIL = "mailto:info@fortschritt.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfe] overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative rounded-full h-2 w-2 bg-white"></span>
            </span>
            We Respond Within 2 Hours
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8">
            Let's Build Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              Great Together
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Whether you're looking for a manufacturing partner, product enquiry, or expert consultation — reach us instantly via your preferred channel.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-col sm:flex-row justify-center gap-5">
            {[
              { href: PHONE, icon: "call", label: "Call Now", bg: "bg-white", text: "text-primary", shadow: "shadow-white/20" },
              { href: WHATSAPP, icon: "chat", label: "WhatsApp", bg: "bg-[#25D366]", text: "text-white", shadow: "shadow-green-400/30" },
              { href: EMAIL, icon: "mail", label: "Email Us", bg: "bg-white/10 border border-white/25", text: "text-white", shadow: "" },
            ].map((item) => (
              <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.97 }}
                className={`${item.bg} ${item.text} px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl ${item.shadow} transition-all`}>
                <span className="material-icons">{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 py-24">
        <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: "call", color: "primary", href: PHONE,
              title: "Call Direct", sub: "Speak to our team instantly",
              value: "+91 99999 99999", action: "Call Now →",
            },
            {
              icon: "chat", color: "green", href: WHATSAPP,
              title: "WhatsApp", sub: "Chat, share enquiries & get quotes",
              value: "+91 99999 99999", action: "Open Chat →",
            },
            {
              icon: "mail_outline", color: "secondary", href: EMAIL,
              title: "Email Us", sub: "Detailed enquiries & documentation",
              value: "info@fortschritt.com", action: "Compose →",
            },
          ].map((card) => (
            <motion.a key={card.title} href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: card.color === "green" ? "0 32px 64px -16px rgba(37,211,102,0.2)" : "0 32px 64px -16px rgba(30,58,138,0.2)" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="block bg-white rounded-[32px] p-10 border border-slate-100 shadow-lg group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                card.color === "green" ? "bg-green-100" : card.color === "secondary" ? "bg-sky-100" : "bg-primary/5"
              }`} />
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                card.color === "green" ? "bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white" :
                card.color === "secondary" ? "bg-sky-50 text-secondary group-hover:bg-secondary group-hover:text-white" :
                "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
              }`}>
                <span className="material-icons text-3xl">{card.icon}</span>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{card.sub}</div>
              <h3 className="text-2xl font-extrabold text-primary mb-3">{card.title}</h3>
              <p className="font-bold text-slate-600 mb-6 text-lg">{card.value}</p>
              <div className={`text-sm font-bold tracking-tight group-hover:translate-x-2 transition-transform ${
                card.color === "green" ? "text-green-500" : card.color === "secondary" ? "text-secondary" : "text-primary"
              }`}>{card.action}</div>
            </motion.a>
          ))}
        </Section>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-4 leading-tight">
                Every way to reach us
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                We're available across all channels — choose whatever is most convenient for you.
              </p>
            </div>

            {[
              { icon: "location_on", title: "Registered Office", lines: ["Baddi Industrial Area,", "Solan, Himachal Pradesh – 173205"], color: "primary" },
              { icon: "schedule", title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sundays: By Appointment Only"], color: "secondary" },
              { icon: "business", title: "Corporate Office", lines: ["Contact us for corporate address", "and directions"], color: "primary" },
            ].map((item) => (
              <motion.div key={item.title}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-primary/20 hover:shadow-md transition-all">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  item.color === "secondary" ? "bg-sky-50 text-secondary group-hover:bg-secondary group-hover:text-white" :
                  "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
                }`}>
                  <span className="material-icons">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  {item.lines.map((l, i) => <p key={i} className="text-slate-500 text-sm">{l}</p>)}
                </div>
              </motion.div>
            ))}

            <div className="p-6 bg-primary rounded-2xl">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="material-icons text-sm">chat</span>
                Need quick help?
              </h4>
              <p className="text-white/70 text-sm mb-5">For fastest response, reach us directly on WhatsApp. Our team typically replies in under 20 minutes during business hours.</p>
              <motion.a href={WHATSAPP} target="_blank"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl text-sm shadow-lg shadow-green-500/20 hover:bg-[#1db954] transition-colors">
                <span className="material-icons text-base">chat</span>
                Open WhatsApp Now
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-3 bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-primary/5 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center justify-center py-20 text-center gap-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                    className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <span className="material-icons text-5xl">check_circle</span>
                  </motion.div>
                  <h2 className="text-3xl font-extrabold text-primary">Message Sent!</h2>
                  <p className="text-slate-500 max-w-sm text-lg">Our team will respond within 2 business hours. For urgent queries, call or WhatsApp us directly.</p>
                  <div className="flex gap-4 mt-4">
                    <a href={PHONE} className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
                      <span className="material-icons text-sm">call</span>Call Us
                    </a>
                    <a href={WHATSAPP} target="_blank" className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl text-sm hover:bg-[#1db954] transition-colors flex items-center gap-2">
                      <span className="material-icons text-sm">chat</span>WhatsApp
                    </a>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="text-slate-400 text-sm hover:text-primary transition-colors mt-2 underline underline-offset-4">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-10">
                    <h2 className="text-3xl font-extrabold text-primary mb-2">Send an Enquiry</h2>
                    <p className="text-slate-500">We'll get back to you within 2 hours on business days.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { name: "name", label: "Full Name *", type: "text", placeholder: "Dr. Anjali Sharma" },
                        { name: "company", label: "Company / Hospital", type: "text", placeholder: "Apollo Hospitals" },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-sm font-bold text-primary mb-2">{field.label}</label>
                          <motion.input
                            name={field.name}
                            type={field.type}
                            required={field.label.includes("*")}
                            placeholder={field.placeholder}
                            value={form[field.name as keyof typeof form]}
                            onChange={handleChange}
                            onFocus={() => setFocused(field.name)}
                            onBlur={() => setFocused(null)}
                            animate={{ borderColor: focused === field.name ? "#1e3a8a" : "#e2e8f0" }}
                            className="w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-700 placeholder:text-slate-300 outline-none transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { name: "email", label: "Email Address *", type: "email", placeholder: "you@hospital.com" },
                        { name: "phone", label: "WhatsApp / Phone *", type: "tel", placeholder: "+91 98765 43210" },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-sm font-bold text-primary mb-2">{field.label}</label>
                          <motion.input
                            name={field.name}
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            value={form[field.name as keyof typeof form]}
                            onChange={handleChange}
                            onFocus={() => setFocused(field.name)}
                            onBlur={() => setFocused(null)}
                            animate={{ borderColor: focused === field.name ? "#1e3a8a" : "#e2e8f0" }}
                            className="w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-700 placeholder:text-slate-300 outline-none transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Enquiry Type *</label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 outline-none transition-all text-sm focus:border-primary">
                        <option value="">Select an enquiry type</option>
                        <option>Product Enquiry</option>
                        <option>Partnership / Distribution</option>
                        <option>Manufacturing & Supply</option>
                        <option>R&D Collaboration</option>
                        <option>Quality & Regulatory</option>
                        <option>Export / International</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Message *</label>
                      <motion.textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us your requirement in detail — which products, quantities, target markets, and any specific standards required..."
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        animate={{ borderColor: focused === "message" ? "#1e3a8a" : "#e2e8f0" }}
                        className="w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-700 placeholder:text-slate-300 outline-none transition-all text-sm resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(30,58,138,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-primary text-white font-bold rounded-2xl text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all">
                      <span className="material-icons">send</span>
                      Send Enquiry
                    </motion.button>
                    <p className="text-center text-xs text-slate-400">
                      Or reach us instantly:{" "}
                      <a href={PHONE} className="text-primary font-bold hover:underline">Call</a>
                      {" · "}
                      <a href={WHATSAPP} target="_blank" className="text-green-500 font-bold hover:underline">WhatsApp</a>
                      {" · "}
                      <a href={EMAIL} className="text-secondary font-bold hover:underline">Email</a>
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="rounded-[40px] overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100">
          <div className="relative">
            <iframe
              src="https://maps.google.com/maps?q=Baddi,Himachal+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[40px]" />
          </div>
          <div className="bg-primary p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Find Our Manufacturing Facility</h3>
                <p className="text-white/70 text-lg">Baddi Industrial Area, Solan, Himachal Pradesh – 173205</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.a href={PHONE} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-2xl text-sm shadow-xl hover:bg-slate-50 transition-colors">
                  <span className="material-icons">call</span>
                  Call for Directions
                </motion.a>
                <motion.a href={WHATSAPP} target="_blank" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl text-sm shadow-xl hover:bg-[#1db954] transition-colors">
                  <span className="material-icons">chat</span>
                  WhatsApp Directions
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Section className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "timer", title: "2-Hour Response", desc: "We guarantee a response to every enquiry within 2 business hours." },
            { icon: "support_agent", title: "Dedicated Manager", desc: "Every partner gets a dedicated relationship manager for smooth communication." },
            { icon: "verified", title: "Confidential & Secure", desc: "All your data and business enquiries are kept strictly confidential." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(30,58,138,0.1)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm group">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-extrabold text-primary mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </Section>
      </section>

      <Footer />
    </div>
  );
}