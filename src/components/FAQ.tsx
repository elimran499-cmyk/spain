import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [faqSearch, setFaqSearch] = useState<string>('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-28 py-14 sm:py-24 bg-slate-950 relative border-t border-slate-800/80">
      
      {/* Background ambient lighting */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950 border border-purple-500/30 text-xs font-bold text-purple-600">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>¿TIENES DUDAS? TE AYUDAMOS</span>
          </div>

          <h2 className="font-display text-[2.1rem] sm:text-6xl text-slate-100 leading-[0.95]">
            <span className="text-gradient">Preguntas</span> frecuentes
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Instalación, calidad de emisión y alta.
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="mb-8 relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder="Buscar (p. ej. contratar, firestick, velocidad, M3U)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel text-slate-100 placeholder-slate-400 text-xs sm:text-sm border border-slate-700/80 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm glass-card rounded-2xl">
              No hay preguntas que coincidan con «{faqSearch}».
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-purple-500/50 bg-slate-900/80' : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-100">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-purple-600 text-slate-950' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="font-heading font-bold text-xl text-slate-100">
            ¿Tu pregunta no está aquí?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Nuestro equipo técnico está en WhatsApp 24 horas al día para ayudarte con la instalación o resolver cualquier duda.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola! Tengo una pregunta sobre el servicio IPTV SwivTV.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-100 font-bold text-sm shadow-lg hover:from-emerald-400 hover:to-teal-400"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
