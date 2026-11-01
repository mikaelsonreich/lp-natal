import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Sparkles, FileCheck, ArrowRight } from 'lucide-react';

interface MoldesCarouselSectionProps {
  onScrollToOffers: () => void;
}

interface TemplateItem {
  id: number;
  image: string;
  title: string;
  tag: string;
}

const TEMPLATES: TemplateItem[] = [
  {
    id: 1,
    image: '/assets/aistudio/Molde_de_bordado_em_A4__1__b9816b7f.png',
    title: 'Pinheiro Geométrico com Estrela',
    tag: 'Molde em Folha A4',
  },
  {
    id: 2,
    image: '/assets/aistudio/enfeite_874be221.png',
    title: 'Enfeite Pendente Natalino',
    tag: 'Furação Ponto a Ponto',
  },
  {
    id: 3,
    image: '/assets/aistudio/bolanatal_341a61bd.png',
    title: 'Bola de Natal Decorativa',
    tag: 'Molde em Folha A4',
  },
  {
    id: 4,
    image: '/assets/aistudio/Cora__o_Bordado_de_Feliz_Natal_0a15869c.png',
    title: 'Coração Feliz Natal',
    tag: 'Furação Ponto a Ponto',
  },
  {
    id: 5,
    image: '/assets/aistudio/_rvore_de_Natal_em_Pontilhado__Feliz_Natal___e0e72279.png',
    title: 'Árvore Radiante Feliz Natal',
    tag: 'Molde em Folha A4',
  },
  {
    id: 6,
    image: '/assets/aistudio/Papai_Noel_em_String_Art_beefd5ae.png',
    title: 'Papai Noel em Pontos',
    tag: 'Furação Ponto a Ponto',
  },
];

export const MoldesCarouselSection: React.FC<MoldesCarouselSectionProps> = ({ onScrollToOffers }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // 5-minute countdown timer (300 seconds)
  const [secondsLeft, setSecondsLeft] = useState<number>(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 300; // Reset gracefully if reaches 0
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSecs = String(remainingSeconds).padStart(2, '0');

  const maxIndex = TEMPLATES.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Scroll active card inside container ONLY on user interaction (never on mount, never touches window scroll)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[currentIndex] as HTMLElement;
      if (card) {
        const container = scrollContainerRef.current;
        const targetScroll = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-12 sm:py-16 bg-[#FDFCF9] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#15803D] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Amostra de Moldes do Pacote</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Veja Alguns dos Moldes Inclusos
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            Todos os moldes vêm com a furação indicada para imprimir direto na sua impressora comum em folha A4.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrev}
            aria-label="Molde anterior"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            aria-label="Próximo molde"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Track with standard horizontal scrolling without snap or viewport hijacking */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-4 px-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TEMPLATES.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`shrink-0 w-[240px] sm:w-[270px] md:w-[290px] rounded-2xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'border-[#15803D] shadow-xl ring-2 ring-[#15803D]/20 scale-[1.02]'
                      : 'border-slate-200/90 shadow-md hover:border-slate-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Template Image container (A4 aspect ~ 1:1.4) */}
                  <div className="relative aspect-[3/4] bg-white p-3 flex items-center justify-center border-b border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />

                    {/* Tag badge */}
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                      <FileCheck className="w-3 h-3 text-emerald-400" />
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className="p-3 bg-slate-50/70 text-center">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#15803D] font-semibold mt-0.5">
                      Molde #{idx + 1} de 6 Amostras
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {TEMPLATES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para molde ${dotIdx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-7 h-2 bg-[#15803D]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fita Amarelo-Ouro com Cronômetro de Urgência */}
        <div className="mt-8 max-w-4xl mx-auto">
          <a
            href="https://pay.wiapy.com/8mJj6lBTqYZo"
            className="rounded-2xl p-3.5 sm:p-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 border border-amber-300 shadow-lg shadow-amber-400/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-950 transition-transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer block select-none"
          >
            {/* Texto de Alerta da Fita */}
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <span className="w-8 h-8 rounded-full bg-slate-950/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-slate-950 animate-pulse" />
              </span>
              <div>
                <p className="font-black text-xs sm:text-sm md:text-base uppercase tracking-wider text-slate-950 leading-tight">
                  APROVEITE O PREÇO PROMOCIONAL POR TEMPO LIMITADO
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-900/80">
                  Oferta do Pacote Premium + Videos por apenas R$ 10,00
                </p>
              </div>
            </div>

            {/* Cronômetro de 5 Minutos */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="bg-slate-950 text-white font-mono font-bold text-sm sm:text-base px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 tracking-wider">
                <span className="text-amber-400">{formattedMinutes}</span>
                <span className="text-amber-400 animate-pulse">:</span>
                <span className="text-amber-400">{formattedSecs}</span>
              </div>

              <div className="hidden md:flex items-center gap-1 text-xs font-bold text-slate-950 bg-white/40 px-3 py-1.5 rounded-xl border border-slate-950/10">
                <span>QUERO MEU PACOTE PREMIUM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
