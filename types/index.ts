export type ProjectCategory = 'AI' | 'Machine Learning' | 'Frontend' | 'Backend' | 'Full Stack' | 'Games' | 'Research' | 'Featured';

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  problem?: string;
  solution?: string;
  architectureDiagram?: string;
  techStack: string[];
  challenges?: string[];
  screenshots?: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  category: ProjectCategory[];
  featured: boolean;
  pinned: boolean;
  stars?: number;
  forks?: number;
  createdAt: string;
  futureImprovements?: string[];
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  views: number;
  likes: number;
}

export type ResearchType = 'Research Paper' | 'Hackathon' | 'Article' | 'Case Study';

export interface ResearchItem {
  id: string;
  title: string;
  type: ResearchType;
  date: string;
  abstract: string;
  methodology?: string;
  results?: string;
  link?: string;
  institution?: string;
  authors: string[];
  tags: string[];
}

export interface Poem {
  id: string;
  title: string;
  date: string;
  lines: string[];
  theme: string;
  readingTime: string;
}

export type AchievementCategory = 'Hackathon' | 'Award' | 'Leadership' | 'Research' | 'Competitive Programming';

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: AchievementCategory;
  description: string;
  icon: string;
  certificateUrl?: string;
}

export interface CPStat {
  platform: 'LeetCode' | 'Codeforces' | 'CodeChef' | 'HackerRank';
  rating: number | string;
  maxRating: number | string;
  rank: string;
  solved: number | string;
  badge: string;
  contestCount: number;
  profileUrl: string;
  color: string;
  recentActivity?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
  description: string;
  years: string;
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'AI & ML' | 'DevOps & Databases' | 'Core & Problem Solving';
  skills: SkillItem[];
}

export interface CareerNode {
  id: string;
  period: string;
  title: string;
  role: string;
  company: string;
  location: string;
  type: 'Education' | 'Experience' | 'Milestone' | 'Research';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ContactMessage {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied';
  ip?: string;
}

export interface AIQuestion {
  question: string;
  answer: string;
  category: 'bio' | 'projects' | 'skills' | 'cp' | 'contact' | 'general';
}
