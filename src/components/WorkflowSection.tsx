'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const workflowSteps = [
  {
    number: '01',
    title: 'Анализ и планирование',
    description: 'Детально изучаем ваш бизнес, цели и потребности. Разрабатываем стратегию и план реализации проекта.'
  },
  {
    number: '02',
    title: 'Дизайн и прототипирование',
    description: 'Создаем уникальный дизайн и интерактивные прототипы, учитывая современные тенденции и ваши пожелания.'
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Воплощаем проект в жизнь, используя передовые технологии и следуя лучшим практикам программирования.'
  },
  {
    number: '04',
    title: 'Тестирование и запуск',
    description: 'Проводим тщательное тестирование, оптимизируем производительность и запускаем проект.'
  }
];

export default function WorkflowSection() {
  return (
    <SectionWrapper className="bg-[#1d1e22] py-32 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Градиентный круг слева внизу */}
        <div className="absolute -left-60 bottom-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#feda6a]/5 to-transparent blur-3xl" />
        
        {/* Градиентный круг справа вверху */}
        <div className="absolute -right-40 top-20 w-[450px] h-[450px] rounded-full bg-gradient-to-l from-[#feda6a]/3 to-transparent blur-3xl" />
        
        {/* Декоративные линии */}
        <div className="absolute left-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#feda6a]/10 to-transparent" />
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#feda6a]/5 to-transparent" />
        
        {/* Точки */}
        <div className="absolute right-20 top-40 w-2 h-2 rounded-full bg-[#feda6a]/20" />
        <div className="absolute left-32 bottom-40 w-3 h-3 rounded-full bg-[#feda6a]/10" />
        <div className="absolute right-1/2 top-1/3 w-2 h-2 rounded-full bg-[#feda6a]/15" />
        
        {/* Дополнительные декоративные элементы */}
        <div className="absolute left-1/4 top-1/4 w-4 h-4 border border-[#feda6a]/10 rotate-45" />
        <div className="absolute right-1/3 bottom-1/4 w-6 h-6 border border-[#feda6a]/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6"
          >
            Процесс
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#d4d4dc] mb-6"
          >
            Как мы работаем
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="relative group"
            >
              <div className="relative bg-[#111113] p-8 h-full">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#feda6a] group-hover:h-full transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#feda6a] group-hover:h-full transition-all duration-300" />
                
                <div className="text-[#feda6a] text-5xl font-stolzl mb-6">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-stolzl text-[#d4d4dc] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#d4d4dc]/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 