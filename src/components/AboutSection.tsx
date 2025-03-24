'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const stats = [
  { number: '150+', label: 'Завершенных проектов' },
  { number: '50+', label: 'Довольных клиентов' },
  { number: '15', label: 'Наград и премий' },
  { number: '24/7', label: 'Поддержка клиентов' }
];

const achievements = [
  { year: '2020', title: 'Основание компании', description: 'Начало нашего пути в мире веб-разработки' },
  { year: '2021', title: 'Первые достижения', description: 'Топ-10 веб-студий по версии Рейтинга Рунета' },
  { year: '2022', title: 'Расширение команды', description: 'Открытие нового офиса и рост до 30 специалистов' },
  { year: '2023', title: 'Международные проекты', description: 'Выход на международный рынок' }
];

export default function AboutSection() {
  return (
    <SectionWrapper className="bg-[#1d1e22] py-32 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Градиентный круг слева */}
        <div className="absolute -left-40 top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#feda6a]/5 to-transparent blur-3xl" />
        
        {/* Градиентный круг справа */}
        <div className="absolute -right-40 bottom-40 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#feda6a]/3 to-transparent blur-3xl" />
        
        {/* Декоративные линии */}
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#feda6a]/10 to-transparent" />
        <div className="absolute right-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#feda6a]/5 to-transparent" />
        
        {/* Точки */}
        <div className="absolute left-20 top-40 w-2 h-2 rounded-full bg-[#feda6a]/20" />
        <div className="absolute right-32 bottom-60 w-3 h-3 rounded-full bg-[#feda6a]/10" />
        <div className="absolute left-1/2 top-1/4 w-2 h-2 rounded-full bg-[#feda6a]/15" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-light mb-6"
          >
            О нас
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-light text-[#d4d4dc] mb-6"
          >
            Кто мы такие
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20" />
              <div className="pl-8">
                <p className="text-xl leading-relaxed text-[#d4d4dc] mb-6">
                  Мы - команда профессионалов, объединенных страстью к созданию инновационных цифровых решений. Наш подход основан на глубоком понимании потребностей клиентов и использовании передовых технологий.
                </p>
                <p className="text-lg leading-relaxed text-[#d4d4dc]/80">
                  С момента основания в 2020 году мы успешно реализовали более 150 проектов различной сложности, от корпоративных сайтов до масштабных веб-приложений.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="text-4xl font-stolzl text-[#feda6a] mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-[#d4d4dc]/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-[1px] h-full bg-[#feda6a]/20" />
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors" />
                  <div className="text-[#feda6a] text-sm mb-2">{achievement.year}</div>
                  <div className="text-xl font-stolzl text-[#d4d4dc] mb-2">{achievement.title}</div>
                  <div className="text-[#d4d4dc]/60">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-[#1d1e22] via-[#252629] to-[#1d1e22] group">
            {/* Декоративный фон */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[#feda6a]/5 mix-blend-overlay" />
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#feda6a]/5 to-transparent" />
              <div className="absolute left-0 top-0 w-32 h-32 bg-[#feda6a]/10 rounded-full blur-3xl" />
            </div>

            {/* Основной контент */}
            <div className="relative grid grid-cols-12 items-center p-10">
              {/* Левая часть */}
              <div className="col-span-8 flex items-center">
                <div className="flex-1 pr-16 border-r border-[#feda6a]/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#feda6a]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#feda6a]" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[#feda6a] text-sm uppercase tracking-wider">Начать сотрудничество</span>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-3xl text-[#d4d4dc] font-stolzl leading-tight mb-3"
                  >
                    Готовы обсудить ваш проект?
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-[#d4d4dc]/60 text-base max-w-xl"
                  >
                    Оставьте заявку, и мы свяжемся с вами в течение 24 часов
                  </motion.p>
                </div>
              </div>

              {/* Правая часть */}
              <div className="col-span-4 flex items-center justify-end pl-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                  className="relative"
                >
                  <button className="group/button relative inline-flex items-center gap-3 px-8 py-4 bg-[#feda6a] text-[#111113] font-medium overflow-hidden">
                    {/* Анимированный фон */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-1000" />
                    
                    {/* Текст и иконка */}
                    <span className="relative z-10 text-base whitespace-nowrap">Оставить заявку</span>
                    <svg 
                      className="w-4 h-4 relative z-10 transform group-hover/button:translate-x-1 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    {/* Декоративные углы */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#111113]/30" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#111113]/30" />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#feda6a]/5 via-[#feda6a]/20 to-[#feda6a]/5" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#feda6a]/5 via-[#feda6a]/20 to-[#feda6a]/5" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
} 