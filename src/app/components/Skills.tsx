import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Server, GitBranch, FileCode } from 'lucide-react';

export function Skills() {
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

  const skills = [
    { name: 'Python Django', level: 90, Icon: Server },
    { name: 'MySQL', level: 85, Icon: Database },
    { name: 'HTML', level: 95, Icon: FileCode },
    { name: 'Java Spring Boot', level: 80, Icon: Server },
    { name: 'C# Web Forms', level: 75, Icon: Code2 },
    { name: 'Java Swing', level: 80, Icon: Layout },
    { name: 'Tailwind CSS', level: 90, Icon: Layout },
    { name: 'JavaScript', level: 85, Icon: FileCode },
    { name: 'GitLab & GitHub', level: 85, Icon: GitBranch },
  ];

  const stats = [
    { value: '8th', label: 'Semester BICTE' },
    { value: '10+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Learning' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 text-theme transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-4 text-theme"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-12"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={isVisible ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        delay: 0.5 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="p-2 bg-blue-600 rounded-lg"
                    >
                      <skill.Icon size={20} className="text-white" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-lg text-theme"
                    >
                      {skill.name}
                    </motion.span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="text-sm text-theme font-mono"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.5 + index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
                className="p-6 bg-form rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.7 + index * 0.2 }}
                  className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1.9 + index * 0.2 }}
                  className="text-theme"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
