"use client";
import { useEffect } from "react";
import { PROJECTS } from "@/lib/data";

const ACCENT_STYLES: Record<string, React.CSSProperties> = {
  opslens:  { background:"linear-gradient(135deg,rgba(0,255,209,.05),rgba(0,180,150,.02))" },
  infradoc: { background:"linear-gradient(135deg,rgba(255,77,109,.05),rgba(180,0,60,.02))" },
  topoforge:{ background:"linear-gradient(135deg,rgba(255,209,102,.05),rgba(180,140,0,.02))" },
};

export default function Projects() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => el.classList.add("visible"), Number(el.dataset.delay ?? 0));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".project-card").forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String(i * 100);
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="projects">
      <p className="section-label">// BUILT THINGS</p>
      <h2 className="section-headline">Projects Born<br />from a Gap</h2>
      <div style={gridStyle}>
        {PROJECTS.map(p => (
          <div key={p.id} className="project-card revealEl" style={{ ...cardBase, ...ACCENT_STYLES[p.accent] }}>
            <div style={{ fontSize:"2.2rem", marginBottom:"1rem" }}>{p.icon}</div>
            <h3 style={{ fontSize:"1.2rem", fontWeight:700, marginBottom:".5rem" }}>{p.name}</h3>
            <p style={{ fontSize:".85rem", color:"rgba(232,237,247,.5)", lineHeight:1.75, fontWeight:300 }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:".4rem", marginTop:"1rem" }}>
              {p.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
            </div>
            <div style={linkRowStyle}>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" data-hover style={liveLinkStyle}>Live Demo →</a>
              )}
              <a href={p.repoUrl} target="_blank" rel="noreferrer" data-hover style={codeLinkStyle}>Code →</a>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (hover:hover) {
          .project-card:hover { transform:translateY(-7px)!important; box-shadow:0 30px 80px rgba(0,0,0,.4)!important; }
        }
      `}</style>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",
  gap:"1.5rem", marginTop:"0.5rem",
};
const cardBase: React.CSSProperties = {
  borderRadius:20, padding:"1.8rem",
  border:"1px solid rgba(255,255,255,.06)",
  transition:"transform .35s ease,box-shadow .35s ease",
};
const tagStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:".6rem", letterSpacing:".08em",
  padding:".2rem .5rem", borderRadius:4,
  background:"rgba(255,255,255,.06)", color:"rgba(232,237,247,.45)",
  border:"1px solid rgba(255,255,255,.08)",
};
const linkRowStyle: React.CSSProperties = {
  display:"flex", gap:".8rem", marginTop:"1.2rem", flexWrap:"wrap",
};
const liveLinkStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:".68rem", letterSpacing:".08em",
  color:"var(--pulse)", textDecoration:"none", fontWeight:700,
  padding:".3rem .7rem", borderRadius:6,
  border:"1px solid rgba(0,255,209,.25)", background:"rgba(0,255,209,.06)",
};
const codeLinkStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:".68rem", letterSpacing:".08em",
  color:"rgba(232,237,247,.5)", textDecoration:"none",
  padding:".3rem .7rem", borderRadius:6,
  border:"1px solid rgba(255,255,255,.1)",
};
