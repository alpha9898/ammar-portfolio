"use client";
import { useEffect, useRef } from "react";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          ref.current?.querySelectorAll(".revealEl").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 150);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={sectionStyle}>
      <div style={{ fontSize:"7rem", lineHeight:.5, color:"var(--pulse)", opacity:.13, fontFamily:"Georgia,serif" }}>"</div>
      <p className="revealEl" style={textStyle}>
        Brilliance isn&apos;t the absence of intellectual loneliness — it&apos;s the ability to keep building in spite of it.
      </p>
      <p className="revealEl" style={attrStyle}>// AMAR · 2026</p>
    </div>
  );
}

const sectionStyle: React.CSSProperties = {
  position:"relative", zIndex:10, padding:"5rem 1.5rem", textAlign:"center", overflow:"hidden",
  background:"radial-gradient(ellipse at center, rgba(0,255,209,.04) 0%, transparent 70%)",
};
const textStyle: React.CSSProperties = {
  fontSize:"clamp(1.2rem,3.5vw,2.1rem)", fontWeight:700,
  maxWidth:720, margin:"1.5rem auto", lineHeight:1.45,
};
const attrStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:".7rem",
  letterSpacing:".2em", color:"rgba(232,237,247,.3)",
};
