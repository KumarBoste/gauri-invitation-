import React, { useState } from 'react';
import { MapPin, MapPinned, Copy, Check, ExternalLink } from 'lucide-react';

export const VenueMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const addressText = 'मु. बिरवाडी, ता. मुरबाड, जि. ठाणे - ४२१४०१';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="step-venue-section"
      className="relative mb-5 rounded-2xl border border-[#fae1af] bg-white p-5 pt-7 text-center shadow-[0_4px_14px_rgba(123,10,26,0.06)]"
    >
      {/* Badge */}
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dfa838] bg-gradient-to-r from-[#7b0a1a] to-[#9e1b26] px-5 py-1 font-poppins font-semibold text-xs sm:text-sm text-[#ffe6a3] shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
        || पत्ता व स्थळ ||
      </span>

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 border border-rose-200">
        <MapPin className="h-8 w-8 text-[#7b0a1a] animate-bounce" />
      </div>

      <p className="mt-3 font-mukta text-base sm:text-lg font-bold leading-relaxed text-[#3b1014]">
        मु. बिरवाडी, ता. मुरबाड,<br />
        जि. ठाणे - ४२१४०१
      </p>

      {/* Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
        <a
          href="https://maps.app.goo.gl/NNp8swmvB2LQSQQv7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1e8e3e] to-[#34a853] px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-[0_4px_14px_rgba(52,168,83,0.35)] transition-transform hover:scale-103 active:scale-97"
        >
          <MapPinned className="h-4 w-4" />
          <span>Open Google Map</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
        </a>

        <button
          onClick={handleCopyAddress}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#7b0a1a] transition-all hover:bg-amber-100"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-700">पत्ता कॉपी केला!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-amber-700" />
              <span>पत्ता कॉपी करा</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
