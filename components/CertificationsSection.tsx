
import React, { useContext } from 'react';
import { CERTIFICATIONS_DATA, BadgeCheckIcon } from '../constants';
import { Certification } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';

const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  return (
    <Card className="text-center p-5 h-full flex flex-col justify-center items-center" hoverEffect={true}>
      <div className={`p-3.5 mb-4 rounded-full bg-gradient-to-br from-${currentPalette.primary}-100 to-${currentPalette.secondary}-100 dark:from-${currentPalette.primary}-800 dark:to-${currentPalette.secondary}-800 inline-block shadow-md`}>
        <BadgeCheckIcon className={`w-8 h-8 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-300`} />
      </div>
      <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1">{cert.name}</h3>
      <p className={`text-sm text-${currentPalette.secondary}-700 dark:text-${currentPalette.secondary}-400`}>{cert.issuer}</p>
      {cert.notes && <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{cert.notes}</p>}
    </Card>
  );
};

const CertificationsSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <Section id={id} title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <CertificationItem key={index} cert={cert} />
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
