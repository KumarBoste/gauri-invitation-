import React, { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import {
  GAURI_MATA_KEY,
  getSavedImage,
  DEFAULT_GAURI_FALLBACK,
} from '../utils/imageStorage';

export const OmSection: React.FC = () => {
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
    <section
      id="step-om-section"
      className="relative mb-5 overflow-hidden rounded-2xl border-2 border-[#ecd399] bg-gradient-to-b from-[#fff7ea] to-white p-5 text-center shadow-[0_5px_18px_rgba(123,10,26,0.08)]"
    >
      {/* Decorative Top Arch / Corner Ornaments */}
      <div className="absolute top-2 left-3 flex items-center text-amber-600/60 text-xs">
        <Flame className="h-3.5 w-3.5 text-amber-500 animate-diya" />
      </div>
      <div className="absolute top-2 right-3 flex items-center text-amber-600/60 text-xs">
        <Flame className="h-3.5 w-3.5 text-amber-500 animate-diya" />
      </div>

      {/* Vedic Shloka */}
      <p className="font-mukta text-[16px] sm:text-[18px] font-semibold leading-relaxed text-[#9e1b26]">
        सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके ।<br />
        शरण्ये त्र्यम्बके गौरी नारायणी नमोस्तुते ॥
      </p>

      {/* Divine ॐ */}
      <div
        className="font-poppins font-bold my-1 select-none text-6xl sm:text-7xl leading-none text-transparent"
        style={{
          background: 'linear-gradient(45deg, #b37f1c, #f59e0b, #9e1b26)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 12px rgba(223,168,56,0.25))',
        }}
      >
        ॐ
      </div>

      {/* Divine Gaurai Darshan Medallion (Photo 2) */}
      <div className="my-2 flex flex-col items-center">
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-3 border-[#dfa838] shadow-[0_4px_14px_rgba(223,168,56,0.35)] bg-stone-900">
          <img
            src={gauriSrc}
            alt="श्री गौरी माता दर्शन"
            onError={(e) => {
              if (gauriSrc !== DEFAULT_GAURI_FALLBACK) {
                (e.currentTarget as HTMLImageElement).src = DEFAULT_GAURI_FALLBACK;
              }
            }}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="mt-1 font-poppins font-semibold text-xs sm:text-sm text-[#9e1b26] tracking-wide">
          ॥ श्री ज्येष्ठ गौरी प्रसन्न ॥
        </span>
      </div>

      {/* Flower divider */}
      <div className="mt-1 font-mukta text-sm tracking-[6px] text-[#dfa838] select-none">
        ✦ ✦ ✦
      </div>
    </section>
  );
};
