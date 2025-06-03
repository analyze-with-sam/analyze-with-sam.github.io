
import React, { useContext } from 'react';
import { EXPERIENCE_DATA, BriefcaseIcon, OfficeBuildingIcon } from '../constants'; // Added OfficeBuildingIcon
import { ExperienceItem } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const ExperienceItemCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, themeMode } = context;
  const [logoError, setLogoError] = React.useState(false);

  return (
    <Card className="mb-8 transform transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div className="md:flex">
        <div className={`md:w-1/3 p-4 md:p-6 mb-4 md:mb-0 md:pr-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 dark:border-gray-700 bg-${currentPalette.primary}-50 dark:bg-${currentPalette.primary}-900/30 rounded-t-xl md:rounded-tr-none md:rounded-l-xl flex flex-col items-start`}>
          {item.logoUrl && !logoError ? (
            <img
              src={item.logoUrl}
              alt={`${item.company} logo`}
              className={`h-10 max-w-full mb-3 object-contain ${themeMode === 'dark' ? 'filter invert' : ''}`} // Basic invert for dark mode, might need adjustment
              onError={() => setLogoError(true)}
            />
          ) : (
            <OfficeBuildingIcon className={`h-10 w-10 mb-3 text-gray-400 dark:text-gray-500`} />
          )}
          <div className="flex items-center mb-2">
            <BriefcaseIcon className={`w-6 h-6 mr-2 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400 flex-shrink-0`} />
            <h3 className={`text-xl font-bold text-${currentPalette.primary}-700 dark:text-${currentPalette.primary}-300`}>{item.role}</h3>
          </div>
          <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{item.company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item.dates}</p>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            <span className={`font-semibold text-${currentPalette.secondary}-700 dark:text-${currentPalette.secondary}-300`}>Tech Focus:</span> {item.technologyFocus}
          </p>
        </div>
        <div className="md:w-2/3 p-4 md:p-6">
          <h4 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Contributions:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {item.contributions.map((contrib, index) => (
              <li key={index}>{contrib}</li>
            ))}
          </ul>
          {item.impact && (
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                <strong className={`text-${currentPalette.accent}-600 dark:text-${currentPalette.accent}-400`}>Impact:</strong> {item.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};


const ExperienceSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  
  return (
    <Section id={id} title={title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="relative max-w-4xl mx-auto">
        <div 
          className="absolute left-0 md:left-6 top-0 bottom-0 w-1 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${context.currentPalette.primary}30, ${context.currentPalette.secondary}30, ${context.currentPalette.accent}30)`}}
        ></div>
        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="relative pl-0 md:pl-12 mb-6">
            <div className={`absolute left-0 md:left-6 top-3.5 w-3 h-3 bg-${context.currentPalette.primary}-500 dark:bg-${context.currentPalette.primary}-400 rounded-full border-2 border-white dark:border-gray-800/50 shadow-md`}></div>
            <ExperienceItemCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;