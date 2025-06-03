
export interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  availability: string;
}

export interface AboutMe {
  introduction: string;
  portfolioFocus: string;
}

export enum SkillProficiency {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export interface Skill {
  name: string;
  proficiency: SkillProficiency;
  iconUrl?: string; // Added for tech/tool logos
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  notes?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  technologyFocus: string;
  contributions: string[];
  impact?: string;
  logoUrl?: string; // Added for company logos
}

export interface EducationItem {
  institution: string;
  location: string;
  dates: string;
  degree: string;
  grade?: string;
  modules: string[];
  thesisAbstract?: string;
  logoUrl?: string; // Added for institution logos
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrlSeed: string; // Seed for picsum photos
  tags: string[];
}

export interface Award {
  name: string;
  issuer?: string;
  date: string;
  reason: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  primary: string; // Tailwind color prefix e.g., 'indigo'
  secondary: string; // e.g., 'pink'
  accent: string; // e.g., 'teal'
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  currentPalette: ColorPalette;
  setCurrentPalette: (palette: ColorPalette) => void;
  palettes: ColorPalette[];
  isFunMode: boolean;
  setFunMode: (isFun: boolean) => void;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface ImpactDataItem {
  label: string; // e.g., 'Workflow Efficiency'
  value: number; // e.g., 30 (for 30%)
  description?: string; // Optional: 'Achieved a 30% improvement in X by doing Y'
  unit?: string; // e.g., '%'
}

export type ImpactData = ImpactDataItem[];
