import React from 'react';
import config from '../property.config.json';

export default function Gallery() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Property</h2>
        <div className="w-12 h-0.5 bg-gold mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {config.images.gallery.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-sm aspect-[4/3] group">
            <img 
              src={img} 
              alt={`Property view ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
