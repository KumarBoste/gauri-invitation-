import React from 'react';

export const ToranHeader: React.FC = () => {
  return (
    <div className="relative pt-2 pb-1 text-center select-none" aria-label="शुभ तोरण">
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-xl sm:text-2xl drop-shadow-sm">
        <span className="text-emerald-700">🌿</span>
        <span className="text-amber-500">🌺</span>
        <span className="text-emerald-700">🌿</span>
        <span className="text-rose-600">🌺</span>
        <span className="text-emerald-700">🌿</span>
        <span className="text-amber-500">🌺</span>
        <span className="text-emerald-700">🌿</span>
      </div>
      <div className="mx-auto mt-1 h-0.5 w-3/4 max-w-xs bg-gradient-to-r from-transparent via-[#dfa838] to-transparent opacity-60" />
    </div>
  );
};
