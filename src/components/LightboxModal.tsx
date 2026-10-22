import React from 'react';
import { X, Sparkles, Check } from 'lucide-react';
import { MoldeItem } from '../data/productData';

interface LightboxModalProps {
  item: MoldeItem | null;
  customImage?: { src: string; title: string } | null;
  onClose: () => void;
  onCtaClick: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, customImage, onClose, onCtaClick }) => {
  if (!item && !customImage) return null;

  const title = item ? item.title : customImage?.title;
  const image = item ? item.image : customImage?.src;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Image */}
          <div className="md:col-span-7 bg-stone-100 flex items-center justify-center p-2">
            <img
              src={image}
              alt={title || 'Visualização do Molde'}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-5 p-6 md:p-8 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A2F] block mb-1">
                Amostra em Alta Definição (300 DPI)
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                {title}
              </h3>
            </div>

            {item && (
              <>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 py-3 border-y border-stone-100 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Nível de Dificuldade:</span>
                    <span className="font-semibold text-stone-900">{item.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Tempo estimado:</span>
                    <span className="font-semibold text-stone-900">~{item.timeMin} minutos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Pontos de furação:</span>
                    <span className="font-semibold text-stone-900 font-mono">{item.holesCount} furos</span>
                  </div>
                </div>
              </>
            )}

            {!item && (
              <div className="space-y-2 text-xs text-stone-600">
                <p>Todos os moldes vêm acompanhados de furação pré-calculada, numeração sequencial de costura e guia de linhas sugeridas.</p>
                <div className="flex items-center gap-2 text-stone-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Imprima no tamanho real A4 (escala 100%)</span>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onCtaClick();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#8B1E29] hover:bg-[#731821] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Garantir Acesso à Coleção Completa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
