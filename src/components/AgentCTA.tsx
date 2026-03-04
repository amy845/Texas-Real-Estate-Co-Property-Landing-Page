import React from 'react';
import config from '../property.config.json';

export default function AgentCTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-12">Interested in this property?</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <img 
            src={config.agent.image} 
            alt={config.agent.name} 
            className="w-32 h-32 rounded-full object-cover border-2 border-gold/50"
            referrerPolicy="no-referrer"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-1">{config.agent.name}</h3>
            <p className="text-gold text-sm uppercase tracking-widest mb-4">{config.agent.title}</p>
            <div className="text-offwhite/80 font-light space-y-1">
              <p>{config.agent.phone}</p>
              <p>{config.agent.email}</p>
            </div>
          </div>
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
