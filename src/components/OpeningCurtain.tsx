import React, { useState, useEffect } from 'react';
import { MailOpen, Sparkles } from 'lucide-react';
import {
  GAURI_MATA_KEY,
  getSavedImage,
  DEFAULT_GAURI_FALLBACK,
} from '../utils/imageStorage';

interface OpeningCurtainProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningCurtain: React.FC<OpeningCurtainProps> = ({
  isOpen,
  onOpen,
}) => {
  const [gauriSrc, setGauriSrc] = useState(() =>
    getSavedImage(GAURI_MATA_KEY, '/gauri_mata.jpg')
  );

  useEffect(() => {
    const handlePhotoUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; dataUrl: string | null }>;
      if (customEvent.detail && customEvent.detail.key === GAURI_MATA_KEY) {
        setGauriSrc(customEvent.detail.dataUrl || '/gauri_mata.jpg');
      }
    };
    window.addEventListener('app_photo_updated', handlePhotoUpdate);
    return () => window.removeEventListener('app_photo_updated', handlePhotoUpdate);
  }, []);

  return (
    <div
      id="opening-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-4 text-center transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isOpen
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #8b1420 0%, #4a0309 65%, #230206 100%)',
      }}
    >
      {/* Background Decorative Gold Motifs */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#dfa838_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ornate Frame */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border-4 border-double border-[#dfa838] bg-black/45 p-5 sm:p-7 backdrop-blur-md shadow-[0_0_35px_rgba(223,168,56,0.35)]">
        
        {/* Sacred Arch Portrait */}
        <div
          className="group relative mb-4 h-64 w-52 overflow-hidden rounded-t-[105px] rounded-b-2xl border-4 border-[#dfa838] shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-stone-900"
        >
          <img
            src={gauriSrc}
            alt="गौरी माता"
            onError={(e) => {
              if (gauriSrc !== DEFAULT_GAURI_FALLBACK) {
                (e.currentTarget as HTMLImageElement).src = DEFAULT_GAURI_FALLBACK;
              }
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
        </div>

        {/* Sacred Title */}
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-[#ffd700] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-wide">
          ॥ श्री ज्येष्ठ गौरी प्रसन्न ॥
        </h1>

        <p className="mt-1 font-mukta font-medium text-sm sm:text-base text-[#ffd79e] tracking-wide">
          ज्येष्ठ गौरी आगमन सोहळा २०२६
        </p>

        <p className="mt-0.5 font-mukta text-xs text-amber-200/90">
          - निमंत्रक : बोस्टे परिवार, बिरवाडी (मुरबाड) -
        </p>

        {/* Tap to Open Button */}
        <button
          id="open-invitation-btn"
          onClick={onOpen}
          className="mt-5 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#d39e33] via-[#f9e29a] to-[#b37f1c] px-7 py-3 text-base sm:text-lg font-bold text-[#4f030a] shadow-[0_4px_22px_rgba(223,168,56,0.55)] transition-all hover:scale-105 active:scale-95 animate-pulse font-mukta"
        >
          <span>निमंत्रण उघडा</span>
          <MailOpen className="h-5 w-5 text-[#4f030a]" />
        </button>

        <div className="mt-3.5 flex items-center gap-1.5 text-[12px] text-amber-300/85 font-mukta">
          <Sparkles className="h-3 w-3 text-amber-400 shrink-0" />
          <span>स्पर्श करून निमंत्रण पत्रिका पहा व संगीत ऐका</span>
        </div>
      </div>
    </div>
  );
};
