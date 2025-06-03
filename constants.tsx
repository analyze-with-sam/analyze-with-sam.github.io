
import { PersonalInfo, AboutMe, SkillCategory, SkillProficiency, Certification, ExperienceItem, EducationItem, Project, Award, ColorPalette, ImpactDataItem } from './types';

export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  AWARDS: 'awards',
  IMPACT: 'impact', // New section ID
  CONTACT: 'contact', // Usually in footer or hero
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Samiksha Tripathi",
  tagline: "Technical Analyst driving innovation and customer-centric solutions.",
  location: "Dundrum, Co Dublin",
  phone: "0892125530",
  email: "samiksha.tripathiie@gmail.com",
  linkedin: "https://www.linkedin.com/in/samiksha-tripathi",
  availability: "On a Stamp 1G Visa under the Third Level Graduate Scheme from November 2024 and available to work full time without requiring a work permit for 2 years.",
};

export const ABOUT_ME_DATA: AboutMe = {
  introduction: "I bring a unique perspective to problem-solving, excelling at mapping requirements to resources and grasping the 'big picture.' My approach is methodical, blending creativity with analytical rigor. I find deep satisfaction in resolving complex challenges, a passion that complements my appreciation for painting, arts and crafts, reading, and connecting with nature.",
  portfolioFocus: "Seeking technical roles that leverage past experience (IBM FileNet, SmartIQ, Java, project management, business consulting) while providing opportunities for strategic input, analytical leadership, and direct client impact. Keen to understand the 'big picture' and see the tangible results of contributions rather than working in a siloed manner. Target Roles: Product Manager, IT Project Lead, Technology or Digital Consultant, Technical Business Analyst (with strategic scope), Customer Experience Specialist (product-focused)."
};

export const PROFESSIONAL_SUMMARY_V3 = "Results-driven Customer Experience & Business Analyst with 5+ years of experience in customer journey optimization, stakeholder management, and data-driven strategy development. Proficient in managing NPS and CSAT programs, conducting customer feedback analysis, and leading process improvements to enhance user satisfaction. Skilled in cross-functional collaboration, project coordination, and business intelligence tools to drive customer success initiatives. Pursued an MSc in Data Analytics at National College of Ireland, bringing expertise in predictive analysis, data visualization, and customer sentiment tracking. Recognized for a customer-first approach, problem-solving mindset, and ability to align business objectives with enhanced user experience.";


