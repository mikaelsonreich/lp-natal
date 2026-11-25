import React from 'react';
import { ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { VacancyCounter } from './VacancyCounter';

interface HeroSectionProps {
  onScrollToOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-gradient-to-b from-[#FFFDF9] via-[#F8FAFC] to-[#F8FAFC] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-[2.65rem] lg:text-[2.9rem] font-bold text-slate-900 tracking-tight leading-[1.22] text-balance mb-8 sm:mb-10">
          <span className="bg-[#86EFAC]/80 text-emerald-950 px-2 py-0.5 rounded-md box-decoration-clone">
            +250 Moldes
          </span>{' '}
          de Natal prontos para imprimir, com guias e manuais que levam você do zero ao presente perfeito.
        </h1>

        {/* Mockup Card Container - matching reference image */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative bg-white rounded-3xl p-2 sm:p-3 border border-slate-200/90 shadow-2xl shadow-slate-300/40 transition-all overflow-hidden">
            {/* Mockup Video Frame with 1:1 Aspect Ratio matching the artwork */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 aspect-square flex items-center justify-center">
              <video
                src="/hero-produto.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Vídeo Oficial +250 Moldes de Natal para Bordados de Papel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA directly below the mockup */}
          <div className="mt-6 sm:mt-8 space-y-3">
            <VacancyCounter />

            <a
              href="https://pay.wiapy.com/8mJj6lBTqYZo"
              className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-2xl shadow-xl shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wide text-center select-none"
            >
              <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>GARANTIR OFERTA COM BÔNUS</span>
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

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
