'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'project1',
    title: 'Аренда автомобилей в Дубае',
    description: 'Разработка современного веб-сайта для аренды автомобилей премиум-класса в Дубае с удобной системой бронирования и оплаты.',
    image: '/project1.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'project2',
    title: 'Аренда Спец Техники',
    description: 'Создание специализированной платформы для аренды строительной и специальной техники с расширенным каталогом и системой управления заказами.',
    image: '/project2.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'project3',
    title: 'Сервисный центр техники Apple',
    description: 'Разработка современного сайта для сервисного центра по ремонту техники Apple с системой отслеживания статуса ремонта.',
    image: '/project3.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express']
  },
  {
    id: 'project4',
    title: 'Сайт для ресторана',
    description: 'Создание современного сайта для ресторана с системой онлайн-бронирования столиков и доставки еды.',
    image: '/project4.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-[#111113] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6"
          >
            Наши проекты
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl font-stolzl text-[#d4d4dc] mb-6"
          >
            Последние работы
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[120px] h-[1px] bg-[#feda6a]"
          />
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={index}
              className={`group block ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative h-[700px] overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-[#111113]/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'left-12' : 'right-12'} z-20 max-w-xl`}>
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-[#feda6a] text-sm font-stolzl tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-5xl font-stolzl text-white group-hover:text-[#feda6a] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-xl leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs font-stolzl text-gray-400 border border-white/5 group-hover:bg-white/10 group-hover:text-gray-300 group-hover:border-white/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-[#feda6a] group-hover:gap-4 transition-all duration-300"
                    >
                      <span className="text-base font-stolzl">Подробнее</span>
                      <svg 
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 