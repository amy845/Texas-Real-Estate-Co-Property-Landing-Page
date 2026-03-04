import React from 'react';
import config from '../property.config.json';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${config.images.hero})` }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/30 to-charcoal"></div>
      </div>
      
      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-gold tracking-widest uppercase text-sm font-sans mb-4">Exclusive Listing</h2>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          {config.address}
        </h1>
        <p className="text-xl md:text-2xl text-offwhite/90 font-light mb-8">
          {config.headline}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base tracking-wider uppercase mb-12">
          <span>{config.stats.beds} Beds</span>
          <span className="text-gold">•</span>
          <span>{config.stats.baths} Baths</span>
          <span className="text-gold">•</span>
          <span>{config.stats.size}</span>
          <span className="text-gold">•</span>
          <span>{config.stats.price}</span>
        </div>
        
        <a 
          href={config.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-hover text-charcoal px-10 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
        >
          {config.cta.text}
        </a>
      </div>
    </section>
  );
}
