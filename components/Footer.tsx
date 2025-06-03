
import React, { useContext } from 'react';
import { PERSONAL_INFO, SECTION_IDS, MailIcon, LinkedInIcon, PhoneIcon } from '../constants';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const Footer: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  const year = new Date().getFullYear();

  return (
    <footer id={SECTION_IDS.CONTACT} className={`bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-xl font-semibold text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400 mb-3`}>Samiksha Tripathi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{PERSONAL_INFO.tagline}</p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold text-gray-800 dark:text-white mb-3`}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={`#${SECTION_IDS.ABOUT}`} className={`text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400`}>About</a></li>
              <li><a href={`#${SECTION_IDS.SKILLS}`} className={`text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400`}>Skills</a></li>
              <li><a href={`#${SECTION_IDS.EXPERIENCE}`} className={`text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400`}>Experience</a></li>
              <li><a href={`#${SECTION_IDS.PROJECTS}`} className={`text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400`}>Projects</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`text-lg font-semibold text-gray-800 dark:text-white mb-3`}>Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400">
                  <MailIcon className="w-4 h-4 mr-2 flex-shrink-0" /> {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400">
                  <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" /> {PERSONAL_INFO.phone}
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-${currentPalette.primary}-600 dark:hover:text-${currentPalette.primary}-400">
                  <LinkedInIcon className="w-4 h-4 mr-2 flex-shrink-0" /> LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>
           <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
