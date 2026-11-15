import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight, Gift, Video } from 'lucide-react';
import { CHECKOUT_URL_BASICO } from '../data/productData';

const CHECKOUT_URL_UPSELL_15 = 'https://pay.wiapy.com/UFZZ7trC7Viu';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#FDFCF9] rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar oferta"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Kicker */}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-3">
          OFERTA IMPERDÍVEL
        </p>

        {/* Headline */}
        <h2
          id="upsell-modal-title"
          className="font-serif text-2xl sm:text-[28px] leading-tight font-bold text-stone-900"
        >
          Leve o Premium + Videos por{' '}
          <span className="text-[#15803D] whitespace-nowrap">R$ 15,00</span>
        </h2>

        {/* Discount Badge */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[11px] font-extrabold text-amber-900 uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Desconto Exclusivo de R$ 19,90 por R$ 15,00</span>
        </div>

        {/* Subtitle / Included items */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-stone-600">
          <span>+250 Moldes</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 font-semibold text-stone-800">
            <Gift className="w-3.5 h-3.5 text-[#15803D]" />
            <span>5 Bônus</span>
          </span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 font-semibold text-amber-800">
            <Video className="w-3.5 h-3.5 text-amber-600" />
            <span>+30 Videoaulas</span>
          </span>
        </div>

        {/* Highlighted Primary CTA for Premium */}
        <div className="mt-6">
          <a
            href={CHECKOUT_URL_UPSELL_15}
            className="w-full py-4 sm:py-5 px-6 rounded-full text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-[#15803D] via-[#16A34A] to-[#15803D] hover:from-[#166534] hover:to-[#15803D] shadow-xl shadow-emerald-900/30 ring-4 ring-emerald-500/20 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider cursor-pointer select-none"
          >
            <Sparkles className="w-5 h-5 text-amber-200 shrink-0" />
            <span>QUERO PREMIUM</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-stone-200/90" />

        {/* Secondary Basic Option */}
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            Prefiro só o básico:
          </p>

          <p className="text-base sm:text-lg font-bold text-stone-700 tracking-tight">
            R$ 10,00 · +250 Moldes
          </p>

          <a
            href={CHECKOUT_URL_BASICO}
            className="w-full py-3 px-6 rounded-full text-xs sm:text-sm font-bold text-stone-600 hover:text-stone-900 bg-transparent hover:bg-stone-100 border border-stone-300 transition-colors flex items-center justify-center uppercase tracking-wider cursor-pointer select-none"
          >
            QUERO O BÁSICO
          </a>
        </div>

        {/* Footer Micro-text */}
        <p className="mt-5 text-[11px] text-stone-500">
          Acesso imediato no seu e-mail
        </p>
      </div>
    </div>
  );
};
