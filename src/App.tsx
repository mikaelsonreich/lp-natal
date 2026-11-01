import React, { useState, useEffect } from 'react';
import { TopRibbon } from './components/TopRibbon';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { MoldesCarouselSection } from './components/MoldesCarouselSection';
import { BonusesSection } from './components/BonusesSection';
import { FeedbacksSection } from './components/FeedbacksSection';
import { OffersSection } from './components/OffersSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { MoldeItem, PricingPlan, PRICING_PLANS } from './data/productData';
import { Sparkles, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState<MoldeItem | null>(null);
  const [customLightboxImage, setCustomLightboxImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVipCheckout = () => {
    scrollToOffers();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-red-100 selection:text-red-950 flex flex-col pt-10">
      {/* 0. Fixed Red Ribbon (stays fixed while browsing entire site) */}
      <TopRibbon />

      <main className="flex-grow">
        {/* 1. Hero Section - matching requested reference image design */}
        <HeroSection onScrollToOffers={scrollToOffers} />

        {/* Carrossel de Moldes + Fita Amarelo-Ouro com Cronômetro */}
        <MoldesCarouselSection onScrollToOffers={scrollToOffers} />

        {/* 2. O que você vai receber */}
        <WhatYouGetSection onCtaClick={scrollToOffers} />

        {/* 3. Bônus Exclusivos */}
        <BonusesSection onCtaClick={scrollToOffers} />

        {/* 4. Feedbacks de Clientes */}
        <FeedbacksSection onCtaClick={scrollToOffers} />

        {/* 5. Ofertas */}
        <OffersSection
          onSelectPlan={(plan) => {
            if (plan.checkoutUrl) {
              window.location.href = plan.checkoutUrl;
            }
          }}
        />

        {/* Garantia Incondicional */}
        <GuaranteeSection onCtaClick={scrollToOffers} />

        {/* 6. Perguntas Frequentes */}
        <FaqSection onCtaClick={scrollToOffers} />

        {/* Final Conversion Banner */}
        <section className="py-14 bg-[#1B4332] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-amber-300 font-mono text-xs uppercase tracking-widest block">
              ✦ Natal Inesquecível & Artesanal ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Dê Vida ao Seu Natal com Bordados em Papel que Encantam
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
              <span>Receba acesso imediato a todos os +250 moldes,</span>
              <span className="text-amber-300 font-bold inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md border border-amber-300/30">
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                <span>5 Bônus Exclusivos</span>
              </span>
              <span>e +30 videoaulas de ponto-guia. Comece agora mesmo no conforto da sua casa.</span>
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pay.wiapy.com/8mJj6lBTqYZo"
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] border border-emerald-400/40 rounded-xl transition-all shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>QUERO MEU PACOTE PREMIUM</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-emerald-200/80 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                Garantia de 7 Dias
              </span>
              <span>·</span>
              <span>Download Imediato</span>
              <span>·</span>
              <span>Pagamento Seguro</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        customImage={customLightboxImage}
        onClose={() => {
          setLightboxItem(null);
          setCustomLightboxImage(null);
        }}
        onCtaClick={handleOpenVipCheckout}
      />
    </div>
  );
}
