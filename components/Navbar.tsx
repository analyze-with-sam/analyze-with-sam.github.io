
import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../App';
import { SECTION_IDS, COLOR_PALETTES, SunIcon, MoonIcon, PaletteIcon, FlowerIcon, ChevronDownIcon } from '../constants';
import { ThemeContextType, ColorPalette } from '../types';

const NavLink: React.FC<{ href: string; children: React.ReactNode; currentPalette: ColorPalette, isFunMode: boolean }> = ({ href, children, currentPalette, isFunMode }) => {
  const funModeTextClass = isFunMode ? (currentPalette.primary === 'lime' ? 'hover:text-pink-500 dark:hover:text-pink-400' : `hover:text-${currentPalette.accent}-500 dark:hover:text-${currentPalette.accent}-400`) : `hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400`;
  return (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 ${funModeTextClass} transition-colors`}
  >
    {children}
  </a>
)};

const Navbar: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { themeMode, setThemeMode, currentPalette, setCurrentPalette, palettes, isFunMode, setFunMode } = context;

  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const paletteDropdownRef = useRef<HTMLDivElement>(null);

  const toggleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const toggleFunMode = () => {
    setFunMode(!isFunMode);
  };

  const togglePaletteDropdown = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };

  const handleSelectPalette = (palette: ColorPalette) => {
    setCurrentPalette(palette); // This sets the user's base choice
    if(isFunMode) setFunMode(false); // Turn off fun mode if user selects a regular palette
    setIsPaletteOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paletteDropdownRef.current && !paletteDropdownRef.current.contains(event.target as Node)) {
        setIsPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const navItems = [
    { id: SECTION_IDS.ABOUT, label: 'About' },
    { id: SECTION_IDS.SKILLS, label: 'Skills' },
    { id: SECTION_IDS.EXPERIENCE, label: 'Experience' },
    { id: SECTION_IDS.IMPACT, label: 'Impact' },
    { id: SECTION_IDS.PROJECTS, label: 'Projects' },
    { id: SECTION_IDS.CONTACT, label: 'Contact' },
  ];

  const navBgClass = isFunMode 
    ? (themeMode === 'light' ? 'bg-lime-200/80 dark:bg-green-800/80' : 'bg-green-800/80 dark:bg-lime-200/80') 
    : 'bg-white/80 dark:bg-gray-800/80';
  const navBorderClass = isFunMode 
    ? (themeMode === 'light' ? 'border-lime-400 dark:border-green-600' : 'border-green-600 dark:border-lime-400')
    : 'border-gray-200 dark:border-gray-700';
  const stTextClass = isFunMode
    ? (themeMode === 'light' ? `text-pink-600 dark:text-yellow-400` : `text-yellow-400 dark:text-pink-600`)
    : `text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`;


  return (
    <nav className={`sticky top-0 z-50 shadow-lg ${navBgClass} backdrop-blur-md border-b ${navBorderClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href={`#${SECTION_IDS.HERO}`} className={`text-2xl font-bold ${stTextClass}`}>
              ST
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item.id} href={`#${item.id}`} currentPalette={currentPalette} isFunMode={isFunMode}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <button
              onClick={toggleFunMode}
              className={`p-2 rounded-full ${isFunMode ? `bg-${currentPalette.accent}-400 text-${currentPalette.primary}-800` : `text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700`} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-${currentPalette.primary}-500`}
              aria-label="Toggle Fun Mode"
            >
              <FlowerIcon className="h-5 w-5" />
            </button>
            <div className="relative" ref={paletteDropdownRef}>
              <button
                onClick={togglePaletteDropdown}
                className={`p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-${currentPalette.primary}-500`}
                aria-label="Select color palette"
                disabled={isFunMode} // Disable palette changes in fun mode
              >
                <PaletteIcon className="h-5 w-5" />
              </button>
              {isPaletteOpen && !isFunMode && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {palettes.map((palette) => (
                    <button
                      key={palette.id}
                      onClick={() => handleSelectPalette(palette)}
                      className={`w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-${palette.primary}-600 dark:hover:text-${palette.primary}-400`}
                    >
                      <span className="flex items-center">
                        <span className={`w-3 h-3 rounded-full mr-2 bg-${palette.primary}-500`}></span>
                        {palette.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={toggleThemeMode}
              className={`p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-${currentPalette.primary}-500`}
              aria-label="Toggle theme"
            >
              {themeMode === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
          </div>
          {/* Mobile menu button - can be implemented if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
