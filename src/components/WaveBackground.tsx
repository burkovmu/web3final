'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function WaveBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Генерируем частицы
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Основной градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12] via-[#171720] to-[#1a1a24]" />
      
      {/* Анимированные волны */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #feda6a 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          background: [
            'radial-gradient(circle at 100% 0%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #feda6a 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Анимированные частицы */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#feda6a]"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          animate={{
            x: [particle.x + '%', (particle.x + 10) + '%', particle.x + '%'],
            y: [particle.y + '%', (particle.y + 10) + '%', particle.y + '%']
          }}
          transition={{
            duration: 5 + particle.speed * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Дополнительный слой затемнения */}
      <div className="absolute inset-0 bg-[#111113]/40" />
    </div>
  );
} 