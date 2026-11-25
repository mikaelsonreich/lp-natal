import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const SITE_ENTER_TIME = Date.now();
const TWO_MINUTES_MS = 2 * 60 * 1000;

export const VacancyCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isUrgent, setIsUrgent] = useState(() => Date.now() - SITE_ENTER_TIME >= TWO_MINUTES_MS);

  // Trigger smooth bar fill animation from 0% when visible on load / scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      const timer = setTimeout(() => setHasEnteredView(true), 60);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Update from 4 vagas (96%) to 3 vagas (97%) after 2 minutes on the site
  useEffect(() => {
    const elapsed = Date.now() - SITE_ENTER_TIME;
    const remaining = TWO_MINUTES_MS - elapsed;

    if (remaining <= 0) {
      setIsUrgent(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsUrgent(true);
    }, remaining);

    return () => clearTimeout(timer);
  }, []);

  const remainingVagas = isUrgent ? 3 : 4;
  const filledPercent = isUrgent ? 97 : 96;
  const barWidth = hasEnteredView ? `${filledPercent}%` : '0%';

  return (
    <div
      ref={containerRef}
      className="rounded-2xl bg-white border-2 border-[#F5B800] p-4 sm:p-5 shadow-md shadow-amber-500/10 space-y-3.5 text-center"
    >
      {/* Top Status Row with pulsing red dot */}
      <div className="flex items-center justify-center gap-2">
        <span className="relative flex h-4 w-4 items-center justify-center shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-200 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[#D90429] animate-pulse"></span>
          </span>
        </span>
        <span className="text-[#D90429] font-extrabold uppercase tracking-wider text-xs sm:text-sm">
          Últimas Vagas Disponíveis
        </span>
      </div>

      {/* Headline with highlighted red number badge */}
      <div className="flex items-center justify-center gap-2 flex-wrap text-slate-900 font-semibold text-base sm:text-lg leading-snug">
        <span>Restam apenas</span>
        <span className="inline-flex items-center justify-center min-w-[34px] h-9 px-2.5 rounded-lg bg-[#D90429] text-white font-extrabold text-xl sm:text-2xl shadow-xs tabular-nums transition-transform duration-300">
          {remainingVagas}
        </span>
        <span>vagas com bônus!</span>
      </div>

      {/* Progress Bar + Stats */}
      <div className="space-y-1.5">
        <div className="w-full bg-[#EFEFEF] rounded-full h-4 sm:h-5 overflow-hidden border border-slate-200/80">
          <div
            className="relative h-full rounded-full overflow-hidden bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#D90429] transition-[width] duration-1000 ease-out"
            style={{ width: barWidth }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-vacancy-shimmer" />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm px-0.5">
          <span className="text-slate-600 font-medium">
            <strong className="font-bold text-slate-900 tabular-nums">{filledPercent}</strong> vagas preenchidas
          </span>
          <span className="font-extrabold text-[#D90429] text-sm sm:text-base tabular-nums">
            {filledPercent}%
          </span>
        </div>
      </div>

      {/* Bottom Green Confirmation Box */}
      <div className="bg-[#EAF7EE] rounded-xl py-2.5 px-3.5 flex items-center justify-center gap-2">
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
        </span>
        <span className="text-[#15803D] font-semibold text-xs sm:text-sm leading-snug text-left sm:text-center">
          Bônus exclusivo liberado automaticamente na sua compra
        </span>
      </div>
    </div>
  );
};
