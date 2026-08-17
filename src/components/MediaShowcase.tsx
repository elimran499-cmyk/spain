import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { POSTER_ITEMS } from '../data/mockData';
import { PosterItem } from '../types';
import { Star, Film, Tv } from 'lucide-react';

type Direction = 'left' | 'right';
type Accent = 'cyan' | 'violet';

/** How many posters the phone deck loops through. Fewer than the full list
 *  so a phone is not decoding fifty posters at once. */
const PHONE_LOOP_COUNT = 12;

/** Series and films dealt alternately into one phone feed. */
function interleave(a: PosterItem[], b: PosterItem[]): PosterItem[] {
  const out: PosterItem[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

interface PosterCardProps {
  item: PosterItem;
  accent: Accent;
  /** Phone cards fill the column; desktop cards are fixed-width rail items. */
  layout: 'column' | 'rail';
  hidden?: boolean;
}

const PosterCard: React.FC<PosterCardProps> = ({ item, accent, layout, hidden }) => {
  const ring = accent === 'cyan' ? 'ring-cyan-400/25' : 'ring-fuchsia-400/25';
  const wash =
    accent === 'cyan'
      ? 'from-cyan-500/25 via-transparent to-violet-600/25'
      : 'from-fuchsia-500/25 via-transparent to-amber-400/20';
  const isColumn = layout === 'column';

  return (
    <figure
      aria-hidden={hidden}
      className={`relative select-none overflow-hidden bg-slate-900 ring-1 ${isColumn ? 'ring-slate-900' : ring} ${
        isColumn
          ? 'w-[88vw] rounded-[40px] shadow-[0_-8px_30px_-8px_rgba(45, 26, 12,0.30),0_22px_50px_-18px_rgba(45, 26, 12,0.35)]'
          : 'group shrink-0 w-[260px] mx-3 rounded-[28px] shadow-[0_20px_45px_-18px_rgba(45, 26, 12,0.35)] transition-all duration-500 hover:ring-purple-400/60 hover:-translate-y-2 hover:shadow-[0_30px_60px_-22px_rgba(170, 21, 27,0.45)]'
      }`}
    >
      {/* Poster fills the whole card, phone-app style */}
      <div className="relative aspect-[2/3]">
        <img
          src={item.posterUrl}
          alt={item.title}
          className={`w-full h-full object-cover ${
            isColumn ? '' : 'transition-transform duration-700 group-hover:scale-[1.06]'
          }`}
          loading="lazy"
          draggable={false}
        />

        {/* Colour wash */}
        <div className={`absolute inset-0 bg-gradient-to-br ${wash} mix-blend-soft-light pointer-events-none`}></div>

        {isColumn ? (
          /* Phone: bare artwork with two pills, nothing else */
          <div className="absolute top-5 left-5 flex flex-col items-start gap-2">
            {item.year && <span className="chip chip-solid">{item.year}</span>}
            {item.genre?.slice(0, 1).map((g) => (
              <span key={g} className="chip chip-solid">{g}</span>
            ))}
          </div>
        ) : (
          <>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/75 to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>

            <div className="absolute top-3 inset-x-3 flex items-start justify-between gap-2">
              <div className="min-w-0 text-[8px] font-extrabold uppercase tracking-[0.14em] text-white/70 truncate">
                {item.categoryLabel}
              </div>
              <span className="chip chip-rating shrink-0">
                <Star className="w-3 h-3 fill-current" />
                {item.rating.toFixed(1)}
              </span>
            </div>

            <div className="absolute top-9 left-3 flex flex-col items-start gap-1.5">
              {item.year && <span className="chip">{item.year}</span>}
              {item.genre?.slice(0, 1).map((g) => (
                <span key={g} className="chip chip-genre">{g}</span>
              ))}
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 p-4 space-y-1.5">
              <h3 className="font-display text-lg leading-[1.05] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[11px] text-white/85 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
};

interface PhoneDeckProps {
  items: PosterItem[];
  /** Milliseconds a poster stays in front before the deck flips itself. */
  autoAdvanceMs: number;
}

/** Distance in px a drag must cover to count as a flip. */
const SWIPE_THRESHOLD = 70;
/** How many cards are drawn behind the front one. */
const STACK_DEPTH = 2;
/** How long a card takes to leave the deck, in ms. */
const FLING_MS = 460;

/** The phone view: series and films in one deck you flip through like cinema
 *  posters. Drags horizontally (so the page still scrolls vertically), and
 *  deals itself onward whenever you leave it alone. */
const PhoneDeck: React.FC<PhoneDeckProps> = ({ items, autoAdvanceMs }) => {
  const deck = items.slice(0, PHONE_LOOP_COUNT);
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [flingX, setFlingX] = useState<number | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const axis = useRef<'undecided' | 'horizontal' | 'vertical'>('undecided');

  const advance = useCallback(
    (towards: number) => {
      setFlingX(towards);
      setDragX(0);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % deck.length);
        setFlingX(null);
      }, FLING_MS);
    },
    [deck.length]
  );

  // Deal the next poster on its own; any drag resets the clock.
  useEffect(() => {
    if (dragX !== 0 || flingX !== null) return;
    const id = window.setTimeout(() => advance(-1), autoAdvanceMs);
    return () => window.clearTimeout(id);
  }, [index, dragX, flingX, advance, autoAdvanceMs]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (flingX !== null) return;
    dragStart.current = { x: e.clientX, y: e.clientY };
    axis.current = 'undecided';
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const start = dragStart.current;
    if (!start) return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    // Let the page keep its vertical scroll; only claim horizontal drags.
    if (axis.current === 'undecided') {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axis.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
      if (axis.current === 'horizontal') e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (axis.current !== 'horizontal') return;

    setDragX(dx);
  };

  const onPointerUp = () => {
    if (axis.current === 'horizontal' && Math.abs(dragX) > SWIPE_THRESHOLD) {
      advance(dragX < 0 ? -1 : 1);
    } else {
      setDragX(0);
    }
    dragStart.current = null;
    axis.current = 'undecided';
  };

  return (
    <>
    <div
      className="sm:hidden relative mt-10 h-[132vw] max-h-[600px] touch-pan-y select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {Array.from({ length: STACK_DEPTH + 1 }).map((_, depth) => {
        const item = deck[(index + depth) % deck.length];
        const isFront = depth === 0;

        // Cards behind sit higher and narrower, so the deck reads as a stack.
        let transform = `translateY(${-depth * 20}px) scale(${1 - depth * 0.05})`;
        let transition = `transform ${FLING_MS}ms cubic-bezier(0.22,0.61,0.36,1), opacity ${FLING_MS}ms ease`;

        if (isFront) {
          const x = flingX !== null ? flingX * window.innerWidth : dragX;
          transform = `translateX(${x}px) rotate(${x * 0.02}deg)`;
          if (dragX !== 0 && flingX === null) transition = 'none';
        }

        return (
          <div
            // keyed by item, not slot, so a card promoted from behind keeps
            // its node and animates forward instead of snapping
            key={item.id}
            aria-hidden={!isFront}
            className="absolute inset-x-0 top-0 flex justify-center"
            style={{
              transform,
              transition,
              zIndex: STACK_DEPTH - depth,
              opacity: isFront && flingX !== null ? 0 : 1 - depth * 0.25
            }}
          >
            <PosterCard
              item={item}
              accent={item.category === 'series' ? 'cyan' : 'violet'}
              layout="column"
            />
          </div>
        );
      })}
    </div>

    {/* Where you are in the deck */}
    <div className="sm:hidden mt-5 flex items-center justify-center gap-1.5" aria-hidden>
      {deck.map((item, i) => (
        <span
          key={item.id}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === index ? 'w-5 bg-purple-500' : 'w-1.5 bg-slate-700'
          }`}
        />
      ))}
    </div>
    </>
  );
};

interface MarqueeRailProps {
  items: PosterItem[];
  direction: Direction;
  duration: number;
  accent: Accent;
}

/** Tablet and up: the horizontal rail, one per category. */
const MarqueeRail: React.FC<MarqueeRailProps> = ({ items, direction, duration, accent }) => {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden marquee-mask py-3">
      <div
        className={`marquee-track ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {loop.map((item, idx) => (
          <PosterCard
            key={`${item.id}-rail-${idx}`}
            item={item}
            accent={accent}
            layout="rail"
            hidden={idx >= items.length}
          />
        ))}
      </div>
    </div>
  );
};

interface RowHeaderProps {
  eyebrow: string;
  icon: React.ReactNode;
  accent: 'cyan' | 'violet';
  title: React.ReactNode;
  blurb: string;
}

const RowHeader: React.FC<RowHeaderProps> = ({ eyebrow, icon, accent, title, blurb }) => (
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-3">
    <div className="space-y-2.5 flex flex-col items-center sm:items-start">
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide ${
          accent === 'cyan'
            ? 'bg-cyan-900 border border-cyan-500/40 text-cyan-500'
            : 'bg-pink-950 border border-pink-500/40 text-pink-600'
        }`}
      >
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl leading-[0.9] text-slate-100">{title}</h2>
    </div>
    <p className="text-slate-400 text-sm sm:text-base max-w-sm sm:self-end sm:pb-3 sm:border-l-2 sm:border-purple-900 sm:pl-6">{blurb}</p>
  </div>
);

export const MediaShowcase: React.FC = () => {
  const series = useMemo(() => POSTER_ITEMS.filter((i) => i.category === 'series'), []);
  const films = useMemo(() => POSTER_ITEMS.filter((i) => i.category === 'movies'), []);
  const phoneDeck = useMemo(() => interleave(series, films), [series, films]);

  return (
    <section
      id="vod"
      className="scroll-mt-20 sm:scroll-mt-28 pt-24 pb-14 sm:pt-20 sm:pb-20 bg-slate-950 relative border-t border-slate-800 overflow-hidden"
    >



      {/* Phone: site name, then a single deck of series and films together */}
      <div className="sm:hidden relative">
        <h2 className="font-display text-center text-[3.4rem] leading-[0.85] text-metal px-4">
          SWIVTV
        </h2>
        <p className="mt-2.5 text-center text-[10px] font-extrabold uppercase tracking-[0.3em] text-purple-600">
          80.000 CANALES · 200.000 PELÍCULAS
        </p>
        <PhoneDeck items={phoneDeck} autoAdvanceMs={2600} />
      </div>

      {/* Tablet and up: a rail per category */}
      <div className="hidden sm:block relative space-y-16">

        {/* TV Series — scrolls right to left */}
        <div className="space-y-6">
          <RowHeader
            eyebrow="TEMPORADAS COMPLETAS"
            icon={<Tv className="w-4 h-4" />}
            accent="cyan"
            title={<>Series <span className="text-gradient-cyan">TV</span></>}
            blurb="Todas las temporadas, el mismo día de su estreno, hasta en 4K."
          />
          <MarqueeRail items={series} direction="left" duration={70} accent="cyan" />
        </div>

        {/* Films — scrolls left to right */}
        <div className="space-y-6">
          <RowHeader
            eyebrow="ESTRENOS DE CINE"
            icon={<Film className="w-4 h-4" />}
            accent="violet"
            title={<><span className="text-gradient-purple">Cine</span> y estrenos</>}
            blurb="Grandes estrenos, clásicos y novedades bajo demanda, en Dolby 5.1."
          />
          <MarqueeRail items={films} direction="right" duration={70} accent="violet" />
        </div>

      </div>

    </section>
  );
};
