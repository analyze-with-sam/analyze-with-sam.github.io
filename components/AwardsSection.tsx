
import React, { useContext } from 'react';
import { AWARDS_DATA } from '../constants';
import { Award } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const AwardItem: React.FC<{ award: Award }> = ({ award }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  return (
    <Card className="mb-6" hoverEffect={true}>
       <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 p-2.5 rounded-full bg-${currentPalette.accent}-100 dark:bg-${currentPalette.accent}-800`}>
          {/* Placeholder for an award/trophy icon */}
          <svg className={`w-6 h-6 text-${currentPalette.accent}-600 dark:text-${currentPalette.accent}-400`} fill="currentColor" viewBox="0 0 20 20">
             <path d="M10 2a.75.75 0 01.75.75v1.5h3.75a.75.75 0 010 1.5H10.75V15L14 12.59V9.75a.75.75 0 011.5 0v3.34l-5.25 3.15L5 13.09V9.75a.75.75 0 011.5 0v2.84L10 15V5.75H6.25a.75.75 0 010-1.5H10V2.75A.75.75 0 0110 2zM8.5 6.75h3a.75.75 0 000-1.5h-3a.75.75 0 000 1.5z" />
          </svg>
        </div>
        <div>
          <h3 className={`text-lg font-semibold text-${currentPalette.primary}-700 dark:text-${currentPalette.primary}-300`}>{award.name}</h3>
          {award.issuer && <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{award.issuer} - {award.date}</p>}
          {!award.issuer && <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{award.date}</p>}
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{award.reason}</p>
        </div>
      </div>
    </Card>
  );
};

const AwardsSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <Section id={id} title={title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-3xl mx-auto">
        {AWARDS_DATA.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;
