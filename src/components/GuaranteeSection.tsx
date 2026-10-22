import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick?: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Notice above the guarantee card */}
        <div className="text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2.5 text-slate-900 text-sm sm:text-base font-bold text-balance max-w-lg mx-auto">
            <Smartphone className="w-5 h-5 text-slate-700 shrink-0" />
            <span>Produto 100% digital. Você receberá o PDF para imprimir no e-mail cadastrado.</span>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center justify-center gap-3 pt-1">
            {/* Visa */}
            <div className="h-7 px-2.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center justify-center">
              <span className="font-sans font-black italic text-blue-900 text-xs tracking-tighter">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="h-7 px-2.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center justify-center gap-0.5">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90 -mr-1.5" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 opacity-90" />
            </div>

            {/* PIX */}
            <div className="h-7 px-2.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center justify-center gap-1">
              <svg className="w-3.5 h-3.5 text-teal-600 fill-current" viewBox="0 0 512 512">
                <path d="M122.7 131.6l81.6 81.6c4.7 4.7 12.3 4.7 17 0l81.6-81.6c28.3-28.3 74.3-28.3 102.6 0l55.9 55.9c28.3 28.3 28.3 74.3 0 102.6l-55.9 55.9c-28.3 28.3-74.3 28.3-102.6 0l-81.6-81.6c-4.7-4.7-12.3-4.7-17 0l-81.6 81.6c-28.3 28.3-74.3 28.3-102.6 0l-55.9-55.9c-28.3-28.3-28.3-74.3 0-102.6l55.9-55.9c28.3-28.3 74.3-28.3 102.6 0z"/>
              </svg>
              <span className="text-[11px] font-bold text-teal-700 tracking-tight">pix</span>
            </div>

            {/* Boleto / Security */}
            <div className="h-7 px-2.5 bg-white border border-slate-200 rounded-md shadow-xs flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Compra Segura</span>
            </div>
          </div>
        </div>

        {/* Guarantee Card matching reference image */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          {/* Emblem at the top of the card */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-emerald-300/80 p-2.5 flex items-center justify-center bg-emerald-50/20">
              <div className="w-full h-full rounded-full border-4 border-[#15803D] bg-white flex items-center justify-center shadow-xs">
                {/* Shield with Check Icon */}
                <svg
                  className="w-12 h-12 text-[#15803D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 text-left">
            Garantia de 7 Dias
          </h3>

          {/* Text */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 text-left">
            Sua compra é protegida por uma garantia de 7 dias. Se você acessar o material e entender que ele não é para você, poderá solicitar o reembolso dentro do prazo de garantia.
          </p>

          {/* Kicker */}
          <span className="text-sm sm:text-base font-black text-[#15803D] uppercase tracking-wide text-left block">
            RISCO ZERO PARA VOCÊ.
          </span>

          {/* Green CTA Button */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <a
              href="https://pay.wiapy.com/8mJj6lBTqYZo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer text-center"
            >
              <span>QUERO MEU PACOTE PREMIUM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
