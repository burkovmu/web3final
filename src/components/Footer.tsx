'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { name: 'Telegram', url: 'https://t.me/mishlenteam' },
  { name: 'WhatsApp', url: 'https://wa.me/message/YWPQD6DCDXBPA1' },
  { name: 'Instagram', url: '#' },
  { name: 'GitHub', url: 'https://github.com/burkovmu' }
];

const navLinks = [
  { name: 'О нас', url: '/about' },
  { name: 'Услуги', url: '/services' },
  { name: 'Проекты', url: '/projects' },
  { name: 'Контакты', url: '/contacts' }
];

export default function Footer() {
  return (
    <footer className="bg-[#111113] relative overflow-hidden">
      <div className="lg:ml-20"> {/* Отступ только для десктопа */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Левая колонка */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20" />
                <div className="pl-8">
                  <h3 className="text-3xl lg:text-4xl font-stolzl text-[#d4d4dc] mb-6">
                    Давайте создадим<br />что-то особенное
                  </h3>
                  <p className="text-[#d4d4dc]/60 text-lg max-w-md mb-8">
                    Свяжитесь с нами, чтобы обсудить ваш проект и начать воплощать идеи в жизнь
                  </p>
                  <Link 
                    href="/contacts"
                    className="inline-block w-full md:w-auto px-8 py-4 bg-[#feda6a] text-[#1d1e22] font-medium group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-[#111113] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 group-hover:text-[#feda6a] transition-colors duration-300">
                      Начать проект
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Правая колонка */}
            <div className="grid grid-cols-2 gap-8">
              {/* Социальные сети */}
              <div className="space-y-6">
                <h4 className="text-[#feda6a] text-sm uppercase tracking-wider">Соцсети</h4>
                <ul className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors group flex items-center gap-2"
                      >
                        <div className="h-[1px] w-4 bg-[#feda6a]/20 group-hover:w-8 transition-all" />
                        <span>{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Навигация */}
              <div className="space-y-6">
                <h4 className="text-[#feda6a] text-sm uppercase tracking-wider">Навигация</h4>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={link.url}
                        className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors group flex items-center gap-2"
                      >
                        <div className="h-[1px] w-4 bg-[#feda6a]/20 group-hover:w-8 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Нижняя часть */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-[#393f4d] flex flex-col md:flex-row justify-between items-center gap-4 text-[#d4d4dc]/40"
          >
            <p className="text-center md:text-left">© 2024 Mishlen Team. Все права защищены.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
              <Link href="/privacy" className="hover:text-[#feda6a] transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-[#feda6a] transition-colors">
                Условия использования
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 