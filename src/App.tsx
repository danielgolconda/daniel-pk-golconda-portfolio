import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
import Experience from './components/Experience';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const MainContent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mainRef.current) {
        const rect = mainRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top + mainRef.current.scrollTop
        });
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('mousemove', handleMouseMove);
      return () => mainElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <main 
      ref={mainRef}
      className="flex-1 h-screen overflow-y-auto px-4 py-8 md:py-16 md:pr-12 text-gray-900 dark:text-text-primary flex flex-col justify-start relative"
      style={{
        background: isDark 
          ? `radial-gradient(
              600px at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(144, 202, 249, 0.07),
              transparent 80%
            ),
            linear-gradient(to bottom right, #1a2233, #101522)`
          : `radial-gradient(
              600px at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(29, 78, 216, 0.05),
              transparent 80%
            ),
            linear-gradient(to bottom right, #ffffff, #f3f4f6)`,
        transition: 'background 0.3s ease'
      }}
    >
      <AboutMe />
      <Experience />
      <Skills />
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <MainContent />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
