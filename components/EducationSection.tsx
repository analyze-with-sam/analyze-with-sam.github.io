
import React, { useContext, useState } from 'react';
import { EDUCATION_DATA, AcademicCapIcon, OfficeBuildingIcon, ChevronDownIcon } from '../constants'; // Added OfficeBuildingIcon and ChevronDownIcon
import { EducationItem } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';


const EducationItemCard: React.FC<{ item: EducationItem }> = ({ item }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, themeMode } = context;
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);
  const [logoError, setLogoError] = React.useState(false);

  const toggleAbstract = () => setIsAbstractVisible(!isAbstractVisible);

  return (
    <Card className="mb-6 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start mb-3">
        {item.logoUrl && !logoError ? (
          <img
            src={item.logoUrl}
            alt={`${item.institution} logo`}
            className={`h-10 w-10 mr-4 object-contain flex-shrink-0 ${themeMode === 'dark' ? 'filter invert brightness-150 contrast-150' : ''}`}
            onError={() => setLogoError(true)}
          />
        ) : (
           <AcademicCapIcon className={`w-10 h-10 mr-4 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400 flex-shrink-0`} />
        )}
        <div>
          <h3 className={`text-xl font-bold text-${currentPalette.primary}-700 dark:text-${currentPalette.primary}-300`}>{item.degree}</h3>
          <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{item.institution}, {item.location}</p>
        </div>
      </div>
      <div className="pl-14"> {/* Offset content to align with text part if logo was present */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.dates}</p>
        {item.grade && <p className="text-sm text-gray-600 dark:text-gray-400">Grade: {item.grade}</p>}
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Key Modules:</h4>
          <ul className="list-disc list-inside pl-1 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {item.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>
        </div>

        {item.thesisAbstract && (
          <div className="mt-4">
            <button
              onClick={toggleAbstract}
              className={`flex items-center font-semibold text-sm text-${currentPalette.secondary}-600 dark:text-${currentPalette.secondary}-400 hover:underline focus:outline-none`}
              aria-expanded={isAbstractVisible}
            >
              Thesis Abstract <ChevronDownIcon className={`w-5 h-5 ml-1.5 transform transition-transform duration-200 ${isAbstractVisible ? 'rotate-180' : ''}`} />
            </button>
            {isAbstractVisible && (
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md">
                {item.thesisAbstract}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

const EducationSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <Section id={id} title={title}>
      <div className="max-w-3xl mx-auto">
        {EDUCATION_DATA.map((item, index) => (
          <EducationItemCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;