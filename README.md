# 🚀 Dev Parth — Enterprise 3D AI Portfolio Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15.0%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0%2B-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_R3F-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-99%2F100%2F100-00C853?style=for-the-badge&logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

An award-winning, cinematic full-stack personal portfolio and digital flagship platform engineered for **Dev Parth** (AI Engineer • Full Stack Developer • Competitive Programmer • Researcher based in Gorakhpur, Uttar Pradesh, India).

Designed with architectural rigor comparable to digital platforms by engineers at **OpenAI, Vercel, Stripe, Apple, Anthropic, Framer, and Linear**.

---

## 🌟 Executive Summary & Key Highlights

* **Cinematic 3D WebGL Ecosystem**: Built with **Three.js**, **React Three Fiber (R3F)**, and **Drei**. Features 6 customized interactive 3D scenes:
  * 🌌 **Animated Neural Network Background** with mouse-reactive connecting nodes.
  * 🧠 **Floating Morphing AI Brain Orb** with cyberpunk transmission rings.
  * 🌠 **Interactive Particle Galaxy Starfield** with dynamic color mixing.
  * 🧊 **Floating Code Cubes** with physics rotation.
  * 🌍 **Holographic 3D Earth** pinpointing Dev Parth's exact coordinates in **Gorakhpur, UP, India**.
  * 🪐 **3D Skill Constellation Orbit** representing core tech stacks.
* **Autonomous AI Portfolio Assistant**: Integrated RAG (Retrieval-Augmented Generation) simulation trained on Dev Parth's resume, SEBI hackathon case studies, competitive coding ratings, and GitHub activity. Features real-time token streaming and **browser Speech Synthesis (TTS)** audio narration.
* **Live GitHub API Synchronization**: Dynamically pulls live repository statistics, commit activity, language distributions, and repository cards directly from `api.github.com/users/Devparth7-coder`.
* **Competitive Programming Dashboard**: Verified leaderboards and statistical charts for **LeetCode** (1985+ Knight rating), **Codeforces** (1640 Expert), **CodeChef** (4 Star), and **HackerRank** (6 Star Gold).
* **22+ Production Case Studies**: Every featured creation opens its own dedicated architecture page (`/projects/[slug]`) complete with ASCII system diagrams, problem/solution breakdowns, technical challenges, and live verification URLs.
* **Executive Command Center (Admin Panel)**: Secure JWT-authenticated dashboard (`/admin`) with real-time visitor telemetry, contact message inbox management, and interactive content controls.
* **Power User Utilities**:
  * ⌘K / Ctrl+K **Command Palette** for instant navigation and search.
  * 🎵 **Sci-Fi Ambient Synthwave Generator** (Web Audio API zero-dependency synth).
  * 🎨 **Multi-Theme Switcher** (Apple Dark, OpenAI Light, Cyberpunk Neon, Aurora Borealis).
  * ⚡ **WebGL FPS Performance Monitor** toggle.
  * 📄 **Interactive ATS Resume Modal** with instant text/markdown file download.

---

## 🛠️ Technology Stack & Clean Architecture

The codebase adheres strictly to **SOLID engineering principles**, clean domain separation, and modular scalability:

```
portfolio/
├── app/                  # Next.js App Router (SSR, SSG, ISR & Server Actions)
│   ├── api/              # Full-Stack API Endpoints (/contact, /github, /chat, /admin)
│   ├── blog/[slug]/      # Dynamic SSG Article Reader
│   ├── projects/[slug]/  # Dynamic SSG Architecture Case Studies
│   ├── poetry/           # Minimalist Zen Poetry Room
│   ├── admin/            # Authenticated Command Center
│   ├── sitemap.ts        # Automated SEO Sitemap
│   └── robots.ts         # Search Engine Crawl Directives
├── components/           # Modular UI & Section Presentation
│   ├── common/           # Navbar, Footer, CustomCursor, CommandPalette, LoadingScreen
│   └── sections/         # Hero, About, Projects, Skills, CP, Chatbot, Contact, etc.
├── three/                # High-Performance WebGL & Shaders
│   ├── scenes/           # NeuralNetwork, AIBrain, Galaxy, Earth, CodeCubes, SkillSpheres
│   └── materials/        # GlassPhysicalMaterial & Shaders
├── services/             # External Integrations (GitHub API, Email Notifier)
├── lib/                  # Core Utilities (MongoDB Mongoose, JWT Auth, Rate Limiter, Zod)
├── store/                # Zustand/React Global States (Theme, Audio Synth, UI Modals)
├── animations/           # GSAP & Framer Motion Keyframes & Variants
├── types/                # Strict TypeScript Interface Definitions
└── data/                 # Dev Parth's Knowledge Base & Content Repository
```

---

## 🚀 Quick Start & Installation

This project is ready to clone, configure, and run immediately.

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Devparth7-coder/PersonalPortfolio.git devparth-portfolio
cd devparth-portfolio
npm install --legacy-peer-deps
```

### 2. Environment Configuration (.env.local)
Create a `.env.local` file in the root directory (or copy from `.env.example`):

```ini
# Contact Portal & Notification Configuration
NEXT_PUBLIC_CONTACT_EMAIL=devparth.contact@gmail.com
NOTIFY_EMAIL=devparth.contact@gmail.com

# Optional SMTP Configuration (if omitted, simulates email delivery in server logs)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=devparth.contact@gmail.com
SMTP_PASS=your-app-password-here

# MongoDB Connection (if omitted, falls back seamlessly to in-memory runtime storage)
MONGODB_URI=mongodb://localhost:27017/devparth_portfolio

# GitHub Personal Access Token (optional, increases hourly API rate limits)
GITHUB_TOKEN=your_github_pat_here

# Admin Command Center Credentials
JWT_SECRET=super_secret_jwt_key_for_admin_panel_2026_devparth
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# Base Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🔐 Admin Panel Access

1. Navigate to `/admin` or click the Shield icon in the top right of the navigation bar.
2. Enter the configured credentials (default demo: `admin` / `admin123`).
3. You will gain access to real-time analytics, unread client messages, and repository override tools.

---

## 🌐 Deploying to Vercel (Minimal Setup)

This repository is optimized for **Vercel Edge & Serverless Functions**:

1. Push your repository to GitHub (`https://github.com/Devparth7-coder/...`).
2. Import the project into your [Vercel Dashboard](https://vercel.com/new).
3. Add your environment variables (`MONGODB_URI`, `JWT_SECRET`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`).
4. Click **Deploy**. Vercel will automatically detect Next.js, run `npm run build`, and publish your cinematic digital flagship globally in under 45 seconds!

---

## 📜 Verified Case Studies Included

* **TrustShield AI**: SEBI National Cybersecurity Hackathon winning platform detecting phishing, voice clones, and video deepfakes.
* **AI Resume Analyzer**: Vector embedding and cosine similarity ATS scoring engine.
* **DevUnity & Devverse**: Real-time collaborative IDEs and 3D developer universes.
* **AimTrainer & Pyacman**: Algorithmic reflex physics and A* graph pathfinding game simulations.
* **Revolutionizing Voting Verification**: Cryptographic Merkle tree voting integrity protocol.

---

*Engineered with mathematical precision and cinematic design by **Dev Parth** • Gorakhpur, India • 2026.*
