import type { Metadata } from 'next';
import './globals.css';
import ClientProviders from '@/components/common/ClientProviders';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.headline}`,
  description: PERSONAL_DETAILS.bio,
  keywords: [
    'Dev Parth',
    'AI Engineer',
    'Full Stack Developer',
    'Competitive Programmer',
    'Gorakhpur',
    'Uttar Pradesh',
    'India',
    'Three.js',
    'Next.js 15',
    'React 19',
    'SEBI Hackathon',
    'TrustShield AI',
    'LeetCode Knight',
    'Software Engineer',
  ],
  authors: [{ name: PERSONAL_DETAILS.name, url: PERSONAL_DETAILS.github }],
  creator: PERSONAL_DETAILS.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PERSONAL_DETAILS.portfolio,
    title: `${PERSONAL_DETAILS.name} • AI Engineer & Full Stack Architect`,
    description: PERSONAL_DETAILS.tagline,
    siteName: `${PERSONAL_DETAILS.name} Portfolio`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_DETAILS.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_DETAILS.name} — ${PERSONAL_DETAILS.headline}`,
    description: PERSONAL_DETAILS.tagline,
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaOrgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_DETAILS.name,
    jobTitle: PERSONAL_DETAILS.headline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gorakhpur',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    url: PERSONAL_DETAILS.portfolio,
    sameAs: [PERSONAL_DETAILS.github, PERSONAL_DETAILS.linkedin],
    description: PERSONAL_DETAILS.bio,
    alumniOf: 'Computer Science Engineering University',
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Web Development',
      'Competitive Programming',
      'Next.js',
      'TypeScript',
      'Three.js',
      'Python',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth dark" data-theme="apple-dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-cyan-500 selection:text-white">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
