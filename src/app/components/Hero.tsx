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
    // FIX 1: 100dvh prevents mobile browser address bar from causing layout jumps and animation restarts
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden bg-theme">
      
      {/* FIX 2: Completely removed ParticlesBackground and FloatingShapes to stop mobile GPU hanging */}
      
      {/* Background elements - ONLY rendered on desktop */}
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
          <motion.div
            animate={{ y: [0, -40, 0], x: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/3 w-48 h-48 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 90, 180, 270, 360], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-2xl"
          />
        </>
      )}
      
      {/* Lightweight static grid background (safe for mobile) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* FIX 3: Avatar is now completely static with no extra animations or circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full relative overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
              <ImageWithFallback
                src="/s.jpg"
                alt="Sandesh Acharya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
            </div>
          </motion.div>
          
          {/* Main heading */}
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
                  // FIX 4: Disable infinite gradient shift on mobile
                  animate={isMobile ? {} : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Sandesh Acharya
                </motion.span>
                
                {/* FIX 5: Sparkles are static on mobile, animated only on desktop */}
                {isMobile ? (
                  <Sparkles className="text-yellow-500 inline-block ml-2" size={32} />
                ) : (
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block ml-2"
                  >
                    <Sparkles className="text-yellow-500" size={32} />
                  </motion.span>
                )}
                
                {/* Underline: No infinite shimmer on mobile */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left"
                >
                  {!isMobile && (
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
                    />
                  )}
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
          
          {/* Social links */}
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={isMobile ? {} : { scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-gradient-to-br ${bgColor} text-white rounded-full shadow-lg transition-shadow relative group`}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={isMobile ? {} : { scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg relative overflow-hidden group"
          >
            {/* Button shimmer: ONLY on desktop */}
            {!isMobile && (
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            )}
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button
            // FIX 6: Disable bouncing arrow animation on mobile
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
