// All the site's content lives here. Edit this file to update the portfolio.

export const EMAIL = 'aadyabshetty10@gmail.com';
export const GITHUB_USERNAME = 'aadyashetty10';

// Files in /public are served from the site root.
export const ASSETS = {
  avatar: '/avatar.png',
  banner: '/banner-blossom.mp4',
  resume: '/aadya-shetty-resume.pdf',
  gaming: '/project-gaming.png',
  splitReceipt: '/project-splitreceipt.png',
};

export const ROLES = ['Software Developer', 'CS Undergrad @ RVITM'];

export const EDUCATION = [
  {
    school: 'RV Institute of Technology and Management, Bengaluru',
    degree: 'B.Tech in Computer Science and Engineering',
    years: '2023 — 2027',
    score: 'CGPA 8.6',
  },
  {
    school: 'Expert PU College, Mangalore',
    degree: 'Class 12 (State)',
    years: '2023',
    score: '90.0%',
  },
  {
    school: 'Shri Siddhi Vinayaka Residential School, Kundapura',
    degree: 'Class 10 (ICSE)',
    years: '2021',
    score: '91.2%',
  },
];

export const SKILLS = [
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🗄️', name: 'SQL' },
  { icon: '⚛️', name: 'React.js' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '💨', name: 'Tailwind CSS' },
  { icon: '👁️', name: 'OpenCV' },
  { icon: '🔢', name: 'NumPy' },
  { icon: '🧠', name: 'TensorFlow' },
  { icon: '📦', name: 'Git' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '🎨', name: 'Figma' },
];

export const LANGUAGES = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇮🇳', name: 'Kannada' },
  { flag: '🇮🇳', name: 'Marathi' },
  { flag: '🇪🇸', name: 'Spanish' },
];

export const PROJECTS = [
  {
    title: 'AI-Based Gaming Behavior Prediction & Monitoring System',
    stack: 'React.js · Node.js · MongoDB · Random Forest · JWT',
    dates: 'Apr 2026 — May 2026',
    image: ASSETS.gaming,
    imageAlt: 'Gaming behavior prediction visual',
    thumbBg: '#150c10',
    caption: 'Behavior risk-prediction concept',
    description:
      'A full-stack gaming behavior monitoring platform with secure authentication, session tracking, and real-time dashboards. A Random Forest model is integrated via REST APIs to predict user behavior from gameplay patterns, with Express.js + MongoDB + WebSockets powering sessions, predictions, and alerts under JWT-based, role-based access control.',
  },
  {
    title: 'SplitReceipt — AI-Powered Receipt Splitting',
    stack: 'React.js · Node.js · OCR.space · Groq LLM · JWT',
    dates: 'Feb 2026 — Mar 2026',
    image: ASSETS.splitReceipt,
    imageAlt: 'SplitReceipt logo',
    thumbBg: '#fdeef4',
    caption: 'SplitReceipt',
    description:
      'An OCR + LLM–powered app that parses restaurant bills into structured JSON and splits them proportionally, including tax. Built with an Express REST API on Mongoose schemas, and JWT authentication using refresh tokens stored in HttpOnly cookies.',
    link: {
      href: 'https://billwise-psi.vercel.app/',
      label: '🔗 SplitReceipt — AI Bill Splitter',
    },
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: `mailto:${EMAIL}` },
];

export const SOCIALS = [
  { icon: '🐙', label: 'GitHub', href: `https://github.com/${GITHUB_USERNAME}`, external: true },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/aadya-shetty-86990139b', external: true },
  { icon: '✉️', label: 'Email', href: `mailto:${EMAIL}` },
  { icon: '📞', label: 'Call', href: 'tel:+917204693729' },
];

// GitHub heatmap colors, from "no contributions" to "most".
export const HEATMAP_COLORS = ['#ebedf0', '#f9c9dc', '#f281ac', '#e5457f', '#a3134f'];
