import React from 'react';
import { Sparkles, FileCheck } from 'lucide-react';

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

const TemplateCard: React.FC<{ item: TemplateItem; index: number }> = ({ item, index }) => (
  <div className="shrink-0 w-[240px] sm:w-[270px] md:w-[290px] rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden flex flex-col justify-between">
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
        Molde #{index + 1} de 6 Amostras
      </p>
    </div>
  </div>
);

export const MoldesCarouselSection: React.FC<MoldesCarouselSectionProps> = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FDFCF9] border-t border-stone-200/80 overflow-hidden">
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

        {/* Seamless Continuous Autoplay Carousel (no arrows, no abrupt reset) */}
        <div className="relative max-w-5xl mx-auto overflow-hidden py-4">
          {/* Subtle left/right edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-14 bg-gradient-to-r from-[#FDFCF9] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-14 bg-gradient-to-l from-[#FDFCF9] to-transparent z-10" />

          {/* Infinite duplicated marquee track (advances 1 card every 2s = 12s per full 6-card loop) */}
          <div className="flex w-max animate-marquee-moldes">
            <div className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6">
              {TEMPLATES.map((item, idx) => (
                <TemplateCard key={`a-${item.id}`} item={item} index={idx} />
              ))}
            </div>
            <div className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
              {TEMPLATES.map((item, idx) => (
                <TemplateCard key={`b-${item.id}`} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
