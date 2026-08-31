import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, Sparkles, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import { TypingAnimation } from '@/app/components/TypingAnimation';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Hook to detect mobile devices and disable heavy animations
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

export function Hero() {
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden bg-theme">
      
      {/* Background elements - ONLY rendered on desktop to prevent mobile hanging */}
      {!isMobile && (
        <>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          />
        </>
      )}
      
      {/* Lightweight static grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* COMPLETELY NORMAL IMAGE: No motion, no borders, no shadows */}
          <div className="mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <ImageWithFallback
                src="/s.jpg"
                alt="Sandesh Acharya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main heading: Simplified to a single, lightweight one-time fade-in. NO infinite loops. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              <span className="text-theme">Hi, I'm </span>
              
              {/* Static gradient text, no background position animation */}
              <span className="relative inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                Sandesh Acharya
                
                {/* Static star icon, no rotation or scaling */}
                <Sparkles className="text-yellow-500 inline-block ml-2" size={32} />
                
                {/* Static underline, no shimmer animation */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
              </span>
            </h1>
          </motion.div>
          
          {/* Typing animation kept as requested */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg mb-12 max-w-2xl mx-auto"
          >
            <span className="text-theme">
              8th Semester BICTE Student at Myagdi Multiple Campus, passionate about technology and education.
            </span>
          </motion.p>
          
          {/* Social links: Simplified entrance, no complex hover loops on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={isMobile ? {} : { scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-gradient-to-br ${bgColor} text-white rounded-full shadow-lg transition-shadow`}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={isMobile ? {} : { scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button
            animate={isMobile ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown size={32} className="text-blue-600 dark:text-blue-400" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
