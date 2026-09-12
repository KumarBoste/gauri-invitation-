import React from 'react';
import { Disc3, VolumeX, Volume2 } from 'lucide-react';

interface AudioPlayerButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <div className="fixed top-3 right-3 z-50 flex items-center gap-1.5">
      <button
        id="music-toggle-btn"
        onClick={onToggle}
        title={isPlaying ? 'संगीत बंद करा (Mute)' : 'संगीत चालू करा (Play)'}
        aria-label="संगीत चालू / बंद"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-200 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-[#4f030a] shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95"
      >
        <Disc3
          className={`h-6 w-6 transition-transform ${
            isPlaying ? 'animate-[spin_3.5s_linear_infinite]' : 'opacity-80'
          }`}
        />
        
        {/* Playing status indicator badge */}
        <span
          className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-white text-[9px] ${
            isPlaying ? 'bg-emerald-600 text-white' : 'bg-rose-700 text-white'
          }`}
        >
          {isPlaying ? (
            <Volume2 className="h-2.5 w-2.5" />
          ) : (
            <VolumeX className="h-2.5 w-2.5" />
          )}
        </span>
      </button>
    </div>
  );
};
