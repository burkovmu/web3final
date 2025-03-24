'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: "Маркетплейс электроники",
    description: "Разработка масштабируемой платформы для продажи электроники с системой рекомендаций и аналитикой",
    image: "/project1.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    size: "large"
  },
  {
    title: "Система управления отелем",
    description: "Создание комплексного решения для автоматизации процессов бронирования и управления отелем",
    image: "/project2.jpg",
    tags: ["React", "Express", "MongoDB", "WebSocket"],
    size: "small"
  },
  {
    title: "Приложение для фитнеса",
    description: "Разработка мобильного приложения для персональных тренировок с ИИ-тренером",
    image: "/project3.jpg",
    tags: ["React Native", "Python", "TensorFlow", "Firebase"],
    size: "small"
  },
  {
    title: "Облачная CRM-система",
    description: "Создание современной CRM-системы с расширенной аналитикой и интеграцией с популярными сервисами",
    image: "/project4.jpg",
    tags: ["Vue.js", "Go", "GraphQL", "AWS"],
    size: "large"
  }
];

export default function ProjectsSection() {
  return (
    <SectionWrapper className="bg-[#111113] py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 2) }}
              className={`group relative overflow-hidden rounded-lg bg-[#393f4d] ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                project.size === 'large' ? 'h-[500px]' : 'h-[300px]'
              }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1e22] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                <div className="relative">
                  <motion.div 
                    className="absolute -left-4 -top-20 text-[#feda6a]/10 text-9xl font-stolzl select-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                  <h3 className="text-2xl font-stolzl text-[#feda6a] mb-4">{project.title}</h3>
                  <p className="text-[#d4d4dc]/80 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-[#111113] text-[#feda6a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 