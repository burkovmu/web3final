'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';

const services = [
  {
    id: 1,
    title: 'Веб-разработка',
    description: 'Создаем современные веб-приложения с использованием передовых технологий',
    features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL']
  },
  {
    id: 2,
    title: 'UI/UX Дизайн',
    description: 'Разрабатываем интуитивно понятные и привлекательные интерфейсы',
    features: ['Figma/Sketch', 'Прототипирование', 'Анимации']
  },
  {
    id: 3,
    title: 'Мобильная разработка',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения',
    features: ['React Native', 'iOS/Android', 'PWA']
  },
  {
    id: 4,
    title: 'DevOps',
    description: 'Настраиваем и оптимизируем инфраструктуру проектов',
    features: ['CI/CD', 'Docker/K8s', 'AWS/GCP']
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        opacity,
        scale
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative overflow-hidden bg-[#111113] p-12 h-full border border-[#393f4d] transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            x: isHovered ? 0 : -20
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-1 bg-[#feda6a]"
        />

        <div className="relative z-10">
          <motion.div 
            className="text-2xl font-stolzl text-[#d4d4dc]/20 mb-4"
            animate={{ 
              x: isHovered ? 20 : 0,
              opacity: isHovered ? 0.4 : 0.2
            }}
            transition={{ duration: 0.3 }}
          >
            0{index + 1}
          </motion.div>

          <motion.h3 
            className="text-5xl font-stolzl text-[#d4d4dc] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {service.title}
          </motion.h3>

          <motion.p 
            className="text-[#d4d4dc]/60 font-stolzl mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {service.description}
          </motion.p>

          <div className="space-y-4">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: index * 0.2 + 0.6 + i * 0.1
                  }
                }}
                className="flex items-center space-x-3 group"
              >
                <div className="w-[1px] h-4 bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors duration-300" />
                <span className="text-[#d4d4dc]/60 font-stolzl group-hover:text-[#feda6a] transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(254,218,106,0.03) 0%, transparent 100%)'
          }}
        />
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <SectionWrapper className="bg-[#111113] py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
        style={{
          background: 'radial-gradient(circle at center, #feda6a 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4d4dc]/60 uppercase tracking-[0.3em] text-xs font-stolzl mb-6"
          >
            Наши услуги
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#d4d4dc] mb-6"
          >
            Что мы предлагаем
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 