import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';

export const InvitationDetails: React.FC = () => {
  // Target date: 18 September 2026, 08:00 AM IST
  const targetDate = new Date('2026-09-18T08:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="step-invitation-info"
      className="relative mb-5 rounded-2xl border border-[#fae1af] bg-white p-5 pt-7 text-center shadow-[0_4px_14px_rgba(123,10,26,0.06)]"
    >
      {/* Top Center Badge */}
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#dfa838] bg-gradient-to-r from-[#7b0a1a] to-[#9e1b26] px-5 py-1 font-poppins font-semibold text-xs sm:text-sm text-[#ffe6a3] shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
        || सस्नेह निमंत्रण ||
      </span>

      {/* Main Marathi Invitation Prose */}
      <p className="font-mukta text-[16px] sm:text-[17px] leading-[1.85] text-[#4a151b]">
        सालाबादाप्रमाणे याही वर्षी शुक्रवारी दिनांक{' '}
        <span className="font-bold text-[#9e1b26] underline decoration-[#dfa838] decoration-2 underline-offset-4">
          १८/०९/२०२६
        </span>{' '}
        रोजी आमच्या निवासस्थानी <strong>श्री ज्येष्ठ गौरींचे</strong> आगमन होत आहे.
      </p>

      <div className="my-3 flex items-center justify-center gap-2">
        <span className="h-px w-10 bg-amber-200" />
        <Heart className="h-3.5 w-3.5 fill-[#9e1b26] text-[#9e1b26]" />
        <span className="h-px w-10 bg-amber-200" />
      </div>

      <p className="font-mukta text-[16px] sm:text-[17px] leading-[1.85] text-[#4a151b]">
        गौराई मातेचे आमच्या घरी दिनांक{' '}
        <span className="rounded bg-amber-100/90 px-2 py-0.5 font-bold text-[#9e1b26]">
          १८/०९/२०२६ ते १९/०९/२०२६
        </span>{' '}
        पर्यंत वास्तव्य असणार आहे. तरी आपण सहकुटुंब सहपरिवार येऊन श्री ज्येष्ठ गौरींचे दर्शन व प्रसादाचा लाभ घ्यावा, ही नम्र विनंती...
      </p>

      {/* Auspicious Countdown Box */}
      <div className="mt-4 rounded-xl border border-amber-200 bg-gradient-to-b from-[#fffaf0] to-[#fff5e1] p-3">
        <div className="mb-2 flex items-center justify-center gap-1.5 font-poppins font-semibold text-xs sm:text-sm text-[#7b0a1a]">
          <Clock className="h-3.5 w-3.5 text-amber-600" />
          <span>गौराई आगमन उत्सुकता (Countdown)</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center font-mukta">
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200/70 shadow-xs">
            <span className="font-poppins text-base sm:text-lg font-bold text-[#9e1b26]">
              {timeLeft.days}
            </span>
            <p className="font-mukta text-[11px] font-medium text-[#7b0a1a]">दिवस</p>
          </div>
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200/70 shadow-xs">
            <span className="font-poppins text-base sm:text-lg font-bold text-[#9e1b26]">
              {timeLeft.hours}
            </span>
            <p className="font-mukta text-[11px] font-medium text-[#7b0a1a]">तास</p>
          </div>
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200/70 shadow-xs">
            <span className="font-poppins text-base sm:text-lg font-bold text-[#9e1b26]">
              {timeLeft.minutes}
            </span>
            <p className="font-mukta text-[11px] font-medium text-[#7b0a1a]">मिनिटे</p>
          </div>
          <div className="rounded-lg bg-white/90 p-1.5 border border-amber-200/70 shadow-xs">
            <span className="font-poppins text-base sm:text-lg font-bold text-[#9e1b26]">
              {timeLeft.seconds}
            </span>
            <p className="font-mukta text-[11px] font-medium text-[#7b0a1a]">सेकंद</p>
          </div>
        </div>
      </div>
    </section>
  );
};
