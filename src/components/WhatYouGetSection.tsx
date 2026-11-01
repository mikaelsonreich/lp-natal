import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface WhatYouGetSectionProps {
  onCtaClick?: () => void;
  onPreviewImage?: (src: string, title: string) => void;
}

interface ShowcaseItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const SHOWCASE_IMAGES: ShowcaseItem[] = [
  {
    id: 1,
    src: '/assets/aistudio/Bordado_de_Natal_em_Papel_52314e1b.png',
    alt: 'Coleção completa de moldes impressos em português e cartões natalinos bordados',
    caption: 'Coleção de Moldes Impressos & 8 Modelos de Cartões Bordados',
  },
  {
    id: 2,
    src: '/assets/aistudio/Gemini_Generated_Image_bdr227bdr227bdr2_4d7982e9.jpg',
    alt: 'Cartão de Árvore de Natal geométrica bordada com estrela dourada',
    caption: 'Cartão Árvore de Natal com Fios Verdes e Estrela Dourada',
  },
  {
    id: 3,
    src: '/assets/aistudio/Gemini_Generated_Image_cny4i2cny4i2cny4_3986d1b6.jpg',
    alt: 'Cartão Estrela Dourada Pendente com lettering Boas Festas',
    caption: 'Cartão Estrela Pendente com Fios Dourados & Boas Festas',
  },
  {
    id: 4,
    src: '/assets/aistudio/Gemini_Generated_Image_9pu1ts9pu1ts9pu1_f49041c9.jpg',
    alt: 'Cartão Bola de Natal com detalhes em verde, vermelho e dourado',
    caption: 'Cartão Bola de Natal Decorativa com Fios Natalinos',
  },
  {
    id: 5,
    src: '/assets/aistudio/Gemini_Generated_Image_yix0yryix0yryix0_31bea31f.jpg',
    alt: 'Cartão Coração Natalino bordado com estrela e ramos',
    caption: 'Cartão Coração Natalino com Ponto Teia e Ramos',
  },
  {
    id: 6,
    src: '/assets/aistudio/Gemini_Generated_Image_vkbl50vkbl50vkbl_ec4c305d.jpg',
    alt: 'Cartão Caixa de Presente de Natal bordada com laço e azevinho',
    caption: 'Cartão Caixa de Presente com Laço Bordado e Azevinho',
  },
];

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = SHOWCASE_IMAGES.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const currentItem = SHOWCASE_IMAGES[currentSlide];

  return (
    <section id="o-que-receber" className="py-16 md:py-24 bg-white border-y border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#800020]">
            <span>Material Completo em PDF</span>
            <span aria-hidden="true">·</span>
            <span>Pronto Para Imprimir</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight text-balance">
            O Que Você Vai Receber
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Receba uma coleção exclusiva de +250 moldes em folha A4, com furos-guia para facilitar cada ponto, além de guias de bordado que ajudam você a transformar papel, linha e agulha em criações encantadoras.
          </p>
        </div>

        {/* Interactive Showcase Carousel */}
        <div className="space-y-4">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xl bg-stone-950 aspect-[4/3] sm:aspect-[16/11] md:aspect-[3/2] flex items-center justify-center group select-none"
          >
            {/* Blurred ambient background based on current image */}
            <img
              src={currentItem.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none transition-all duration-500"
            />

            {/* Main Current Slide Image */}
            <img
              key={currentItem.id}
              src={currentItem.src}
              alt={currentItem.alt}
              className="relative z-10 w-full h-full object-contain p-1 sm:p-2 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Navigation Button Left */}
            <button
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-xl border border-stone-200/80 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Navigation Button Right */}
            <button
              onClick={handleNext}
              aria-label="Próxima foto"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-xl border border-stone-200/80 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer backdrop-blur-xs"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Top Right Counter Badge */}
            <div className="absolute top-4 right-4 z-20 bg-stone-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 shadow-md">
              <span>{currentSlide + 1} de {total}</span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-20 bg-stone-900/85 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-lg text-center max-w-lg">
              <span className="line-clamp-1">{currentItem.caption}</span>
            </div>
          </div>

          {/* Dots Indicator Below Frame */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {SHOWCASE_IMAGES.map((item, dotIdx) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(dotIdx)}
                aria-label={`Ir para foto ${dotIdx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  dotIdx === currentSlide
                    ? 'w-7 h-2.5 bg-[#15803D]'
                    : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* Quick explanation box */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
            <span className="font-serif text-lg font-bold text-amber-800 leading-none">✦</span>
            <p>
              <strong>Você não precisa redesenhar nada:</strong> cada molde já vem com a furação indicada, garantindo que suas linhas fiquem sempre retas, com simetria milimétrica.
            </p>
          </div>

          {/* Green CTA Button */}
          <div className="pt-4 text-center">
            <a
              href="https://pay.wiapy.com/8mJj6lBTqYZo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer text-center select-none"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>QUERO MEU PACOTE PREMIUM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
