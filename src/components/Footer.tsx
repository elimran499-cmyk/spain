import React from 'react';
import { Tv, ShieldCheck, Heart, Lock, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="escudo w-10 h-10 rounded-xl shadow-lg ring-1 ring-black/10 flex items-center justify-center">
                <Tv className="w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              </div>
              <span className="font-display text-2xl text-slate-100 tracking-tight">
                SWIV<span className="text-gradient">TV</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              +80.000 canales en directo y +200.000 películas y series en 4K. Un servicio pensado para España.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>99,9 % de disponibilidad garantizada</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-slate-100 transition-colors">Inicio</a></li>
              <li><a href="#vod" className="hover:text-slate-100 transition-colors">Series TV</a></li>
              <li><a href="#vod" className="hover:text-slate-100 transition-colors">Cine y estrenos</a></li>
              <li><a href="#channels" className="hover:text-slate-100 transition-colors">Canales en directo</a></li>
              <li><a href="#pricing" className="hover:text-purple-600 font-bold transition-colors">Precios</a></li>
              <li><a href="#features" className="hover:text-slate-100 transition-colors">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-slate-100 transition-colors">FAQ y soporte</a></li>
            </ul>
          </div>

          {/* Col 3: Supported Devices */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Dispositivos compatibles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Smart TV (Samsung, LG, Sony)</li>
              <li>Amazon Firestick & Fire TV</li>
              <li>Android TV & Xiaomi Box</li>
              <li>Apple TV 4K & iOS App</li>
              <li>MAG Portal & Formuler</li>
              <li>PC, MacOS & Web Player</li>
            </ul>
          </div>

          {/* Col 4: Payment Methods & Activation */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Soporte WhatsApp
            </h4>
            <p className="text-xs text-slate-400">
              Un equipo en español disponible 24 h, los 7 días.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Necesito ayuda con SwivTV.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-950 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>Hablar con un asesor</span>
            </a>

            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block mb-2 font-semibold">Pagos aceptados:</span>
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400 font-bold">
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">PayPal</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Tarjeta bancaria</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Crypto / USDT</span>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Apple Pay</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            © {currentYear} SwivTV 4K IPTV. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-400">Privacidad</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400">Condiciones</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-400">Reembolso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
