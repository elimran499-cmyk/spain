import React, { useMemo } from 'react';
import { CHANNEL_ITEMS } from '../data/mockData';
import { ChannelItem } from '../types';
import { Radio, Globe } from 'lucide-react';

const ChannelCard: React.FC<{ item: ChannelItem; hidden?: boolean }> = ({ item, hidden }) => (
  <figure
    aria-hidden={hidden}
    className="group relative shrink-0 w-[170px] sm:w-[210px] mx-2.5 sm:mx-3 rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-slate-800 px-5 py-6 sm:px-6 sm:py-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50"
  >
    <div className="h-14 sm:h-16 flex items-center justify-center">
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-12 sm:max-h-14 max-w-[130px] sm:max-w-[150px] object-contain"
          draggable={false}
        />
      ) : (
        <span className="font-heading font-black text-2xl tracking-tight text-slate-100">
          {item.logoText}
        </span>
      )}
    </div>

    {/* The logo is the label; the name stays for screen readers only */}
    <figcaption className="sr-only">
      {item.name} — {item.quality}
    </figcaption>
  </figure>
);

/** The live line-up on rails that never stop — one row scrolling left,
 *  one scrolling right, on every screen size. */
export const Channels: React.FC = () => {
  const rowA = useMemo(() => CHANNEL_ITEMS.filter((_, i) => i % 2 === 0), []);
  const rowB = useMemo(() => CHANNEL_ITEMS.filter((_, i) => i % 2 === 1), []);

  const rows: { items: ChannelItem[]; dir: 'left' | 'right'; duration: number }[] = [
    { items: rowA, dir: 'left', duration: 44 },
    { items: rowB, dir: 'right', duration: 50 }
  ];

  return (
    <section
      id="channels"
      className="scroll-mt-20 sm:scroll-mt-28 py-14 sm:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-[10px] sm:text-xs font-bold text-cyan-500">
            <Radio className="w-4 h-4" />
            <span>CANALES ESPAÑOLES EN DIRECTO</span>
          </div>

          <h2 className="font-display text-[2.1rem] sm:text-6xl text-slate-100 leading-[0.95]">
            Todos tus <span className="text-gradient">canales</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            LaLiga, Champions, TDT y todos los canales autonómicos.
          </p>
        </div>
      </div>

      {/* Two rails, opposite directions, non-stop */}
      <div className="space-y-3 sm:space-y-5">
        {rows.map((row) => {
          const loop = [...row.items, ...row.items, ...row.items, ...row.items];
          return (
            <div key={row.dir} className="relative overflow-hidden marquee-mask py-2">
              <div
                className={`marquee-track ${row.dir === 'left' ? 'marquee-left' : 'marquee-right'}`}
                style={{ ['--marquee-duration' as string]: `${row.duration}s` }}
              >
                {loop.map((item, idx) => (
                  <ChannelCard
                    key={`${item.id}-${idx}`}
                    item={item}
                    hidden={idx >= loop.length / 2}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <p className="text-center text-xs sm:text-sm text-slate-400 font-medium flex items-center justify-center gap-2">
          <Globe className="w-4 h-4 text-purple-600" />
          Repetición de 7 días y guía TV incluidas en cada pack.
        </p>
      </div>
    </section>
  );
};
