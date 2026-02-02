export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  graduationDate: string;
  courses: string[];
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
  metrics: { label: string; value: string }[];
  color: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: Skill[];
}

export interface Certification {
  name: string;
  date: string;
  id: number;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  technologies: string[];
  color: string;
  featured: boolean;
}

export interface NavLink {
  name: string;
  href: string;
}
