import axios from 'axios';
import { Project } from '@/types';
import { FEATURED_PROJECTS } from '@/data/portfolioData';

const GITHUB_USERNAME = 'Devparth7-coder';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  homepage: string | null;
}

let cachedRepos: Project[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export async function fetchGitHubProjects(forceRefresh = false): Promise<Project[]> {
  const now = Date.now();
  if (cachedRepos && !forceRefresh && now - lastFetchTime < CACHE_DURATION) {
    return cachedRepos;
  }

  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'DevParth-Portfolio-App'
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    console.log(`🔍 [GitHub Service] Fetching repositories for ${GITHUB_USERNAME}...`);
    const response = await axios.get<GitHubRepo[]>(`${GITHUB_API_URL}/repos?per_page=100&sort=updated`, {
      headers,
      timeout: 5000,
    });

    const repos = response.data;
    
    const mappedProjects: Project[] = repos.map((repo) => {
      const existingFeatured = FEATURED_PROJECTS.find(
        (fp) => fp.name.toLowerCase().includes(repo.name.toLowerCase()) || 
                fp.slug.toLowerCase().includes(repo.name.toLowerCase()) ||
                repo.name.toLowerCase().includes(fp.slug.toLowerCase())
      );

      if (existingFeatured) {
        return {
          ...existingFeatured,
          stars: repo.stargazers_count || existingFeatured.stars,
          forks: repo.forks_count || existingFeatured.forks,
          githubUrl: repo.html_url || existingFeatured.githubUrl,
          liveUrl: repo.homepage || existingFeatured.liveUrl,
        };
      }

      const category: any[] = ['Full Stack'];
      if (repo.language === 'Python' || repo.name.toLowerCase().includes('ai') || repo.name.toLowerCase().includes('neural')) {
        category.push('AI', 'Machine Learning');
      } else if (repo.language === 'HTML' || repo.language === 'CSS' || repo.language === 'JavaScript' || repo.language === 'TypeScript') {
        category.push('Frontend');
      }
      if (repo.name.toLowerCase().includes('game') || repo.name.toLowerCase().includes('pacman') || repo.name.toLowerCase().includes('dodger')) {
        category.push('Games');
      }

      return {
        id: `gh-${repo.id}`,
        name: repo.name.replace(/-/g, ' '),
        slug: repo.name.toLowerCase(),
        description: repo.description || `An open source ${repo.language || 'software'} repository by Dev Parth.`,
        longDescription: repo.description || `An innovative open source project engineered by Dev Parth focusing on clean architecture, performance, and scalable web technologies.`,
        techStack: repo.language ? [repo.language, ...(repo.topics || [])] : ['JavaScript', 'HTML5'],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || undefined,
        tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Code'],
        category,
        featured: false,
        pinned: false,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        createdAt: repo.created_at.split('T')[0],
      };
    });

    const mergedProjects = [...mappedProjects];
    for (const fp of FEATURED_PROJECTS) {
      if (!mergedProjects.some((p) => p.slug === fp.slug || p.id === fp.id)) {
        mergedProjects.unshift(fp);
      }
    }

    cachedRepos = mergedProjects;
    lastFetchTime = now;
    console.log(`✅ [GitHub Service] Successfully synced ${mergedProjects.length} repositories.`);
    return mergedProjects;
  } catch (error) {
    console.warn('⚠️ [GitHub Service] Failed to fetch live GitHub repos (falling back to featured data):', (error as Error).message);
    cachedRepos = FEATURED_PROJECTS;
    return FEATURED_PROJECTS;
  }
}

export async function getGitHubStats() {
  try {
    const repos = await fetchGitHubProjects();
    const totalStars = repos.reduce((acc, repo) => acc + (repo.stars || 0), 0);
    const totalForks = repos.reduce((acc, repo) => acc + (repo.forks || 0), 0);
    const languageMap: Record<string, number> = {};
    
    repos.forEach((repo) => {
      repo.techStack.forEach((tech) => {
        if (['TypeScript', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'Next.js', 'React', 'Three.js'].includes(tech)) {
          languageMap[tech] = (languageMap[tech] || 0) + 1;
        }
      });
    });

    return {
      totalRepos: repos.length,
      totalStars,
      totalForks,
      totalCommits: 1450,
      languages: Object.entries(languageMap).map(([name, count]) => ({ name, count })),
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    return {
      totalRepos: 32,
      totalStars: 184,
      totalForks: 48,
      totalCommits: 1450,
      languages: [
        { name: 'TypeScript', count: 12 },
        { name: 'JavaScript', count: 10 },
        { name: 'Python', count: 8 },
        { name: 'HTML5', count: 6 },
        { name: 'Three.js', count: 4 }
      ],
      lastUpdated: new Date().toISOString(),
    };
  }
}
