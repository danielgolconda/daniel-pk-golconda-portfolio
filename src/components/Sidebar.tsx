import React, { useEffect, useState } from 'react';
import { NAME } from './constants';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from '../context/ThemeContext';

const TYPING_TEXTS = [
  'Building AI-Powered Solutions 🎯',
  'Turning Ideas into Reality 🚀',
  'Crafting Cloud-Native Apps ⚡'
];

const TYPING_SPEED = 80; // ms per character
const DELETING_SPEED = 50; // ms per character
const DELAY_AFTER_TYPING = 2000; // ms to wait before deleting
const DELAY_AFTER_DELETING = 500; // ms to wait before typing next

const Sidebar: React.FC = () => {
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? '#b0b8c9' : '#4b5563';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = TYPING_TEXTS[textIndex];

    if (!isDeleting && typed.length < currentText.length) {
      timeout = setTimeout(() => {
        setTyped(currentText.slice(0, typed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && typed.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    } else if (isDeleting && typed.length > 0) {
      timeout = setTimeout(() => {
        setTyped(currentText.slice(0, typed.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && typed.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      timeout = setTimeout(() => {}, DELAY_AFTER_DELETING);
    }
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, textIndex]);

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="w-full md:min-w-[22rem] md:max-w-[30vw] bg-[#F5F2EA] dark:bg-gradient-to-br dark:from-[#1a1f2c] dark:to-[#2d3748] text-gray-900 dark:text-text-primary flex flex-col justify-between p-6 md:p-8 lg:p-12 min-h-[auto] md:min-h-screen">
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{NAME}</h1>
        <h2 className="text-xl md:text-2xl font-normal mb-4">
          Software Development Engineer at Amazon Web Services ☁️
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-text-secondary font-medium">
          {typed}
          <span className="inline-block w-[1ch] animate-[blink_1s_steps(1)_infinite]">|</span>
        </p>
      </div>
      <nav className="mb-8 md:mb-12">
        <ul className="list-none p-0 m-0">
          <li 
            onClick={() => handleScroll('about')} 
            className="text-lg text-gray-600 dark:text-text-secondary mb-3 cursor-pointer transition-colors hover:text-gray-900 dark:hover:text-white hover:font-semibold"
          >
            About
          </li>
          <li 
            onClick={() => handleScroll('experience')} 
            className="text-lg text-gray-600 dark:text-text-secondary mb-3 cursor-pointer transition-colors hover:text-gray-900 dark:hover:text-white hover:font-semibold"
          >
            Experience
          </li>
          <li 
            onClick={() => handleScroll('skills')} 
            className="text-lg text-gray-600 dark:text-text-secondary mb-3 cursor-pointer transition-colors hover:text-gray-900 dark:hover:text-white hover:font-semibold"
          >
            Skills
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 mt-auto">
        <SocialIcon 
          url="https://www.linkedin.com/in/danielgolconda"
          target="_blank"
          fgColor={iconColor}
          bgColor="transparent"
          className="hover:opacity-80 transition-opacity"
          style={{ width: 42, height: 42 }}
        />
        <SocialIcon 
          url="mailto:daniel.golconda7@icloud.com"
          network="email"
          fgColor={iconColor}
          bgColor="transparent"
          className="hover:opacity-80 transition-opacity"
          style={{ width: 42, height: 42 }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
