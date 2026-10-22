import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ChevronDown, HelpCircle, Mail, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onCtaClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A2F]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
            <span aria-hidden="true">·</span>
            <span>Respostas Claras</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight text-balance">
            Perguntas Frequentes
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Tudo o que você precisa saber sobre o acesso, arquivos, materiais e suporte.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1E3A2F] text-white' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-stone-200/90 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Ainda ficou com alguma dúvida?
          </p>
          <p className="text-sm text-stone-700">
            Nossa equipe de suporte está pronta para te atender todos os dias.
          </p>
          <div className="pt-2">
            <a
              href="mailto:bordadopontomagico@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E29] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>bordadopontomagico@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Green CTA Button for FAQ */}
        <div className="mt-8 text-center">
          <a
            href="https://pay.wiapy.com/8mJj6lBTqYZo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-all shadow-lg shadow-emerald-900/20 cursor-pointer text-center"
          >
            <span>QUERO MEU PACOTE PREMIUM</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
