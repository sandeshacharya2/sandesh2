import { ThemeProvider } from '@/app/components/ThemeProvider';
import { AnimatedCursor } from '@/app/components/AnimatedCursor';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white bg-theme transition-colors duration-300">
        <Toaster position="top-right" richColors />
        <AnimatedCursor />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}