export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Business & Product Analysis",
    skills: [
      { name: "Requirement Gathering & Analysis", proficiency: SkillProficiency.Advanced },
      { name: "Product Roadmap Development & Execution", proficiency: SkillProficiency.Advanced },
      { name: "Feature Prioritization", proficiency: SkillProficiency.Advanced },
      { name: "Market Research & Competitive Analysis", proficiency: SkillProficiency.Intermediate },
      { name: "Business Process Modelling & Optimization", proficiency: SkillProficiency.Advanced },
      { name: "Agile Methodologies", proficiency: SkillProficiency.Advanced, iconUrl: "https://icon.horse/icon/agilealliance.org" },
    ],
  },
  {
    name: "Data Analysis & Business Intelligence",
    skills: [
      { name: "Data-driven Decision Making", proficiency: SkillProficiency.Advanced },
      { name: "Data Collection, Analysis & Presentation", proficiency: SkillProficiency.Advanced },
      { name: "Power BI Dashboards", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/powerbi.microsoft.com" },
      { name: "Tableau Dashboards", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/tableau.com" },
      { name: "SQL", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/mysql.com" }, // Generic SQL icon
      { name: "Python (Pandas, NumPy)", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/python.org" },
    ],
  },
  {
    name: "Customer Experience (CX)",
    skills: [
      { name: "Customer Journey Optimization & Mapping", proficiency: SkillProficiency.Advanced },
      { name: "User Experience (UX) Enhancement", proficiency: SkillProficiency.Advanced },
      { name: "CX Research Methodologies", proficiency: SkillProficiency.Intermediate },
      { name: "UX/UI Design, Prototyping (Figma, Canva)", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/figma.com" },
    ],
  },
  {
    name: "Project & Stakeholder Management",
    skills: [
      { name: "Project Coordination, Planning, Tracking, Executing", proficiency: SkillProficiency.Advanced },
      { name: "Agile (Sprint Planning, Retrospectives, Demos, Epics)", proficiency: SkillProficiency.Advanced },
      { name: "Stakeholder Management", proficiency: SkillProficiency.Advanced },
      { name: "Cross-Functional Collaboration", proficiency: SkillProficiency.Advanced },
    ],
  },
  {
    name: "Technical Skills",
    skills: [
      { name: "Java Enterprise Edition", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/java.com" },
      { name: "Restful APIs, Spring", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/spring.io" },
      { name: "IBM FileNet", proficiency: SkillProficiency.Advanced, iconUrl: "https://icon.horse/icon/ibm.com" }, // Generic IBM
      { name: "SmartIQ", proficiency: SkillProficiency.Advanced, iconUrl: "https://icon.horse/icon/smartcommunications.com" }, // Generic SmartComm
      { name: "JIRA", proficiency: SkillProficiency.Advanced, iconUrl: "https://icon.horse/icon/jira.atlassian.com" },
      { name: "MySQL, Excel, Miro, Trello", proficiency: SkillProficiency.Intermediate },
    ],
  },
   {
    name: "Gemini API & AI",
    skills: [
      { name: "Gemini API Integration", proficiency: SkillProficiency.Intermediate, iconUrl: "https://icon.horse/icon/ai.google" },
      { name: "Prompt Engineering", proficiency: SkillProficiency.Intermediate },
      { name: "AI-driven Solutions Development", proficiency: SkillProficiency.Beginner },
    ],
  },
  {
    name: "Other Skills",
    skills: [
      { name: "Digital Transformation Strategy", proficiency: SkillProficiency.Intermediate },
      { name: "Training Module Authoring & Delivery", proficiency: SkillProficiency.Advanced },
      { name: "Proof of Concept (POC) Creation", proficiency: SkillProficiency.Advanced },
      { name: "Technical Documentation", proficiency: SkillProficiency.Advanced },
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { name: "Google UX Design Process", issuer: "Coursera" },
  { name: "Google Foundation UX Design", issuer: "Coursera" },
  { name: "Smart IQ Design and Adaptive Interview Certified", issuer: "Smart Communications" },
  { name: "Infosys Certified Digital Marketing and Content Services Professional", issuer: "Infosys", notes: "Obtained through an internal Infosys course opportunity" },
  { name: "Infosys Certified Global Agile Developer", issuer: "Infosys" },
  { name: "Infosys Certified J2EE Java Spring and Angular Full Stack Developer", issuer: "Infosys" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Application Development Senior Analyst",
    company: "Accenture Pune",
    dates: "Sep 2022 – Sept 2023",
    technologyFocus: "IBM FileNet",
    contributions: [
      "Led the migration of the entire IBM FileNet on-premise environment (Dev, SIT, UAT, Prod) to Azure Cloud, enabling scalability and faster data fetching.",
      "Proactively created Proof of Concepts (POCs) for potential requirements, identifying unarticulated user needs and improving user experience.",
      "Developed Power BI dashboards for client-side stakeholders, improving visibility into key metrics.",
      "Coordinated with cross-functional teams (UX, developers, product managers) to drive digital transformation projects.",
      "Implemented process improvements, reducing inefficiencies and increasing operational performance."
    ],
    impact: "Improvements in decision-making and operational performance through strategic suggestions and task optimization over a 6-month timeframe.",
    logoUrl: "https://icon.horse/icon/accenture.com",
  },
  {
    role: "Technology Analyst",
    company: "Infosys Pune",
    dates: "Dec 2021 – Sep 2022",
    technologyFocus: "SmartIQ",
    contributions: [
      "Spearheaded the digital transformation of paper-based healthcare insurance form processes using SmartIQ.",
      "Managed project delivery, resolved roadblocks, and scaled the team from 15 to 50 resources, personally training all members on SmartIQ.",
      "Organized test cases, defect logs, and user stories, implementing them on JIRA.",
      "Authored training materials and detailed functional/technical documentation."
    ],
    impact: "Client retention and significant project scope expansion due to timely and high-quality deliverables. Improved workflow efficiency.",
    logoUrl: "https://icon.horse/icon/infosys.com",
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Pune",
    dates: "Mar 2020 – Dec 2021",
    technologyFocus: "SmartIQ",
    contributions: [
      "Designed a reusable POC for saving forms at specific lifecycle stages, applicable across multiple client products.",
      "Reduced defect injection rates by ~20% by implementing JIRA for defect tracking as the team scaled.",
      "Developed business process maps and visualized workflows to streamline operations.",
      "Mentored junior developers, improving team productivity."
    ],
    impact: "Operational efficiency improvements based on suggestions and process changes over a 6-month period.",
    logoUrl: "https://icon.horse/icon/infosys.com",
  },
  {
    role: "Systems Software Engineer",
    company: "Infosys Hyderabad",
    dates: "Nov 2018 – Mar 2020",
    technologyFocus: "IBM FileNet",
    contributions: [
      "Created a utility using Java APIs to automate manual document security updates in IBM FileNet, reducing task completion time by ~10%.",
      "Enhanced IBM Content Navigator (ICN) with a drag-and-drop feature for document ingestion, improving usability.",
      "Monitored system health checks, contributing to reduced downtime.",
      "Resolved UAT issues and enforced coding standards."
    ],
    impact: "Reduced downtime and improved system health through diligent monitoring and analysis. Enhanced operational workflows.",
    logoUrl: "https://icon.horse/icon/infosys.com",
  },
  {
    role: "Systems Software Trainee",
    company: "Infosys Mysore",
    dates: "Jun 2018 – Nov 2018",
    technologyFocus: "J2EE",
    contributions: [
      "Training in Python, RDBMS, Data Structures.",
      "Training in Java Enterprise Edition, Hibernate, Restful API, Spring Rest, Angular 4, web page development, Adobe AEM."
    ],
    logoUrl: "https://icon.horse/icon/infosys.com",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "National College of Ireland",
    location: "Co Dublin",
    dates: "Sept 2023 – Sept 2024 (Current)",
    degree: "MSc Data Analytics",
    modules: ["Statistics for Data Analytics", "Database and Analytics Programming", "Data Mining and Machine Learning", "Business Analytics and Business Intelligence", "Predictive Analysis", "Modelling, Simulation and Optimization"],
    thesisAbstract: "This research investigates the impact of retrofit interventions on the energy performance of domestic buildings in Ireland using predictive machine learning (ML) models. The study applies Machine learning models to classify Building Energy Ratings (BER) for dwellings in County Dublin Ireland. Keeping the focus on selecting features in a highly correlated dataset, the study predicts Energy ratings with an accuracy of 69 percent. Light Gradient Boosting Machine Classifier is observed for best performance among twenty plus ML models applied for prediction. The study also performs retrofit experiments on dwelling features and evaluate their effectiveness towards improving the energy performance of the dwelling contributing to Energy Performance of Buildings Directives (EPBD) applicable in Ireland using Statistical Inferences. This research discusses the potential of data driven approaches in optimizing energy utilisation and shaping policies for sustainable building practices.",
    logoUrl: "https://icon.horse/icon/ncirl.ie",
  },
  {
    institution: "Lakshmi Narain College of Technology",
    location: "R.G.P.V. Bhopal, M.P.",
    dates: "Aug 2014 – June 2018",
    degree: "Bachelor of Engineering in Electrical",
    grade: "87.8%",
    modules: ["Engineering Maths", "Power Systems", "Electrical Machines", "Signals and Systems", "High Voltage Engineering", "Analog and Digital Electronics", "Energy Utilization", "Sustainable and Renewable Energy"],
    logoUrl: "https://icon.horse/icon/lnct.ac.in",
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project1",
    title: "E-commerce KPI Dashboard",
    description: "Developed a Power BI dashboard to track e-commerce Key Performance Indicators, including customer engagement, conversion rates, and sales trends. Provides actionable insights for business optimization.",
    imageUrlSeed: "ecommerce_kpi",
    tags: ["Power BI", "Data Visualization", "E-commerce", "Analytics"],
  },
  {
    id: "project2",
    title: "Energy Consumption Predictive Analysis",
    description: "Conducted predictive analysis on energy consumption data using Python and machine learning techniques. Provided actionable insights to optimize usage and promote sustainability.",
    imageUrlSeed: "energy_predict",
    tags: ["Python", "Machine Learning", "Predictive Analysis", "Energy"],
  },
  {
    id: "project3",
    title: "Sustainability KPIs Visualization",
    description: "Created visualizations for tracking sustainability KPIs like carbon footprint, water usage, and energy savings. Aimed at promoting environmental awareness and data-driven sustainability efforts.",
    imageUrlSeed: "sustainability_viz",
    tags: ["Data Visualization", "Sustainability", "Tableau", "Analytics"],
  },
  {
    id: "project4",
    title: "Interactive Portfolio Website",
    description: "This very portfolio website, built with React, TypeScript, and Tailwind CSS, showcasing skills and projects with a materialistic design and theme customization.",
    imageUrlSeed: "portfolio_dev",
    tags: ["React", "TypeScript", "Tailwind CSS", "Frontend"],
  }
];

export const AWARDS_DATA: Award[] = [
  { name: "HCSC Glory Award", issuer: "Accenture", date: "March 2022", reason: "Exceptional performance as the 'Navigator to the Client HCSC.' Acted as the main POC for internal management and the client for business deadlines, roadblocks, sprint planning, test cases, user stories, strategizing epics, demos, POCs. Proactively facilitated solutions and delivered value beyond client expectations." },
  { name: "Infosys INSTA Award", issuer: "Infosys", date: "May 2022", reason: "Outstanding work in leading the team, enabling the team, and delivering value-added solutions to the client, making a significant impact." },
  { name: "Infosys RISE Glory Award (x2)", issuer: "Infosys", date: "March 2022, June 2022", reason: "Exceptional growth demonstrated within the project, undertaking extended roles and responsibilities." },
  { name: "Skill Tagged by Infosys as Digital Marketing Professional", issuer: "Infosys", date: "Year not specified", reason: "Completed an internal Infosys certification course in Digital Marketing due to interest and potential for future projects." },
];

const FUN_MODE_PALETTE_ID = 'fun_mode_bloom';
export const FUN_MODE_PALETTE: ColorPalette = { id: FUN_MODE_PALETTE_ID, name: '8-Bit Bloom', primary: 'lime', secondary: 'pink', accent: 'yellow' };


export const COLOR_PALETTES: ColorPalette[] = [
  { id: 'indigo_pink', name: 'Indigo Dream', primary: 'indigo', secondary: 'pink', accent: 'sky' },
  { id: 'green_teal', name: 'Forest Whisper', primary: 'green', secondary: 'teal', accent: 'lime' },
  { id: 'orange_red', name: 'Sunset Blaze', primary: 'orange', secondary: 'red', accent: 'amber' },
  { id: 'blue_cyan', name: 'Ocean Breeze', primary: 'blue', secondary: 'cyan', accent: 'sky' },
  { id: 'purple_gold', name: 'Royal Amethyst', primary: 'purple', secondary: 'yellow', accent: 'fuchsia' },
  // FUN_MODE_PALETTE is not included here by default to keep it separate from user-selectable main themes
];

export const IMPACT_DATA: ImpactDataItem[] = [
  { label: 'Workflow Efficiency', value: 30, unit: '%', description: 'Increased workflow efficiency by 30% through process automation and digitization.' },
  { label: 'Team Scalability', value: 233, unit: '%', description: 'Scaled team size from 15 to 50 members (a 233% increase) while maintaining quality.' },
  { label: 'Training Cost Reduction', value: 20, unit: '%', description: 'Reduced training costs by 20% by developing comprehensive training materials.' },
  { label: 'Defect Rate Reduction', value: 20, unit: '%', description: 'Lowered defect injection rates by 20% by implementing robust JIRA tracking.' },
  { label: 'Customer Complaint Reduction', value: 15, unit: '%', description: 'Decreased customer complaints by 15% via structured feedback loops.' },
  { label: 'Operational Performance', value: 15, unit: '%', description: 'Boosted operational performance by 15% with process improvements.' },
  { label: 'Customer Retention Increase', value: 12, unit: '%', description: 'Improved customer retention by 12% by prioritizing requested features.' },
  { label: 'Processing Time Reduction', value: 10, unit: '%', description: 'Cut document security update processing time by 10% with a custom Java utility.' },
];


// Heroicons & Custom SVGs

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25 2.25 2.25 0 002.25 2.25 2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 12z" />
  </svg>
);

export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

export const PaletteIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5m6-6H13.5m0 0v1.5m0 0h1.5m-1.5 0H12m1.5 0V3m0 3.75L12 3m1.5 3.75L15 3m-3 3.75H12m3 0h1.5m2.25 3.75H15m0 0v1.5m0 0h1.5m-1.5 0H12m1.5 0V7.5m0 3.75L12 7.5m1.5 3.75L15 7.5m-3 3.75H12m3 0h1.5M12 16.5h1.5m0 0v1.5m0 0h1.5m-1.5 0H12m1.5 0V16.5m0 3.75L12 16.5m1.5 3.75L15 16.5m-3 3.75H12m3 0h1.5" />
</svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const CodeBracketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0c.478 0 .927.026 1.372.076M6.75 15.75c-.478 0-.927-.026-1.372-.076" />
  </svg>
);

export const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.515M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0zM12.75 15.363a4.502 4.502 0 00-3.5-.03" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L12.75 12m0 0l.25.875M12.75 12L12 14.25m0 0l-.25.875m-2.5-3.375l-.25.875m0 0L9 14.25" />
  </svg>
);

export const ClipboardDocumentListIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0cA3.375 3.375 0 015.25 7.11v1.536c0 .63.225 1.216.632 1.658a7.485 7.485 0 011.453.649V18a2.25 2.25 0 002.25 2.25h5.25M9 3.75v1.5m0 0A2.25 2.25 0 0011.25 3h1.5A2.25 2.25 0 0015 5.25v1.5m-6 0h6" />
  </svg>
);

export const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M3.75 3.75v16.5h16.5V3.75H3.75zm14.25 1.5V12l-5.25 3L7.5 12V5.25h10.5zm-3.75 9.345L12 16.5l-2.25-1.405V12.75h4.5v2.095z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5l5.25-3.375M12 3.75v12.75m0 0l-5.25-3.375M3.75 7.5h16.5" />
  </svg>
);

export const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.125c0 1.095-.895 1.975-1.975 1.975h-12.5c-1.095 0-1.975-.895-1.975-1.975V14.15M5.75 7.5h12.5m-12.5 0V4.875c0-1.095.895-1.975 1.975-1.975h8.55c1.095 0 1.975.895 1.975 1.975V7.5m-12.5 0h12.5m-6.25 4.125V11.25" />
  </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 13.5L18 15.75l-1.5 2.25L15 15.75l-1.5-2.25L15 11.25l1.5 2.25z" />
  </svg>
);

export const PuzzlePieceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M14.25 7.756c.628-1.203 1.943-2.006 3.366-2.006 1.423 0 2.738.803 3.366 2.006M14.25 7.756V3.75m0 4.006H9.375m0 0A4.5 4.5 0 11.875 12H9.375m0 0V7.756m4.875 8.488c-.628 1.203-1.943 2.006-3.366-2.006-1.423 0-2.738-.803-3.366-2.006m3.366-2.006H3.75m0 0V12m4.125 0A4.5 4.5 0 1012 3.875M7.875 12H12m0 0V7.756" />
  </svg>
);

export const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const BadgeCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

export const FlowerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25c1.5 0 2.25-1.418 2.25-2.25S13.5 3.75 12 3.75 9.75 4.418 9.75 5.25 10.5 8.25 12 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25C10.102 8.25 8.25 10.102 8.25 12s1.852 3.75 3.75 3.75S15.75 13.898 15.75 12 13.898 8.25 12 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25c1.5 0 2.25 1.418 2.25 2.25S17.25 12.75 15.75 12.75s-2.25-1.418-2.25-2.25S14.25 8.25 15.75 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25c-1.5 0-2.25 1.418-2.25 2.25S6.75 12.75 8.25 12.75s2.25-1.418 2.25-2.25S9.75 8.25 8.25 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75c-1.5 0-2.25 1.418-2.25 2.25S10.5 20.25 12 20.25s2.25-1.418 2.25-2.25S13.5 15.75 12 15.75z" />
  </svg>
);


// Mapping skill category names to icons
export const SKILL_CATEGORY_ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Business & Product Analysis": BriefcaseIcon,
  "Data Analysis & Business Intelligence": ChartBarIcon,
  "Customer Experience (CX)": UserGroupIcon,
  "Project & Stakeholder Management": ClipboardDocumentListIcon,
  "Technical Skills": CodeBracketIcon,
  "Gemini API & AI": SparklesIcon,
  "Other Skills": PuzzlePieceIcon,
  "Quantified Impact": ChartBarIcon, // Added for Impact Section
};

// Generic Company/University Icon (Fallback)
export const OfficeBuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6m-6 4.5h6M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21M6.75 3V2.25c0-.414.336-.75.75-.75h9c.414 0 .75.336.75.75V3" />
  </svg>
);
