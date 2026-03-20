import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Pharmaceutical Manufacturing',
      desc: 'State-of-the-art facilities producing wide range of dosage forms including tablets, capsules, and injectables.',
      icon: 'precision_manufacturing',
      color: 'bg-blue-500'
    },
    {
      title: 'Research & Development',
      desc: 'Specialized formulation development with focus on stability, bioavailability and patient compliance.',
      icon: 'science',
      color: 'bg-indigo-500'
    },
    {
      title: 'Contract Manufacturing',
      desc: 'Strategic partnership solutions for global pharmaceutical companies providing end-to-end support.',
      icon: 'handshake',
      color: 'bg-emerald-500'
    },
    {
      title: 'Quality Assurance',
      desc: 'Rigorous testing and compliance with GLP/GMP standards to ensure absolute safety and efficacy.',
      icon: 'health_and_safety',
      color: 'bg-amber-500'
    },
    {
      title: 'Regulatory Affairs',
      desc: 'Expertise in dossier preparation and international product registration across diverse regions.',
      icon: 'description',
      color: 'bg-rose-500'
    },
    {
      title: 'Global Supply Chain',
      desc: 'Efficient logistics and distribution network ensuring timely delivery of medicines worldwide.',
      icon: 'local_shipping',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Competencies</h2>
          <h3 className="text-4xl font-extrabold text-primary mb-6 font-display">Integrated Healthcare Solutions</h3>
          <p className="text-slate-600 text-lg">
            We provide comprehensive services across the pharmaceutical value chain, from conceptualization to global distribution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-2">
              <div className={`h-16 w-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-current/20 transform group-hover:rotate-6 transition-transform`}>
                <span className="material-icons text-3xl">{service.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="/infrastructure" className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all">
                Learn More
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
