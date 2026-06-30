// ─────────────────────────────────────────────
//  SITE DATA  —  single source of truth for all content
//  Edit this file to update the portfolio without touching components.
// ─────────────────────────────────────────────

export const SITE = {
  name: "Amar Yasser Mohamed Sayed",
  firstName: "Amar",
  role: "Junior DevOps Engineer",
  location: "Cairo, Egypt",
  github: "https://github.com/alpha9898",
  email: "amaryasser046@gmail.com",
  phone: "+20 1552694437",
  linkedin: "https://linkedin.com/in/amar-yasser13",
  resume: "/Amar-Yasser-Resume.pdf",
  url: "https://ammar-portfolio-inky.vercel.app",
};

export const TYPEWRITER_PHRASES = [
  "An infra engineer who builds tools from scratch.",
  "Because the ones he needed didn't exist yet.",
  "18 VMs. 21 steps. Production. Not a sandbox.",
  "DevOps · AWS · Kubernetes · Terraform.",
  "Open to remote. Open to relocation. Ready to ship.",
];

export const HERO_STATS = [
  { value: 18, label: "VMs in Production" },
  { value: 3,  label: "Live SaaS Projects" },
  { value: 12, label: "Certs Roadmapped"  },
];

export const STATS_BAND = [
  { value: 21, label: "Deployment Steps",    colorClass: "c1" },
  { value: 3,  label: "SaaS Apps on Vercel", colorClass: "c2" },
  { value: 1,  label: "Year Experience",     colorClass: "c3" },
  { value: 10, label: "Core DevOps Tools",   colorClass: "c4" },
];

export const JOURNEY = [
  {
    meta: "2025 — EELU · Egyptian E-Learning University",
    title: "BSc Computer Science — Graduated",
    desc: "Not from an elite institution — but equipped with a self-driven certification roadmap, intellectual curiosity spanning history, philosophy, and distributed systems, and zero interest in waiting for permission to grow.",
    tag: "CS Graduate",
  },
  {
    meta: "Aug 2025 — VPSie Egypt · Full Remote",
    title: "Internship → Full-Time Junior DevOps Engineer",
    desc: "Shipped a 21-step platform deployment across 18 VMs using Proxmox, Percona XtraDB Cluster, HAProxy, and Helm. Real traffic. Real stakes. Not a sandbox. Also built monitoring stacks with Prometheus, Grafana, and Loki.",
    tag: "Full-time · Remote · VPSie Egypt",
  },
  {
    meta: "2026 — Present",
    title: "Building SaaS, Chasing Certifications, Planning the Next Chapter",
    desc: "Three AI-powered DevOps tools live on Vercel. AWS SAA-C03 locked in for July 10. GitHub Copilot CLI BootCamp lined up. Actively exploring opportunities in Europe and the US.",
    tag: "AWS SAA-C03 · Target: Jul 10, 2026",
  },
];

export const SKILLS = [
  { name: "Docker",         accent: "#1DA8D8", glow: "rgba(29,168,216,0.18)"  },
  { name: "Kubernetes",     accent: "#326CE5", glow: "rgba(50,108,229,0.18)"  },
  { name: "Terraform",      accent: "#7F56D9", glow: "rgba(127,86,217,0.18)" },
  { name: "Ansible",        accent: "#EE0000", glow: "rgba(238,0,0,0.15)"    },
  { name: "Jenkins",        accent: "#D73A49", glow: "rgba(215,58,73,0.18)"  },
  { name: "GitHub Actions", accent: "#E8EDF7", glow: "rgba(255,255,255,0.1)" },
  { name: "Prometheus",     accent: "#E75C00", glow: "rgba(231,92,0,0.18)"   },
  { name: "Grafana",        accent: "#F08F1F", glow: "rgba(240,143,31,0.18)" },
  { name: "Loki",           accent: "#F9DE4F", glow: "rgba(249,222,79,0.15)" },
  { name: "AWS",            accent: "#FF9900", glow: "rgba(255,153,0,0.18)"  },
  { name: "FastAPI",        accent: "#00BC84", glow: "rgba(0,188,132,0.18)"  },
  { name: "Next.js",        accent: "#E8EDF7", glow: "rgba(232,237,247,0.1)" },
  { name: "Proxmox",        accent: "#E65300", glow: "rgba(230,83,0,0.18)"   },
  { name: "HAProxy",        accent: "#00A3E0", glow: "rgba(0,163,224,0.18)"  },
  { name: "Helm",           accent: "#00C5DC", glow: "rgba(0,197,220,0.18)"  },
  { name: "Percona XtraDB", accent: "#FF7900", glow: "rgba(255,121,0,0.18)"  },
  { name: "Python",         accent: "#3776AB", glow: "rgba(55,118,171,0.18)" },
  { name: "Linux",          accent: "#E8EDF7", glow: "rgba(255,255,255,0.08)"},
] as const;

export const PROJECTS = [
  { id: "opslens",   icon: "🔭", name: "OpsLens AI",  desc: "Multi-tenant SaaS for AWS CloudWatch log analysis. AI-generated incident reports per customer account via IAM Role + STS AssumeRole, plus account-health audits and right-sizing.", tags: ["AWS","STS","FastAPI","Next.js","Vercel"],          accent: "opslens",   repoUrl: "https://github.com/alpha9898/opslens-ai", liveUrl: "https://opslens-ai-tau.vercel.app" },
  { id: "infradoc",  icon: "📄", name: "InfraDoc AI", desc: "Automated IaC documentation with AI-powered security scoring. Parses Terraform, K8s, Helm, CloudFormation & Docker from any GitHub repo — 25 security rules, drift detection, SPOF graphs.", tags: ["Terraform","K8s","Helm","GitHub API","FastAPI"], accent: "infradoc",  repoUrl: "https://github.com/alpha9898/infradoc",   liveUrl: "https://infradoc.vercel.app" },
  { id: "topoforge", icon: "🗺️", name: "TopoForge",   desc: "Converts Low-Level Design network diagrams to High-Level Design automatically. A ~3-hour manual task turned into ~30 minutes — and looks better. Cut design time by 85%.",                       tags: ["Network","LLD→HLD","AI","Next.js","Vercel"],      accent: "topoforge", repoUrl: "https://github.com/alpha9898/topoforge",  liveUrl: "" },
] as const;

export const CERTS = [
  { status: "next",  badge: "▶ UP NEXT", name: "AWS SAA-C03",         org: "Amazon Web Services · Solutions Architect Associate", eta: "TARGET: JULY 10, 2026", progress: 85 },
  { status: "later", badge: "◇ QUEUED",  name: "CKA",                 org: "CNCF · Certified Kubernetes Administrator",           eta: "Q3 2026",               progress: 20 },
  { status: "later", badge: "◇ QUEUED",  name: "Terraform Associate",  org: "HashiCorp · Infrastructure Automation",              eta: "Q3 2026",               progress: 30 },
  { status: "later", badge: "◇ QUEUED",  name: "AWS DVA-C02",          org: "Amazon Web Services · Developer Associate",          eta: "Q4 2026",               progress: 5  },
  { status: "later", badge: "◇ QUEUED",  name: "CKAD",                 org: "CNCF · Certified Kubernetes App Developer",          eta: "Q4 2026",               progress: 10 },
  { status: "later", badge: "◇ QUEUED",  name: "AWS SysOps SOA-C02",   org: "Amazon Web Services · SysOps Administrator",         eta: "2027",                  progress: 0  },
] as const;
