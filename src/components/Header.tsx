import React, { useEffect, useState } from 'react';
import { Tv, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

interface HeaderProps {
  onOpenSpeedTest: () => void;
  onOpenOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSpeedTest, onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Quiero contratar una suscripción IPTV SwivTV 4K.')}`;

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'md:glass-panel md:py-3 md:shadow-2xl md:border-b md:border-slate-800/80 md:backdrop-blur-xl'
          : 'md:bg-gradient-to-b md:from-slate-950/90 md:to-transparent md:py-5'
      }`}
    >
      {/* Phone title bar: frosted glass, the page blurring through it */}
      <div className="md:hidden relative">
        {/* The glass itself — more solid once the page is under it */}
        <div
          aria-hidden
          className={`absolute inset-0 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 shadow-[0_10px_30px_-16px_rgba(45, 26, 12,0.45)]'
              : 'bg-white/65'
          }`}
        ></div>

        {/* A wash of the brand hues so the glass is tinted, never dead white */}
        <div
          aria-hidden
          className="absolute inset-0 aurora opacity-80 pointer-events-none"
          style={{
            background:
              'radial-gradient(60% 130% at 10% 0%, rgba(170, 21, 27,0.22), transparent 72%),' +
              'radial-gradient(55% 120% at 92% 0%, rgba(241, 191, 0,0.20), transparent 72%)'
          }}
        />

        {/* Bleu-blanc-rouge edge */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] tricolore opacity-90"></div>

        {/* Brand dead centre, the two actions flanking it */}
        <div className="relative px-3 py-2.5 flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_18px_-8px_rgba(37,211,102,0.95)] active:scale-90 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          <a
            href="#hero"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
            aria-label="Inicio SwivTV"
          >
            <span className="escudo flex items-center justify-center w-8 h-8 rounded-xl shadow-sm ring-1 ring-black/10">
              <Tv className="w-[18px] h-[18px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]" />
            </span>
            <span className="font-display text-xl tracking-tight text-slate-100">SWIVTV</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto pl-3.5 pr-2 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[13px] font-extrabold flex items-center gap-0.5 shadow-[0_8px_18px_-8px_rgba(170, 21, 27,0.9)] active:scale-95 transition-transform"
          >
            <span>Contratar</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="hidden md:block absolute inset-x-0 bottom-0 h-[3px] tricolore opacity-80"></div>

      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="escudo relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl shadow-lg ring-1 ring-black/10 group-hover:scale-105 transition-transform duration-300">
              <Tv className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl sm:text-2xl tracking-tight text-slate-100">
                  SWIV<span className="text-gradient">TV</span>
                </span>
                <span className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-extrabold uppercase bg-purple-900 text-purple-600 border border-purple-500/30 rounded-md">
                  ESPAÑA 4K
                </span>
              </div>
              <p className="hidden sm:flex text-[10px] text-slate-400 font-medium tracking-wide items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                99,9 % de disponibilidad Anti-Freeze
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 relative rim-live bg-white/70 backdrop-blur-xl backdrop-saturate-150 p-1.5 rounded-full">
            <a href="#hero" className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/70 rounded-full transition-all">
              Inicio
            </a>
            <a href="#vod" className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/70 rounded-full transition-all">
              Series y cine
            </a>
            <a href="#channels" className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/70 rounded-full transition-all">
              Canales
            </a>
            <a href="#pricing" className="relative px-4 py-2 text-sm font-medium text-purple-600 font-semibold hover:text-purple-700 hover:bg-purple-900 rounded-full transition-all flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Precios
            </a>
            <a href="#features" className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/70 rounded-full transition-all">
              Ventajas
            </a>
            <a href="#faq" className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/70 rounded-full transition-all">
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSpeedTest}
              className="px-3.5 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-xl hover:bg-cyan-900/50 transition-all flex items-center gap-1.5"
              title="Mide tu velocidad"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>Test de velocidad</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-order-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>Contratar</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
