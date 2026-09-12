import React, { useState } from 'react';
import { Flower2, Sparkles, Flame } from 'lucide-react';
import { devotionalSynth } from '../utils/audioSynth';

export const FlowerOffering: React.FC = () => {
  const [offeringsCount, setOfferingsCount] = useState(108);
  const [justOffered, setJustOffered] = useState(false);
  const [diyaLit, setDiyaLit] = useState(true);

  const handleOfferFlowers = () => {
    setOfferingsCount((c) => c + 1);
    setJustOffered(true);
    devotionalSynth.playTempleBell();
    setTimeout(() => setJustOffered(false), 1500);
  };

  return (
    <div className="mb-5 rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 p-4 text-center shadow-xs font-mukta">
      <div className="flex items-center justify-center gap-1.5 font-poppins font-semibold text-sm text-[#7b0a1a]">
        <Sparkles className="h-4 w-4 text-amber-600" />
        <span>गौराई चरणी पुष्पांजली व नमन</span>
      </div>

      <p className="mt-1 text-xs text-[#4a151b]">
        मातेच्या चरणी पुष्प अर्पण करून आशीर्वाद मिळवा
      </p>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={handleOfferFlowers}
          className={`flex items-center gap-2 rounded-full border border-rose-300 bg-white px-5 py-2 text-sm font-bold text-rose-800 shadow-sm transition-all hover:scale-105 active:scale-95 ${
            justOffered ? 'scale-110 bg-rose-50 ring-2 ring-rose-400' : ''
          }`}
        >
          <Flower2 className={`h-4 w-4 text-rose-500 ${justOffered ? 'animate-bounce' : ''}`} />
          <span>पुष्प अर्पण करा 🌸</span>
        </button>

        <button
          onClick={() => {
            setDiyaLit(!diyaLit);
            devotionalSynth.playTempleBell();
          }}
          className={`flex items-center gap-1.5 rounded-full border border-amber-300 bg-white px-3.5 py-2 text-xs font-semibold text-amber-900 shadow-sm transition-transform active:scale-95`}
          title="मंगल दीप"
        >
          <Flame className={`h-4 w-4 ${diyaLit ? 'text-amber-500 animate-diya' : 'text-stone-400'}`} />
          <span>{diyaLit ? 'दीप प्रज्वलित ✨' : 'दीप लावा'}</span>
        </button>
      </div>

      <div className="mt-2 text-[12px] text-amber-800/80">
        भक्तांकडून आतापर्यंत <span className="font-bold text-[#9e1b26]">{offeringsCount}</span> पुष्पगुच्छ अर्पण
      </div>
    </div>
  );
};
