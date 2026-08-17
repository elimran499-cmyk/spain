import React from 'react';
import { Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const Hero: React.FC = () => {
  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Quiero contratar una suscripción IPTV SwivTV 4K.')}`;

  return (
    <section id="hero" className="relative scroll-mt-20 sm:scroll-mt-28 pt-10 pb-14 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">

      {/* Colour behind the headline; the page itself stays white */}
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] md:w-[900px] h-80 md:h-[420px] pointer-events-none aurora"
        style={{
          background:
            'radial-gradient(50% 60% at 24% 38%, rgba(170, 21, 27,0.38), transparent 70%),' +
            'radial-gradient(46% 56% at 76% 34%, rgba(241, 191, 0,0.30), transparent 70%),' +
            'radial-gradient(40% 50% at 50% 78%, rgba(245, 197, 66,0.28), transparent 72%)',
          filter: 'blur(28px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rojigualda ribbon — the flag says "Spanish service" faster than copy can */}
        <div className="flex justify-center mb-5 sm:mb-7 rise-in" style={{ animationDelay: '40ms' }}>
          <span className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 shadow-[0_10px_24px_-18px_rgba(170,21,27,0.6)]">
            <span
              aria-hidden
              className="ribbon-es w-9 h-6 rounded-md ring-1 ring-black/10 shrink-0"
            />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-300">
              Hecho para España
            </span>
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-7 rise-in" style={{ animationDelay: '80ms' }}>
          <h1 className="font-display text-[2.15rem] sm:text-6xl md:text-7xl text-slate-100 leading-[0.95] sm:leading-[0.92] text-balance">
            <span className="text-gradient whitespace-nowrap">+80.000&nbsp;canales</span>{' '}
            <span className="sm:hidden">en 4K</span>
            <span className="hidden sm:inline">
              y <span className="whitespace-nowrap">+200.000&nbsp;películas</span> y series en{' '}
              <span className="sm:underline decoration-purple-500/60 decoration-wavy underline-offset-8">
                4K Ultra HD
              </span>
            </span>
          </h1>

          <p className="sm:hidden text-[15px] text-slate-400 leading-relaxed px-2">
            +200.000 películas y series, en todas tus pantallas.
          </p>

          <p className="hidden sm:block text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            LaLiga, Champions League, cine y series en 4K en todas tus pantallas.
          </p>

          {/* Three claims the rest of the page already makes */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 sm:max-w-2xl sm:mx-auto">
            {[
              { k: '4K', v: '60 FPS', from: '#e0a800', to: '#b45309' },
              { k: '99,9 %', v: 'Uptime', from: '#cc3b42', to: '#aa151b' },
              { k: '5 min', v: 'Alta', from: '#aa151b', to: '#7d0f14' }
            ].map((stat, i) => (
              <div
                key={stat.k}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 px-2 py-3 sm:px-4 sm:py-6 shadow-[0_10px_24px_-18px_rgba(45, 26, 12,0.5)]"
              >
                <span
                  aria-hidden
                  className="sheen-loop absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none"
                  style={{
                    animationDelay: `${i * 0.55}s`,
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)'
                  }}
                />
                {/* The lift rides a wrapper: animating transform on the
                    gradient-clipped text itself stops it painting. */}
                <p
                  className="figure-lift relative font-heading font-black text-lg sm:text-4xl leading-none"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <span
                    style={{
                      backgroundImage: `linear-gradient(100deg, ${stat.from}, ${stat.to})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {stat.k}
                  </span>
                </p>
                <p className="relative mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  {stat.v}
                </p>
              </div>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-order-btn"
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:brightness-110 text-white font-extrabold text-base sm:text-lg shadow-[0_18px_36px_-14px_rgba(170, 21, 27,0.75)] transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.97] flex items-center justify-center gap-3 group"
            >
              <span
                aria-hidden
                className="sheen-loop absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)'
                }}
              />
              <WhatsAppIcon className="relative w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span className="relative">Contratar por WhatsApp</span>
              <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#pricing"
              id="hero-view-pricing-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-slate-100 font-bold text-base sm:text-lg border border-slate-700 transition-all duration-300 active:scale-[0.97] hover:border-purple-500/40 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Ver precios</span>
            </a>
          </div>

          {/* Guarantees bar */}
          <div className="hidden sm:flex pt-3 flex-wrap items-start justify-center gap-y-2 gap-x-6 text-sm text-slate-400 font-medium">
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 text-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sin permanencia
            </span>
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 text-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Alta en 5 minutos
            </span>
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 text-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Satisfecho o te devolvemos
            </span>
          </div>

        </div>


      </div>
    </section>
  );
};
