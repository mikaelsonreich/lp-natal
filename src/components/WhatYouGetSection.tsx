import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface WhatYouGetSectionProps {
  onCtaClick?: () => void;
  onPreviewImage?: (src: string, title: string) => void;
}

interface CardShowcaseItem {
  id: number;
  src: string;
  alt: string;
}

interface IncludedBenefitItem {
  title: string;
  description: string;
}

const INCLUDED_BENEFITS: IncludedBenefitItem[] = [
  {
    title: '+250 moldes de Natal em folha A4:',
    description: 'Cartões, enfeites e lembrancinhas para escolher o presente certo para cada pessoa da família.',
  },
  {
    title: 'Furos-guia já marcados:',
    description: 'Você não precisa de mão firme nem de talento. É só seguir os furinhos, ponto a ponto.',
  },
  {
    title: 'Guias de bordado passo a passo:',
    description: 'Aprenda os pontos do zero e borde com confiança, mesmo que nunca tenha pegado uma agulha.',
  },
  {
    title: 'Manuais de acabamento:',
    description: 'Seu cartão fica com cara de presente de loja, pronto para entregar.',
  },
  {
    title: 'Acesso imediato:',
    description: 'Receba, imprima e comece hoje mesmo.',
  },
];

const CARD_PHOTOS: CardShowcaseItem[] = [
  {
    id: 1,
    src: '/assets/aistudio/cartao_estrela_9x16_36162a03.png',
    alt: 'Cartão natalino bordado em papel com estrela dourada e Boas Festas',
  },
  {
    id: 2,
    src: '/assets/aistudio/cartao_natal_presente_9x16_8348779f.png',
    alt: 'Cartão natalino bordado em papel com caixa de presente e azevinho',
  },
  {
    id: 3,
    src: '/assets/aistudio/cartao_coracao_pinheiros_9x16_2e8f83f2.png',
    alt: 'Cartão natalino bordado em papel com coração vermelho, estrela dourada e ramos',
  },
  {
    id: 4,
    src: '/assets/aistudio/cartao_arvore_estrelas_9x16_26f22323.png',
    alt: 'Cartão natalino bordado em papel com árvore de Natal estrelada e Feliz Natal',
  },
  {
    id: 5,
    src: '/assets/aistudio/cartao_natal_9x16_78c95e35.png',
    alt: 'Cartão natalino bordado em papel com Papai Noel carregando presentes',
  },
  {
    id: 6,
    src: '/assets/aistudio/cartao_papai_noel_9x16__2__96cfe77c.png',
    alt: 'Cartão natalino bordado em papel com Papai Noel minimalista',
  },
];

const ShowcaseCard: React.FC<{ item: CardShowcaseItem }> = ({ item }) => (
  <div className="shrink-0 w-[205px] sm:w-[230px] md:w-[250px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-lg bg-white">
    <div className="aspect-[9/16] w-full overflow-hidden bg-stone-100">
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setCardsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-que-receber" className="py-16 md:py-24 bg-white border-y border-stone-200/70 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (subheadline removed) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#800020]">
            <span>Material Completo em PDF</span>
            <span aria-hidden="true">·</span>
            <span>Pronto Para Imprimir</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight text-balance">
            O Que Você Vai Receber
          </h2>
        </div>

        {/* Benefit Cards with Green Check & Thin Yellow Border */}
        <div ref={cardsRef} className="max-w-3xl mx-auto mb-10 space-y-3.5">
          {INCLUDED_BENEFITS.map((item, idx) => (
            <div
              key={item.title}
              style={{ transitionDelay: cardsVisible ? `${idx * 90}ms` : '0ms' }}
              className={`bg-white border border-[#F5B800] rounded-2xl p-4 sm:p-5 shadow-xs flex items-start gap-3.5 transition-all duration-500 ease-out ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span
                aria-hidden="true"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#15803D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs"
              >
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
              </span>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong className="font-bold text-slate-900">{item.title}</strong>{' '}
                <span>{item.description}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Seamless Infinite Continuous Autoplay Carousel (unchanged below the cards) */}
        <div className="space-y-6">
          <div className="relative overflow-hidden py-3 select-none">
            {/* Subtle left/right white edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Duplicated track for seamless infinite horizontal scrolling */}
            <div className="flex w-max animate-marquee-cards">
              <div className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6">
                {CARD_PHOTOS.map((item) => (
                  <ShowcaseCard key={`a-${item.id}`} item={item} />
                ))}
              </div>
              <div className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
                {CARD_PHOTOS.map((item) => (
                  <ShowcaseCard key={`b-${item.id}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick explanation box */}
          <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <span className="font-serif text-lg font-bold text-amber-800 leading-none">✦</span>
            <p>
              <strong>Você não precisa redesenhar nada:</strong> cada molde já vem com a furação indicada, garantindo que suas linhas fiquem sempre retas, com simetria milimétrica.
            </p>
          </div>

          {/* Green CTA Button */}
          <div className="pt-2 text-center">
            <a
              href="https://pay.wiapy.com/8mJj6lBTqYZo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer text-center select-none"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>GARANTIR MOLDES + BÔNUS EXCLUSIVOS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
