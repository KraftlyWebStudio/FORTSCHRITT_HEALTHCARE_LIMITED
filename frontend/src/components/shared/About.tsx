import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/images/about-facility.png" 
                alt="Medical Facility" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-1">14+ Years</h3>
                  <p className="text-white/80">Of Excellence in Himachal Pradesh</p>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div>
            <div className="mb-10">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Foundation</h2>
              <h3 className="text-4xl font-extrabold text-primary mb-6 font-display">Quality Assured Pharmaceutical Solutions Since 2012</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Our foundation stone was laid in the year 2012 in Himachal Pradesh, India. Since then, we have served numerous clients and turned them into loyal partners through our commitment to honesty and fair pricing.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Fortschritt Healthcare Limited is ranked among renowned Manufacturers, Exporters and Suppliers of a wide range of superior grade pharmaceutical products. We are a one-stop destination where buyers get quality assured products at par with branded standards at economical prices.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Global Excellence', desc: 'Operating across 40+ countries with products meeting international pharmaceutical standards.', icon: 'public' },
                { title: 'Innovation First', desc: 'Our dedicated R&D centers focus on specialized formulations and patient-centric delivery systems.', icon: 'biotech' },
                { title: 'Uncompromising Quality', desc: 'PQS (Pharmaceutical Quality System) integration at every stage of manufacturing.', icon: 'verified' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
