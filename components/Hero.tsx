
import React, { useContext } from 'react';
import { PERSONAL_INFO, SECTION_IDS, MailIcon, PhoneIcon, LinkedInIcon, LocationIcon, FUN_MODE_PALETTE } from '../constants';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const Hero: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, isFunMode, themeMode } = context;

  const activePalette = currentPalette; // currentPalette already reflects FUN_MODE_PALETTE if isFunMode is true

  const heroBg = isFunMode
  ? (themeMode === 'light' 
      ? `bg-gradient-to-br from-${activePalette.primary}-200 via-${activePalette.secondary}-200 to-yellow-100` 
      : `bg-gradient-to-br from-${activePalette.primary}-800 via-${activePalette.secondary}-800 to-yellow-900`)
  : `bg-gradient-to-br from-${activePalette.primary}-50 via-${activePalette.secondary}-50 to-white dark:from-${activePalette.primary}-900/70 dark:via-${activePalette.secondary}-900/70 dark:to-gray-900`;
  
  const heroTitleColor = isFunMode 
    ? (themeMode === 'light' ? `text-${activePalette.primary}-700` : `text-${activePalette.primary}-200`) 
    : `text-gray-900 dark:text-white`;
  const heroTextColor = isFunMode 
    ? (themeMode === 'light' ? `text-${activePalette.secondary}-700` : `text-${activePalette.secondary}-200`)
    : `text-gray-700 dark:text-gray-300`;
  const heroMutedTextColor = isFunMode
    ? (themeMode === 'light' ? `text-${activePalette.accent}-700` : `text-${activePalette.accent}-300`)
    : `text-gray-600 dark:text-gray-400`;
  
  const button1Bg = isFunMode 
    ? `bg-${activePalette.primary}-500 hover:bg-${activePalette.primary}-600` 
    : `bg-${activePalette.primary}-600 hover:bg-${activePalette.primary}-700`;
  const button1Text = isFunMode
    ? `text-yellow-100`
    : `text-white`;
  
  const button2Bg = isFunMode
    ? `bg-${activePalette.secondary}-400 hover:bg-${activePalette.secondary}-500`
    : `bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600`;
  const button2Text = isFunMode
    ? `text-lime-800`
    : `text-gray-800 dark:text-gray-200`;


  return (
    <section id={SECTION_IDS.HERO} className={`relative py-20 md:py-32 min-h-[calc(100vh-4rem)] flex items-center justify-center text-center ${heroBg}`}>
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Subtle background pattern if desired */}
      </div>
      <div className="container mx-auto px-6 z-10">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${heroTitleColor} ${isFunMode ? 'tracking-tight leading-snug' : ''}`}>
          {PERSONAL_INFO.name}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${heroTextColor} ${isFunMode ? 'leading-relaxed' : ''}`}>
          {PERSONAL_INFO.tagline}
        </p>
        <div className={`flex flex-wrap justify-center items-center space-x-4 space-y-2 md:space-y-0 mb-8 text-sm ${heroMutedTextColor}`}>
          <span className="flex items-center"><LocationIcon className="w-4 h-4 mr-1.5" /> {PERSONAL_INFO.location}</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className={`flex items-center hover:text-${activePalette.primary}-600 dark:hover:text-${activePalette.primary}-400`}><MailIcon className="w-4 h-4 mr-1.5" /> {PERSONAL_INFO.email}</a>
          <a href={`tel:${PERSONAL_INFO.phone}`} className={`flex items-center hover:text-${activePalette.primary}-600 dark:hover:text-${activePalette.primary}-400`}><PhoneIcon className="w-4 h-4 mr-1.5" /> {PERSONAL_INFO.phone}</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center hover:text-${activePalette.primary}-600 dark:hover:text-${activePalette.primary}-400`}><LinkedInIcon className="w-4 h-4 mr-1.5" /> LinkedIn</a>
        </div>
        <p className={`text-md ${heroMutedTextColor} max-w-2xl mx-auto mb-10 ${isFunMode ? 'text-xs' : ''}`}>
          {PERSONAL_INFO.availability}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={`#${SECTION_IDS.PROJECTS}`}
            className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md ${button1Bg} ${button1Text} transition-transform transform hover:scale-105 ${isFunMode ? 'border-2 border-yellow-300' : ''}`}
          >
            View Projects
          </a>
          <a
            href={`#${SECTION_IDS.CONTACT}`}
            className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md ${button2Bg} ${button2Text} transition-transform transform hover:scale-105 ${isFunMode ? 'border-2 border-pink-300' : ''}`}
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href={`#${SECTION_IDS.ABOUT}`} aria-label="Scroll to about section">
          <svg className={`w-8 h-8 text-${activePalette.primary}-500 dark:text-${activePalette.primary}-400 animate-bounce ${isFunMode ? 'filter drop-shadow-lg' : '' }`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
