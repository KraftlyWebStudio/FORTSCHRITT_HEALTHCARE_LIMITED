"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

import Welcome from "@/components/home/Welcome";
import Partners from "@/components/home/Partners";
import Verticals from "@/components/home/Verticals";
import MissionValues from "@/components/home/MissionValues";
import Timeline from "@/components/home/Timeline";
import Leadership from "@/components/home/Leadership";
import Certifications from "@/components/home/Certifications";
import BrochureCTA from "@/components/home/BrochureCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        <Welcome />
        <Partners />
        <Verticals />
        <MissionValues />
        <Timeline />
        <Leadership />
        <Certifications />
        <BrochureCTA />
      </main>
      <Footer />
    </div>
  );
}
