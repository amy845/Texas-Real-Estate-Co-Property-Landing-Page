import React, { useState, useEffect } from 'react';
import config from '../property.config.json';
import { GoogleGenAI } from '@google/genai';
import { MapPin } from 'lucide-react';

export default function Neighborhood() {
  const [places, setPlaces] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState<Array<{title: string, uri: string}>>([]);

  useEffect(() => {
    async function fetchNeighborhood() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `What are some high-end restaurants, luxury shopping, or notable attractions near ${config.address}? Keep it to a short, elegant paragraph suitable for a luxury real estate listing.`,
          config: {
            tools: [{ googleMaps: {} }],
          }
        });
        
        setPlaces(response.text || '');
        
        // Extract Maps links if available
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks) {
          const extractedLinks: Array<{title: string, uri: string}> = [];
          chunks.forEach((chunk: any) => {
            if (chunk.maps?.uri && chunk.maps?.title) {
              extractedLinks.push({
                title: chunk.maps.title,
                uri: chunk.maps.uri
              });
            }
          });
          setLinks(extractedLinks);
        }
      } catch (error) {
        console.error("Failed to fetch neighborhood data", error);
        setPlaces("Located in one of the most desirable areas, this property offers convenient access to premium dining, shopping, and entertainment.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchNeighborhood();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Neighborhood</h2>
        <div className="w-12 h-0.5 bg-gold mx-auto"></div>
      </div>
      
      {loading ? (
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 bg-white/10 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-white/10 rounded w-2/3"></div>
        </div>
      ) : (
        <div className="text-offwhite/80 font-light leading-relaxed text-lg mb-8">
          {places}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.slice(0, 4).map((link, idx) => (
            <a 
              key={idx} 
              href={link.uri} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm border border-white/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              {link.title}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
