import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedProjectsGrid from '@/components/sections/FeaturedProjectsGrid';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CompetitiveProgrammingSection from '@/components/sections/CompetitiveProgrammingSection';
import GitHubActivitySection from '@/components/sections/GitHubActivitySection';
import AIChatbotSection from '@/components/sections/AIChatbotSection';
import ResearchSection from '@/components/sections/ResearchSection';
import BlogSection from '@/components/sections/BlogSection';
import PoetrySection from '@/components/sections/PoetrySection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsGrid />
      <ProjectsSection />
      <SkillsSection />
      <CompetitiveProgrammingSection />
      <GitHubActivitySection />
      <AIChatbotSection />
      <ResearchSection />
      <BlogSection />
      <PoetrySection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
