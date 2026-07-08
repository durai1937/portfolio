export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-stack' | 'Frontend' | 'Cloud & DevOps' | 'AI & Data';
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface DeveloperProfile {
  name: string;
  title: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  resumeUrl: string;
  aboutImageUrl: string;
  stats: {
    label: string;
    value: string;
    iconName: string;
  }[];
}
