import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-10 md:py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Tag Compra 100% Protegida */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Compra 100% Protegida</span>
          </div>
        </div>

        {/* Informações do Rodapé */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-stone-400">
          <p>© 2026. Todos os direitos reservados.</p>
          <span className="hidden sm:inline text-stone-600" aria-hidden="true">·</span>
          <a
            href="mailto:bordadopontomagico@gmail.com"
            className="hover:text-stone-200 transition-colors underline-offset-2 hover:underline"
          >
            Suporte: bordadopontomagico@gmail.com
          </a>
          <span className="hidden sm:inline text-stone-600" aria-hidden="true">·</span>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com carinho</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline shrink-0" />
          </p>
        </div>
      </div>
    </footer>
  );
};
