import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { FamilyMember } from '../types';
import {
  BOSTE_FAMILY_KEY,
  getSavedImage,
  DEFAULT_FAMILY_FALLBACK,
} from '../utils/imageStorage';

const FAMILY_MEMBERS: FamilyMember[] = [
  { id: '1', name: 'श्री. बाळाराम बोस्टे' },
  { id: '2', name: 'श्री. प्रमोद बोस्टे' },
  { id: '3', name: 'सौ. प्रतीक्षा बोस्टे' },
  { id: '4', name: 'सौ. प्रमिला बोस्टे' },
  { id: '5', name: 'श्री. कुमार बोस्टे' },
  { id: '6', name: 'श्री. सुमित बोस्टे' },
  { id: '7', name: 'कु. प्रणाली बोस्टे' },
  { id: '8', name: 'कु. स्वराली बोस्टे' },
];

export const NimantrakSection: React.FC = () => {
  const [familySrc, setFamilySrc] = useState(() =>
    getSavedImage(BOSTE_FAMILY_KEY, '/boste_family.jpg')
  );
  const [isCoverMode, setIsCoverMode] = useState(true);

  useEffect(() => {
    const handlePhotoUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; dataUrl: string | null }>;
      if (customEvent.detail && customEvent.detail.key === BOSTE_FAMILY_KEY) {
        setFamilySrc(customEvent.detail.dataUrl || '/boste_family.jpg');
      }
    };
    window.addEventListener('app_photo_updated', handlePhotoUpdate);
    return () => window.removeEventListener('app_photo_updated', handlePhotoUpdate);
  }, []);

  return (
    <section
      id="step-nimantrak-section"
      className="relative mb-5 rounded-2xl border border-[#fae1af] bg-white p-4 sm:p-5 pt-7 shadow-[0_4px_14px_rgba(123,10,26,0.06)]"
    >
      {/* Badge */}
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dfa838] bg-gradient-to-r from-[#7b0a1a] to-[#9e1b26] px-5 py-1 font-poppins font-semibold text-xs sm:text-sm text-[#ffe6a3] shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
        || निमंत्रक ||
      </span>

      {/* Family Photo Container */}
      <div
        className="group relative mb-4 w-full overflow-hidden rounded-xl border-3 border-[#dfa838] bg-stone-900 shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
      >
        <img
          src={familySrc}
          alt="बोस्टे परिवार"
          onError={(e) => {
            if (familySrc !== DEFAULT_FAMILY_FALLBACK) {
              (e.currentTarget as HTMLImageElement).src = DEFAULT_FAMILY_FALLBACK;
            }
          }}
          className={`w-full transition-all duration-300 ${
            isCoverMode
              ? 'h-52 sm:h-64 object-cover object-center group-hover:scale-102'
              : 'max-h-[380px] object-contain bg-black/80'
          }`}
        />

        {/* Subtle decorative bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-auto">
          <span className="text-xs font-semibold text-amber-200 drop-shadow-md">
            बोस्टे परिवार (बिरवाडी)
          </span>

          <div className="flex items-center gap-1.5">
            {/* Toggle fit mode */}
            <button
              type="button"
              onClick={() => setIsCoverMode(!isCoverMode)}
              title={isCoverMode ? 'पूर्ण फोटो दाखवा' : 'फोटो भरून दाखवा'}
              className="flex items-center gap-1 rounded-full border border-amber-300/80 bg-black/75 px-2.5 py-0.5 text-[10.5px] font-medium text-amber-200 backdrop-blur-xs transition hover:bg-amber-500 hover:text-black active:scale-95 shadow"
            >
              {isCoverMode ? (
                <>
                  <Maximize2 className="h-3 w-3" />
                  <span>पूर्ण फोटो</span>
                </>
              ) : (
                <>
                  <Minimize2 className="h-3 w-3" />
                  <span>साधा आकार</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none border border-amber-300/40 rounded-xl" />
      </div>

      {/* Section Title */}
      <div className="mb-3 text-center">
        <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#9e1b26]">
          निमंत्रक : समस्त बोस्टे परिवार
        </h3>
        <p className="mt-0.5 font-mukta text-xs text-[#7b0a1a]/85">
          (मु. बिरवाडी, ता. मुरबाड, जि. ठाणे)
        </p>
      </div>

      {/* Grid of Names */}
      <div className="grid grid-cols-2 gap-2 rounded-xl border border-dashed border-[#dfa838] bg-[#fff8eb] p-3 text-center font-mukta">
        {FAMILY_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-center gap-1.5 rounded-lg py-1 px-1 text-[14px] sm:text-[15px] font-semibold text-[#3b1014] transition-colors hover:bg-amber-100/70"
          >
            <span className="text-xs select-none text-rose-600">🌸</span>
            <span className="truncate">{member.name}</span>
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-center font-mukta text-xs font-medium text-amber-900/80">
        - व समस्त बोस्टे परिवार आणि आप्तेष्ट -
      </p>
    </section>
  );
};
