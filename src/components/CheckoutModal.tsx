import React, { useState } from 'react';
import { PricingPlan } from '../data/productData';
import { X, Lock, ShieldCheck, Check, Sparkles, Download, QrCode, CreditCard, ArrowRight, Gift } from 'lucide-react';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  if (!plan) return null;

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 my-8">
        {/* Header */}
        <div className="bg-[#1E3A2F] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Ambiente de Pagamento Seguro</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold">
              {isSuccess ? 'Acesso Confirmado!' : 'Checkout Seguro'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Order summary box */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Produto Selecionado:</span>
                  <span className="font-semibold text-stone-700">{plan.name}</span>
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-stone-200/80">
                  <span className="text-xs text-stone-500">Total a pagar:</span>
                  <span className="font-mono text-xl font-bold text-stone-900">{plan.price}</span>
                </div>
                {plan.isPopular && (
                  <p className="text-[11px] text-emerald-800 font-medium flex items-center gap-1.5 flex-wrap pt-0.5">
                    <span>✓ Inclui +250 Moldes de Natal +</span>
                    <span className="text-[#15803D] font-bold inline-flex items-center gap-1 bg-emerald-50 border border-emerald-300/80 px-1.5 py-0.5 rounded text-[10px]">
                      <Gift className="w-3 h-3 text-[#15803D]" />
                      <span>5 Bônus Exclusivos</span>
                    </span>
                    <span>+ 30 Videoaulas de Ponto-Guia</span>
                  </p>
                )}
              </div>

              {/* Payment selector */}
              <div>
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Liberação Imediata)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'cartao'
                        ? 'bg-amber-50 border-amber-600 text-amber-900 font-semibold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Helena da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Seu Melhor E-mail (Onde você receberá os moldes) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    WhatsApp com DDD (Para suporte)
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#1E3A2F] focus:ring-1 focus:ring-[#1E3A2F] outline-none"
                  />
                </div>
              </div>

              {paymentMethod === 'pix' ? (
                <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center gap-2.5">
                  <span className="text-emerald-700 font-bold">⚡</span>
                  <span>Pagando no PIX, o e-mail com todos os arquivos é enviado automaticamente em menos de 1 minuto!</span>
                </div>
              ) : (
                <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-stone-500 shrink-0" />
                  <span>Parcelamento em até 12x disponível. Cartões aceitos: Visa, Mastercard, Elo, Hipercard.</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-xl text-sm font-bold text-white bg-[#8B1E29] hover:bg-[#731821] disabled:opacity-70 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/15"
              >
                {isSubmitting ? (
                  <span>Processando Pedido Seguro...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span>Concluir e Liberar Meus Moldes</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="text-center space-y-5 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
                  Pagamento Confirmado com Sucesso!
                </span>
                <h4 className="font-serif text-2xl font-bold text-stone-900">
                  Bem-vinda ao Ateliê!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Enviamos o link de download direto para <strong>{email || 'seu e-mail'}</strong>. Você já pode baixar os arquivos e começar a bordar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Plano contratado:</span>
                  <span className="font-semibold text-stone-800">{plan.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Status do acesso:</span>
                  <span className="text-emerald-700 font-bold">Ativo e Vitalício</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Quantidade de moldes:</span>
                  <span className="font-mono font-bold text-stone-800">+250 Moldes em PDF</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    // trigger sample dummy download file
                    const element = document.createElement('a');
                    const file = new Blob([
                      'Coleção +250 Moldes de Natal para Bordados de Papel\n\nInstruções de Impressão:\n1. Imprima sempre em escala 100% no papel A4.\n2. Utilize papel acima de 180g (Offset, Kraft ou Linho).\n3. Fure sobre uma base de EVA macia com agulha fina.\n4. Siga os pontos numerados no molde.\n\nBoas criações natalinas!'
                    ], { type: 'text/plain;charset=utf-8' });
                    element.href = URL.createObjectURL(file);
                    element.download = 'Instrucoes_Iniciais_Moldes_Natal.txt';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1E3A2F] hover:bg-[#162E25] transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Guia Inicial e Moldes de Boas-Vindas</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Voltar para a página principal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
