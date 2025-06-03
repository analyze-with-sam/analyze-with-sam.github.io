
import React, { useContext } from 'react';
import { SKILLS_DATA, SKILL_CATEGORY_ICONS, CodeBracketIcon } from '../constants'; // Added CodeBracketIcon as fallback
import { SkillCategory, Skill, SkillProficiency } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const ProficiencyBadge: React.FC<{ proficiency: SkillProficiency; primaryColor: string }> = ({ proficiency, primaryColor }) => {
  let bgColor = '';
  let textColor = 'text-white dark:text-gray-900'; 

  switch (proficiency) {
    case SkillProficiency.Advanced:
      bgColor = `bg-${primaryColor}-600 dark:bg-${primaryColor}-500`;
      textColor = `text-white`;
      break;
    case SkillProficiency.Intermediate:
      bgColor = `bg-${primaryColor}-500 dark:bg-${primaryColor}-400`;
      textColor = `text-white`;
      break;
    case SkillProficiency.Beginner:
      bgColor = `bg-${primaryColor}-400 dark:bg-${primaryColor}-300`;
      textColor = `text-gray-800`; 
      break;
    default:
      bgColor = 'bg-gray-400 dark:bg-gray-500';
      textColor = 'text-white';
  }

  return (
    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${bgColor} ${textColor} whitespace-nowrap`}>
      {proficiency}
    </span>
  );
};


const SkillItem: React.FC<{ skill: Skill; primaryColor: string }> = ({ skill, primaryColor }) => (
  <li className="flex justify-between items-center py-2.5 px-3 bg-gray-50 dark:bg-gray-700/60 rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center">
      {skill.iconUrl && (
        <img 
          src={skill.iconUrl} 
          alt={`${skill.name} logo`} 
          className="w-4 h-4 mr-2 object-contain"
          onError={(e) => (e.currentTarget.style.display = 'none')} // Hide if logo fails to load
        />
      )}
      <span className="text-gray-700 dark:text-gray-300 mr-2">{skill.name}</span>
    </div>
    <ProficiencyBadge proficiency={skill.proficiency} primaryColor={primaryColor} />
  </li>
);

const SkillsCategoryCard: React.FC<{ category: SkillCategory; primaryColor: string; accentColor: string }> = ({ category, primaryColor, accentColor }) => {
  const IconComponent = SKILL_CATEGORY_ICONS[category.name] || CodeBracketIcon; 

  return (
    <Card className="h-full flex flex-col" hoverEffect={true}>
      <div className="flex items-center mb-4">
        <IconComponent className={`w-7 h-7 mr-3 text-${primaryColor}-600 dark:text-${primaryColor}-400`} />
        <h3 className={`text-xl font-semibold text-gray-800 dark:text-white`}>{category.name}</h3>
      </div>
      <div className={`w-full h-0.5 bg-gradient-to-r from-${primaryColor}-400 to-${accentColor}-400 dark:from-${primaryColor}-600 dark:to-${accentColor}-600 mb-4 rounded-full`}></div>
      <ul className="space-y-1.5 flex-grow">
        {category.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} primaryColor={primaryColor} />
        ))}
      </ul>
    </Card>
  );
};

const SkillsSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  return (
    <Section id={id} title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category, index) => (
          <SkillsCategoryCard 
            key={index} 
            category={category} 
            primaryColor={currentPalette.primary}
            accentColor={currentPalette.accent}
          />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;