'use client';

import { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  animation: string;
  isBright: boolean;
  delay: number;
}

interface Nebula {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function NightSkyBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [nebulas, setNebulas] = useState<Nebula[]>([]);
  const [shootingStars, setShootingStars] = useState<{ x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    // Создаем звезды
    const newStars = Array.from({ length: 100 }, () => {
      const x = Math.random() * 140 - 20; // От -20% до 120%
      const y = Math.random() * 140 - 20; // От -20% до 120%
      const rand = Math.random();
      
      let animation = 'shimmer-slow';
      if (rand > 0.9) animation = 'shimmer-fast';
      else if (rand > 0.7) animation = 'shimmer';

      return {
        x,
        y,
        animation,
        isBright: rand > 0.9,
        delay: Math.random() * 5
      };
    });

    // Создаем туманности
    const newNebulas = Array.from({ length: 4 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 200 + Math.random() * 300,
      opacity: 0.1 + Math.random() * 0.2
    }));

    // Создаем падающие звезды
    const newShootingStars = Array.from({ length: 3 }, () => ({
      x: Math.random() * 30,
      y: Math.random() * 30,
      delay: Math.random() * 4
    }));

    setStars(newStars);
    setNebulas(newNebulas);
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="night-sky">
      {/* Туманности */}
      {nebulas.map((nebula, index) => (
        <div
          key={`nebula-${index}`}
          className="nebula"
          style={{
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            opacity: nebula.opacity
          }}
        />
      ))}

      {/* Звезды */}
      <div className="star-layer">
        {stars.map((star, index) => (
          <div
            key={`star-${index}`}
            className={`star-dot ${star.isBright ? 'bright' : ''} ${star.animation}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Падающие звезды */}
      {shootingStars.map((star, index) => (
        <div
          key={`shooting-${index}`}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            transform: 'rotate(45deg)'
          }}
        />
      ))}
    </div>
  );
} 