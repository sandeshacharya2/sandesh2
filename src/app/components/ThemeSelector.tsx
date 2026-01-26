import { motion } from 'motion/react';
import { useTheme } from '@/app/components/ThemeProvider';
import { Palette } from 'lucide-react';
import { useState } from 'react';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'light', label: 'Light', color: '#ffffff' },
    { name: 'dark', label: 'Dark', color: '#1f2937' },
    { name: 'green', label: 'Green', color: '#10b981' },
    { name: 'red', label: 'Red', color: '#ef4444' },
    { name: 'black', label: 'Black', color: '#000000' },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
      >
        <Palette size={20} className="text-gray-700 dark:text-gray-300" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 min-w-[150px]"
        >
          {themes.map((t) => (
            <motion.button
              key={t.name}
              whileHover={{ scale: 1.05, x: 5 }}
              onClick={() => {
                setTheme(t.name as any);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                theme === t.name ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{t.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
