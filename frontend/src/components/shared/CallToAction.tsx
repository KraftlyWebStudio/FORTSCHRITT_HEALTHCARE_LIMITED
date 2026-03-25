import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-primary p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ready to Partner for a{" "}<span className="text-secondary">Healthier World?</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Join our global network of healthcare pioneers. Whether you&apos;re looking for specialized distribution, contract manufacturing, or R&D collaboration, let&apos;s innovate together.
                   </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <button className="px-10 py-5 bg-white text-primary font-extrabold rounded-2xl shadow-xl hover:bg-slate-50 hover:shadow-white/10 transition-all flex items-center gap-3">
                  Start Collaboration
                  <span className="material-icons">handshake</span>
                </button>
                <button className="px-10 py-5 bg-primary border-2 border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-icons">headset_mic</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold whitespace-nowrap">24/7 Global Support</h4>
                    <p className="text-white/60 text-xs">Always here to help</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  &quot;Our dedicated regulatory and support team ensures that your partnership experience is seamless across time zones.&quot;
                </p>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-white font-bold">Dr. Sarah Jenkins</div>
                  <div className="text-white/60 text-xs tracking-widest uppercase">Head of Global Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
