
import React, { useContext } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import Section from './Section';
import Card from './Card';
import { ThemeContext } from '../App';
import { ThemeContextType } from '../types';
import { ExternalLinkIcon } from '../constants';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette } = context;

  return (
    <Card className="flex flex-col h-full" hoverEffect={true}>
      <img 
        src={`https://picsum.photos/seed/${project.imageUrlSeed}/600/400`} 
        alt={project.title} 
        className="w-full h-48 object-cover rounded-t-lg" 
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold mb-2 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`}>{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 flex-grow">{project.description}</p>
        <div className="mb-3">
          {project.tags.map((tag, index) => (
            <span key={index} className={`inline-block bg-${currentPalette.secondary}-100 dark:bg-${currentPalette.secondary}-800 text-${currentPalette.secondary}-800 dark:text-${currentPalette.secondary}-200 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full`}>
              {tag}
            </span>
          ))}
        </div>
        <a 
            href="#" // Replace with actual project link if available
            target="_blank" 
            rel="noopener noreferrer"
            className={`mt-auto inline-flex items-center text-sm font-medium text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400 hover:text-${currentPalette.primary}-800 dark:hover:text-${currentPalette.primary}-200`}
          >
            View Project <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </Card>
  );
};

const ProjectsSection: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <Section id={id} title={title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
       <p className="text-center mt-12 text-gray-600 dark:text-gray-400">
        More project images and details will be added soon.
      </p>
    </Section>
  );
};

export default ProjectsSection;
