import React, { useEffect, useState } from 'react';
import { PetalItem } from '../types';

const FLOWERS = ['🌸', '🌼', '🌺', '✨', '💐', '💮', '🏵️'];

export const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<PetalItem[]>([]);

  useEffect(() => {
    // Initial batch of ambient petals
    const initialPetals: PetalItem[] = Array.from({ length: 12 }).map((_, idx) => ({
      id: Date.now() + idx,
      symbol: FLOWERS[idx % FLOWERS.length],
      left: Math.random() * 95,
      duration: Math.random() * 4 + 4.5,
      size: Math.random() * 12 + 16,
      delay: Math.random() * 4,
    }));
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals((prev) => {
        const nextId = Date.now() + Math.random();
        const newPetal: PetalItem = {
          id: nextId,
          symbol: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
          left: Math.random() * 95,
          duration: Math.random() * 3.5 + 4.5,
          size: Math.random() * 12 + 16,
          delay: 0,
        };
        // Keep maximum 20 petals active for smooth 60fps performance
        return [...prev.slice(-18), newPetal];
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="flower-container"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute select-none transition-opacity"
          style={{
            top: '-32px',
            left: `${petal.left}vw`,
            fontSize: `${petal.size}px`,
            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
            opacity: 0.85,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          }}
        >
          {petal.symbol}
        </span>
      ))}

      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(20px);
            opacity: 0.85;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
