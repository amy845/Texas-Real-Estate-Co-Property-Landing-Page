import React from 'react';
import config from '../property.config.json';
import { Play } from 'lucide-react';

export default function VideoTour() {
  if (!config.videoTour.enabled) return null;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative aspect-video overflow-hidden rounded-sm group cursor-pointer">
        <img 
          src={config.videoTour.previewImage} 
          alt="Video Tour Preview" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-colors duration-300 group-hover:bg-black/50">
          <a 
            href={config.videoTour.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6 bg-charcoal/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-gold ml-1" fill="currentColor" />
            </div>
            <span className="uppercase tracking-widest text-sm text-white bg-charcoal/80 px-6 py-3 border border-white/10">
              {config.videoTour.buttonText}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
