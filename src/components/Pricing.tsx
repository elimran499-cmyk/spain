import React, { useState } from 'react';
import { PACKAGE_TIERS, DURATION_PACKS, WHATSAPP_NUMBER } from '../data/mockData';
import { Check, ShieldCheck, Monitor, Crown, Award } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

type TierId = 'basic' | 'vip';

const DEVICE_COUNTS = [1, 2, 3, 4];

/* French convention: comma decimal, symbol after the amount,
   with a non-breaking space so it never wraps. */
const formatPrice = (val: number) => `${val.toFixed(2).replace('.', ',')}\u00A0€`;

/** One hue per pack, stepping along each tier's ramp: the packs get warmer /
 *  deeper as the commitment gets longer. `from`/`to` drive the gradients,
 *  `ink` is the readable text shade of the same hue. */
type PackHue = { from: string; to: string; ink: string };

/** Two ends per pack: the palette at one screen, and the deeper one at four.
 *  Picking more devices walks the colour along that ramp, so the row visibly
 *  gains weight as the subscription does. */
const PACK_COLORS: Record<TierId, { base: PackHue; deep: PackHue }[]> = {
  basic: [
    { base: { from: '#c98400', to: '#a85405', ink: '#8a5200' },
      deep: { from: '#b06d02', to: '#8a3d06', ink: '#7a3405' } },
    { base: { from: '#b06d02', to: '#8a3d06', ink: '#7a3405' },
      deep: { from: '#9a5703', to: '#6d2c05', ink: '#652903' } },
    { base: { from: '#9a5703', to: '#6d2c05', ink: '#652903' },
      deep: { from: '#844402', to: '#521f04', ink: '#4c1d03' } }
  ],
  vip: [
    { base: { from: '#cc3b42', to: '#b31d24', ink: '#b31d24' },
      deep: { from: '#c01722', to: '#aa151b', ink: '#9c1319' } },
    { base: { from: '#c01722', to: '#aa151b', ink: '#aa151b' },
      deep: { from: '#aa151b', to: '#7d0f14', ink: '#7d0f14' } },
    { base: { from: '#aa151b', to: '#7d0f14', ink: '#7d0f14' },
      deep: { from: '#8e1116', to: '#560a0d', ink: '#560a0d' } }
  ]
};

/** Linear blend between two hex colours. */
const mix = (a: string, b: string, t: number) => {
  const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [r1, g1, b1] = hex(a);
  const [r2, g2, b2] = hex(b);
  const c = (x: number, y: number) => Math.round(x + (y - x) * t);
  return { r: c(r1, r2), g: c(g1, g2), b: c(b1, b2) };
};

const toHex = ({ r, g, b }: { r: number; g: number; b: number }) =>
  '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');



