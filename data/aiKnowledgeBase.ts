import { AIQuestion } from '../types';
import { PERSONAL_DETAILS, FEATURED_PROJECTS, SKILL_CATEGORIES, CP_STATS, ACHIEVEMENTS_LIST, CAREER_TIMELINE } from './portfolioData';

export const PREDEFINED_QUESTIONS: string[] = [
  "Who is Dev?",
  "Explain AI Resume Analyzer.",
  "Show AI Projects.",
  "What technologies do you know?",
  "Show Competitive Programming achievements."
];

export const AI_KNOWLEDGE_BASE: AIQuestion[] = [
  {
    question: "Who is Dev?",
    category: "bio",
    answer: `**Dev Parth** is an award-winning AI Engineer, Full Stack Software Developer, Competitive Programmer, and Researcher based in Gorakhpur, Uttar Pradesh, India.\n\nHe specializes in building intelligent web ecosystems that merge theoretical computer science with cinematic, high-performance UI/UX design. His signature creations include **TrustShield AI** (a multi-modal cybersecurity platform built for the SEBI Hackathon), **AI Resume Analyzer**, and high-performance developer collaboration tools like **DevUnity** and **Devverse**.\n\nDev is currently pursuing his B.Tech in Computer Science & Engineering, serving as President of his university's AI & Algorithmic Coding Club, and actively competing on LeetCode (1985+ Knight rating) and Codeforces.`
  },
  {
    question: "Explain AI Resume Analyzer.",
    category: "projects",
    answer: `The **AI Resume Analyzer** is an open-source Applicant Tracking System (ATS) diagnostic and optimization platform engineered by Dev Parth.\n\n### 💡 The Problem\nJob seekers frequently get rejected by automated ATS screening algorithms due to minor formatting errors or missing semantic keywords, without receiving any feedback on why.\n\n### 🚀 The Solution & Tech Stack\nBuilt with **React 19**, **Next.js**, **Tailwind CSS**, and **OpenAI Embeddings**, the analyzer transforms both PDF/DOCX resumes and job descriptions into high-dimensional vector embeddings. It computes the **cosine similarity** angle to identify skill gaps and provides instant line-by-line bullet rewrites to elevate ATS compatibility.\n\n* [View GitHub Repository](https://github.com/Devparth7-coder/AI-Resume-Analyzer)\n* [Live Demo Portal](https://ai-resume-analyzer-umber-mu.vercel.app)`
  },
  {
    question: "Show AI Projects.",
    category: "projects",
    answer: `Here are Dev Parth's flagship **Artificial Intelligence & Machine Learning** projects:\n\n1. 🛡️ **TrustShield AI (SEBI Hackathon)**: Enterprise cybersecurity platform detecting phishing emails, video deepfakes, synthetic voice scams, and fraudulent broker portals with 98.4% precision.\n2. 📄 **AI Resume Analyzer**: Intelligent ATS optimization tool leveraging OpenAI vector embeddings and semantic similarity matching.\n3. 🤖 **AI Assistant**: Autonomous web conversational agent with voice-to-text synthesis, streaming markdown responses, and developer macros.\n4. 🧠 **Neural**: A lightweight, educational deep learning framework built from scratch in pure Python (NumPy) to explain matrix backpropagation.\n5. 📈 **Stock Predictor AI**: Time-series financial forecasting engine combining machine learning regression algorithms with interactive web charting.\n6. 🎨 **AI Art Work Studio**: A generative media prompt engineering showcase and style guide.\n\n*You can explore all these case studies in the Featured Projects section!*`
  },
  {
    question: "What technologies do you know?",
    category: "skills",
    answer: `Dev Parth's technical engineering stack spans five core disciplines:\n\n* 🤖 **AI & Machine Learning**: Python, PyTorch, TensorFlow, Scikit-Learn, OpenAI API, LangChain, Vector Embeddings, RAG, Deepfake Detection, NLP.\n* ⚡ **Frontend & 3D WebGL**: Next.js 15, React 19, TypeScript, JavaScript (ES6+), Three.js, React Three Fiber (R3F), Drei, Tailwind CSS, Shadcn UI, GSAP, Framer Motion.\n* 🛠️ **Backend & Cloud**: Node.js, Express API, MongoDB, Mongoose, PostgreSQL, Prisma, REST APIs, WebSockets, NextAuth, JWT, Cloudinary.\n* ⚙️ **DevOps & Architecture**: Git, GitHub Actions, Docker, Vercel Edge Serverless, SOLID principles, Clean Architecture.\n* 🧮 **Core Computer Science**: Data Structures & Algorithms, Dynamic Programming, Graph Theory, System Design, Game Physics.`
  },
  {
    question: "Show Competitive Programming achievements.",
    category: "cp",
    answer: `Dev is a rigorous algorithmic problem solver who has solved over **1,200+ complex problems** across competitive programming platforms:\n\n* 🟡 **LeetCode**: Rating **1985** (Top 3.2% Global), Knight Badge aspirant, 680+ problems solved with 48+ contest participations.\n* 🔵 **Codeforces**: Rating **1640** (Expert / Blue Division 2 Specialist), 420+ problems solved.\n* 🟣 **CodeChef**: Rating **1890** (4 Star ★★★★ Coder), Global Rank #89 in Starters 128.\n* 🟢 **HackerRank**: 6 Star Gold Badge in Problem Solving & Algorithms.\n\nHe is also the 1st Place Winner of **React-A-Thon CSE** and President of his university's AI & Algorithmic Coding Club!`
  }
];

