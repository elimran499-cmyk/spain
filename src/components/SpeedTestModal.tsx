import React, { useState, useEffect } from 'react';
import { Zap, X, CheckCircle2, ShieldCheck, Play, RefreshCw } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/mockData';

interface SpeedTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeedTestModal: React.FC<SpeedTestModalProps> = ({ isOpen, onClose }) => {
  const [testing, setTesting] = useState(false);
  const [speed, setSpeed] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const startTest = () => {
    setTesting(true);
    setSpeed(null);
    setPing(null);
    setProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTesting(false);
        // Generate simulated high bandwidth speed (e.g., 85-180 Mbps)
        const simulatedSpeed = Math.floor(Math.random() * (160 - 75 + 1)) + 75;
        const simulatedPing = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
        setSpeed(simulatedSpeed);
        setPing(simulatedPing);
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl text-slate-100">
                Test de velocidad 4K
              </h3>
              <p className="text-xs text-slate-400">
                Comprueba si tu conexión está lista para IPTV 4K a 60 fps
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Speed Dial / Indicator */}
        <div className="text-center py-6 space-y-4">
          {!testing && speed === null && (
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-purple-500/40 flex items-center justify-center mx-auto text-purple-400 glow-purple">
                <Zap className="w-10 h-10" />
              </div>
              <p className="text-xs text-slate-300">
                Mínimo recomendado para 4K Ultra HD: <strong className="text-cyan-400">25 Mbps</strong>
              </p>
              <button
                onClick={startTest}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-slate-950 font-extrabold text-sm shadow-xl glow-purple hover:scale-105 transition-transform"
              >
                Iniciar el test
              </button>
            </div>
          )}

          {testing && (
            <div className="space-y-4">
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-800 border-t-cyan-400 animate-spin"></div>
                <div className="text-2xl font-black text-slate-100 font-heading">
                  {progress}%
                </div>
              </div>
              <p className="text-xs text-slate-400 animate-pulse">
                Midiendo la respuesta del servidor y la latencia...
              </p>
            </div>
          )}

          {!testing && speed !== null && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              <div className="grid grid-cols-2 gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">Velocidad de bajada:</span>
                  <span className="font-heading font-black text-3xl text-emerald-400">
                    {speed} <span className="text-xs text-slate-400">Mbps</span>
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-semibold">Ping del servidor:</span>
                  <span className="font-heading font-black text-3xl text-cyan-400">
                    {ping} <span className="text-xs text-slate-400">ms</span>
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CONEXIÓN IDEAL PARA 4K ULTRA HD A 60 FPS</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`¡Hola! Mi velocidad es de ${speed} Mbps. Quiero dar de alta mi suscripción IPTV 4K.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  <span>Contratar por WhatsApp</span>
                </a>

                <button
                  onClick={startTest}
                  className="px-4 py-3 rounded-xl glass-card text-slate-300 hover:text-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Repetir
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
