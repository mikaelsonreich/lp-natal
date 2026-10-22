import React from 'react';
import { ArrowRight, MessageCircleHeart } from 'lucide-react';

interface FeedbacksSectionProps {
  onCtaClick: () => void;
  onPreviewImage?: (src: string, title: string) => void;
}

const FEEDBACKS = [
  {
    id: 1,
    image: '/assets/aistudio/feedback_francisca_clean.jpg',
    title: 'Depoimento da Francisca',
    caption: 'Cartão bordado com estrela natalina e fios dourados.',
  },
  {
    id: 2,
    image: '/assets/aistudio/image_721216e3.png',
    title: 'Depoimento Cartão de Árvore',
    caption: 'Cartão de Natal bordado na primeira tentativa com os moldes.',
  },
  {
    id: 3,
    image: '/assets/aistudio/image_ee8c4f8e.png',
    title: 'Depoimento da Marília',
    caption: 'Tags natalinas bordadas que a família inteira se encantou.',
  },
];

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = ({ onCtaClick, onPreviewImage }) => {
  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#15803D]">
            <MessageCircleHeart className="w-4 h-4 text-[#15803D]" />
            <span>Depoimentos Reais de Clientes</span>
            <span aria-hidden="true">·</span>
            <span>Experiências Comprovadas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight text-balance">
            O Que Quem Já Está Bordando Diz
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Veja as mensagens e fotos que recebemos todos os dias de alunas que já estão criando seus cartões e enfeites.
          </p>
        </div>

        {/* 3 Feedback Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {FEEDBACKS.map((fb) => (
            <div
              key={fb.id}
              className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#111b21] aspect-[4/5] flex items-center justify-center mb-3">
                <img
                  src={fb.image}
                  alt={fb.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs text-slate-600 text-center px-2 pb-1 leading-relaxed line-clamp-2">
                {fb.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Green CTA Button for Feedbacks Section */}
        <div className="text-center pt-2">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer"
          >
            <span>Quero Garantir Meu Pacote Premium Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-500 mt-2">
            Acesso digital imediato aos +250 moldes e 5 bônus exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
};
