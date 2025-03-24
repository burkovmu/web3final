'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function StarryBackground() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; color: string; delay: number }>>([]);
  const [nebulae, setNebulae] = useState<Array<{ x: number; y: number; size: number; color: string; opacity: number; rotation: number }>>([]);
  
  useEffect(() => {
    // Генерируем звезды
    const generateStars = () => {
      const newStars = [];
      const numStars = 60;
      const colors = ['#ffffff', '#feda6a', '#d4d4dc', '#e6e6fa'];
      
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 0.12 + 0.05; // От 0.05 до 0.17rem
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 5; // Случайная задержка анимации
        
        newStars.push({ x, y, size, color, delay });
      }
      
      setStars(newStars);
    };

    // Генерируем туманности
    const generateNebulae = () => {
      const newNebulae = [];
      const numNebulae = 3;
      const colors = ['#2d3142', '#4d194d', '#291d36'];
      
      for (let i = 0; i < numNebulae; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 50 + 30; // От 30 до 80vw
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.15 + 0.05; // От 0.05 до 0.2
        const rotation = Math.random() * 360; // Случайный угол поворота
        
        newNebulae.push({ x, y, size, color, opacity, rotation });
      }
      
      setNebulae(newNebulae);
    };

    generateStars();
    generateNebulae();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12] via-[#171720] to-[#1a1a24]" />
      
      {/* Туманности */}
      {nebulae.map((nebula, index) => (
        <motion.div
          key={`nebula-${index}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: nebula.opacity,
            scale: [1, 1.05, 1],
            rotate: [nebula.rotation, nebula.rotation + 5, nebula.rotation]
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            width: `${nebula.size}vw`,
            height: `${nebula.size}vw`,
            background: `radial-gradient(circle, ${nebula.color} 0%, transparent 70%)`,
            transform: `translate(-50%, -50%) rotate(${nebula.rotation}deg)`,
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}
        />
      ))}
      
      {/* Звезды */}
      {stars.map((star, index) => (
        <motion.div
          key={`star-${index}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0.4, 0.8],
            scale: [1, 1.2, 1, 1.2]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: star.delay
          }}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}rem`,
            height: `${star.size}rem`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 5}px ${star.color}`
          }}
        />
      ))}
      
      {/* Дополнительный слой затемнения */}
      <div className="absolute inset-0 bg-[#111113]/40" />
    </div>
  );
} 