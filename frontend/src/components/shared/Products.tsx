import React from 'react';

const Products = () => {
  const categories = [
    { title: 'Cardiovascular', icon: 'favorite', count: '45+ Products' },
    { title: 'Oncology', icon: 'biotech', count: '12+ Products' },
    { title: 'Anti-Infective', icon: 'coronavirus', count: '30+ Products' },
    { title: 'Gastroenterology', icon: 'stomach', count: '25+ Products' },
    { title: 'Dermatology', icon: 'face', count: '18+ Products' },
    { title: 'Nutraceuticals', icon: 'nutrition', count: '50+ Products' }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Product Portfolio</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6 font-display">Specialized Therapeutic Segments</h3>
            <p className="text-slate-600 text-lg">
              We offer a diverse range of high-quality formulations across major therapeutic areas, ensuring comprehensive patient care.
            </p>
          </div>
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl hover:-translate-y-1 transition-all">
            View Full Catalog
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-8">
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons text-2xl">{cat.icon}</span>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity material-icons">
                  north_east
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">{cat.title}</h4>
              <p className="text-slate-500 text-sm font-semibold">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
