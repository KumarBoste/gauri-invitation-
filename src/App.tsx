import React, { useState, useRef, useEffect } from 'react';
import { FallingPetals } from './components/FallingPetals';
import { OpeningCurtain } from './components/OpeningCurtain';
import { AudioPlayerButton } from './components/AudioPlayerButton';
import { ToranHeader } from './components/ToranHeader';
import { OmSection } from './components/OmSection';
import { InvitationDetails } from './components/InvitationDetails';
import { NimantrakSection } from './components/NimantrakSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenueMapSection } from './components/VenueMapSection';
import { FlowerOffering } from './components/FlowerOffering';
import { ShareFooter } from './components/ShareFooter';
import { devotionalSynth } from './utils/audioSynth';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startAudioPlayback = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If local/remote mp3 file is absent or blocked by browser,
          // switch gracefully to authentic Web Audio devotional synth
          devotionalSynth.start();
          setIsPlaying(true);
        });
    } else {
      devotionalSynth.start();
      setIsPlaying(true);
    }
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    devotionalSynth.playTempleBell();
    startAudioPlayback();
  };

  const handleToggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      devotionalSynth.stop();
      setIsPlaying(false);
    } else {
      startAudioPlayback();
    }
  };

  useEffect(() => {
    return () => {
      devotionalSynth.stop();
    };
  }, []);

  return (
    <div className="relative flex min-h-screen justify-center bg-[#2b0408] font-mukta text-[#3a1318]">
      {/* Background Falling Petals */}
      <FallingPetals />

      {/* Embedded Audio Element */}
      <audio
        ref={audioRef}
        id="gauriSong"
        src="gaurai_song.mp3"
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          if (!devotionalSynth.getStatus()) {
            setIsPlaying(false);
          }
        }}
      />

      {/* Floating Music Button */}
      <AudioPlayerButton
        isPlaying={isPlaying}
        onToggle={handleToggleMusic}
      />

      {/* Main Container constrained to Mobile View (max 480px, responsive) */}
      <main className="relative flex min-h-screen w-full max-w-[480px] flex-col bg-[#fffaf0] shadow-[0_10px_45px_rgba(0,0,0,0.6)]">
        
        {/* Cover Opening Screen */}
        <OpeningCurtain
          isOpen={isOpen}
          onOpen={handleOpenInvitation}
        />

        {/* Main Invitation Body */}
        <div className="bg-mandala-subtle px-4.5 pt-6 pb-20 sm:px-5">
          {/* Toran Header */}
          <ToranHeader />

          {/* STEP 2: Om & Slogan Section */}
          <OmSection />

          {/* STEP 3: Invitation Info */}
          <InvitationDetails />

          {/* Devotional Touch: Flower & Diya Offering */}
          <FlowerOffering />

          {/* STEP 4 & 5: Nimantrak Photo & Names */}
          <NimantrakSection />

          {/* STEP 6: Utsavache Mangal Pravas (Schedule) */}
          <ScheduleSection />

          {/* STEP 7: Google Map Location */}
          <VenueMapSection />

          {/* STEP 8: Blessing, WhatsApp Share & Creator Footer */}
          <ShareFooter />
        </div>
      </main>
    </div>
  );
}
