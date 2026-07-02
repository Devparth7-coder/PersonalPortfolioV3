import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubProjects, getGitHubStats } from '@/services/githubService';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const forceRefresh = url.searchParams.get('refresh') === 'true';
    const type = url.searchParams.get('type') || 'all';

    if (type === 'stats') {
      const stats = await getGitHubStats();
      return NextResponse.json({ success: true, data: stats });
    }

    const projects = await fetchGitHubProjects(forceRefresh);
    return NextResponse.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('❌ GitHub API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve GitHub repository data.' },
      { status: 500 }
    );
  }
}
