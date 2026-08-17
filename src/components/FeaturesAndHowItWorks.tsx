import React from 'react';
import { DeviceInfo } from '../types';
import { Zap, ShieldCheck, Tv, Cpu, Flame, Box, Monitor, Smartphone, Play, Radio, ArrowRight, CheckCircle2, RefreshCw, Server, Wifi } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const FeaturesAndHowItWorks: React.FC = () => {

  const steps = [
    {
      step: '01',
      title: 'Elige tu pack',
      description: 'Elige la duración (3, 6 o 12+3 meses) y cuántas pantallas quieres.',
      icon: <Tv className="w-6 h-6 text-purple-400" />
    },
    {
      step: '02',
      title: 'Alta por WhatsApp',
      description: 'Generamos tus credenciales M3U, Xtream Codes y MAG Portal en 2 minutos.',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      step: '03',
      title: 'Conecta y disfruta en 4K',
      description: 'Introduce tus credenciales en tu app (IPTV Smarters, TiviMate, Flix) y listo.',
      icon: <Play className="w-6 h-6 text-pink-400" />
    }
  ];

  const featuresList = [
    {
      title: 'Anti-Freeze v4.0',
      description: 'Infraestructura multiservidor con conmutación automática: deporte a 60 FPS, sin cortes.',
      icon: <Server className="w-6 h-6 text-purple-400" />
    },
    {
      title: '+80.000 canales HD y 4K',
      description: 'Deporte, cine, documentales e información — de toda la TDT y las autonómicas españolas al resto de Europa, Reino Unido y EE. UU.',
      icon: <Radio className="w-6 h-6 text-cyan-400" />
    },
    {
      title: '+200.000 películas y series',
      description: 'Videoteca actualizada a diario, subtítulos en varios idiomas, sonido Dolby Atmos e imagen 4K HDR.',
      icon: <Play className="w-6 h-6 text-pink-400" />
    },
    {
      title: 'Repetición 7 días y guía TV',
      description: 'No te pierdas ni un partido ni un capítulo: vuelve hasta 7 días atrás, con guía TV incluida.',
      icon: <RefreshCw className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Compatible con todos tus dispositivos',
      description: 'Smart TV, Firestick, Android Box, Apple TV, MAG, Formuler, Windows, Mac, iOS y Android.',
      icon: <Tv className="w-6 h-6 text-amber-400" />
    },
    {
      title: 'Soporte 24 horas',
      description: 'Nuestro equipo técnico te contesta por WhatsApp a cualquier hora.',
      icon: <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
    }
  ];

  return (
    <section id="features" className="scroll-mt-20 sm:scroll-mt-28 py-14 sm:py-24 bg-slate-950 relative border-t border-slate-800/80">
      
      {/* Background glow */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: How It Works */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-bold text-cyan-500">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>INSTALACIÓN EN 3 PASOS</span>
          </div>

          <h2 className="font-display text-[2.1rem] sm:text-6xl text-slate-100 leading-[0.95]">
            Cómo funciona — <span className="text-gradient">3 pasos</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Listo en menos de 3 minutos.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8 mb-14 sm:mb-24">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-heading font-black text-3xl sm:text-4xl text-slate-800 group-hover:text-purple-500/30 transition-colors">
                  {item.step}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-100 mb-1.5 sm:mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Technical Features Grid */}
        <div className="mb-14 sm:mb-24 space-y-7 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-display text-[1.9rem] sm:text-5xl text-slate-100 leading-[0.95]">
              Por qué elegir <span className="text-gradient">SwivTV</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Servidores que aguantan cuando toda España está viendo el partido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {featuresList.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 sm:space-y-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-slate-100">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
