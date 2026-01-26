import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeSelector } from '@/app/components/ThemeSelector';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section tracking for active state
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId === 'home' ? 'hero' : sectionId);
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/cv/sandesh-acharya-cv.pdf'; // Path to your CV file in public folder
    link.download = 'Sandesh-Acharya-CV.pdf'; // Name for the downloaded file
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-xl z-[9999] animate-fade-in-up';
    toast.innerHTML = `
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span>CV downloaded successfully!</span>
      </div>
    `;
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      toast.style.animation = 'fade-out-down 0.5s forwards';
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-theme/90 backdrop-blur-lg shadow-lg shadow-black/10 border-b border-white/10 dark:border-white/5'
          : 'bg-transparent'
        }`}
      style={{ transform: 'translateY(0)' }}
    >
      {/* Animated gradient accent bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: scrolled ? 1 : 0,
          scaleX: scrolled ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 origin-left"
      >
        <motion.div
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </motion.div>

      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold relative"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold"
              style={{ 
                backgroundSize: '200% 200%',
                textShadow: '0 0 15px rgba(99, 102, 241, 0.3)'
              }}
            >
              Sandesh
            </motion.span>
            {/* Floating particle effect around logo */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 font-bold">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section === 'home' ? 'hero' : section)}
                className={`transition-all duration-300 capitalize relative group ${
                  activeSection === (section === 'home' ? 'hero' : section)
                    ? 'text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-theme dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section}
                {/* Enhanced animated underline with gradient and particle effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === (section === 'home' ? 'hero' : section) ? '100%' : 0 
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 origin-left"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === (section === 'home' ? 'hero' : section) ? '40%' : 0,
                    x: activeSection === (section === 'home' ? 'hero' : section) ? '30%' : 0
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.button>
            ))}

            {/* Theme Selector with glow effect */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <ThemeSelector />
            </motion.div>

            {/* Download CV Button with floating animation and glow */}
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -3, 0],
                boxShadow: [
                  '0 0 0 0 rgba(74, 222, 128, 0.4)',
                  '0 0 15px 5px rgba(74, 222, 128, 0.7)',
                  '0 0 0 0 rgba(74, 222, 128, 0.4)'
                ]
              }}
              transition={{
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                },
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              onClick={handleDownloadCV}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-20"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <Download size={18} className="relative z-10" />
              <span className="relative z-10 font-medium">Download CV</span>
              {/* Floating particles */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-amber-400/30 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <div className="md:hidden flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <ThemeSelector />
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} className="text-theme dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} className="text-theme dark:text-gray-300" />
                </motion.div>
              )}
              {/* Pulsing ring around menu button */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation with glass morphism and enhanced animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                height: 'auto'
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                height: 0
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4 overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-white/10 relative"
            >
              {/* Animated background pattern for mobile menu */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-50" />
              
              {['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    color: activeSection === (section === 'home' ? 'hero' : section) 
                      ? '#2563eb' 
                      : undefined
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => scrollToSection(section === 'home' ? 'hero' : section)}
                  className={`text-left capitalize font-medium py-2 px-3 rounded-lg transition-colors relative ${
                    activeSection === (section === 'home' ? 'hero' : section)
                      ? 'bg-blue-50/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'text-theme hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {section}
                  {activeSection === (section === 'home' ? 'hero' : section) && (
                    <motion.div
                      layoutId="mobile-active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Download size={20} />
                <span>Download CV</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-xl blur-sm"
                />
              </motion.button>
              
              {/* Decorative elements in mobile menu */}
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-60"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}