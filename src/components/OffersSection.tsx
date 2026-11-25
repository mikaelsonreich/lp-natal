import React from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/productData';
import { Check, ShieldCheck, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { VacancyCounter } from './VacancyCounter';

interface OffersSectionProps {
  onSelectPlan?: (plan: PricingPlan) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = () => {
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
            Garanta o Seu Pacote Premium
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Pagamento único sem mensalidades. Baixe todos os moldes e materiais imediatamente no seu e-mail.
          </p>
        </div>

        {/* Centered Single Pricing Card */}
        <div className="max-w-xl mx-auto mb-16">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = !!plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between bg-white p-6 sm:p-8 ${
                  isFeatured
                    ? 'border-2 border-[#15803D] shadow-2xl shadow-emerald-950/15 ring-1 ring-emerald-500/20'
                    : 'border border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Header ribbon for featured plan */}
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

                    {plan.popularityNote && (
                      <div
                        className={`mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${
                          isFeatured
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                            : 'bg-slate-100 border border-slate-200 text-slate-700'
                        }`}
                      >
                        <span role="img" aria-label="tag">
                          {isFeatured ? '🔥' : '✨'}
                        </span>
                        <span>{plan.popularityNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 my-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      O que está incluso:
                    </p>

                    {(() => {
                      const bonusFeatures = plan.features.filter(
                        (f) => f.includes('Bônus') || f.includes('Bonus')
                      );
                      const regularFeatures = plan.features.filter(
                        (f) => !f.includes('Bônus') && !f.includes('Bonus')
                      );

                      const renderBonusContent = (feature: string) => {
                        const colonIndex = feature.indexOf(':');
                        const bonusPrefix =
                          colonIndex !== -1 ? feature.slice(0, colonIndex + 1) : '';
                        const rest =
                          colonIndex !== -1 ? feature.slice(colonIndex + 1).trim() : feature;

                        const priceMatch = rest.match(/^(.*?)(\(R\$\s*[\d.,]+\))\s*$/);
                        const titleText = priceMatch ? priceMatch[1].trim() : rest;
                        const priceText = priceMatch ? priceMatch[2] : null;

                        return (
                          <div className="flex-1 text-xs text-slate-900 leading-relaxed">
                            {bonusPrefix && (
                              <span className="font-bold text-slate-900 mr-1">
                                {bonusPrefix}
                              </span>
                            )}
                            <span className="font-medium text-slate-800">{titleText}</span>
                            {priceText && (
                              <>
                                {' '}
                                <span className="line-through decoration-red-600 decoration-2 text-red-600 font-semibold">
                                  {priceText}
                                </span>{' '}
                                <strong className="font-extrabold text-slate-950 uppercase">
                                  HOJE GRÁTIS
                                </strong>
                              </>
                            )}
                          </div>
                        );
                      };

                      return (
                        <>
                          {bonusFeatures.length > 0 && (
                            <div className="relative overflow-hidden rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200 border border-amber-400/90 shadow-sm space-y-2.5">
                              {/* Gleaming light pass */}
                              <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/75 to-transparent animate-card-shimmer"
                              />

                              <div className="relative z-10 space-y-2.5">
                                {bonusFeatures.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5">
                                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300/60">
                                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                                    </div>
                                    {renderBonusContent(feature)}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {regularFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-stone-700 leading-normal"
                            >
                              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Bottom area with counter (if premium) and CTA */}
                <div>
                  {/* Contador de vagas com bônus apenas no plano com bônus (Premium) */}
                  {isFeatured && (
                    <div className="pt-4 pb-2">
                      <VacancyCounter />
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={plan.checkoutUrl || 'https://pay.wiapy.com/8mJj6lBTqYZo'}
                      className="w-full py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-[#15803D] hover:bg-[#166534] text-white shadow-md shadow-emerald-900/20 text-center select-none uppercase tracking-wide"
                    >
                      <Sparkles className="w-4 h-4 text-amber-200" />
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
