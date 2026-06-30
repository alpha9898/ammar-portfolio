"use client";
import { useEffect, useRef } from "react";
import { HERO_STATS, TYPEWRITER_PHRASES, SITE } from "@/lib/data";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  // count-up for stats
  useEffect(() => {
    const nums = document.querySelectorAll<HTMLElement>(".hero-stat-num");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nums.forEach(el => { el.textContent = el.dataset.target ?? "0"; });
      return;
    }
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        nums.forEach(el => {
          const target = Number(el.dataset.target);
          let v = 0;
          const step = Math.ceil(target / 40);
          const iv = setInterval(() => {
            v = Math.min(v + step, target);
            el.textContent = String(v);
            if (v >= target) clearInterval(iv);
          }, 40);
        });
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    const statsEl = document.querySelector(".hero-stats");
    if (statsEl) obs.observe(statsEl);
    return () => obs.disconnect();
  }, []);

  // typewriter
  useEffect(() => {
    const el = typedRef.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = TYPEWRITER_PHRASES[0];
      return;
    }
    let pi = 0, ci = 0, deleting = false;
    let tid: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = TYPEWRITER_PHRASES[pi];
      if (!deleting) {
        el.textContent = full.slice(0, ++ci);
        if (ci === full.length) { deleting = true; tid = setTimeout(tick, 2200); return; }
      } else {
        el.textContent = full.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % TYPEWRITER_PHRASES.length; }
      }
      tid = setTimeout(tick, deleting ? 35 : 55);
    };
    tid = setTimeout(tick, 2000);
    return () => clearTimeout(tid);
  }, []);

  // parallax
  useEffect(() => {
    const name = document.querySelector<HTMLElement>(".hero-name");
    const tw   = document.querySelector<HTMLElement>(".hero-typewriter");
    const handler = () => {
      const y = window.scrollY;
      if (name) name.style.transform = `translateY(${y * 0.15}px)`;
      if (tw)   tw.style.transform   = `translateY(${y * 0.08}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section style={heroStyle}>
      <p style={eyebrowStyle}>Junior DevOps Engineer · Cairo, Egypt</p>
      <h1 className="hero-name" style={nameStyle}>{SITE.firstName}</h1>
      <p className="hero-typewriter" style={typewriterStyle}>
        <span ref={typedRef} />
        <span style={blinkStyle} />
      </p>
      <div className="hero-stats" style={statsRowStyle}>
        {HERO_STATS.map(s => (
          <div key={s.label} style={{ textAlign:"center" }}>
            <div className="hero-stat-num" data-target={s.value} style={statNumStyle}>0</div>
            <div style={statLblStyle}>{s.label}</div>
          </div>
        ))}
      </div>
      <a href={SITE.resume} download data-hover style={cvBtnStyle}>↓ DOWNLOAD CV</a>
      <div style={scrollCueStyle}>
        <span style={scrollTextStyle}>SCROLL</span>
        <div style={scrollLineStyle} />
      </div>
    </section>
  );
}

const heroStyle: React.CSSProperties = {
  position:"relative", zIndex:10, minHeight:"100svh",
  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
  textAlign:"center", padding:"6rem 1.5rem 4rem",
};
const eyebrowStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:"0.72rem", letterSpacing:"0.28em",
  color:"var(--pulse)", textTransform:"uppercase",
  animation:"fadeUp .8s ease .3s both",
};
const nameStyle: React.CSSProperties = {
  fontSize:"clamp(3.5rem,14vw,10rem)", fontWeight:900, lineHeight:0.88,
  margin:"0.25em 0",
  background:"linear-gradient(135deg,#E8EDF7 25%,var(--pulse) 55%,var(--ember) 100%)",
  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
  animation:"fadeUp 1s ease .6s both",
};
const typewriterStyle: React.CSSProperties = {
  fontSize:"clamp(0.9rem,2.5vw,1.2rem)", fontWeight:300,
  color:"rgba(232,237,247,0.6)", letterSpacing:"0.03em", minHeight:"2em",
  animation:"fadeUp .8s ease 1s both",
};
const blinkStyle: React.CSSProperties = {
  display:"inline-block", width:2, height:"1em",
  background:"var(--pulse)", verticalAlign:"middle",
  animation:"blink .9s step-end infinite",
};
const statsRowStyle: React.CSSProperties = {
  display:"flex", gap:"clamp(1.5rem,5vw,3rem)", marginTop:"2.5rem",
  animation:"fadeUp .8s ease 1.4s both",
};
const cvBtnStyle: React.CSSProperties = {
  marginTop:"2.2rem", padding:"0.7rem 1.6rem", borderRadius:999,
  fontFamily:"Space Mono,monospace", fontSize:"0.66rem", letterSpacing:"0.18em",
  color:"var(--pulse)", textDecoration:"none",
  border:"1px solid rgba(0,255,209,0.3)", background:"rgba(0,255,209,0.06)",
  animation:"fadeUp .8s ease 1.7s both", transition:"all .3s ease",
};
const statNumStyle: React.CSSProperties = {
  fontSize:"clamp(1.6rem,4vw,2rem)", fontWeight:900,
  background:"linear-gradient(135deg,var(--pulse),var(--violet))",
  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
};
const statLblStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:"0.58rem",
  letterSpacing:"0.18em", color:"rgba(232,237,247,0.3)", textTransform:"uppercase",
};
const scrollCueStyle: React.CSSProperties = {
  position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)",
  display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
  animation:"fadeUp .8s ease 2s both",
};
const scrollTextStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:"0.6rem",
  letterSpacing:"0.22em", color:"rgba(255,255,255,0.25)",
};
const scrollLineStyle: React.CSSProperties = {
  width:1, height:40,
  background:"linear-gradient(to bottom, var(--pulse), transparent)",
  animation:"pulseLine 2s ease-in-out infinite",
};
