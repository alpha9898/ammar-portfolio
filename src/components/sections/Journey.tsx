"use client";
import { useEffect } from "react";
import { JOURNEY } from "@/lib/data";

export default function Journey() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => el.classList.add("visible"), Number(el.dataset.delay ?? 0));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".journey-card").forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String(i * 120);
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="journey">
      <p className="section-label">// THE JOURNEY</p>
      <h2 className="section-headline">From Zero<br />to Production</h2>
      <div style={{ display:"grid", gap:"1.5rem" }}>
        {JOURNEY.map(j => (
          <div key={j.meta} className="journey-card revealEl" style={cardStyle}>
            <div style={accentBarStyle} />
            <p style={metaStyle}>{j.meta}</p>
            <h3 style={titleStyle}>{j.title}</h3>
            <p style={descStyle}>{j.desc}</p>
            <span style={tagStyle}>{j.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  background:"var(--glass)", border:"1px solid var(--border)",
  borderRadius:16, padding:"1.8rem 2rem",
  position:"relative", overflow:"hidden",
  transition:"transform .3s ease,border-color .3s ease,box-shadow .3s ease",
};
const accentBarStyle: React.CSSProperties = {
  position:"absolute", top:0, left:0, width:3, height:"100%",
  background:"linear-gradient(to bottom,var(--pulse),transparent)",
};
const metaStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:"0.68rem",
  color:"var(--pulse)", letterSpacing:"0.15em", marginBottom:"0.5rem", opacity:.7,
};
const titleStyle: React.CSSProperties = { fontSize:"1.2rem", fontWeight:700, marginBottom:"0.5rem" };
const descStyle: React.CSSProperties  = { fontSize:"0.9rem", color:"rgba(232,237,247,0.55)", lineHeight:1.75, fontWeight:300 };
const tagStyle: React.CSSProperties   = {
  display:"inline-block", marginTop:"1rem", padding:"0.22rem 0.7rem", borderRadius:999,
  fontSize:"0.68rem", fontFamily:"Space Mono,monospace", letterSpacing:"0.1em",
  background:"rgba(0,255,209,0.08)", color:"var(--pulse)", border:"1px solid rgba(0,255,209,.2)",
};
