
import React, { useContext } from 'react';
import { ABOUT_ME_DATA } from '../constants';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

interface AboutMeSectionProps {
  id: string;
  title: string;
  professionalSummary: string;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ id, title, professionalSummary }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  return (
    <Section id={id} title={title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <h3 className={`text-2xl font-semibold mb-4 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`}>My Approach</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {ABOUT_ME_DATA.introduction}
          </p>
        </Card>
        <Card>
          <h3 className={`text-2xl font-semibold mb-4 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`}>Professional Summary</h3>
           <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {professionalSummary}
          </p>
        </Card>
        <Card>
          <h3 className={`text-2xl font-semibold mb-4 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`}>Portfolio Focus & Target Roles</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {ABOUT_ME_DATA.portfolioFocus}
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default AboutMeSection;