export const Pricing: React.FC = () => {
  const [tier, setTier] = useState<TierId>('basic');
  const [devices, setDevices] = useState(1);

  const activeTier = PACKAGE_TIERS.find((t) => t.id === tier) ?? PACKAGE_TIERS[0];
  const isVip = tier === 'vip';

  // VIP swaps the blue accent for coral so the two tiers read apart.
  const accentSolid = isVip ? 'bg-pink-500 text-white' : 'bg-purple-600 text-white';

  return (
    <section
      id="pricing"
      className="scroll-mt-20 sm:scroll-mt-28 py-14 sm:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-[10px] sm:text-xs font-bold text-emerald-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PRECIOS CLAROS • SIN COSTES OCULTOS</span>
          </div>

          <h2 className="font-display text-[2.1rem] sm:text-6xl text-slate-100 leading-[0.95]">
            Elige tu <span className="text-gradient">pack</span>
          </h2>

          <p className="hidden sm:block text-slate-400 text-sm sm:text-base">
            Contrata por WhatsApp. Tus accesos están listos en 5 minutos.
          </p>
        </div>

        {/* Tier switch */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-900 border border-slate-800">
            {PACKAGE_TIERS.map((t) => {
              const active = tier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${
                    active
                      ? t.id === 'vip'
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {t.id === 'vip' && <Crown className="w-4 h-4" />}
                  {t.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Device count */}
        <div className="mb-9 sm:mb-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 mb-3">
            ¿Cuántas pantallas a la vez?
          </p>

          {/* Phones get full-width targets; a single pill row hid 3 and 4 */}
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {DEVICE_COUNTS.map((n) => (
              <button
                key={n}
                onClick={() => setDevices(n)}
                className={`py-3 rounded-2xl text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  devices === n
                    ? accentSolid + ' shadow-md'
                    : 'glass-card text-slate-400 border border-slate-800'
                }`}
              >
                <Monitor className="w-4 h-4" />
                {n} {n === 1 ? 'pantalla' : 'pantallas'}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-900 border border-slate-800">
              {DEVICE_COUNTS.map((n) => (
                <button
                  key={n}
                  onClick={() => setDevices(n)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    devices === n ? accentSolid + ' shadow-md' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  {n} {n === 1 ? 'pantalla' : 'pantallas'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Duration packs — snap carousel on a phone, three columns from tablet up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 pt-6 sm:pt-0 items-stretch">
          {DURATION_PACKS.map((pack, i) => {
            const price = pack.prices[tier][devices - 1];
            const perMonth = price / pack.months;
            const best = !!pack.bestDeal;
            // Each pack owns a hue, and the three step along the tier's ramp.
            // The device count then walks that hue deeper, from 0 at one screen
            // to 1 at four, so the whole row darkens as you add screens.
            const ramp = PACK_COLORS[tier][i];
            const lift = (devices - 1) / (DEVICE_COUNTS.length - 1);
            const fromRgb = mix(ramp.base.from, ramp.deep.from, lift);
            const toRgb = mix(ramp.base.to, ramp.deep.to, lift);
            const c = {
              from: toHex(fromRgb),
              to: toHex(toRgb),
              ink: toHex(mix(ramp.base.ink, ramp.deep.ink, lift)),
              rgb: `${fromRgb.r}, ${fromRgb.g}, ${fromRgb.b}`
            };

            const orderText =
              `¡Hola! Quiero contratar el pack ${activeTier.name} ${pack.label} ` +
              `para ${devices} ${devices === 1 ? 'pantalla' : 'pantallas'} (${formatPrice(price)}). ` +
              `¿Me enviáis las formas de pago y de alta?`;
            const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;

            return (
              <div
                key={pack.id}
                className={`pack-tint relative rounded-3xl overflow-hidden flex flex-col justify-between bg-slate-950 ${
                  best ? 'sm:scale-102 lg:scale-105 z-10' : 'hover:-translate-y-1'
                }`}
                style={{
                  ['--pack-from' as string]: c.from,
                  ['--pack-to' as string]: c.to,
                  ['--pack-ink' as string]: c.ink,
                  ['--pack-soft' as string]: `rgba(${c.rgb}, ${best ? 0.22 : 0.15})`,
                  border: `1.5px solid rgba(${c.rgb}, ${best ? 0.75 : 0.3})`,
                  boxShadow: best
                    ? `0 26px 55px -22px rgba(${c.rgb}, 0.65)`
                    : `0 14px 34px -20px rgba(${c.rgb}, 0.45)`
                }}
              >
                {best && (
                  <div
                    className="pack-grad absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>La mejor oferta</span>
                  </div>
                )}

                {/* A light sweeps across on every tier / device change */}
                <div
                  key={`sheen-${tier}-${devices}`}
                  aria-hidden
                  className="sheen absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)'
                  }}
                />

                {/* Coloured head: the pack's own hue washes behind the price */}
                <div
                  aria-hidden
                  className="pack-wash absolute inset-x-0 top-0 h-56 pointer-events-none"
                />
                <div
                  aria-hidden
                  className="pack-grad absolute inset-x-0 top-0 h-1.5 pointer-events-none"
                />

                <div className="relative px-6 sm:px-8 pt-6 sm:pt-8">
                  {/* Duration + price */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span
                        className="pack-grad px-3 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-white"
                      >
                        {pack.label}
                      </span>
                      <span
                        className="pack-soft-bg px-2 py-0.5 rounded-full text-[10px] font-black"
                      >
                        −{pack.savePercent}%
                      </span>
                    </div>

                    <p
                      key={`${tier}-${devices}`}
                      className="pack-grad-text price-in mt-5 font-heading text-[3.4rem] sm:text-[3.6rem] leading-[0.9] font-black tabular-nums tracking-tight"
                    >
                      {formatPrice(price)}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                      <span
                        className="pack-soft-bg px-3 py-1 rounded-full text-[11px] font-bold tabular-nums"
                      >
                        ≈ {formatPrice(perMonth)} / mes
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300 inline-flex items-center gap-1.5">
                        <Monitor className="w-3.5 h-3.5" />
                        {devices} {devices === 1 ? 'pantalla' : 'pantallas'}
                      </span>
                    </div>
                  </div>

                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`pricing-pack-btn-${pack.id}`}
                    className="pack-grad mt-6 w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base text-white flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                    style={{ boxShadow: `0 14px 30px -12px rgba(${c.rgb}, 0.8)` }}
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    <span>{isVip ? 'Pasar a VIP' : 'Contratar'}</span>
                  </a>

                  <div className="my-6 h-px bg-slate-800" />

                  {/* What's in the pack — the tier decides this, not the duration */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <span
                      className="pack-soft-bg shrink-0 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em]"
                    >
                      {activeTier.name}
                    </span>
                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-100 leading-snug">{activeTier.headline}</h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    {activeTier.features.map((feature, idx) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className="pack-soft-bg w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                        </span>
                        <span className={idx < 2 ? 'font-semibold text-slate-100' : 'leading-tight'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mx-6 sm:mx-8 mt-5 sm:mt-6 mb-6 sm:mb-8 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-400 font-medium">
                  Alta media: <strong className="text-slate-100">5 minutos</strong>
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] sm:text-xs text-slate-500 font-medium">
          IVA incluido · Sin permanencia · Pago seguro · Soporte en español
        </p>

        {/* Talk-to-us banner */}
        <div className="mt-10 sm:mt-14 glass-panel p-5 sm:p-6 rounded-3xl border border-slate-800 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-slate-100">
                ¿Tienes dudas?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Escríbenos y damos con el pack que te encaja.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              '¡Hola! ¿Qué pack me recomendáis?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center px-6 py-3.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-500 hover:bg-emerald-900 font-bold text-sm transition-all active:scale-[0.98] whitespace-nowrap"
          >
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
