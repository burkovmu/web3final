'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { title: 'Главная', href: '/' },
  { title: 'О нас', href: '/about' },
  { title: 'Услуги', href: '/services' },
  { title: 'Проекты', href: '/projects' },
  { title: 'Контакты', href: '/contacts' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Десктопная версия */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed left-0 top-0 h-screen w-20 z-50 flex flex-col items-center justify-between py-8 hidden lg:flex"
        >
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 relative group"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 flex flex-col gap-1.5">
              <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
              <div className="w-2/3 h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
              <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
            </div>
          </button>

          <div className="flex-1 flex items-center">
            <motion.div 
              className="rotate-180 text-[#d4d4dc] text-lg tracking-[0.3em] font-pixy"
              style={{ writingMode: 'vertical-rl' }}
            >
              Mishlen Team
            </motion.div>
          </div>

          <div className="w-[2px] h-24 bg-[#feda6a]/20" />
        </motion.div>
      )}

      {/* Мобильная версия */}
      {isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 h-16 backdrop-blur-sm bg-[#111113]/80 z-50 flex items-center justify-between px-4 border-b border-[#feda6a]/10"
        >
          <div className="text-[#d4d4dc] text-lg font-pixy">Mishlen Team</div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-12 h-12 relative group"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
              <div className="w-2/3 h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
              <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
            </div>
          </button>
        </motion.div>
      )}

      {/* Всплывающее меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className={`fixed left-0 top-0 h-screen w-full max-w-xl bg-[#111113] z-50 flex flex-col`}
            >
              {/* Фоновый паттерн */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #feda6a 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Градиентные линии */}
              <div className="w-full h-[1px] bg-gradient-to-r from-[#feda6a] via-[#feda6a]/50 to-transparent" />
              <div className="w-full h-[1px] bg-gradient-to-r from-[#feda6a] via-[#feda6a]/50 to-transparent mt-auto" />

              {/* Кнопка закрытия */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-8 top-8 w-12 h-12 flex items-center justify-center group z-10"
              >
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rotate-45 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
                  </div>
                  <div className="absolute inset-0 -rotate-45 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-[#d4d4dc] group-hover:bg-[#feda6a] transition-colors" />
                  </div>
                </div>
              </button>

              {/* Основное меню */}
              <nav className="flex-1 flex items-center px-20">
                <ul className="space-y-12">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="group relative block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="relative z-10">
                          <span className="text-5xl font-stolzl text-[#d4d4dc] group-hover:text-[#feda6a] transition-colors">
                            {item.title}
                          </span>
                          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#feda6a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-[#feda6a]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Нижняя часть меню */}
              <div className="p-20">
                <div className="flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#d4d4dc]/60 text-sm"
                  >
                    Создаем сайты, достойные звезд
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                  >
                    <a href="https://t.me/mishlenteam" target="_blank" rel="noopener noreferrer" className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors">
                      Telegram
                    </a>
                    <a href="https://wa.me/message/YWPQD6DCDXBPA1" target="_blank" rel="noopener noreferrer" className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors">
                      WhatsApp
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-2 h-2 rounded-full bg-[#feda6a]/20"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-2 h-2 rounded-full bg-[#feda6a]/20"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="w-2 h-2 rounded-full bg-[#feda6a]/20"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 