import React from 'react';
import { BONUSES } from '../data/productData';
import { Gift, ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick: () => void;
  onPreviewImage?: (src: string, title: string) => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching requested style with Gift icon and highlight color */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance flex items-center justify-center gap-2.5 flex-wrap">
            <span>5</span>
            <span className="text-[#15803D] bg-emerald-50 border border-emerald-300/80 px-3.5 py-1 rounded-2xl shadow-xs inline-flex items-center gap-2">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803D] animate-bounce" />
              <span>Bônus</span>
            </span>
            <span>Inclusos – Valor R$ 199 (Hoje Grátis!)</span>
          </h2>

          {/* Decorative mini bar */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-1">
            Garantindo o seu acesso agora, você leva todos os materiais e gabaritos complementares sem nenhum custo extra.
          </p>
        </div>

        {/* Grid of Bonus Cards matching the reference card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
          {BONUSES.map((bonus, idx) => (
            <div
              key={bonus.id}
              className={`bg-white rounded-[2rem] border-2 border-[#15803D] p-5 sm:p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between items-center text-center ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 max-w-md mx-auto w-full' : ''
              }`}
            >
              <div className="w-full flex flex-col items-center">
                {/* Bonus Image with rounded corners */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-xs">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-snug mb-1">
                  {bonus.title}
                </h3>

                {/* Strikethrough Price in Red */}
                <span className="text-red-600 font-bold text-sm tracking-tight line-through block my-1">
                  {bonus.originalPrice}
                </span>

                {/* Short text below image describing bonus */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 max-w-xs">
                  {bonus.description}
                </p>
              </div>

              {/* Tag marker at bottom with highlighted Bonus text and Gift icon in green */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#15803D] uppercase tracking-wider bg-emerald-50 border border-emerald-300/80 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
                  <Gift className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>Bônus #{idx + 1} · {bonus.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion banner */}
        <div className="max-w-4xl mx-auto bg-[#1B4332] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Gift className="w-3.5 h-3.5 text-amber-300" />
              <span>Acesso Liberado Hoje</span>
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <span>Todos os 5</span>
              <span className="text-amber-300 font-black inline-flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-lg border border-amber-300/30">
                <Gift className="w-4 h-4 text-amber-300" />
                <span>Bônus</span>
              </span>
              <span>saem GRÁTIS no Pacote Premium!</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Economize mais de R$ 200 garantindo sua vaga nesta oferta.
            </p>
          </div>

          <a
            href="https://pay.wiapy.com/8mJj6lBTqYZo"
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] border border-emerald-400/40 rounded-xl transition-all cursor-pointer shrink-0 shadow-lg shadow-emerald-950/30 flex items-center justify-center gap-2 text-center select-none"
          >
            <Gift className="w-4 h-4 text-white" />
            <span>QUERO MEU PACOTE PREMIUM</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
