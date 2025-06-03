
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ThemeMode, ColorPalette, ThemeContextType } from './types';
import { COLOR_PALETTES, SECTION_IDS, PROFESSIONAL_SUMMARY_V3, FUN_MODE_PALETTE } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import AwardsSection from './components/AwardsSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import FunModeElements from './components/FunModeElements'; // New Import

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [userSelectedPalette, setUserSelectedPalette] = useState<ColorPalette>(COLOR_PALETTES[0]);
  const [isFunMode, setIsFunMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const [previousPaletteBeforeFunMode, setPreviousPaletteBeforeFunMode] = useState<ColorPalette>(COLOR_PALETTES[0]);


  useEffect(() => {
    setIsMounted(true);
    const storedThemeMode = localStorage.getItem('themeMode') as ThemeMode;
    if (storedThemeMode) {
      setThemeMode(storedThemeMode);
    }
    const storedPaletteId = localStorage.getItem('paletteId');
    const initialPalette = COLOR_PALETTES.find(p => p.id === storedPaletteId) || COLOR_PALETTES[0];
    setUserSelectedPalette(initialPalette);
    setPreviousPaletteBeforeFunMode(initialPalette);
    
    const storedIsFunMode = localStorage.getItem('isFunMode') === 'true';
    setIsFunMode(storedIsFunMode);

  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('themeMode', themeMode);
      if (themeMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [themeMode, isMounted]);

  useEffect(() => {
    if (isMounted) {
      // Only save userSelectedPalette if it's not the fun mode palette itself
      if (userSelectedPalette.id !== FUN_MODE_PALETTE.id) {
        localStorage.setItem('paletteId', userSelectedPalette.id);
      }
    }
  }, [userSelectedPalette, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('isFunMode', String(isFunMode));
      if (isFunMode) {
        document.documentElement.classList.add('fun-mode-active');
      } else {
        document.documentElement.classList.remove('fun-mode-active');
      }
    }
  }, [isFunMode, isMounted]);

  const handleSetThemeMode = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
  }, []);

  const handleSetUserSelectedPalette = useCallback((palette: ColorPalette) => {
    setUserSelectedPalette(palette);
    if (!isFunMode) { 
        setPreviousPaletteBeforeFunMode(palette);
    }
  }, [isFunMode]);

  const handleSetIsFunMode = useCallback((isFun: boolean) => {
    setIsFunMode(isFun);
    if (isFun) {
      // When turning ON fun mode, if current palette is not fun mode, store it.
      if(userSelectedPalette.id !== FUN_MODE_PALETTE.id) {
        setPreviousPaletteBeforeFunMode(userSelectedPalette);
      }
    } else {
      // When turning OFF fun mode, revert to the stored previous palette.
      setUserSelectedPalette(previousPaletteBeforeFunMode);
    }
  }, [userSelectedPalette, previousPaletteBeforeFunMode]);
  
  const effectivePalette = isFunMode ? FUN_MODE_PALETTE : userSelectedPalette;

  const themeContextValue = useMemo(() => ({
    themeMode,
    setThemeMode: handleSetThemeMode,
    currentPalette: effectivePalette,
    setCurrentPalette: handleSetUserSelectedPalette, 
    palettes: COLOR_PALETTES,
    isFunMode,
    setFunMode: handleSetIsFunMode,
  }), [themeMode, handleSetThemeMode, effectivePalette, handleSetUserSelectedPalette, isFunMode, handleSetIsFunMode]);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  // Base background and text colors for the entire app shell
  // These are overridden by .fun-mode-active body styles in index.html for Fun Mode
  const appShellClasses = `bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`;


  return (
    <ThemeContext.Provider value={themeContextValue}>
      {/* The fun-mode-active class on <html> will handle global font and body background for fun mode */}
      <div className={`flex flex-col min-h-screen transition-colors duration-500 ${appShellClasses}`}>
        {isFunMode && <FunModeElements />}
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AboutMeSection id={SECTION_IDS.ABOUT} title="About Me" professionalSummary={PROFESSIONAL_SUMMARY_V3} />
          <SkillsSection id={SECTION_IDS.SKILLS} title="Skills" />
          <ExperienceSection id={SECTION_IDS.EXPERIENCE} title="Work Experience" />
          <ImpactSection id={SECTION_IDS.IMPACT} title="Quantified Impact" />
          <EducationSection id={SECTION_IDS.EDUCATION} title="Education" />
          <ProjectsSection id={SECTION_IDS.PROJECTS} title="Projects" />
          <CertificationsSection id={SECTION_IDS.CERTIFICATIONS} title="Certifications" />
          <AwardsSection id={SECTION_IDS.AWARDS} title="Awards & Recognitions" />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;