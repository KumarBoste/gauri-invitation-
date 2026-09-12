import React from 'react';
import { Sun, Waves, CalendarPlus } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  // Generate Google Calendar Link for 18-19 Sept 2026
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('ज्येष्ठ गौरी आगमन सोहळा | बोस्टे परिवार');
    const details = encodeURIComponent(
      'बोस्टे परिवाराच्या घरी ज्येष्ठ गौरी आगमन व दर्शन सोहळा. स्थळ: मु. बिरवाडी, ता. मुरबाड, ठाणे.'
    );
    const location = encodeURIComponent('Birwadi, Murbad, Thane, Maharashtra');
    const dates = '20260918T030000Z/20260919T143000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <section
      id="step-schedule-section"
      className="relative mb-5 rounded-2xl border border-[#fae1af] bg-white p-4 sm:p-5 pt-7 shadow-[0_4px_14px_rgba(123,10,26,0.06)]"
    >
      {/* Badge */}
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dfa838] bg-gradient-to-r from-[#7b0a1a] to-[#9e1b26] px-5 py-1 font-poppins font-semibold text-xs sm:text-sm text-[#ffe6a3] shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
        || उत्सव रूपरेषा ||
      </span>

      <h3 className="mb-4 text-center font-poppins font-bold text-xl text-[#9e1b26]">
        उत्सवाचे मंगल पर्व
      </h3>

      <div className="flex flex-col gap-3 font-mukta">
        {/* Event 1: Aagman */}
        <div className="rounded-r-xl border-l-4 border-[#9e1b26] bg-[#fffcf4] p-3.5 shadow-xs transition-transform hover:translate-x-1">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Sun className="h-4 w-4 text-[#dfa838]" />
            </div>
            <h4 className="font-poppins font-semibold text-base sm:text-lg text-[#7b0a1a]">
              आगमन व दर्शन
            </h4>
          </div>
          <div className="mt-2 space-y-1 text-[15px] text-[#4a151b] font-mukta pl-9">
            <p>
              <strong className="text-[#7b0a1a]">दिनांक:</strong> १८/०९/२०२६ (शुक्रवार)
            </p>
            <p>
              <strong className="text-[#7b0a1a]">स्थळ:</strong> बिरवाडी (आमच्या निवासस्थानी)
            </p>
          </div>
        </div>

        {/* Event 2: Visarjan */}
        <div className="rounded-r-xl border-l-4 border-sky-600 bg-[#f8fbff] p-3.5 shadow-xs transition-transform hover:translate-x-1">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Waves className="h-4 w-4 text-[#0284c7]" />
            </div>
            <h4 className="font-poppins font-semibold text-base sm:text-lg text-[#7b0a1a]">
              विसर्जन सोहळा
            </h4>
          </div>
          <div className="mt-2 space-y-1 text-[15px] text-[#4a151b] font-mukta pl-9">
            <p>
              <strong className="text-[#7b0a1a]">दिनांक:</strong> १९/०९/२०२६ (शनिवार)
            </p>
            <p>
              <strong className="text-[#7b0a1a]">वेळ:</strong> सायंकाळी ५:३० वाजता
            </p>
            <p>
              <strong className="text-[#7b0a1a]">स्थळ:</strong> बिरवाडी पुला येथे
            </p>
          </div>
        </div>
      </div>

      {/* Add to Calendar Link */}
      <div className="mt-3.5 text-center">
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-[#7b0a1a] transition-all hover:bg-amber-100 hover:shadow-sm"
        >
          <CalendarPlus className="h-3.5 w-3.5 text-amber-700" />
          <span>कॅलेंडरमध्ये तारीख नोंदवा (Add to Calendar)</span>
        </a>
      </div>
    </section>
  );
};
