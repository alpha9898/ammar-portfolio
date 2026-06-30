"use client";
import { useEffect, useRef } from "react";
import { CERTS } from "@/lib/data";

const STATUS_STYLES = {
  next:  { badge: { background:"rgba(255,209,102,.12)",color:"var(--gold)", border:"1px solid rgba(255,209,102,.25)" }, bar: "var(--gold)",  card: { border:"1px solid rgba(255,209,102,.2)", background:"rgba(255,209,102,.03)" } },
  later: { badge: { background:"rgba(155,109,255,.1)",color:"var(--violet)",border:"1px solid rgba(155,109,255,.2)" }, bar: "var(--violet)", card: { border:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.02)" } },
} as const;

export default function Certs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".cert-card");
    if (!cards) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => {
            el.classList.add("visible");
            const bar = el.querySelector<HTMLElement>(".cert-bar");
            if (bar) bar.style.width = bar.dataset.width + "%";
          }, Number(el.dataset.delay ?? 0));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach((el, i) => { el.dataset.delay = String(i * 80); obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="certs">
      <p className="section-label">// ROADMAP</p>
      <h2 className="section-headline">Certification<br />Roadmap 2026</h2>
      <div ref={gridRef} style={gridStyle}>
        {CERTS.map(c => {
          const s = STATUS_STYLES[c.status];
          return (
            <div key={c.name} className="cert-card revealEl" style={{ ...cardBase, ...s.card }}>
              <span style={{ ...badgeBase, ...s.badge }}>{c.badge}</span>
              <div style={{ fontSize:"1rem", fontWeight:700, marginBottom:".3rem" }}>{c.name}</div>
              <div style={{ fontSize:".76rem", color:"rgba(232,237,247,.4)", fontWeight:300 }}>{c.org}</div>
              <div style={{ marginTop:".6rem", fontFamily:"Space Mono,monospace", fontSize:".62rem", color:"rgba(232,237,247,.3)", letterSpacing:".1em" }}>{c.eta}</div>
              <div style={{ marginTop:".9rem", height:3, background:"rgba(255,255,255,.06)", borderRadius:99, overflow:"hidden" }}>
                <div className="cert-bar" data-width={c.progress} style={{ height:"100%", borderRadius:99, background:s.bar, width:0, transition:"width 1.2s ease" }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",
  gap:"1.2rem", marginTop:".5rem",
};
const cardBase: React.CSSProperties = {
  borderRadius:14, padding:"1.4rem 1.6rem",
  transition:"transform .3s ease,border-color .3s ease",
};
const badgeBase: React.CSSProperties = {
  display:"inline-flex", alignItems:"center", gap:".4rem",
  fontFamily:"Space Mono,monospace", fontSize:".6rem", letterSpacing:".12em",
  padding:".2rem .6rem", borderRadius:4, marginBottom:".8rem",
};
