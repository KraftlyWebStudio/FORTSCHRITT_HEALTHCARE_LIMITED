"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a0f52] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/brand/logo.png" 
                alt="Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <h3 className="text-2xl font-black italic tracking-tighter decoration-secondary decoration-4">
                FORTSCHRITT
              </h3>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-loose max-w-xs">
              Pioneering precision medicine for a healthier tomorrow. Quality without compromise, healthcare for all.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "linkedin"].map((icon) => (
                <a key={icon} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="material-icons text-sm">{icon === "twitter" ? "X" : icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">About Us</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Partnerships</a></li>
              <li><a href="#verticals" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Verticals</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Quality Standards</a></li>
              <li><a href="/careers" className="text-secondary font-semibold hover:text-white transition-colors underline decoration-secondary hover:decoration-white/40 underline-offset-4">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Resources</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><a href="/rd-publications" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">R&D Publications</a></li>
              <li><a href="/manufacturing-ethics" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Manufacturing Ethics</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors underline decoration-white/0 hover:decoration-white/40 underline-offset-4">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Contact Info</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-icons text-secondary text-base pt-1">business</span>
                <span>201, Suraj Heritage, G.B Road,<br/>Thane, Maharashtra – 400615</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-secondary text-base pt-1">call</span>
                <span>
                  <a href="tel:+919816388337" className="hover:text-white transition-colors">+91 98163 88337</a> (Mr. Naveen)<br/>
                  <a href="tel:+919223808080" className="hover:text-white transition-colors">+91 92238 08080</a> (Mr. Chander)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-secondary text-base">mail</span>
                <a href="mailto:fortschritthealthcare@gmail.com" className="hover:text-white transition-colors">fortschritthealthcare@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2024 Fortschritt Healthcare Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</a>
            <a href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
