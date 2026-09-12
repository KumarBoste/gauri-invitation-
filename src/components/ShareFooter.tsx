import React, { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';

export const ShareFooter: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const getShareText = () => {
    return (
      `🚩 *॥ ज्येष्ठ गौरी आगमन निमंत्रण ॥* 🚩\n\n` +
      `सालाबादाप्रमाणे याही वर्षी आमच्या निवासस्थानी श्री ज्येष्ठ गौरींचे आगमन होत आहे.\n\n` +
      `📅 *तारीख:* १८/०९/२०२६ ते १९/०९/२०२६\n` +
      `📍 *स्थळ:* मु. बिरवाडी, ता. मुरबाड, जि. ठाणे\n\n` +
      `तरी आपण सहकुटुंब सहपरिवार येऊन श्री ज्येष्ठ गौरींचे दर्शन व प्रसादाचा लाभ घ्यावा, ही नम्र विनंती!\n\n` +
      `*- निमंत्रक : समस्त बोस्टे परिवार*\n\n` +
      `🌐 संपूर्ण डिजिटल पत्रिका व लोकेशन पाहण्यासाठी लिंक उघडा:\n` +
      `${window.location.href}`
    );
  };

  const getWhatsAppShareUrl = () => {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(getShareText())}`;
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ज्येष्ठ गौरी आगमन निमंत्रण | बोस्टे परिवार',
          text: getShareText(),
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to copying
      }
    }
    handleCopyLink();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  return (
    <footer className="mt-6 mb-2 font-mukta">
      {/* STEP 8: Blessing Quote & Signature */}
      <div className="mb-6 text-center">
        <p className="font-mukta text-base sm:text-lg font-medium leading-relaxed text-[#9e1b26]">
          "आपली उपस्थिती हेच आमच्यासाठी<br />
          गौराईचे खरे आशीर्वाद आहेत!"
        </p>
        <h4 className="mt-2 font-poppins font-bold text-xl text-[#7b0a1a]">
          ॥ निमंत्रक : समस्त बोस्टे परिवार ॥
        </h4>
        <p className="mt-0.5 font-mukta text-xs text-[#7b0a1a]/80">
          (मु. बिरवाडी, ता. मुरबाड, जि. ठाणे)
        </p>
      </div>

      {/* WhatsApp Share Button */}
      <div className="my-5 flex flex-col items-center gap-2">
        <a
          id="whatsapp-share-btn"
          href={getWhatsAppShareUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-11/12 max-w-sm items-center justify-center gap-2.5 rounded-full bg-[#25d366] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-transform hover:scale-102 active:scale-98"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp वर निमंत्रण पाठवा</span>
        </a>

        {/* Quick Secondary Actions */}
        <div className="flex items-center gap-3 mt-1 text-xs">
          <button
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1 text-[#7b0a1a] hover:underline"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>इतर ॲपवर शेअर करा</span>
          </button>
          <span className="text-amber-300">|</span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1 text-[#7b0a1a] hover:underline"
          >
            {copiedLink ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">लिंक कॉपी झाली!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>लिंक कॉपी करा</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Creator Attribution */}
      <div className="mt-8 border-t border-[#ebd7bf] pt-4 text-center font-poppins text-[11px] sm:text-[12px] font-bold tracking-[1.5px] text-[#8f6067] uppercase">
        CREATED BY KUMAR BOSTE
      </div>
    </footer>
  );
};
