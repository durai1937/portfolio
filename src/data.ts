import { DeveloperProfile, Project, Experience, Skill, ContactSection } from './types';
import portfolioData from './portfolio.json';

export const developerProfile: DeveloperProfile = portfolioData.developerProfile as DeveloperProfile;
export const projectsData: Project[] = portfolioData.projectsData as Project[];
export const experienceData: Experience[] = portfolioData.experienceData as Experience[];
export const skillsData: Skill[] = portfolioData.skillsData as Skill[];
export const contactSection: ContactSection = portfolioData.contactSection as ContactSection;

