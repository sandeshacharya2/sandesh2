import { Code, Palette, Zap, GraduationCap, Users, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function About() {
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

  const features = [
    {
      Icon: GraduationCap,
      title: 'IT Student',
      description: '8th semester BICTE student at Myagdi Multiple Campus, pursuing excellence in information technology.',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20 green:bg-green-800 red:bg-red-800 black:bg-blue-900/30',
      delay: 0,
    },
    {
      Icon: Users,
      title: 'Teacher',
      description: 'Basic Level Teacher combining technical knowledge with teaching skills to educate young minds.',
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20 green:bg-green-800 red:bg-red-800 black:bg-indigo-900/30',
      delay: 0.2,
    },
    {
      Icon: Search,
      title: 'Researcher',
      description: 'Constantly exploring new technologies and methodologies to stay at the forefront of tech evolution.',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20 green:bg-green-800 red:bg-red-800 black:bg-purple-900/30',
      delay: 0.4,
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-theme transition-colors duration-300 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 className="text-4xl md:text-5xl mb-4 relative inline-block">
              <span className="text-theme">About Me</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </motion.div>
            </motion.h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-theme  mb-8 leading-relaxed"
          >
            I'm Sandesh Acharya, a dedicated IT student currently in my 8th semester of BICTE at Myagdi Multiple Campus. 
            My passion for technology started at an early age and has evolved into a professional pursuit.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-theme mb-8 leading-relaxed"
          >
            Alongside my studies, I serve as a Basic Level Teacher, where I combine my technical knowledge with teaching 
            skills to help young students understand the fundamentals of technology.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-theme mb-12 leading-relaxed"
          >
            As a researcher, I'm constantly exploring new technologies and methodologies to stay at the forefront of the 
            ever-evolving tech landscape.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + feature.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                className={`text-center p-6 rounded-lg bg-form hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                >
                  <feature.Icon size={32} className="text-white" />
                  
                  {/* Pulsing effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} -z-10`}
                  />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + feature.delay }}
                  className="text-xl mb-2 text-theme relative z-10"
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 + feature.delay }}
                  className="text-theme relative z-10"
                >
                  {feature.description}
                </motion.p>
                
                {/* Corner decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 w-4 h-4 border-2 border-blue-500/20 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