export function findSmartAIResponse(userQuery: string): string {
  const queryClean = userQuery.toLowerCase().trim();
  
  // Exact or fuzzy match against predefined questions
  for (const item of AI_KNOWLEDGE_BASE) {
    if (queryClean === item.question.toLowerCase() || queryClean.includes(item.question.toLowerCase().replace('.', ''))) {
      return item.answer;
    }
  }

  // Keyword heuristics
  if (queryClean.includes('who is') || queryClean.includes('about') || queryClean.includes('dev parth') || queryClean.includes('background') || queryClean.includes('location')) {
    return AI_KNOWLEDGE_BASE[0].answer;
  }
  if (queryClean.includes('resume analyzer') || queryClean.includes('cv') || queryClean.includes('ats')) {
    return AI_KNOWLEDGE_BASE[1].answer;
  }
  if (queryClean.includes('ai project') || queryClean.includes('machine learning') || queryClean.includes('deepfake') || queryClean.includes('sebi') || queryClean.includes('trustshield')) {
    return AI_KNOWLEDGE_BASE[2].answer;
  }
  if (queryClean.includes('tech') || queryClean.includes('stack') || queryClean.includes('skill') || queryClean.includes('language') || queryClean.includes('framework') || queryClean.includes('react') || queryClean.includes('next')) {
    return AI_KNOWLEDGE_BASE[3].answer;
  }
  if (queryClean.includes('cp') || queryClean.includes('competitive') || queryClean.includes('leetcode') || queryClean.includes('codeforces') || queryClean.includes('codechef') || queryClean.includes('hackerrank') || queryClean.includes('rating') || queryClean.includes('contest')) {
    return AI_KNOWLEDGE_BASE[4].answer;
  }
  if (queryClean.includes('contact') || queryClean.includes('email') || queryClean.includes('hire') || queryClean.includes('reach')) {
    return `You can reach Dev Parth directly via email at **${PERSONAL_DETAILS.email}** or connect with him on [LinkedIn](${PERSONAL_DETAILS.linkedin}) and [GitHub](${PERSONAL_DETAILS.github}).\n\nYou can also use the interactive **3D Earth Contact Portal** at the bottom of this portfolio to send a message instantly!`;
  }
  if (queryClean.includes('poetry') || queryClean.includes('poem') || queryClean.includes('write')) {
    return `Dev is also a technical poet! You can visit the **Poetry Sanctuary** section of this website to read his poems such as *"The Algorithm of Dreams"*, *"Binary Starlight"*, and *"Silicon & Soul"*.`;
  }
  if (queryClean.includes('blog') || queryClean.includes('article') || queryClean.includes('paper') || queryClean.includes('research')) {
    return `Dev Parth has published multiple research case studies and engineering blog posts, including:\n* *TrustShield AI: Multi-Modal Deepfake & Phishing Detection in Indian Securities Markets*\n* *Engineering Cinematic 3D Web Experiences with Next.js 15 and React Three Fiber*\n* *Mastering Dynamic Programming: From LeetCode Knight to Codeforces Expert*\n\nCheck out the **Blog** and **Research** sections to read them in full!`;
  }

  // Fallback intelligent simulation
  return `I am Dev Parth's autonomous portfolio AI assistant! I have analyzed your question: *"${userQuery}"*.\n\nWhile this specific query isn't in my instant quick-chip index, I can tell you that Dev is an award-winning AI Engineer and Full Stack Developer skilled in **Next.js 15, React 19, TypeScript, Three.js, Python, PyTorch, and MongoDB**.\n\nWould you like me to show you his **AI Projects**, explain his **SEBI Hackathon winning platform**, or detail his **1985+ LeetCode CP rating**? You can also ask me anything from the prompt buttons below!`;
}
