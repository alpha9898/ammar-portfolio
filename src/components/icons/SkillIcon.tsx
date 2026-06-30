import React from "react";

type SkillName = string;

const ICONS: Record<string, React.ReactNode> = {
  "Docker": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="4" y="22" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".9"/>
      <rect x="11.5" y="22" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".9"/>
      <rect x="19" y="22" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".9"/>
      <rect x="11.5" y="15.5" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".7"/>
      <rect x="19" y="15.5" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".7"/>
      <rect x="19" y="9" width="6" height="5" rx="1.2" fill="#1DA8D8" opacity=".5"/>
      <path d="M28.5 20.5C31 19 34 20 34 23s-3 4-5.5 4" stroke="#1DA8D8" strokeWidth="1.2" fill="none" opacity=".6"/>
      <path d="M4 25Q6 29.5 12 30L28 30Q33 29 34 26" stroke="#1DA8D8" strokeWidth="1.2" fill="none" opacity=".4"/>
    </svg>
  ),
  "Kubernetes": (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="12" stroke="#326CE5" strokeWidth="1.5"/>
      <circle cx="20" cy="20" r="3.5" fill="#326CE5" opacity=".9"/>
      {[0,45,90,135].map(deg => {
        const rad = deg * Math.PI / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        return <React.Fragment key={deg}>
          <line x1={20-cos*6.5} y1={20-sin*6.5} x2={20-cos*12} y2={20-sin*12} stroke="#326CE5" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1={20+cos*6.5} y1={20+sin*6.5} x2={20+cos*12} y2={20+sin*12} stroke="#326CE5" strokeWidth="2.2" strokeLinecap="round"/>
        </React.Fragment>;
      })}
    </svg>
  ),
  "Terraform": (
    <svg viewBox="0 0 40 40" fill="none">
      <polygon points="8,20 15,10 22,20 15,30" fill="#7F56D9" opacity=".85"/>
      <polygon points="18,14 26,6 34,14 26,22" fill="#9B6DFF" opacity=".7"/>
      <polygon points="18,26 26,18 34,26 26,34" fill="#7F56D9" opacity=".55"/>
    </svg>
  ),
  "Ansible": (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="13" stroke="#EE0000" strokeWidth="1.4" opacity=".3"/>
      <path d="M13 30L20 10L27 30" stroke="#EE0000" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M15.5 23L25 16" stroke="#EE0000" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  "Jenkins": (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M24 8L24 26Q24 33 17 33Q11 33 11 27" stroke="#D73A49" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="28" cy="10" r="5" stroke="#D73A49" strokeWidth="1.8"/>
      <circle cx="28" cy="10" r="2" fill="#D73A49" opacity=".6"/>
      <line x1="25" y1="8" x2="22" y2="5" stroke="#D73A49" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="31" y1="8" x2="34" y2="5" stroke="#D73A49" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  "GitHub Actions": (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="11" stroke="#E8EDF7" strokeWidth="1.5" opacity=".5"/>
      <path d="M16.5 14.5L28 20L16.5 25.5Z" fill="#E8EDF7" opacity=".9"/>
      <path d="M7 20Q7 7 20 7" stroke="#E8EDF7" strokeWidth="1.2" strokeLinecap="round" opacity=".3" strokeDasharray="2 2"/>
      <path d="M33 20Q33 33 20 33" stroke="#E8EDF7" strokeWidth="1.2" strokeLinecap="round" opacity=".3" strokeDasharray="2 2"/>
    </svg>
  ),
  "Prometheus": (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M20 6C20 6 26 12 26 18c0 2-1.5 3.5-1.5 3.5S25 18 22 16c0 0 2 6-2 9 0 0-4-3-2-9-3 2-2.5 5.5-2.5 5.5S14 20 14 18c0-6 6-12 6-12Z" fill="#E75C00" opacity=".85"/>
      <ellipse cx="20" cy="31" rx="7" ry="2.5" fill="#E75C00" opacity=".25"/>
      <path d="M13 34L27 34" stroke="#E75C00" strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
    </svg>
  ),
  "Grafana": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="6"  y="26" width="5" height="8"  rx="1.5" fill="#F08F1F" opacity=".6"/>
      <rect x="13" y="20" width="5" height="14" rx="1.5" fill="#F08F1F" opacity=".75"/>
      <rect x="20" y="14" width="5" height="20" rx="1.5" fill="#F08F1F" opacity=".85"/>
      <rect x="27" y="8"  width="5" height="26" rx="1.5" fill="#F08F1F"/>
      <path d="M6 26Q10 22 13 20Q17 17 20 14Q24 10 27 8" stroke="#F08F1F" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5"/>
    </svg>
  ),
  "Loki": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="7" y="8" width="26" height="24" rx="3" stroke="#F9DE4F" strokeWidth="1.5" opacity=".4"/>
      <line x1="12" y1="14" x2="28" y2="14" stroke="#F9DE4F" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="24" y2="19" stroke="#F9DE4F" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="24" x2="26" y2="24" stroke="#F9DE4F" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="6" fill="#F9DE4F" opacity=".15" stroke="#F9DE4F" strokeWidth="1.4"/>
      <line x1="28" y1="30" x2="32" y2="30" stroke="#F9DE4F" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="30" y1="28" x2="30" y2="32" stroke="#F9DE4F" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  "AWS": (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M10 24Q7 24 7 20Q7 15 12 15Q12 9 18 9Q22 9 23 13Q27 12 29 15Q33 15 33 19Q33 24 30 24Z" stroke="#FF9900" strokeWidth="1.6"/>
      <path d="M20 32L20 20M16 24L20 20L24 24" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "FastAPI": (
    <svg viewBox="0 0 40 40" fill="none">
      <polygon points="20,5 32,11.5 32,24.5 20,31 8,24.5 8,11.5" stroke="#00BC84" strokeWidth="1.5" opacity=".5"/>
      <path d="M22 8L15 21L21 21L18 32L25 19L19 19Z" fill="#00BC84" opacity=".9"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="13" stroke="#E8EDF7" strokeWidth="1.4" opacity=".25"/>
      <path d="M13 28L13 12L27 28L27 12" stroke="#E8EDF7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27 12Q35 16 33 26" stroke="#E8EDF7" strokeWidth="1.4" strokeLinecap="round" opacity=".4"/>
    </svg>
  ),
  "Proxmox": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="6"  y="8"  width="18" height="10" rx="2" stroke="#E65300" strokeWidth="1.5"/>
      <rect x="16" y="13" width="18" height="10" rx="2" stroke="#E65300" strokeWidth="1.5" opacity=".7"/>
      <rect x="6"  y="22" width="18" height="10" rx="2" stroke="#E65300" strokeWidth="1.5" opacity=".55"/>
      <circle cx="10" cy="13" r="1.5" fill="#E65300"/>
      <circle cx="10" cy="27" r="1.5" fill="#E65300" opacity=".55"/>
    </svg>
  ),
  "HAProxy": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="3" y="16" width="8" height="8" rx="2" stroke="#00A3E0" strokeWidth="1.5"/>
      <rect x="29" y="10" width="8" height="6" rx="1.5" stroke="#00A3E0" strokeWidth="1.4"/>
      <rect x="29" y="24" width="8" height="6" rx="1.5" stroke="#00A3E0" strokeWidth="1.4" opacity=".7"/>
      <path d="M11 17Q20 13 29 13" stroke="#00A3E0" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#ha1)"/>
      <path d="M29 27Q20 27 11 23" stroke="#00A3E0" strokeWidth="1.5" strokeLinecap="round" opacity=".7" markerEnd="url(#ha2)"/>
      <defs>
        <marker id="ha1" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><path d="M0,0L5,2.5L0,5Z" fill="#00A3E0"/></marker>
        <marker id="ha2" markerWidth="5" markerHeight="5" refX="2" refY="2.5" orient="auto"><path d="M5,0L0,2.5L5,5Z" fill="#00A3E0" opacity=".7"/></marker>
      </defs>
    </svg>
  ),
  "Helm": (
    <svg viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="10" stroke="#00C5DC" strokeWidth="1.5"/>
      <circle cx="20" cy="20" r="3" fill="#00C5DC" opacity=".8"/>
      {[0,45,90,135].map(deg => {
        const rad = deg * Math.PI / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        return <React.Fragment key={deg}>
          <line x1={20-cos*7} y1={20-sin*7} x2={20-cos*10} y2={20-sin*10} stroke="#00C5DC" strokeWidth="2.4" strokeLinecap="round"/>
          <line x1={20+cos*7} y1={20+sin*7} x2={20+cos*10} y2={20+sin*10} stroke="#00C5DC" strokeWidth="2.4" strokeLinecap="round"/>
        </React.Fragment>;
      })}
    </svg>
  ),
  "Percona XtraDB": (
    <svg viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="10" rx="11" ry="4" stroke="#FF7900" strokeWidth="1.5"/>
      <line x1="9"  y1="10" x2="9"  y2="20" stroke="#FF7900" strokeWidth="1.5"/>
      <line x1="31" y1="10" x2="31" y2="20" stroke="#FF7900" strokeWidth="1.5"/>
      <ellipse cx="20" cy="20" rx="11" ry="4" stroke="#FF7900" strokeWidth="1.5" opacity=".7"/>
      <line x1="9"  y1="20" x2="9"  y2="30" stroke="#FF7900" strokeWidth="1.5" opacity=".6"/>
      <line x1="31" y1="20" x2="31" y2="30" stroke="#FF7900" strokeWidth="1.5" opacity=".6"/>
      <ellipse cx="20" cy="30" rx="11" ry="4" stroke="#FF7900" strokeWidth="1.5" opacity=".45"/>
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M20 7Q12 7 12 14L12 18L20 18L20 20L12 20L12 26Q12 33 20 33" stroke="#FFD43B" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M20 7Q28 7 28 14L28 18L20 18L20 20L28 20L28 26Q28 33 20 33" stroke="#3776AB" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="15" cy="11.5" r="1.8" fill="#FFD43B"/>
      <circle cx="25" cy="28.5" r="1.8" fill="#3776AB"/>
    </svg>
  ),
  "Linux": (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="5" y="8" width="30" height="24" rx="3.5" stroke="#E8EDF7" strokeWidth="1.5" opacity=".35"/>
      <path d="M10 18L14 22L10 26" stroke="#00FFD1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="17" y1="26" x2="26" y2="26" stroke="#E8EDF7" strokeWidth="2" strokeLinecap="round" opacity=".7"/>
      <line x1="5" y1="35" x2="35" y2="35" stroke="#E8EDF7" strokeWidth="1.2" strokeLinecap="round" opacity=".2"/>
    </svg>
  ),
};

export default function SkillIcon({ name }: { name: SkillName }) {
  return ICONS[name] ?? <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/></svg>;
}
