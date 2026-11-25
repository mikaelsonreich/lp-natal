import React from 'react';
import { ArrowRight, MessageCircleHeart, Star } from 'lucide-react';

interface FeedbacksSectionProps {
  onCtaClick: () => void;
  onPreviewImage?: (src: string, title: string) => void;
}

interface TestimonialCard {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: 1,
    name: 'Dona Tereza',
    avatar: '/assets/aistudio/dona_tereza_a3a7b4ec.jpg',
    quote:
      '"Achei que não teria coordenação para bordar no papel, mas os pontos marcados facilitam tudo! Em uma tarde já fiz meu primeiro cartão. É uma terapia maravilhosa que acalma a mente e deixa as peças lindas!"',
    rating: 5,
  },
  {
    id: 2,
    name: 'Camila R.',
    avatar: '/assets/aistudio/Camila_R._9e82ee0f.jpg',
    quote:
      '"O acesso chegou na hora no meu Whatsapp e já saí imprimindo! Os moldes são super modernos e dão um toque único nos pacotes de presente. Todo mundo aqui em casa ficou encantado com o capricho das tags!"',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rosângela Lima',
    avatar: '/assets/aistudio/Rosangela_Lima_22cb8d19.jpg',
    quote:
      '"Vale cada centavo pela quantidade de desenhos! Estou fazendo os cartões de Natal junto com a minha filha e está sendo um momento delicioso. É muito prático baixar, imprimir e ver tudo ganhando forma!"',
    rating: 5,
  },
];

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = () => {
  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
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
            Veja o que dizem as alunas que já estão criando seus cartões, tags e enfeites de Natal.
          </p>
        </div>

        {/* 3 Testimonial Cards matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/70 px-6 py-8 sm:px-7 sm:py-10 shadow-md shadow-slate-200/60 hover:shadow-lg transition-all flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Circular Profile Photo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 border-2 border-stone-100 shadow-xs bg-stone-100 shrink-0">
                  <img
                    src={item.avatar}
                    alt={`Foto de perfil de ${item.name}`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Author Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {item.name}
                </h3>

                {/* Quote Text */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* 5 Yellow Stars */}
              <div className="flex items-center justify-center gap-1 pt-1" aria-label="Avaliação de 5 estrelas">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Green CTA Button for Feedbacks Section */}
        <div className="text-center pt-2">
          <a
            href="https://pay.wiapy.com/8mJj6lBTqYZo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer text-center select-none"
          >
            <span>GARANTIR MOLDES + BÔNUS EXCLUSIVOS (Restam Poucas Vagas)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Acesso digital imediato aos +250 moldes e 5 bônus exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
};
