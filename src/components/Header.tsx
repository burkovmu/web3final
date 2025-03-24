'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#111113]/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="text-2xl md:text-3xl font-stolzl text-[#feda6a]">
            MB
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 md:w-10 md:h-10 flex flex-col justify-center items-center"
          >
            <span className={`absolute w-6 md:w-8 h-0.5 bg-[#feda6a] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`} />
            <span className={`w-6 md:w-8 h-0.5 bg-[#feda6a] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute w-6 md:w-8 h-0.5 bg-[#feda6a] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 md:top-24 left-0 right-0 bg-[#111113] border-t border-[#feda6a]/10"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
              <nav className="flex flex-col space-y-3 md:space-y-6">
                <Link
                  href="/"
                  className="text-base md:text-2xl text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link
                  href="/projects"
                  className="text-base md:text-2xl text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Проекты
                </Link>
                <Link
                  href="/about"
                  className="text-base md:text-2xl text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
                <Link
                  href="/contact"
                  className="text-base md:text-2xl text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 