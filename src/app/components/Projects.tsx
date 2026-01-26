import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive library management system built with Java Swing. Features book cataloging, member management, issue/return tracking, and fine calculation with an intuitive desktop interface.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
      tags: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/sandeshacharya2',
      live: 'https://github.com/sandeshacharya2/Library-Management-System',
    },
    {
      title: 'Income Expense Tracker',
      description: 'Personal finance management application developed using C# Windows Forms. Track income, expenses, generate reports, and visualize financial data with charts and analytics.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      tags: ['C#', 'Windows Forms', '.NET', 'SQL Server'],
      github: 'https://github.com/sandeshacharya2',
      live: 'https://github.com/sandeshacharya2/income_expense-',
    },
    {
      title: 'Kisaan - Farmer Connect Platform',
      description: 'A web application connecting farmers directly with customers. Built with Python Django, featuring product listings, order management, real-time messaging, and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      tags: ['Python', 'Django', 'Tailwind CSS', 'JavaScript', 'HTML'],
      github: 'https://github.com/sandeshacharya2',
      live: 'https://github.com/sandeshacharya2/Kisaan',
    },
    {
      title: 'Personal Finance Management',
      description: 'Advanced financial planning system using Python Django. Features budget planning, expense categorization, financial goal tracking, and comprehensive analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
      tags: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com/sandeshacharya2',
      live: 'https://github.com/sandeshacharya2/personal-finance-system',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-theme transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-4 text-theme"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateX: -15,
                }}
                animate={
                  isVisible
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group bg-form rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      className="flex gap-4"
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 rounded-full shadow-lg"
                      >
                        <Github size={20} className="text-gray-900" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 rounded-full shadow-lg"
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="text-2xl mb-3 text-theme"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="text-theme mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.9 + index * 0.2 + tagIndex * 0.1,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgb(59, 130, 246)',
                          color: 'white',
                        }}
                        className="px-3 py-1 tag tat-hover font-medium rounded-full text-sm  transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-theme  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-theme hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
