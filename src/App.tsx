import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MediaShowcase } from './components/MediaShowcase';
import { Channels } from './components/Channels';
import { Pricing } from './components/Pricing';
import { FeaturesAndHowItWorks } from './components/FeaturesAndHowItWorks';
import { FAQ } from './components/FAQ';
import { SpeedTestModal } from './components/SpeedTestModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileTabBar } from './components/MobileTabBar';
import { Footer } from './components/Footer';

export default function App() {
  const [speedTestOpen, setSpeedTestOpen] = useState(false);

  return (
    <div className="min-h-screen pb-28 md:pb-0 bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-500 selection:text-slate-950">
      {/* Sticky Top Header */}
      <Header
        onOpenSpeedTest={() => setSpeedTestOpen(true)}
        onOpenOrder={() => setSpeedTestOpen(true)}
      />

      {/* On a phone the poster feed leads the page; from tablet up the hero does */}
      <main className="flex flex-col">
        <Hero />

        {/* Series y películas — carteles en scroll continuo */}
        <div className="order-first sm:order-none">
          <MediaShowcase />
        </div>

        {/* Canales en directo en raíles continuos */}
        <Channels />

        {/* Pricing Packages Grid */}
        <Pricing />

        {/* How It Works & Device Setup */}
        <FeaturesAndHowItWorks />

        {/* FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* App-style bottom navigation, phone only */}
      <MobileTabBar onOpenSpeedTest={() => setSpeedTestOpen(true)} />

      {/* Speed Test Modal */}
      <SpeedTestModal
        isOpen={speedTestOpen}
        onClose={() => setSpeedTestOpen(false)}
      />
    </div>
  );
}
