import { Github, Linkedin, ArrowDown, Sparkles, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { ParticlesBackground } from '@/app/components/ParticlesBackground';
import { FloatingShapes } from '@/app/components/FloatingShapes';
import { TypingAnimation } from '@/app/components/TypingAnimation';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-theme">
      <ParticlesBackground />
      <FloatingShapes />
      
      {/* Static background elements (optimized for mobile performance) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-2xl" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-500/10 dark:from-pink-500/10 dark:to-rose-600/10 rounded-lg blur-xl" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-emerald-500/20 dark:from-cyan-500/15 dark:to-emerald-600/15 rounded-full blur-lg" />
      
      {/* Static grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Avatar with ultra-lightweight animation (Mobile Optimized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full relative overflow-hidden shadow-xl border-2 border-blue-500/30">
              <ImageWithFallback
                src="/s.jpg"
                alt="Sandesh Acharya"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Main heading with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-theme"
              >
                Hi, I'm{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
                className="relative inline-block"
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Sandesh Acharya
                </motion.span>
                <motion.span
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block ml-2"
                >
                  <Sparkles className="text-yellow-500" size={32} />
                </motion.span>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
                  />
                </motion.div>
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 h-8"
          >
            <span className="text-gray-700 dark:text-gray-300">
              <TypingAnimation 
                texts={[
                  'IT Student & Researcher',
                  'Basic Level Teacher',
                  'Python Django Developer',
                  'Full Stack Developer',
                ]}
                className="text-blue-600 dark:text-blue-400 font-semibold"
              />
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg mb-12 max-w-2xl mx-auto"
          >
            <span className="text-theme">
              8th Semester BICTE Student at Myagdi Multiple Campus, passionate about technology and education.
            </span>
          </motion.p>
          
          {/* Social links with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            {[
              { Icon: Facebook, href: 'https://facebook.com', bgColor: 'from-blue-600 to-blue-800', label: 'Facebook' },
              { Icon: Github, href: 'https://github.com', bgColor: 'from-gray-600 to-gray-800', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com', bgColor: 'from-blue-600 to-blue-800', label: 'LinkedIn' },
            ].map(({ Icon, href, bgColor, label }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.1,
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-gradient-to-br ${bgColor} text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow relative group`}
                aria-label={label}
              >
                <Icon size={24} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg relative overflow-hidden group"
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
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg"
            />
            <ArrowDown size={32} className="text-blue-600 dark:text-blue-400 relative z-10" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
