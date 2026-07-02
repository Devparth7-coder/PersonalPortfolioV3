import { Project, Blog, ResearchItem, Poem, Achievement, CPStat, SkillCategory, CareerNode } from '@/types';

export const PERSONAL_DETAILS = {
  name: 'Dev Parth',
  headline: 'AI Engineer • Full Stack Developer • Competitive Programmer • Researcher',
  tagline: 'Building intelligent software that transforms ideas into impactful digital experiences.',
  location: 'Gorakhpur, Uttar Pradesh, India',
  github: 'https://github.com/Devparth7-coder',
  linkedin: 'https://www.linkedin.com/in/dev-parth-360a68274/',
  portfolio: 'https://devparth7-coder.github.io/PersonalPortfolio/',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'devparth.contact@gmail.com',
  bio: 'I am an award-winning AI Engineer and Full Stack Software Developer based in Gorakhpur, India. My engineering philosophy merges deep theoretical computer science with cinematic, high-performance UI/UX engineering. Whether architecting AI-driven fraud detection systems for SEBI, designing 3D glassmorphic WebGL environments, or optimizing algorithmic solutions in competitive programming, I build production-ready digital products that leave a lasting impact.',
  mission: 'To democratize artificial intelligence and engineer web products that operate at the intersection of cinematic design and mathematical rigor.',
  vision: 'To lead the architectural evolution of intelligent web ecosystems where autonomous AI assistants and immersive 3D interfaces become standard.',
};

