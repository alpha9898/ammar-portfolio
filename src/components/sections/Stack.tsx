"use client";
import { useEffect } from "react";
import { SKILLS } from "@/lib/data";
import SkillIcon from "@/components/icons/SkillIcon";

export default function Stack() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => el.classList.add("visible"), Number(el.dataset.delay ?? 0));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".skill-pill").forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String((i % 6) * 60);
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="stack" style={{ paddingTop:0 }}>
      <p className="section-label">// STACK</p>
      <h2 className="section-headline">The Arsenal</h2>
      <div style={gridStyle}>
        {SKILLS.map(s => (
          <div
            key={s.name}
            className="skill-pill revealEl"
            data-hover
            style={{
              "--pill-glow": s.glow,
              "--pill-border": s.accent + "66",
              "--pill-color": s.accent,
            } as React.CSSProperties}
          >
            <span style={{ width:38, height:38, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <SkillIcon name={s.name} />
            </span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        .skill-pill {
          background:var(--dim); border:1px solid rgba(255,255,255,.06);
          border-radius:14px; padding:1.2rem .9rem 1rem;
          text-align:center; font-size:.76rem; font-weight:600;
          transition:all .3s ease; overflow:hidden;
          display:flex; flex-direction:column; align-items:center; gap:.55rem;
          position:relative; letter-spacing:.01em;
        }
        .skill-pill::after {
          content:""; position:absolute; inset:0;
          background:radial-gradient(circle at 50% 40%, var(--pill-glow,rgba(0,255,209,.13)), transparent 68%);
          opacity:0; transition:opacity .3s ease;
        }
        @media (hover:hover) {
          .skill-pill:hover { border-color:var(--pill-border,rgba(0,255,209,.35)); color:var(--pill-color,var(--pulse)); transform:translateY(-5px) scale(1.04); box-shadow:0 14px 36px rgba(0,0,0,.35); }
          .skill-pill:hover::after { opacity:1; }
          .skill-pill:hover svg { transform:scale(1.12); filter:drop-shadow(0 0 7px var(--pill-color,var(--pulse))); }
        }
        .skill-pill svg { transition:transform .3s ease,filter .3s ease; }
      `}</style>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))",
  gap:"0.9rem", marginTop:"0.5rem",
};
