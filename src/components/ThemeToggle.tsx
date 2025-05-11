import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed md:top-4 md:right-4 bottom-4 right-4 md:bottom-auto flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md">
      <SunIcon className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-yellow-500'}`} />
      <label className="relative inline-block w-14 h-7">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isDark}
          onChange={toggleTheme}
        />
        <span className={`
          absolute cursor-pointer inset-0
          rounded-full
          transition-all duration-300
          before:content-['']
          before:absolute
          before:h-5
          before:w-5
          before:left-1
          before:bottom-1
          before:rounded-full
          before:transition-all
          before:duration-300
          ${isDark ? 'bg-gray-700 before:translate-x-7 before:bg-gray-300' : 'bg-blue-100 before:bg-white before:shadow-md'}
        `} />
      </label>
      <MoonIcon className={`w-5 h-5 ${isDark ? 'text-blue-300' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle; 