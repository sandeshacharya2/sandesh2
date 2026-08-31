import { Github, Linkedin, ArrowDown, Sparkles, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
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
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden bg-theme">
      
      {/* Simple static background blobs - hidden on mobile via CSS */}
      <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      
      {/* Static grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Normal image - no animations, no borders */}
          <div className="mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <ImageWithFallback
                src="/s.jpg"
                alt="Sandesh Acharya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Static heading - only one-time fade in, NO motion on text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              <span className="text-theme">Hi, I'm </span>
              <span className="relative inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                Sandesh Acharya
                <Sparkles className="text-yellow-500 inline-block ml-2" size={32} />
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
              </span>
            </h1>
          </motion.div>
          
          {/* Typing animation with CSS cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg mb-12 max-w-2xl mx-auto text-theme"
          >
            8th Semester BICTE Student at Myagdi Multiple Campus, passionate about technology and education.
          </motion.p>
          
          {/* Social links - simple entrance, no hover animations on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
          
          {/* Static button - no shimmer, no motion */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg hover:scale-105 transition-transform"
          >
            View My Work
          </motion.button>
          
          {/* Static arrow - no bouncing */}
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