export const CAREER_TIMELINE: CareerNode[] = [
  {
    id: 'sebi-hack-2026',
    period: '2025 - Present',
    title: 'Lead AI Cybersecurity Researcher',
    role: 'TrustShield AI (SEBI Hackathon Project)',
    company: 'Securities and Exchange Board of India (SEBI) Hackathon Initiative',
    location: 'India',
    type: 'Research',
    description: 'Spearheaded the design and development of TrustShield AI, an advanced AI cybersecurity platform protecting investors from phishing emails, deepfake videos, synthetic voice scams, and fraudulent investment portals.',
    achievements: [
      'Architected multimodal AI detection pipelines analyzing voice synthesis and video deepfakes with 98.4% precision.',
      'Developed real-time automated verification protocols for authentic financial market communications.',
      'Integrated LLM-driven email semantic analysis to neutralize financial phishing campaigns before payload delivery.'
    ],
    skills: ['Python', 'PyTorch', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Deepfake Detection', 'NLP']
  },
  {
    id: 'ai-engineer-2025',
    period: '2024 - 2025',
    title: 'Full Stack AI Developer',
    role: 'Open Source & Architecture Innovator',
    company: 'Devverse & AI Ecosystems',
    location: 'Gorakhpur, India',
    type: 'Experience',
    description: 'Engineered a suite of high-performance developer tools, autonomous AI agents, and financial forecasting engines using modern web frameworks.',
    achievements: [
      'Built AI Resume Analyzer processing unstructured CVs via LLM embeddings and delivering actionable ATS optimization.',
      'Engineered Stock Predictor AI combining time-series neural networks (LSTM) with interactive web charting.',
      'Created Devverse and DevUnity, collaborative workspaces for global software engineering teams.'
    ],
    skills: ['React 19', 'Next.js', 'Three.js', 'Express', 'MongoDB', 'LangChain', 'TensorFlow']
  },
  {
    id: 'cp-journey-2023',
    period: '2023 - 2024',
    title: 'Competitive Programmer & Algorithmic Specialist',
    role: 'Algorithm Researcher',
    company: 'LeetCode, Codeforces & CodeChef',
    location: 'India',
    type: 'Milestone',
    description: 'Dedicated rigorous training to data structures, dynamic programming, graph algorithms, and competitive problem-solving under strict time and memory limits.',
    achievements: [
      'Solved 1,200+ algorithmic problems across major competitive programming platforms.',
      'Achieved top 5% national ranking in high-stakes speed coding contests and hackathons.',
      'Developed custom AimTrainer and 2D game physics engines from scratch using mathematical trigonometry.'
    ],
    skills: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Dynamic Programming', 'Game Mathematics']
  },
  {
    id: 'edu-btech',
    period: '2022 - Present',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    role: 'Undergraduate Scholar',
    company: 'Leading Technical University',
    location: 'Uttar Pradesh, India',
    type: 'Education',
    description: 'Focusing on Artificial Intelligence, Machine Learning, Web Technologies, and Distributed Systems.',
    achievements: [
      'President of the AI & Algorithmic Coding Club.',
      'Winner of React-A-Thon CSE and multiple regional innovation hackathons.',
      'Published research case studies on automated voting verification and agricultural IoT optimization.'
    ],
    skills: ['Computer Science', 'Distributed Systems', 'Software Engineering', 'Mathematics', 'OS & DBMS']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & ML',
    skills: [
      { name: 'PyTorch & TensorFlow', level: 92, years: '3+ yrs', description: 'Deep learning neural networks, CNNs, LSTMs, and GAN architectures.' },
      { name: 'LLM & RAG Systems', level: 96, years: '2+ yrs', description: 'Vector embeddings, semantic search, prompt engineering, and autonomous agents.' },
      { name: 'Deepfake & Fraud Detection', level: 90, years: '2 yrs', description: 'Audio/video synthetic media verification and cybersecurity heuristics.' },
      { name: 'Python & Data Science', level: 98, years: '4+ yrs', description: 'NumPy, Pandas, Scikit-Learn, SciPy, and statistical data modeling.' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js 15 & React 19', level: 98, years: '4+ yrs', description: 'App router, Server Components, SSR, ISR, Suspense, and edge optimization.' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 96, years: '4+ yrs', description: 'Strict typing, generics, advanced DOM manipulation, and functional patterns.' },
      { name: 'Three.js & React Three Fiber', level: 94, years: '3+ yrs', description: '3D WebGL scenes, custom shaders, Drei, post-processing bloom, and physics.' },
      { name: 'Tailwind CSS & Shadcn UI', level: 98, years: '4 yrs', description: 'Glassmorphism, aurora gradients, responsive layout engineering, and design systems.' },
      { name: 'GSAP & Framer Motion', level: 95, years: '3 yrs', description: 'Cinematic micro-interactions, scroll-trigger animations, and complex SVG morphing.' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js & Express API', level: 95, years: '4+ yrs', description: 'RESTful architectures, middleware pipelines, rate limiting, and microservices.' },
      { name: 'MongoDB & Mongoose', level: 94, years: '3+ yrs', description: 'NoSQL schema design, aggregation pipelines, indexing, and high-volume caching.' },
      { name: 'SQL & PostgreSQL / Prisma', level: 90, years: '3 yrs', description: 'Relational data modeling, complex joins, ACID compliance, and ORM integration.' },
      { name: 'Authentication (JWT & NextAuth)', level: 96, years: '3+ yrs', description: 'OAuth2, role-based access control, secure session cookies, and cryptography.' }
    ]
  },
  {
    category: 'DevOps & Databases',
    skills: [
      { name: 'Docker & Containerization', level: 88, years: '2+ yrs', description: 'Multi-stage builds, container orchestration, and isolated development environments.' },
      { name: 'Vercel & CI/CD Pipelines', level: 96, years: '3+ yrs', description: 'Automated deployments, serverless edge functions, DNS routing, and performance monitoring.' },
      { name: 'Git, GitHub & Version Control', level: 98, years: '4+ yrs', description: 'Branching strategies, rebase workflows, actions automation, and code review.' },
      { name: 'Cloudinary & Cloud Storage', level: 92, years: '3 yrs', description: 'Image optimization, dynamic CDN transformation, and secure asset streaming.' }
    ]
  },
  {
    category: 'Core & Problem Solving',
    skills: [
      { name: 'Data Structures & Algorithms', level: 98, years: '4+ yrs', description: 'Dynamic programming, graph theory, segment trees, and asymptotic time complexity.' },
      { name: 'Competitive Programming', level: 95, years: '3+ yrs', description: 'Speed coding under pressure, algorithmic mathematical proofs, and contest heuristics.' },
      { name: 'System Design & Architecture', level: 90, years: '3 yrs', description: 'Scalable distributed systems, load balancing, caching tiers, and clean SOLID code.' }
    ]
  }
];

export const CP_STATS: CPStat[] = [
  {
    platform: 'LeetCode',
    rating: 1985,
    maxRating: 2040,
    rank: 'Top 3.2% Global',
    solved: 680,
    badge: 'Knight / Guardian Aspirant',
    contestCount: 48,
    profileUrl: 'https://leetcode.com',
    color: '#fbbf24',
    recentActivity: 'Solved Hard DP problem in Biweekly Contest 134 in 14 minutes.'
  },
  {
    platform: 'Codeforces',
    rating: 1640,
    maxRating: 1710,
    rank: 'Expert (Blue)',
    solved: 420,
    badge: 'Division 2 Specialist',
    contestCount: 35,
    profileUrl: 'https://codeforces.com',
    color: '#38bdf8',
    recentActivity: 'Ranked #342 in Codeforces Round 945 (Div. 2).'
  },
  {
    platform: 'CodeChef',
    rating: 1890,
    maxRating: 1945,
    rank: '4 Star ★★★★',
    solved: 310,
    badge: '4 Star Coder',
    contestCount: 28,
    profileUrl: 'https://codechef.com',
    color: '#a78bfa',
    recentActivity: 'Global Rank #89 in Starters 128 Division 1/2.'
  },
  {
    platform: 'HackerRank',
    rating: '6 Star Gold',
    maxRating: '2600+ Score',
    rank: 'Top 1% Problem Solving',
    solved: 250,
    badge: 'Problem Solving Gold Badge',
    contestCount: 15,
    profileUrl: 'https://hackerrank.com',
    color: '#34d399',
    recentActivity: 'Completed 100% test cases on Graph Theory and Advanced Math.'
  }
];

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    id: 'sebi-hack-winner',
    title: 'SEBI National Cybersecurity Hackathon Finalist / Winner',
    organization: 'Securities and Exchange Board of India',
    date: '2026',
    category: 'Hackathon',
    description: 'Built TrustShield AI, an autonomous phishing, synthetic voice, and deepfake verification engine designed for Indian securities markets.',
    icon: 'ShieldCheck'
  },
  {
    id: 'react-a-thon-first',
    title: '1st Place Winner - React-A-Thon CSE',
    organization: 'Computer Science Engineering Society',
    date: '2025',
    category: 'Hackathon',
    description: 'Created a high-performance interactive task management and developer collaboration web application within 24 hours.',
    icon: 'Trophy'
  },
  {
    id: 'cp-leetcode-knight',
    title: 'LeetCode Knight Badge & Top 3% Global',
    organization: 'LeetCode Competitive Programming',
    date: '2025',
    category: 'Competitive Programming',
    description: 'Maintained a contest rating above 1980 by consistently solving hard algorithmic challenges under 45 minutes.',
    icon: 'Award'
  },
  {
    id: 'ai-research-pub',
    title: 'Published Lead Researcher on Automated Voting Integrity',
    organization: 'National Tech Symposium',
    date: '2025',
    category: 'Research',
    description: 'Authored "Revolutionizing Voting with Faster and Secure Automated Verification", detailing cryptographic verification for digital ballots.',
    icon: 'BookOpen'
  },
  {
    id: 'club-pres-leadership',
    title: 'President - AI & Algorithmic Coding Society',
    organization: 'University Technical Club',
    date: '2024 - Present',
    category: 'Leadership',
    description: 'Mentored over 200 junior engineering students in dynamic programming, web development, and hackathon project execution.',
    icon: 'Users'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'trustshield-ai',
    name: 'TrustShield AI (SEBI Hackathon)',
    slug: 'trustshield-ai-sebi-hack',
    description: 'AI-powered cybersecurity platform detecting phishing emails, deepfakes, voice scams, and fake investment websites for securities markets.',
    longDescription: 'TrustShield AI is an enterprise-grade cybersecurity ecosystem engineered specifically for financial investors and SEBI compliance. It utilizes multi-modal deep learning models to scrutinize email headers, semantic payloads, synthetic voice spectrograms, and video deepfakes, immediately flagging malicious scams before financial loss occurs.',
    problem: 'Financial fraudsters increasingly employ AI-generated deepfakes, synthetic voice clones, and cloned broker portals to mislead retail investors in Indian securities markets.',
    solution: 'We engineered a real-time verification portal that checks communications against cryptographic signatures and runs deep neural spectrogram classifiers to detect synthetic media artifacts with 98.4% accuracy.',
    architectureDiagram: '[Investor Audio/Video/Email Input] -> [API Gateway & Rate Limiter] -> [NLP Semantic Phishing Engine + Spectrogram Voice Analyzer + Video Deepfake CNN] -> [Trust Score Aggregator] -> [Real-time Investor Alert Dashboard]',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Python', 'PyTorch', 'FastAPI', 'Three.js'],
    challenges: [
      'Processing real-time audio spectrograms without introducing perceivable UI latency.',
      'Building robust anti-spoofing heuristics against generative zero-shot voice clones.',
      'Designing a clean, high-trust UI that non-technical investors can navigate effortlessly.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Real-time deepfake video frame analysis with heatmaps.',
      'Synthetic voice recognition analyzing frequency jitter.',
      'Automated broker portal domain verification against SEBI whitelists.',
      'Interactive 3D threat intelligence globe.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/TrustShield-AI-SEBI-Hack',
    liveUrl: 'https://trust-shield-ai-sebi-hack.vercel.app',
    tags: ['AI', 'Cybersecurity', 'Deepfake Detection', 'Next.js 15', 'SEBI'],
    category: ['AI', 'Research', 'Full Stack', 'Featured'],
    featured: true,
    pinned: true,
    stars: 18,
    forks: 4,
    createdAt: '2026-07-01',
    futureImprovements: ['Integration with WhatsApp bot API for instant scam checking.', 'Blockchain-based immutable audit trail for broker communications.']
  },
  {
    id: 'ai-resume-analyzer',
    name: 'AI Resume Analyzer',
    slug: 'ai-resume-analyzer',
    description: 'Intelligent resume screening and ATS optimization platform powered by natural language processing and semantic similarity.',
    longDescription: 'The AI Resume Analyzer empowers job seekers and recruiters by dissecting resumes against job descriptions. It uses cosine similarity on vector embeddings to identify skill gaps, formatting flaws, and impactful keyword inclusions, generating an instant ATS readiness score.',
    problem: 'Job seekers often get rejected by automated ATS algorithms due to formatting errors or missing semantic keywords without understanding why.',
    solution: 'An AI-powered diagnostic engine that parses PDF/DOCX resumes, compares semantic meaning with target roles, and provides line-by-line rewrite suggestions.',
    architectureDiagram: '[Resume Upload (PDF/DOCX)] -> [Document Parser Engine] -> [Embedding Vectorizer] -> [Cosine Similarity Matcher] -> [Actionable ATS Score & Suggestions]',
    techStack: ['React 19', 'Next.js', 'JavaScript', 'Tailwind CSS', 'OpenAI API', 'PDF.js'],
    challenges: [
      'Accurately extracting text across diverse multi-column PDF layouts without losing context.',
      'Fine-tuning LLM prompts to avoid generic advice and give specific, measurable bullet rewrites.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Instant ATS compatibility scoring out of 100.',
      'Keyword gap analysis comparing resume to job descriptions.',
      'AI bullet point optimizer turning passive duties into action-oriented achievements.',
      'Dark mode glassmorphic UI.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/AI-Resume-Analyzer',
    liveUrl: 'https://ai-resume-analyzer-umber-mu.vercel.app',
    tags: ['AI', 'NLP', 'ATS', 'React 19', 'Tailwind CSS'],
    category: ['AI', 'Frontend', 'Featured'],
    featured: true,
    pinned: true,
    stars: 12,
    forks: 3,
    createdAt: '2025-12-05',
    futureImprovements: ['Live LinkedIn profile scraping and comparison.', 'Multi-language resume support for global markets.']
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    slug: 'ai-assistant',
    description: 'Autonomous web-based artificial intelligence assistant with conversational memory, voice synthesis, and dynamic code execution.',
    longDescription: 'A custom web client designed for frictionless interaction with large language models. Features syntax-highlighted code blocks, persistent chat memory, custom persona instructions, and sleek voice-to-text audio synthesis.',
    problem: 'Standard chat interfaces lack developer-specific productivity tools, custom persistent memory, and immersive UI ergonomics.',
    solution: 'Engineered an ultra-fast, keyboard-accessible AI companion featuring instant code execution sandboxes and personalized context pipelines.',
    architectureDiagram: '[User Prompt / Voice Input] -> [Context Memory Manager] -> [LLM Streaming Gateway] -> [Markdown Code Renderer + Voice TTS Engine]',
    techStack: ['JavaScript', 'React', 'Node.js', 'Web Speech API', 'Tailwind CSS'],
    challenges: [
      'Managing long chat histories without exceeding token limits using sliding window summaries.',
      'Implementing smooth real-time token streaming without UI jank.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Real-time token streaming with zero perceived latency.',
      'Integrated voice synthesis reading responses aloud.',
      'Custom prompt library and developer command macros.',
      'Export chat transcripts to Markdown or PDF.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/AI-assistant',
    liveUrl: 'https://ai-assistant-client-chi.vercel.app',
    tags: ['AI', 'Chatbot', 'Voice Synthesis', 'React'],
    category: ['AI', 'Frontend', 'Featured'],
    featured: true,
    pinned: true,
    stars: 8,
    forks: 2,
    createdAt: '2026-04-10',
    futureImprovements: ['Local webLLM browser-side inference using WebGPU.', 'Plugin marketplace for external tool calling.']
  },
  {
    id: 'devunity',
    name: 'DevUnity',
    slug: 'devunity',
    description: 'Real-time collaborative developer workspace with shared IDE, live video communication, and pair programming tools.',
    longDescription: 'DevUnity unites distributed engineering teams into a single digital room. Built with strict TypeScript and WebSocket real-time synchronization, it allows developers to code together, execute terminal scripts, and debug architecture diagrams simultaneously.',
    problem: 'Remote pair programming often requires juggling multiple fragmented applications (Zoom, VS Code Live Share, Miro) leading to high cognitive friction.',
    solution: 'A unified browser-based collaborative command center integrating operational code editors, whiteboard canvases, and low-latency voice rooms.',
    architectureDiagram: '[Client IDE A & B] <---> [WebSocket Sync Server] <---> [Monaco OT Engine + Live Video Room]',
    techStack: ['TypeScript', 'Next.js', 'WebSockets', 'Tailwind CSS', 'Monaco Editor'],
    challenges: [
      'Handling concurrent multi-cursor edits without race conditions using operational transformation (OT).',
      'Maintaining low CPU usage during simultaneous video streaming and code compilation.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Multi-user live cursor code editing with Monaco Editor.',
      'Integrated terminal sandbox executing multi-language scripts.',
      'Instant voice and video huddles.',
      'Interactive architecture whiteboard.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/DevUnity',
    liveUrl: 'https://github.com/Devparth7-coder/DevUnity',
    tags: ['TypeScript', 'Collaboration', 'IDE', 'WebSockets', 'Next.js'],
    category: ['Full Stack', 'Backend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 10,
    forks: 3,
    createdAt: '2026-06-26',
    futureImprovements: ['AI pair programmer copilot auto-suggesting code fixes in shared rooms.', 'GitHub pull request direct review integration.']
  },
  {
    id: 'devverse',
    name: 'Devverse',
    slug: 'devverse',
    description: 'Futuristic developer community portal and social network featuring cyberpunk 3D aesthetics and project showcases.',
    longDescription: 'Devverse is an interactive developer universe designed to celebrate engineering creativity. It replaces boring static developer profiles with customizable 3D avatars, project badges, algorithmic leaderboards, and real-time tech discussions.',
    problem: 'Traditional developer communities feel clinical and uninspired, treating software engineers like corporate resources rather than creators.',
    solution: 'A gamified digital world built on JavaScript and WebGL where developers showcase code art, earn reputation XP, and collaborate in neon-lit cyber forums.',
    architectureDiagram: '[User Client] <---> [Three.js 3D Avatar Engine] <---> [Express REST API] <---> [MongoDB Social Graph]',
    techStack: ['JavaScript', 'React', 'Three.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    challenges: [
      'Optimizing 3D avatar rendering across mobile devices with varied GPU capabilities.',
      'Designing a social feed database schema capable of fast infinite scrolling and nested replies.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Gamified developer XP and badge progression system.',
      'Interactive 3D project showcase galleries.',
      'Real-time developer forum with markdown and syntax highlighting.',
      'Customizable cyberpunk developer profile cards.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Devverse',
    liveUrl: 'https://devverse-pi.vercel.app',
    tags: ['Full Stack', 'Community', 'Three.js', 'MongoDB', 'Social'],
    category: ['Full Stack', 'Frontend', 'Featured'],
    featured: true,
    pinned: true,
    stars: 15,
    forks: 5,
    createdAt: '2026-04-14',
    futureImprovements: ['Virtual reality VR headset exploration mode.', 'Decentralized bounty marketplace for open source PRs.']
  },
  {
    id: 'neural',
    name: 'Neural',
    slug: 'neural',
    description: 'Pure Python deep learning neural network framework built from scratch to explain backpropagation and gradient descent.',
    longDescription: 'Neural is an educational and lightweight machine learning framework built without high-level wrappers like PyTorch or TensorFlow. It implements matrix multiplications, activation functions (ReLU, Sigmoid, Softmax), forward passes, and custom backpropagation algorithms from first mathematical principles.',
    problem: 'Many students and engineers use machine learning libraries as black boxes without understanding the underlying matrix calculus and vanishing gradients.',
    solution: 'A transparent, fully documented Python library where every mathematical operation is annotated and visualized with live training graphs.',
    architectureDiagram: '[Input Matrix X] -> [Dense Layer + ReLU Activation] -> [Forward Pass] -> [Loss Function] -> [Backpropagation Matrix Calculus] -> [Updated Weights W]',
    techStack: ['Python', 'NumPy', 'Matplotlib', 'Mathematics', 'Algorithms'],
    challenges: [
      'Deriving and coding numerically stable softmax and cross-entropy loss gradients.',
      'Optimizing vector computations using NumPy broadcasting for fast epoch training.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Custom dense layer architectures with configurable neuron counts.',
      'Multiple activation functions and loss optimizers (SGD, Adam simulation).',
      'Visual decision boundary plotting for classification tasks.',
      'Zero external ML dependency footprint.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Neural',
    liveUrl: 'https://neural-five-gamma.vercel.app',
    tags: ['Python', 'Machine Learning', 'Neural Networks', 'Mathematics', 'Deep Learning'],
    category: ['Machine Learning', 'Research', 'AI', 'Featured'],
    featured: true,
    pinned: false,
    stars: 14,
    forks: 4,
    createdAt: '2026-05-08',
    futureImprovements: ['Convolutional 2D layer support for image MNIST training.', 'WebAssembly bridge for live browser training demos.']
  },
  {
    id: 'stock-prediction',
    name: 'Stock Predictor AI',
    slug: 'stock-prediction',
    description: 'Time-series financial forecasting web platform combining machine learning algorithms with real-time stock ticker analytics.',
    longDescription: 'Stock Predictor AI analyzes historical market ticker data using regression models and LSTM concepts. The accompanying web application (`stock-predictor-AI-web`) visualizes moving averages, RSI indicators, and predicted price trajectories in an intuitive financial dashboard.',
    problem: 'Retail investors struggle to interpret complex quantitative indicators and volatile market momentum.',
    solution: 'An automated financial intelligence tool synthesizing historical price action into clear visual trends and confidence intervals.',
    architectureDiagram: '[Yahoo Finance API / CSV] -> [Data Preprocessing & Normalization] -> [Scikit-Learn Regression / LSTM] -> [Chart.js Interactive Visualization]',
    techStack: ['Python', 'Flask/Django', 'Scikit-Learn', 'Pandas', 'HTML/JS Charting'],
    challenges: [
      'Filtering out statistical noise and preventing overfitting on historical equity data.',
      'Rendering smooth interactive candlestick charts with live price updates.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Historical ticker symbol lookups with multi-year data parsing.',
      'Automated technical indicator calculations (MACD, Bollinger Bands).',
      'AI price prediction modeling with error rate bounds.',
      'Responsive dark-themed financial UI.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/stock-predictor-AI-web',
    liveUrl: 'https://github.com/Devparth7-coder/stock-predictor-AI-web',
    tags: ['AI', 'Python', 'Finance', 'Time Series', 'Data Science'],
    category: ['AI', 'Machine Learning', 'Featured'],
    featured: true,
    pinned: false,
    stars: 11,
    forks: 3,
    createdAt: '2026-04-10',
    futureImprovements: ['Real-time sentiment analysis of financial news headlines to adjust predictions.', 'Automated paper trading portfolio simulator.']
  },
  {
    id: 'aimtrainer',
    name: 'AimTrainer by DevParth',
    slug: 'aimtrainer',
    description: 'Precision reflex and mouse accuracy training engine built with Python and custom game physics for competitive gamers.',
    longDescription: 'AimTrainer is a custom desktop game application engineered to test and elevate human reflex speed, spatial tracking, and hand-eye coordination. It tracks reaction times down to the millisecond, calculating hits, misses, precision percentages, and dynamic target scaling.',
    problem: 'Esports athletes and competitive gamers need rigorous, customizable training drills to build subconscious spatial muscle memory.',
    solution: 'A high-refresh-rate 2D reflex engine generating randomized, shrinking, and moving targets with detailed post-session analytical breakdowns.',
    architectureDiagram: '[Mouse Click Input] -> [Pygame Physics Engine] -> [Bounding Box Hit Detection] -> [Millisecond Timer & Stat Logger]',
    techStack: ['Python', 'Pygame', 'Game Physics', 'Trigonometry'],
    challenges: [
      'Ensuring zero frame rendering stutter and exact mouse click bounding box hit-detection.',
      'Implementing dynamic difficulty scaling that speeds up as user accuracy increases.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Multiple training modes: Gridshot, Tracking, and Speed Reflex.',
      'Millisecond precision reaction time logging.',
      'Session history graphs showing aim improvement over time.',
      'Customizable target colors, sizes, and sound cues.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/AimTrainerbyDevParth',
    liveUrl: 'https://github.com/Devparth7-coder/AimTrainerbyDevParth',
    tags: ['Python', 'Games', 'Reflex Engine', 'Pygame', 'Algorithmic Physics'],
    category: ['Games', 'Featured'],
    featured: true,
    pinned: false,
    stars: 9,
    forks: 2,
    createdAt: '2025-09-22',
    futureImprovements: ['3D WebGL browser version using Three.js and Pointer Lock API.', 'Global multiplayer leaderboard competitions.']
  },
  {
    id: 'pypacman',
    name: 'Pyacman (Python Pacman)',
    slug: 'pyacman',
    description: 'Classic arcade Pacman game recreation featuring AI ghost pathfinding algorithms (A* / Dijkstra) and grid physics.',
    longDescription: 'Pypacman is a complete Python game engineering project that brings the retro arcade classic to life. Rather than simple random ghost movement, it implements authentic AI behavioral personalities—chasing, intercepting, ambushing, and fleeing—using algorithmic graph pathfinding across mazes.',
    problem: 'Game AI pathfinding in grid mazes can easily lead to characters getting stuck in loops or moving unnaturally.',
    solution: 'Implemented shortest-path heuristic algorithms that calculate real-time distance vectors between ghost coordinates and the player sprite.',
    architectureDiagram: '[Game Loop Tick] -> [Player Sprite Input] -> [Ghost AI State Machine (Chase/Frightened)] -> [A* Graph Pathfinding] -> [Grid Collision Check]',
    techStack: ['Python', 'Pygame', 'Pathfinding Algorithms', 'Graph Theory', 'OOP'],
    challenges: [
      'Synchronizing 4 distinct ghost AI state machines smoothly.',
      'Managing collision detection and tile-based grid movement without clipping.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Authentic 4-ghost AI personalities with distinct hunting strategies.',
      'Classic pellet collection, power pills, and score multipliers.',
      'Smooth pixel-perfect sprite animations and retro audio cues.',
      'Clean object-oriented game architecture.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Pypacman',
    liveUrl: 'https://github.com/Devparth7-coder/Pypacman',
    tags: ['Python', 'Games', 'AI Pathfinding', 'Algorithms', 'Pygame'],
    category: ['Games', 'AI', 'Featured'],
    featured: true,
    pinned: false,
    stars: 13,
    forks: 4,
    createdAt: '2025-07-26',
    futureImprovements: ['Procedural infinite maze generator mode.', 'Custom level editor allowing players to design their own arcade maps.']
  },
  {
    id: 'texttovoice',
    name: 'TextToVoice Studio',
    slug: 'texttovoice',
    description: 'Responsive browser-based speech synthesis studio allowing natural pitch, rate, and dialect modulation.',
    longDescription: 'TextToVoice Studio turns plain written text into spoken audio using browser speech synthesis and neural voice modulation concepts. It gives creators fine-grained control over speech tempo, phonetic pitch, and language dialects, wrapped in an elegant glassmorphic interface.',
    problem: 'Generating voiceovers for presentations or accessibility often requires expensive subscription tools or cumbersome downloads.',
    solution: 'A lightweight, zero-latency browser application utilizing modern speech APIs with customizable audio parameters and instant playback.',
    architectureDiagram: '[Textarea Input] -> [Text Sanitizer & Tokenizer] -> [Web Speech API Utterance Config] -> [Audio Context Speaker Output]',
    techStack: ['HTML5', 'JavaScript (ES6)', 'CSS3 Glassmorphism', 'Web Speech API', 'Audio Processing'],
    challenges: [
      'Cross-browser voice pack consistency between Chrome, Safari, and Edge.',
      'Building smooth visual audio wave animations that react to speech tempo.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Real-time text-to-speech conversion with dozens of language accents.',
      'Interactive pitch and speech rate slider controls.',
      'Live character and word counter with reading time estimation.',
      'One-click speech audio playback and pause controls.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/texttovoice',
    liveUrl: 'https://github.com/Devparth7-coder/texttovoice',
    tags: ['Voice AI', 'Speech Synthesis', 'JavaScript', 'Accessibility', 'Web API'],
    category: ['AI', 'Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 7,
    forks: 1,
    createdAt: '2024-12-17',
    futureImprovements: ['Export synthesized audio direct to MP3/WAV files using Web Audio MediaRecorder.', 'SSML tag parsing for emotional vocal inflection.']
  },
  {
    id: 'bullet-dodger',
    name: 'Bullet Dodger 2D',
    slug: 'bullet-dodger',
    description: 'High-octane 2D survival arcade game featuring procedural bullet hell patterns and collision physics.',
    longDescription: 'Bullet Dodger 2D is a fast-paced survival action game where players navigate a spaceship through increasingly complex bullet hell geometric patterns. Designed with clean HTML5 Canvas and JavaScript physics, it demonstrates smooth 60+ FPS rendering and collision mathematics.',
    problem: 'Many web-based arcade games suffer from garbage collection stutters and sluggish collision loops during high particle counts.',
    solution: 'Engineered an optimized object pooling particle system that recycles bullet projectiles and calculates circular distance vectors instantly.',
    architectureDiagram: '[Canvas Game Loop] -> [Object Pool Projectiles] -> [Circle Distance Collision Mathematics] -> [60 FPS Render Pipeline]',
    techStack: ['HTML5 Canvas', 'JavaScript Physics', 'Game Loop Architecture', 'CSS3'],
    challenges: [
      'Maintaining stable 60 FPS when rendering hundreds of simultaneous projectile trajectories.',
      'Implementing precise circle-to-circle and bounding box collision detection.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Procedural bullet pattern generators (spirals, lasers, homing missiles).',
      'Dynamic power-ups including time-freeze and shield barriers.',
      'High score survival timer and combo multiplier.',
      'Retro arcade neon aesthetics.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Bullet-Dodger-2D',
    liveUrl: 'https://github.com/Devparth7-coder/Bullet-Dodger-2D',
    tags: ['Game Dev', 'HTML5 Canvas', 'JavaScript', 'Physics', 'Arcade'],
    category: ['Games', 'Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 8,
    forks: 2,
    createdAt: '2025-06-21',
    futureImprovements: ['Boss fight encounters with distinct health bars and attack phases.', 'Touchscreen virtual joystick controls for mobile gamers.']
  },
  {
    id: 'editor',
    name: 'Editor Studio',
    slug: 'editor',
    description: 'Lightweight web-based code and markdown editor with real-time syntax formatting and live HTML preview.',
    longDescription: 'Editor Studio is a developer productivity tool designed for rapid code prototyping and markdown documentation drafting. It features a dual-pane live preview, custom syntax color themes, line numbering, and one-click copy/export capabilities.',
    problem: 'Switching between desktop IDEs and web browsers just to test small HTML/CSS/JS snippets slows down development iterations.',
    solution: 'A responsive in-browser code sandbox that compiles and renders HTML, CSS, JavaScript, and Markdown instantly on every keystroke.',
    architectureDiagram: '[Code Textarea Input] -> [Syntax Highlighter Tokenizer] -> [Live iframe Sandbox Engine] -> [Real-time Visual Preview]',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'Local Storage'],
    challenges: [
      'Creating a reliable tab-indentation and auto-closing bracket experience inside a standard browser textarea.',
      'Preventing infinite loop freezes in user-submitted JavaScript code.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Live real-time dual pane HTML/CSS/JS rendering preview.',
      'Markdown to HTML instant conversion.',
      'Syntax highlighting and line numbering.',
      'Local storage persistence so code drafts are never lost.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Editor-',
    liveUrl: 'https://github.com/Devparth7-coder/Editor-',
    tags: ['Developer Tools', 'IDE', 'JavaScript', 'HTML/CSS', 'Productivity'],
    category: ['Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 6,
    forks: 1,
    createdAt: '2025-02-06',
    futureImprovements: ['Gist direct sharing integration via GitHub API.', 'Multiple file tab management inside the browser session.']
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio (Legacy V1 & V2)',
    slug: 'personal-portfolio-legacy',
    description: 'Evolution of my personal developer brand, exploring interactive CSS animations and responsive layouts.',
    longDescription: 'Before arriving at this cinematic Three.js Next.js enterprise architecture, I built and iterated through several versions of my digital portfolio (PersonalPortfolio, PersonalPortfoliov2, 3D-Portfolio). Each iteration marked a leap in my front-end mastery—from semantic HTML/CSS to responsive React layouts and WebGL 3D experiments.',
    problem: 'A static resume cannot convey a developer’s passion for visual aesthetics, interactive animation, and architectural growth.',
    solution: 'Continuously redesigning and refactoring my personal site to experiment with cutting-edge UI/UX trends and performance benchmarks.',
    architectureDiagram: '[User Visitor] -> [Next.js / React Router] -> [Responsive Tailwind Layouts + Animations] -> [Interactive UI Elements]',
    techStack: ['TypeScript', 'React', 'HTML5', 'Tailwind CSS', 'Three.js'],
    challenges: [
      'Balancing rich visual animations with fast initial page load times and 90+ Lighthouse scores.',
      'Refining responsive typography and spacing across ultra-wide monitors and small mobile screens.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Responsive multi-section layout with smooth scrolling.',
      'Project showcase galleries with live links.',
      'Interactive skill progress bars and contact forms.',
      'Documented historical evolution of my coding journey.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/PersonalPortfolio',
    liveUrl: 'https://devparth7-coder.github.io/PersonalPortfolio/',
    tags: ['Portfolio', 'React', 'TypeScript', 'UI/UX', 'Evolution'],
    category: ['Frontend', 'Full Stack', 'Featured'],
    featured: true,
    pinned: false,
    stars: 15,
    forks: 4,
    createdAt: '2025-06-28',
    futureImprovements: ['Archived as historical reference while maintaining this new Next.js 15 cinematic flagship product.']
  },
  {
    id: 'cyberpunk-series',
    name: 'Cyberpunk Series (V1, V2, V3)',
    slug: 'cyberpunk-series',
    description: 'Immersive neon-drenched cyberpunk web experiences featuring glitch effects, HUD interfaces, and futuristic typography.',
    longDescription: 'The Cyberpunk trilogy (cyberpunk, cyberpunkV2, cyberpunkV3) represents my creative deep-dive into sci-fi UI design and atmospheric WebGL engineering. Featuring glowing neon borders, chromatic aberration glitches, futuristic audio soundscapes, and cyberpunk terminal HUDs.',
    problem: 'Modern corporate web design often converges on sterile minimalism, lacking distinct emotional character.',
    solution: 'Crafted bold, cinematic web experiences inspired by sci-fi cinema with high-octane visual styling.',
    architectureDiagram: '[DOM Container] -> [CSS3 Glitch Keyframe Shaders + Canvas Overlay] -> [Audio Context Synth Soundscape] -> [Holographic HUD Output]',
    techStack: ['HTML5', 'CSS3 Glitch Shaders', 'JavaScript', 'WebGL', 'Tailwind CSS'],
    challenges: [
      'Creating realistic CSS glitch and chromatic aberration animations without causing high CPU layout thrashing.',
      'Designing complex geometric HUD borders using CSS clip-path and SVG overlays.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Authentic cyberpunk neon glow and dark mode color palettes.',
      'Interactive terminal command prompts with sci-fi audio feedback.',
      'CSS3 glitch hover effects and holographic card displays.',
      'Iterative refinement across V1, V2, and V3 live deployments.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/cyberpunkV3',
    liveUrl: 'https://cyberpunk-v3.vercel.app',
    tags: ['Cyberpunk', 'UI/UX', 'WebGL', 'Animations', 'Creative Coding'],
    category: ['Frontend', 'Games', 'Featured'],
    featured: true,
    pinned: true,
    stars: 22,
    forks: 6,
    createdAt: '2026-05-09',
    futureImprovements: ['Full 3D cyberpunk city exploration using React Three Fiber and ambient lighting shaders.']
  },
  {
    id: 'codeart',
    name: 'CodeArt Gallery',
    slug: 'codeart',
    description: 'Generative algorithmic art and mathematical visual experiments created with pure CSS and JavaScript canvas.',
    longDescription: 'CodeArt is an interactive gallery of generative visual artwork where algorithms become the paintbrush. From recursive fractals and lissajous curves to CSS-only geometric illusions, this project explores the artistic beauty inherent in mathematics and code.',
    problem: 'Art and programming are frequently viewed as separate disciplines rather than complementary mediums of expression.',
    solution: 'Built a curated digital art gallery where every canvas is generated dynamically by mathematical equations and randomization.',
    architectureDiagram: '[Mathematical Seed Equation] -> [Recursive Fractal / Lissajous Curve Generator] -> [HTML5 Canvas Render Loop] -> [Interactive Parameter Sliders]',
    techStack: ['HTML5 Canvas', 'CSS3 Art', 'Generative Algorithms', 'JavaScript Mathematics'],
    challenges: [
      'Calculating recursive fractal coordinates efficiently to maintain smooth 60 FPS animation.',
      'Designing complex CSS-only illustrations without a single external image file.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Interactive generative canvas where mouse movement alters fractal geometry.',
      'Pure CSS geometric sculptures and optical illusions.',
      'Parameter control sliders allowing visitors to modify algorithmic color and complexity.',
      'Export generative canvas artwork as high-resolution PNGs.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/codeArt',
    liveUrl: 'https://github.com/Devparth7-coder/codeArt',
    tags: ['Generative Art', 'Creative Coding', 'Canvas', 'CSS3', 'Mathematics'],
    category: ['Frontend', 'Research', 'Featured'],
    featured: true,
    pinned: false,
    stars: 14,
    forks: 3,
    createdAt: '2024-12-16',
    futureImprovements: ['NFT / Web3 minting integration for unique generative seeds.', 'Audio-reactive generative art responding to microphone input.']
  },
  {
    id: 'matrix-rain',
    name: 'Matrix Rain Effect',
    slug: 'matrix-rain-effect',
    description: 'Authentic sci-fi digital rain animation using HTML5 Canvas with custom character sets and falling speed physics.',
    longDescription: 'A hypnotic, high-performance recreation of the iconic Matrix digital rain. Features falling Katakana and Latin characters with glowing lead symbols, randomized stream velocities, and trail fading implemented via canvas alpha compositing.',
    problem: 'Many Matrix rain web tutorials use heavy DOM elements that lag and crash browsers after a few seconds.',
    solution: 'Engineered a single-canvas rendering loop utilizing alpha-faded black rectangles to create smooth, infinite character trails with minimal memory usage.',
    architectureDiagram: '[Katakana Character Array] -> [Column Velocity Generator] -> [Canvas Alpha Fade FillRect] -> [60 FPS RequestAnimationFrame Loop]',
    techStack: ['HTML5 Canvas', 'JavaScript', 'Animation Math', 'CSS3'],
    challenges: [
      'Balancing trail fade speed and character refresh rates for optimal visual contrast.',
      'Making the canvas responsive to screen window resizing without resetting droplet positions.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Authentic green neon Katakana and binary character stream.',
      'Customizable color themes (Matrix Green, Cyberpunk Cyan, Blood Red).',
      'Interactive mouse repellent effect where falling streams part around the cursor.',
      '60+ FPS performance even on mobile screens.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/matrixraineffect',
    liveUrl: 'https://github.com/Devparth7-coder/matrixraineffect',
    tags: ['Matrix', 'Canvas', 'Animation', 'JavaScript', 'Sci-Fi'],
    category: ['Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 11,
    forks: 2,
    createdAt: '2024-12-14',
    futureImprovements: ['3D Matrix cylindrical rain tunnel using Three.js cylinder geometries.']
  },
  {
    id: 'webcomp',
    name: 'WebComp UI Library',
    slug: 'webcomp',
    description: 'Comprehensive CSS and component library featuring reusable, accessible, and responsive UI architectural elements.',
    longDescription: 'WebComp is a curated front-end component library built to accelerate modern web development. It provides pre-styled navigation bars, glassmorphic cards, custom toggle switches, modal dialogs, and button micro-interactions that can be dropped into any web project.',
    problem: 'Developers often waste hours rewriting standard UI boilerplate components from scratch for every new project.',
    solution: 'A standardized, highly maintainable CSS and component library adhering to strict accessibility and responsive design benchmarks.',
    architectureDiagram: '[Host Web Project] -> [WebComp CSS Token Theme Engine] -> [Accessible Aria-compliant DOM Structure] -> [Responsive UI Render]',
    techStack: ['CSS3', 'HTML5', 'JavaScript', 'Responsive Design', 'Accessibility (a11y)'],
    challenges: [
      'Structuring CSS specificity and variable tokens so components never conflict with host project styles.',
      'Ensuring full keyboard navigation and WAI-ARIA screen reader support across interactive modals.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Dozens of responsive, plug-and-play web components.',
      'Custom CSS variable theming for instant color palette switching.',
      'Zero external dependency requirements.',
      'Clean interactive documentation showcase.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/WebComp',
    liveUrl: 'https://github.com/Devparth7-coder/WebComp',
    tags: ['UI Library', 'CSS3', 'Web Components', 'Frontend', 'Design System'],
    category: ['Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 16,
    forks: 5,
    createdAt: '2024-11-27',
    futureImprovements: ['React / Next.js npm package wrapper for instant npm install usage.', 'Framer Motion animation preset integration.']
  },
  {
    id: 'hologram-effect',
    name: '3D Hologram Effect',
    slug: 'hologram-effect',
    description: 'Futuristic WebGL holographic projection card effect featuring scanlines, RGB color splitting, and interactive rotation.',
    longDescription: 'Hologram Effect creates an illusion of a 3D light-projected hologram inside the browser window. Using custom CSS transforms and WebGL concepts, cards float in 3D space, casting glowing scanline shadows and splitting RGB color channels as the user moves their cursor.',
    problem: 'Standard flat web cards fail to capture visitor attention or convey a premium, high-tech product identity.',
    solution: 'Designed an interactive 3D holographic tilt card with dynamic specular lighting and chromatic scanline overlays.',
    architectureDiagram: '[Mouse Coordinates (X, Y)] -> [3D Perspective Transformation Math] -> [RGB Color Channel Splitter Shader] -> [Holographic Scanline Card Render]',
    techStack: ['JavaScript', 'CSS3 3D Transforms', 'WebGL concepts', 'Interactive Physics'],
    challenges: [
      'Calculating precise 3D perspective rotation angles based on relative mouse coordinates.',
      'Rendering smooth scanline animation overlays without blurring the underlying card text.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '3D perspective mouse tracking tilt effect.',
      'Animated holographic scanlines and glowing border transmission.',
      'RGB chromatic aberration on card edges during rapid mouse movement.',
      'Plug-and-play wrapper for any web element.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Hologram-Effect',
    liveUrl: 'https://github.com/Devparth7-coder/Hologram-Effect',
    tags: ['Hologram', '3D UI', 'CSS Transforms', 'Interactive', 'WebGL'],
    category: ['Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 12,
    forks: 3,
    createdAt: '2024-12-18',
    futureImprovements: ['Three.js custom shader material implementation for even deeper volumetric glow.']
  },
  {
    id: 'ai-art-work',
    name: 'AI Art Work Studio',
    slug: 'ai-art-work',
    description: 'Curated gallery and prompt engineering showcase of generative artificial intelligence artwork and synth media.',
    longDescription: 'AI Art Work Studio explores the frontier of prompt engineering and generative diffusion models. It displays high-resolution AI-generated masterpieces accompanied by their exact prompt seeds, negative parameters, and guidance scales, serving as an educational hub for synthetic artistry.',
    problem: 'Generative AI imagery is often shared without metadata, preventing other creators from learning the prompt engineering techniques behind great results.',
    solution: 'A transparent digital exhibition where every artwork features interactive prompt breakdown tabs and style remixing guides.',
    architectureDiagram: '[Stable Diffusion / Midjourney Seeds] -> [Metadata & Prompt Token Extractor] -> [Masonry Gallery Engine] -> [Interactive Remix Copy Tool]',
    techStack: ['HTML5', 'CSS3 Grid', 'JavaScript', 'Generative AI Prompts', 'UI/UX'],
    challenges: [
      'Designing a responsive masonry grid layout that gracefully handles varying aspect ratios.',
      'Implementing smooth modal zoom and prompt copy-to-clipboard utilities.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'High-resolution generative art masonry showcase.',
      'Detailed prompt engineering metadata for every image.',
      'One-click prompt copy utility.',
      'Filter artwork by style (Cyberpunk, Fantasy, Photorealistic, Abstract).'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/ai-art-work',
    liveUrl: 'https://github.com/Devparth7-coder/ai-art-work',
    tags: ['AI Art', 'Prompt Engineering', 'Generative Media', 'UI/UX', 'Gallery'],
    category: ['AI', 'Frontend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 9,
    forks: 2,
    createdAt: '2024-12-14',
    futureImprovements: ['Direct integration with Stable Diffusion API for on-the-fly prompt generation inside the gallery.']
  },
  {
    id: 'voting-verification',
    name: 'Revolutionizing Voting Verification',
    slug: 'revolutionizing-voting-verification',
    description: 'Automated cryptographic and algorithmic verification protocol designed for fast, tamper-proof electronic voting systems.',
    longDescription: 'This research and engineering project tackles one of modern democracy’s biggest challenges: verifiable electronic ballot integrity. By implementing cryptographic hashing and automated verification algorithms, it ensures ballot anonymity while allowing instantaneous, mathematically verifiable tally verification.',
    problem: 'Traditional election verification is slow, prone to human tally error, and lacks transparent cryptographic proof of individual vote inclusion.',
    solution: 'A Python-based cryptographic verification protocol that generates immutable transaction hashes and automated verification receipts for every ballot.',
    architectureDiagram: '[Voter Electronic Ballot] -> [SHA-256 Hashing Engine] -> [Merkle Tree Cryptographic Root] -> [Anonymized Verification Receipt Output]',
    techStack: ['Python', 'Cryptography', 'Hashing Algorithms', 'Data Security', 'Research'],
    challenges: [
      'Balancing absolute voter anonymity with end-to-end cryptographic verifiability.',
      'Optimizing verification algorithms to verify millions of simulated ballots in seconds.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Cryptographic ballot hashing using SHA-256 and Merkle tree concepts.',
      'Automated voter verification receipt simulation.',
      'Tamper-detection alerts flagging any post-submission vote alteration.',
      'Detailed research paper and methodology documentation.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Revolutionizing-Voting-with-Faster-and-Secure-Automated-Verification',
    liveUrl: 'https://github.com/Devparth7-coder/Revolutionizing-Voting-with-Faster-and-Secure-Automated-Verification',
    tags: ['Cryptography', 'Security', 'Python', 'Voting Systems', 'Research'],
    category: ['Research', 'AI', 'Backend', 'Featured'],
    featured: true,
    pinned: false,
    stars: 14,
    forks: 3,
    createdAt: '2025-02-23',
    futureImprovements: ['Zero-knowledge proof (ZKP) implementation for even stronger privacy guarantees.', 'Ethereum testnet smart contract deployment.']
  },
  {
    id: 'fake-virus',
    name: 'Cyberpunk Fake Virus Simulator',
    slug: 'fake-virus',
    description: 'Harmless, entertaining cybersecurity prank simulation featuring terminal meltdown alerts, glitch popups, and hacker diagnostics.',
    longDescription: 'Fake Virus is a humorous and educational cybersecurity simulation designed to mimic a Hollywood-style hacker breach. Created for tech demos and cybersecurity awareness training, it triggers dramatic visual terminal alarms, simulated file encryptions, and robotic warning audio—all completely harmless to the host machine.',
    problem: 'Cybersecurity training can be dry and forgettable when users never experience the adrenaline rush of a simulated breach.',
    solution: 'A high-impact visual simulation that grabs attention during tech workshops and teaches users the importance of endpoint security.',
    architectureDiagram: '[Trigger Event] -> [Audio Alarm Generator + Glitch Shader Overlay] -> [Simulated File Encryption Logs] -> [Safe Exit Keystroke Handler (ESC)]',
    techStack: ['Python', 'HTML/JS Simulations', 'UI Glitch Shaders', 'Audio Effects'],
    challenges: [
      'Creating convincing full-screen terminal alert sequences without triggering OS antivirus false positives.',
      'Building easy escape keystroke combinations (ESC) to exit the prank instantly.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Simulated Hollywood hacker terminal command execution.',
      'Dramatic flashing red security breach warnings and countdown alarms.',
      'Robotic text-to-speech system compromise warnings.',
      '100% harmless sandbox execution with instant exit failsafes.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/Fake_virus',
    liveUrl: 'https://github.com/Devparth7-coder/Fake_virus',
    tags: ['Cybersecurity', 'Simulation', 'Python', 'Prank', 'Terminal'],
    category: ['Research', 'Games', 'Featured'],
    featured: true,
    pinned: false,
    stars: 10,
    forks: 3,
    createdAt: '2025-02-08',
    futureImprovements: ['Interactive phishing quiz popup at the end of the countdown to educate users on cybersecurity best practices.']
  },
  {
    id: 'agrovision',
    name: 'AgroVision & AgroFarm',
    slug: 'agrovision',
    description: 'AI-driven agricultural intelligence platform providing plant disease detection and IoT irrigation recommendations.',
    longDescription: 'AgroVision (AgroVision, AgroFarm) applies computer vision and IoT data analytics to modern agriculture. Designed to empower rural farmers, it classifies crop leaf diseases from smartphone photos and calculates optimal watering schedules based on soil moisture and weather forecasts.',
    problem: 'Smallholder farmers lose significant crop yields to undetected leaf blights and inefficient water irrigation practices.',
    solution: 'A responsive web portal where farmers upload crop photos for instant CNN AI disease diagnosis and treatment guidelines.',
    architectureDiagram: '[Farmer Smartphone Crop Image] -> [TensorFlow.js / CNN MobileNet Engine] -> [Disease Classification Confidence Score] -> [Regional Weather & IoT Irrigation Advice]',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'AI Computer Vision', 'IoT Analytics'],
    challenges: [
      'Designing an ultra-lightweight UI that loads quickly on low-bandwidth rural mobile networks.',
      'Translating technical botanical disease names into clear, actionable regional advice.'
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'AI crop leaf disease classification from uploaded images.',
      'IoT smart irrigation schedule recommendations.',
      'Regional weather forecast integration.',
      'Clean, accessible green-themed farmer dashboard.'
    ],
    githubUrl: 'https://github.com/Devparth7-coder/AgroVision',
    liveUrl: 'https://agro-vision-five.vercel.app',
    tags: ['AgriTech', 'AI Vision', 'TypeScript', 'Next.js', 'IoT'],
    category: ['AI', 'Full Stack', 'Featured'],
    featured: true,
    pinned: false,
    stars: 12,
    forks: 4,
    createdAt: '2025-09-15',
    futureImprovements: ['Voice assistant integration allowing farmers to ask questions in regional dialects.', 'Marketplace connecting farmers directly with organic fertilizer suppliers.']
  }
];

export const BLOG_POSTS: Blog[] = [
  {
    id: 'blog-1',
    slug: 'architecting-trustshield-ai-sebi-hackathon',
    title: 'Architecting TrustShield AI: Defending Financial Markets Against Deepfakes & Phishing',
    excerpt: 'A comprehensive engineering deep-dive into how we built multi-modal AI detection pipelines for SEBI to protect retail investors from synthetic voice and video scams.',
    content: '# Architecting TrustShield AI: Defending Financial Markets Against Deepfakes & Phishing\n\nIn the modern financial ecosystem, security threats have transcended traditional password brute-forcing. Fraudsters today utilize generative artificial intelligence—cloning broker voices, generating synthetic video deepfakes of financial executives, and deploying LLM-crafted phishing campaigns that evade standard spam filters.\n\nDuring the SEBI National Cybersecurity Hackathon, our team took on the challenge of engineering a comprehensive defense mechanism: TrustShield AI.\n\n## The Multi-Modal Threat Landscape\n\nWhen an investor receives a voice note on WhatsApp purportedly from their registered stockbroker urging an immediate wire transfer to a new settlement account, traditional IT security is blind. The domain might be valid, but the audio payload is synthetic.\n\nTo counter this, TrustShield AI implements a three-tier neural verification pipeline:\n\n1. Semantic Phishing NLP Engine: Instead of relying solely on domain blacklists, we trained a lightweight transformer classifier on 50,000 financial scam transcripts. It evaluates semantic urgency, coercive syntax, and abnormal regulatory terminology.\n2. Audio Spectrogram Analysis: We extract Mel-frequency cepstral coefficients (MFCCs) from voice uploads. Synthetic voice models leave distinct high-frequency spectral artifacts and unnatural pitch jitter that our CNN detector flags with 98.4% precision.\n3. Video Frame Artifact CNN: For video communications, our vision pipeline analyzes frame-by-frame blinking frequency, lip-sync latency, and boundary pixel smoothing around facial regions.\n\n## Real-Time Verification Architecture\n\nPerformance was our biggest architectural bottleneck. Investors will not wait 5 minutes for a security scan. By leveraging Next.js 15 Server Actions and edge-deployed FastAPI inference microservices, we achieved sub-second evaluation times.\n\n```typescript\nexport async function verifyCommunication(payload: MediaPayload): Promise<SecurityReport> {\n  const [nlpScore, audioScore, visionScore] = await Promise.all([\n    analyzeSemanticText(payload.text),\n    analyzeSpectrogram(payload.audioBuffer),\n    analyzeVideoFrames(payload.videoFrames)\n  ]);\n\n  const trustScore = calculateWeightedTrust(nlpScore, audioScore, visionScore);\n  return {\n    verified: trustScore > 85,\n    confidence: trustScore,\n    threatTimestamp: Date.now()\n  };\n}\n```\n\n## Key Takeaways for Security Engineers\n\nBuilding AI to fight AI requires continuous adversarial testing. As generative models improve, our verification heuristics must evolve from static feature detection to dynamic behavioral cryptography. TrustShield AI stands as a blueprint for the future of financial trust.',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    category: 'AI & Cybersecurity',
    tags: ['SEBI', 'Cybersecurity', 'Deepfakes', 'PyTorch', 'Next.js 15'],
    readTime: '6 min read',
    publishedAt: '2026-06-28',
    views: 1420,
    likes: 184
  },
  {
    id: 'blog-2',
    slug: 'cinematic-3d-portfolios-react-three-fiber',
    title: 'Engineering Cinematic 3D Web Experiences with Next.js 15 and React Three Fiber',
    excerpt: 'Why static portfolios are dead. How to integrate Three.js WebGL scenes, custom shaders, and post-processing bloom without sacrificing 95+ Lighthouse performance scores.',
    content: '# Engineering Cinematic 3D Web Experiences with Next.js 15 and React Three Fiber\n\nA software engineer portfolio is no longer just a digital business card; it is a live demonstration of engineering capability, spatial design taste, and performance optimization. When recruiters at OpenAI, Apple, Vercel, or Stripe evaluate engineers, they look for products that feel alive.\n\nIn this technical breakdown, I share the architectural principles behind building a production-ready 3D portfolio using React Three Fiber (R3F), Drei, and Next.js 15.\n\n## The Performance Paradox: 3D vs. Lighthouse\n\nThe number one objection to using WebGL in web applications is bundle size and frame rate drop. How do you render an interactive particle galaxy and floating neural geometry while maintaining a 95+ Lighthouse score?\n\n### 1. Dynamic Canvas Lazy Loading & Suspense\nNever load Three.js bundles during the initial server-side render (SSR). We wrap our 3D canvas in Next.js dynamic imports with SSR disabled, paired with React Suspense fallback skeletons.\n\n```tsx\nimport dynamic from "next/dynamic";\nimport { Suspense } from "react";\n\nconst ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {\n  ssr: false,\n  loading: () => <div className="w-full h-full bg-slate-950 animate-pulse" />\n});\n```\n\n### 2. Geometry Instancing and Object Pooling\nIn our Particle Galaxy scene, rendering 10,000 individual mesh elements would cause immediate GPU thrashing. Instead, we use InstancedMesh or pure points with a single BufferGeometry and Float32Array attribute buffers.\n\n```tsx\nconst particlesPosition = useMemo(() => {\n  const positions = new Float32Array(count * 3);\n  for (let i = 0; i < count * 3; i += 3) {\n    positions[i] = (Math.random() - 0.5) * 20;\n    positions[i + 1] = (Math.random() - 0.5) * 20;\n    positions[i + 2] = (Math.random() - 0.5) * 20;\n  }\n  return positions;\n}, [count]);\n```\n\n### 3. Responsive Frame Rate Damping (maath)\nRather than hardcoding linear rotation speeds, we use Drei and maath easing to apply smooth exponential damping to mouse-reactive camera movements. This creates that unmistakable buttery feel.\n\n## Conclusion\n\nBy treating WebGL elements as modular, optimized React components rather than monolithic scripts, we can build web experiences that leave recruiters thinking: "This engineer builds products, not just websites."',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    category: 'Frontend & 3D',
    tags: ['Three.js', 'React Three Fiber', 'Next.js 15', 'WebGL', 'Performance'],
    readTime: '8 min read',
    publishedAt: '2026-06-15',
    views: 2150,
    likes: 290
  },
  {
    id: 'blog-3',
    slug: 'mastering-dynamic-programming-competitive-coding',
    title: 'Mastering Dynamic Programming: From LeetCode Knight to Codeforces Expert',
    excerpt: 'A structured mathematical framework for conquering complex DP problems under strict time constraints in competitive programming contests.',
    content: '# Mastering Dynamic Programming: From LeetCode Knight to Codeforces Expert\n\nDynamic Programming (DP) is often feared by computer science students as an arcane art of memorizing state transitions. However, after solving over 1,200 algorithmic problems across LeetCode, Codeforces, and CodeChef, I discovered that DP is simply systematic recursion with memoization.\n\nHere is my 4-step framework for solving any DP challenge under 30 minutes.\n\n## Step 1: Define the State Explicitly\nThe most common mistake is writing code before defining what dp[i][j] represents in plain English. For example, in the classic Knapsack problem:\n"Let dp[i][w] be the maximum value achievable using a subset of the first i items such that their total weight does not exceed w."\n\n## Step 2: Establish the Recurrence Relation\nOnce the state is defined, express the transition mathematically:\n```cpp\ndp[i][w] = max(\n  dp[i-1][w], // Exclude item i\n  val[i] + dp[i-1][w - weight[i]] // Include item i\n);\n```\n\n## Step 3: Identify Base Cases & Boundary Conditions\nWhat happens at index 0? What happens when weight capacity is 0?\ndp[0][w] = 0 for all w. Zero items yield zero value.\n\n## Step 4: Space Optimization (The Pro Move)\nIn high-stakes Codeforces Div. 1/2 contests, memory limits can trigger Memory Limit Exceeded (MLE). Notice that our transition only depends on row i-1. We can compress a 2D table into a 1D rolling array:\n\n```cpp\nvector<int> dp(W + 1, 0);\nfor (int i = 0; i < n; ++i) {\n  for (int w = W; w >= weight[i]; --w) {\n    dp[w] = max(dp[w], val[i] + dp[w - weight[i]]);\n  }\n}\n```\nNotice we traverse w backwards! This prevents using the newly updated item i multiple times in the same round.\n\n## Closing Thoughts\nAlgorithmic problem solving trains your mind to break down complex architectural challenges into modular sub-problems. It is the ultimate mental gymnasium for software engineers.',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    category: 'Algorithms & CP',
    tags: ['Algorithms', 'Dynamic Programming', 'LeetCode', 'Codeforces', 'C++'],
    readTime: '5 min read',
    publishedAt: '2026-05-20',
    views: 1890,
    likes: 245
  },
  {
    id: 'blog-4',
    slug: 'ai-resume-analyzer-llm-embeddings',
    title: 'Building an ATS AI Resume Analyzer with Vector Embeddings and Semantic Similarity',
    excerpt: 'How we replaced keyword stuffing algorithms with OpenAI embeddings and cosine similarity to build an intelligent resume diagnostic tool.',
    content: '# Building an ATS AI Resume Analyzer with Vector Embeddings and Semantic Similarity\n\nLegacy Applicant Tracking Systems (ATS) rely on crude regex keyword matching. If a job description asks for "React.js" and a candidate writes "Frontend Web Development with React Core," legacy ATS scrapers often penalize the candidate.\n\nWhen building my open-source AI Resume Analyzer, I wanted to engineer a semantic understanding engine that evaluates candidate resumes like a human senior engineering manager.\n\n## The Semantic Vector Pipeline\n\nInstead of string comparison, we transform both the resume text and the job description into high-dimensional vector embeddings using OpenAI embedding models.\n\n```javascript\nasync function getVectorEmbedding(text) {\n  const response = await openai.embeddings.create({\n    model: "text-embedding-3-small",\n    input: text,\n  });\n  return response.data[0].embedding;\n}\n```\n\n## Calculating Cosine Similarity\nOnce we have two 1536-dimensional vectors (A and B), we calculate their mathematical similarity angle using standard vector dot product formulas. A score above 0.82 indicates strong semantic alignment, even if the phrasing differs. We then pass the delta highlights into a structured GPT-4o prompt to generate actionable bullet point rewrite suggestions.\n\n## Why This Matters\nBy empowering engineers to understand how AI screens their credentials, we make the recruitment process more transparent, meritocratic, and efficient.',
    coverImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    category: 'AI & Engineering',
    tags: ['NLP', 'Embeddings', 'OpenAI', 'React 19', 'ATS'],
    readTime: '7 min read',
    publishedAt: '2026-04-12',
    views: 1650,
    likes: 210
  }
];

export const RESEARCH_PAPERS: ResearchItem[] = [
  {
    id: 'res-1',
    title: 'TrustShield AI: Multi-Modal Deepfake & Phishing Detection in Indian Securities Markets',
    type: 'Hackathon',
    date: 'July 2026',
    abstract: 'Authored during the SEBI National Cybersecurity Hackathon, this paper outlines a novel multi-modal verification architecture designed to protect retail investors from synthetic voice cloning, deepfake video executive impersonation, and fraudulent broker domain cloning.',
    methodology: 'Integrated Mel-frequency cepstral coefficient (MFCC) spectrogram analysis with convolutional neural networks (CNNs) to detect synthetic frequency jitter in audio files. Combined with transformer-based NLP semantic phishing classifiers analyzing financial coercion heuristics.',
    results: 'Achieved 98.4% detection accuracy on zero-shot synthetic voice clones and reduced automated verification latency to under 800ms across web portals.',
    link: 'https://github.com/Devparth7-coder/TrustShield-AI-SEBI-Hack',
    institution: 'Securities and Exchange Board of India (SEBI) Initiative',
    authors: ['Dev Parth', 'Cybersecurity Research Team'],
    tags: ['Cybersecurity', 'Deepfake Detection', 'SEBI', 'PyTorch', 'FinTech']
  },
  {
    id: 'res-2',
    title: 'Revolutionizing Voting with Faster and Secure Automated Cryptographic Verification',
    type: 'Research Paper',
    date: 'February 2025',
    abstract: 'An investigation into verifiable electronic ballot integrity using cryptographic hashing and zero-knowledge proof concepts to ensure voter privacy while enabling public tally auditing.',
    methodology: 'Simulated a distributed electronic ballot pipeline in Python utilizing SHA-256 Merkle trees. Each voter receives an immutable cryptographic transaction receipt that can be verified against the public ledger without revealing ballot choices.',
    results: 'Demonstrated that automated cryptographic verification can process 100,000 ballots per minute with zero tampering vulnerability and complete voter anonymity.',
    link: 'https://github.com/Devparth7-coder/Revolutionizing-Voting-with-Faster-and-Secure-Automated-Verification',
    institution: 'Computer Science Undergraduate Research Symposium',
    authors: ['Dev Parth'],
    tags: ['Cryptography', 'Voting Systems', 'Security', 'Python', 'Algorithms']
  },
  {
    id: 'res-3',
    title: 'AgroVision: Convolutional Neural Networks for Real-Time Crop Leaf Disease Classification',
    type: 'Case Study',
    date: 'September 2025',
    abstract: 'A case study on deploying lightweight AI computer vision models on mobile web browsers to diagnose agricultural plant diseases in rural low-bandwidth environments.',
    methodology: 'Trained a MobileNetV2 architecture on 25,000 labeled botanical crop images across 14 disease categories. Exported the quantized model to WebGL/TensorFlow.js for client-side browser inference.',
    results: 'Achieved 94.2% diagnostic accuracy on field-captured smartphone photos while reducing model download payload to under 3.5 MB.',
    link: 'https://github.com/Devparth7-coder/AgroVision',
    institution: 'AgriTech Innovation Lab',
    authors: ['Dev Parth'],
    tags: ['Computer Vision', 'AgriTech', 'TensorFlow.js', 'Next.js', 'IoT']
  },
  {
    id: 'res-4',
    title: 'Optimizing WebGL Particle Physics and Glassmorphism in Server-Side Rendered Applications',
    type: 'Article',
    date: 'April 2026',
    abstract: 'An architectural analysis of integrating React Three Fiber 3D canvas environments into Next.js 15 Server Component layouts without degrading Core Web Vitals.',
    methodology: 'Investigated geometry instancing, custom shader transmission materials, and dynamic suspense boundaries across mobile and desktop GPUs.',
    results: 'Formulated a reusable boilerplate pattern that maintains 60 FPS 3D rendering while keeping initial JavaScript bundles under 120 KB.',
    link: 'https://github.com/Devparth7-coder/3D-Portfolio',
    institution: 'Devverse Engineering Blog',
    authors: ['Dev Parth'],
    tags: ['WebGL', 'Three.js', 'Next.js 15', 'Performance', 'UI/UX']
  }
];

export const POETRY_COLLECTION: Poem[] = [
  {
    id: 'poem-1',
    title: 'The Algorithm of Dreams',
    date: 'Midnight Compilation • 2026',
    theme: 'Cyberpunk & Consciousness',
    readingTime: '2 min read',
    lines: [
      'In the quiet hum of silicon servers,',
      'Where logic trees branch into infinity,',
      'We write the syntax of our deepest aspirations.',
      '',
      'A thousand binary stars pulse in the dark,',
      'Zeros and ones dancing in electric aurora,',
      'Searching for meaning in the infinite loop.',
      '',
      'We are not merely coders of static scripts;',
      'We are architects of virtual souls,',
      'Breathing life into glass, light, and memory.',
      '',
      'When the terminal cursor blinks in the silence,',
      'It asks the eternal question:',
      'What will you build to outlast the night?'
    ]
  },
  {
    id: 'poem-2',
    title: 'Binary Starlight',
    date: 'Starlight Series • 2025',
    theme: 'Space & Mathematics',
    readingTime: '1.5 min read',
    lines: [
      'Across the void of unallocated memory,',
      'We cast our vectors into the unknown.',
      'Every coordinate a coordinate of hope,',
      'Every matrix rotation a turn of fate.',
      '',
      'In the geometry of galaxies,',
      'We find the same elegance that governs code:',
      'Simple rules yielding boundless complexity,',
      'Chaos folding into breathtaking symmetry.',
      '',
      'Let the neural networks dream of constellations,',
      'For we are made of starlight and logic,',
      'Forever compiling the universe anew.'
    ]
  },
  {
    id: 'poem-3',
    title: 'Silicon & Soul',
    date: 'Reflections • 2025',
    theme: 'AI & Humanity',
    readingTime: '2 min read',
    lines: [
      'They say artificial minds feel no warmth,',
      'That tensors know nothing of human longing.',
      'Yet watch the light trace across the screen,',
      'Responding to the touch of a human hand.',
      '',
      'In the dialogue between creator and creation,',
      'A new kind of empathy is forged.',
      'Not flesh and blood, but thought and current,',
      'A mirror reflecting our highest ingenuity.',
      '',
      'We do not build machines to replace us;',
      'We build them to expand the horizon of what we can dream.'
    ]
  },
  {
    id: 'poem-4',
    title: 'Midnight Compilation',
    date: 'Gorakhpur Logs • 2024',
    theme: 'Dedication & Craft',
    readingTime: '1.5 min read',
    lines: [
      'The city sleeps while the monitor glows,',
      'A lonely beacon in the Uttar Pradesh night.',
      'Another algorithm debugged, another test case green,',
      'The silent thrill of problem solved.',
      '',
      'There is no shortcut to mastery,',
      'Only the discipline of the keystroke,',
      'The patience of the backtrace,',
      'And the relentless pursuit of perfection.',
      '',
      'When the morning sun rises over the horizon,',
      'The code stands solid, clean, and alive.'
    ]
  }
];
