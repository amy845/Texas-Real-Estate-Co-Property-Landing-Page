import React from 'react';
import config from '../property.config.json';

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-panel border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-white font-serif text-xl mb-6">{config.footer.brokerage}</h4>
        <p className="text-xs text-offwhite/50 font-light uppercase tracking-wider mb-2">
          {config.footer.compliance}
        </p>
        <p className="text-xs text-offwhite/30 font-light">
          &copy; {new Date().getFullYear()} {config.footer.brokerage}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
