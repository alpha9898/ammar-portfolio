"use client";
import { useEffect } from "react";
import { STATS_BAND } from "@/lib/data";

const COLOR_MAP: Record<string, string> = {
  c1: "linear-gradient(135deg,var(--pulse),#00b894)",
  c2: "linear-gradient(135deg,var(--ember),var(--gold))",
  c3: "linear-gradient(135deg,var(--violet),var(--ember))",
  c4: "linear-gradient(135deg,var(--gold),var(--pulse))",
};

export default function StatsBand() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-count]");
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        els.forEach((el, i) => {
          setTimeout(() => {
            el.closest(".stat-item")?.classList.add("visible");
            const target = Number(el.dataset.count);
            let v = 0;
            const step = Math.ceil(target / 40);
            const iv = setInterval(() => {
              v = Math.min(v + step, target);
              el.textContent = String(v);
              if (v >= target) clearInterval(iv);
            }, 40);
          }, i * 120);
        });
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    const band = document.querySelector(".stats-band");
    if (band) obs.observe(band);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stats-band" style={bandStyle}>
      {STATS_BAND.map(s => (
        <div key={s.label} className="stat-item revealEl" style={{ textAlign:"center" }}>
          <div
            data-count={s.value}
            style={{
              fontSize:"clamp(2.2rem,5vw,3.8rem)", fontWeight:900, lineHeight:1,
              background: COLOR_MAP[s.colorClass],
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}
          >0</div>
          <div style={{ fontFamily:"Space Mono,monospace", fontSize:"0.63rem", letterSpacing:"0.2em", color:"rgba(232,237,247,0.3)", textTransform:"uppercase", marginTop:"0.5rem" }}>
            {s.label}
          </div>
        </div>
      ))}
      <style>{`
        .stats-band { position:relative;z-index:10;border-top:1px solid rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.04); }
      `}</style>
    </div>
  );
}

const bandStyle: React.CSSProperties = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",
  gap:"2rem", padding:"3.5rem 1.5rem",
  maxWidth:1100, margin:"0 auto", textAlign:"center",
};
