import React from 'react';
import { ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollToOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffers }) => {
  const mockupImage = '/assets/aistudio/FRONT-Natal_c86948a5.png';

  return (
    <section id="hero" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-gradient-to-b from-[#FFFDF9] via-[#F8FAFC] to-[#F8FAFC] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.18] text-balance mb-4">
          +250 Moldes de Natal para Bordados de Papel
        </h1>

        {/* Short Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 text-balance font-normal">
          Receba moldes em PDF prontos para imprimir e bordar cartões, enfeites e lembrancinhas de luxo em casa.
        </p>

        {/* Mockup Card Container - matching reference image */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl p-2 sm:p-3 border border-slate-200/90 shadow-2xl shadow-slate-300/40 transition-all overflow-hidden">
            {/* Mockup Image Frame with 1:1 Aspect Ratio matching the artwork */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 aspect-square flex items-center justify-center">
              <img
                src={mockupImage}
                alt="Mockup Oficial +250 Moldes de Natal para Bordados de Papel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* CTA directly below the mockup */}
          <div className="mt-6 sm:mt-8 space-y-3">
            <button
              onClick={onScrollToOffers}
              className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-2xl shadow-xl shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wide"
            >
              <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>Quero Garantir Meu Pacote Premium</span>
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Micro trust row below CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-[#15803D]" />
                <span>Download imediato no e-mail</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                <span>Garantia de 7 dias</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#800020] font-bold">85% OFF</span>
                <span>Preço especial de lançamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
