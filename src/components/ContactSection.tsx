'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const budgets = [
  '50 000 – 200 000 ₽',
  '200 000 – 500 000 ₽',
  '500 000 – 1 000 000 ₽',
  'от 1 000 000 ₽'
];

const projectTypes = [
  'Лендинг',
  'Корпоративный сайт',
  'Интернет-магазин',
  'Веб-приложение',
  'Мобильное приложение',
  'Другое'
];

export default function ContactSection() {
  return (
    <SectionWrapper className="bg-[#111113] relative">
      <div className="lg:ml-20"> {/* Отступ только для десктопа */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Левая часть с заголовком */}
          <div className="lg:w-1/3 bg-[#feda6a] p-8 lg:p-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl lg:text-6xl font-stolzl text-[#1d1e22] leading-tight mb-6">
                Давайте создадим что-то особенное
              </h2>
              <p className="text-[#1d1e22]/80 text-lg">
                Расскажите о своих идеях, и мы поможем воплотить их в жизнь, используя современные технологии и креативный подход.
              </p>
            </motion.div>
          </div>

          {/* Правая часть с формой */}
          <div className="lg:w-2/3 p-8 lg:p-16 overflow-y-auto">
            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-8 max-w-5xl mx-auto"
            >
              {/* Основная информация */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Как к вам обращаться" 
                    className="w-full p-3 bg-transparent text-[#d4d4dc] placeholder-[#d4d4dc]/30 border-b-2 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Компания</label>
                  <input 
                    type="text" 
                    placeholder="Название вашей компании" 
                    className="w-full p-3 bg-transparent text-[#d4d4dc] placeholder-[#d4d4dc]/30 border-b-2 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Тип проекта */}
              <div className="space-y-3">
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Тип проекта</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <label 
                      key={type}
                      className="relative group cursor-pointer"
                    >
                      <input 
                        type="radio" 
                        className="peer hidden" 
                        name="projectType"
                      />
                      <div className="p-3 text-center border border-[#393f4d] text-[#d4d4dc] peer-checked:border-[#feda6a] peer-checked:text-[#feda6a] hover:border-[#feda6a] transition-colors">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Бюджет */}
              <div className="space-y-3">
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Планируемый бюджет</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {budgets.map((budget) => (
                    <label 
                      key={budget}
                      className="relative group cursor-pointer"
                    >
                      <input 
                        type="radio" 
                        className="peer hidden" 
                        name="budget"
                      />
                      <div className="px-4 py-3 text-center border border-[#393f4d] text-[#d4d4dc] peer-checked:border-[#feda6a] peer-checked:text-[#feda6a] hover:border-[#feda6a] transition-colors whitespace-nowrap">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Контакты */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full p-3 bg-transparent text-[#d4d4dc] placeholder-[#d4d4dc]/30 border-b-2 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Телефон</label>
                  <div className="flex">
                    <span className="p-3 text-[#d4d4dc] border-b-2 border-[#393f4d]">+7</span>
                    <input 
                      type="tel" 
                      placeholder="(999) 999-99-99" 
                      className="flex-1 p-3 bg-transparent text-[#d4d4dc] placeholder-[#d4d4dc]/30 border-b-2 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Описание проекта */}
              <div className="space-y-2">
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">О вашем проекте</label>
                <textarea 
                  rows={4}
                  placeholder="Расскажите о ваших целях, задачах и ожиданиях от проекта"
                  className="w-full p-3 bg-transparent text-[#d4d4dc] placeholder-[#d4d4dc]/30 border-2 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-3 bg-[#feda6a] text-[#1d1e22] font-medium hover:bg-[#feda6a]/90 transition-colors"
              >
                Отправить заявку
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 