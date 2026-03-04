import React from 'react';
import config from '../property.config.json';

export default function Highlights() {
  return (
    <section className="py-24 px-6 md:px-12 bg-panel">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Property Highlights</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {config.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start border-b border-white/10 pb-6">
              <span className="text-gold font-serif text-xl mr-4 leading-none mt-1">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <p className="text-offwhite/80 font-light leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
