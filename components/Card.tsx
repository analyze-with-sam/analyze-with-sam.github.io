
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, isFunMode, themeMode } = context;

  const funModeBaseBg = themeMode === 'light' ? 'bg-lime-100/50' : 'bg-green-900/50';
  const funModeBorderColor = themeMode === 'light' ? `border-${currentPalette.secondary}-400` : `border-${currentPalette.secondary}-500`;
  
  const funModeClasses = isFunMode 
    ? `${funModeBaseBg} border-4 border-dashed ${funModeBorderColor} shadow-lg shadow-${currentPalette.accent}-500/30 dark:shadow-${currentPalette.accent}-400/30`
    : `bg-white dark:bg-gray-800 shadow-lg`;
  
  const hoverClasses = hoverEffect && !isFunMode
    ? `transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-${currentPalette.accent}-500/30 dark:hover:shadow-${currentPalette.accent}-400/30`
    : (hoverEffect && isFunMode ? `transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-2xl hover:shadow-${currentPalette.accent}-600/50 dark:hover:shadow-${currentPalette.accent}-300/50` : '');


  return (
    <div
      className={`${funModeClasses} rounded-xl overflow-hidden p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
