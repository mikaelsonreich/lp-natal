import React, { useState, useEffect } from 'react';

export const TopRibbon: React.FC = () => {
  // Helper to get client's exact local date in DD/MM format
  const getClientCurrentDate = (): string => {
    try {
      const now = new Date();
      return now.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      });
    } catch {
      const now = new Date();
      const d = String(now.getDate()).padStart(2, '0');
      const m = String(now.getMonth() + 1).padStart(2, '0');
      return `${d}/${m}`;
    }
  };

  const [currentDate, setCurrentDate] = useState<string>(getClientCurrentDate);

  useEffect(() => {
    // Immediately calculate on client mount
    setCurrentDate(getClientCurrentDate());

    // Check every minute to handle midnight rollover automatically
    const interval = setInterval(() => {
      setCurrentDate(getClientCurrentDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#E53935] text-white h-10 px-4 flex items-center justify-center font-bold text-xs sm:text-sm tracking-wide shadow-sm select-none">
      <div className="flex items-center gap-1.5 uppercase font-sans">
        <span role="img" aria-label="relógio" className="text-sm">⏰</span>
        <span>OFERTA DISPONÍVEL APENAS HOJE ({currentDate})</span>
      </div>
    </div>
  );
};
