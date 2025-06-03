
import React, { useContext } from 'react';
import { SectionProps } from '../types';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';


const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, isFunMode, themeMode } = context;

  const titleColor = isFunMode 
    ? (themeMode === 'light' ? `text-${currentPalette.primary}-700` : `text-${currentPalette.primary}-300`)
    : `text-gray-800 dark:text-white`;
  
  const titleBorderColor = isFunMode
    ? `border-${currentPalette.secondary}-500 dark:border-${currentPalette.secondary}-400`
    : `border-${currentPalette.primary}-500 dark:border-${currentPalette.primary}-400`;
  
  const sectionBgClass = isFunMode 
    ? (className.includes('bg-gray-50') || className.includes('dark:bg-gray-800/50') ? (themeMode === 'light' ? 'bg-lime-100/30' : 'bg-green-900/30') : '') // Adjust specific section BGs for fun mode
    : className;


  return (
    <section id={id} className={`py-16 md:py-24 ${sectionBgClass}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${titleColor} ${isFunMode ? 'tracking-wider' : ''}`}>
          <span className={`pb-2 border-b-4 ${isFunMode ? 'border-dashed' : ''} ${titleBorderColor}`}>
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
