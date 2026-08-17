import React from 'react';
import { Home, MonitorPlay, Radio, Tag, Zap } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface MobileTabBarProps {
  onOpenSpeedTest: () => void;
}

/** Each tab owns a hue, so the sliding pill changes colour as it travels. */
const TABS = [
  { id: 'hero', label: 'Inicio', icon: Home, from: '#f5c542', to: '#e0a800' },
  { id: 'vod', label: 'Cine', icon: MonitorPlay, from: '#eda600', to: '#b45309' },
  { id: 'channels', label: 'Canales', icon: Radio, from: '#cc3b42', to: '#aa151b' },
  { id: 'pricing', label: 'Precios', icon: Tag, from: '#aa151b', to: '#7d0f14' },
  { id: 'speed', label: 'Test', icon: Zap, from: '#7d0f14', to: '#4a070a' }
];

/** Bottom navigation: frosted glass, a gradient pill that slides to the active
 *  tab, and a rim light along the top edge. Phone only. */
export const MobileTabBar: React.FC<MobileTabBarProps> = ({ onOpenSpeedTest }) => {
  const active = useActiveSection();

  // The speed test is an action, not a section, so it never owns the pill.
  const found = TABS.findIndex((t) => t.id === active);
  const activeIndex = found === -1 ? 0 : found;
  const current = TABS[activeIndex];

  return (
    <nav
      className="md:hidden fixed bottom-4 inset-x-4 z-50 rounded-[26px] rim-live bg-white/70 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_18px_40px_-12px_rgba(45, 26, 12,0.32)]"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary"
    >
      <div className="relative rounded-[26px] px-1.5 py-1.5">
        {/* The pill that travels between tabs */}
        <div
          aria-hidden
          className="tab-indicator absolute top-1.5 bottom-1.5 left-1.5 rounded-[20px] pointer-events-none"
          style={{
            width: `calc((100% - 0.75rem) / ${TABS.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
            backgroundImage: `linear-gradient(140deg, ${current.from}, ${current.to})`,
            boxShadow: `0 10px 22px -10px ${current.to}`
          }}
        />

        <div className="relative flex items-stretch">
          {TABS.map(({ id, label, icon: Icon }, i) => {
            const isActive = i === activeIndex;
            const isAction = id === 'speed';

            const content = (
              <>
                <Icon
                  className={`w-[21px] h-[21px] transition-transform duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  strokeWidth={isActive ? 2.2 : 1.7}
                />
                <span className="text-[9px] font-bold tracking-tight leading-none">{label}</span>
              </>
            );

            const classes = `flex-1 min-w-0 flex flex-col items-center justify-center gap-1 py-2 rounded-[20px] transition-all duration-300 active:scale-90 ${
              isActive ? 'text-white' : 'text-slate-400'
            }`;

            return isAction ? (
              <button
                key={id}
                onClick={onOpenSpeedTest}
                className={classes}
                aria-label="Iniciar el test de velocidad"
              >
                {content}
              </button>
            ) : (
              <a key={id} href={`#${id}`} aria-current={isActive ? 'page' : undefined} className={classes}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
