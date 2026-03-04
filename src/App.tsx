/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoTour from './components/VideoTour';
import Highlights from './components/Highlights';
import Neighborhood from './components/Neighborhood';
import AgentCTA from './components/AgentCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal">
      <Hero />
      <Gallery />
      <VideoTour />
      <Highlights />
      <Neighborhood />
      <AgentCTA />
      <Footer />
    </div>
  );
}
