import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Estoy en la web de SwivTV y necesito ayuda.')}`;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">

      {/* Popover Bubble - desktop only, it crowds a phone screen */}
      {showTooltip && (
        <div className="relative hidden sm:block glass-panel p-3.5 rounded-2xl border border-emerald-500/40 shadow-2xl max-w-xs animate-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-100"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-100">Atención al cliente IPTV</span>
            <span className="text-[10px] text-emerald-400 font-medium">En línea</span>
          </div>

          <p className="text-xs text-slate-300 leading-tight">
            ¿Quieres <strong className="text-emerald-400">contratar</strong> o tienes una duda? Respondemos en menos de un minuto.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 block text-center py-1.5 px-3 rounded-lg bg-emerald-500 text-white font-extrabold text-[11px] hover:bg-emerald-400 transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar con soporte por WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 glow-cyan hover:scale-110 transition-transform duration-300"
      >
        <WhatsAppIcon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
        
        {/* Ping ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
        </span>
      </a>

    </div>
  );
};
