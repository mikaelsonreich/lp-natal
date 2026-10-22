import React from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/productData';
import { Check, ShieldCheck, Lock, Sparkles, ArrowRight, Gift } from 'lucide-react';

interface OffersSectionProps {
  onSelectPlan?: (plan: PricingPlan) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="ofertas" className="py-16 md:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#15803D]">
            <span>Oferta Exclusiva</span>
            <span aria-hidden="true">·</span>
            <span>Acesso Completo & Vitalício</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight text-balance">
            Garanta o Seu Pacote Premium + Videos
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Pagamento único sem mensalidades. Baixe todos os moldes e materiais imediatamente no seu e-mail.
          </p>
        </div>

        {/* Single Premium Offer Card Container */}
        <div className="max-w-xl mx-auto mb-16">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = true;

            return (
              <div
                key={plan.id}
                className="relative rounded-3xl transition-all duration-300 flex flex-col justify-between bg-white border-2 border-[#15803D] shadow-2xl shadow-emerald-950/10 p-6 sm:p-9"
              >
                {/* Header ribbon for popular plan in green */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#15803D] text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md border border-emerald-400/30">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing block */}
                  <div className="py-4 border-y border-stone-100 my-4">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span>De</span>
                      <span className="line-through">{plan.originalPrice}</span>
                      <span>por apenas:</span>
                    </div>

                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl sm:text-4xl font-bold font-mono text-stone-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-stone-500">/ pagamento único</span>
                    </div>

                    {plan.installments && (
                      <p className="text-xs font-semibold text-[#1E3A2F] mt-1">
                        {plan.installments}
                      </p>
                    )}

                    {plan.popularityNote && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                        <span role="img" aria-label="destaque">🔥</span>
                        <span>{plan.popularityNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 my-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      O que está incluso:
                    </p>
                    {plan.features.map((feature, idx) => {
                      const isVideo = feature.toLowerCase().includes('videoaula');
                      if (isVideo) {
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 text-xs text-slate-900 leading-normal p-2.5 rounded-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100/70 border border-amber-300/90 shadow-xs"
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                              <Sparkles className="w-3 h-3 text-slate-950 fill-amber-300" />
                            </div>
                            <div className="flex-1 flex items-center justify-between gap-2 flex-wrap">
                              <span className="font-bold text-amber-950 tracking-tight">
                                {feature}
                              </span>
                              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/90 border border-amber-400/70 px-2 py-0.5 rounded-md shadow-2xs">
                                ✦ Adicional Premium
                              </span>
                            </div>
                          </div>
                        );
                      }

                      const isBonus = feature.includes('Bônus') || feature.includes('Bonus');
                      if (isBonus) {
                        const parts = feature.split(':');
                        const bonusPrefix = parts[0];
                        const bonusRest = parts.slice(1).join(':');

                        return (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-normal">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <div className="flex-1">
                              <span className="text-[#15803D] font-bold inline-flex items-center gap-1 bg-emerald-50 border border-emerald-300/80 px-1.5 py-0.5 rounded text-[11px] mr-1 shadow-2xs">
                                <Gift className="w-3 h-3 text-[#15803D] shrink-0" />
                                <span>{bonusPrefix}</span>
                              </span>
                              <span className="font-medium text-slate-700">{bonusRest ? `: ${bonusRest.trim()}` : ''}</span>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-normal">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={plan.checkoutUrl || 'https://pay.wiapy.com/8mJj6lBTqYZo'}
                    className="w-full py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-[#15803D] hover:bg-[#166534] text-white shadow-md shadow-emerald-900/20 text-center select-none"
                  >
                    {isFeatured && <Sparkles className="w-4 h-4 text-amber-200" />}
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400 mt-3">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Pagamento Seguro
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Garantia 7 Dias
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
