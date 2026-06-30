"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx - 5 + "px";
      dot.style.top  = my - 5 + "px";
    };

    const animate = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      raf = requestAnimationFrame(animate);
    };

    const hover   = () => document.body.classList.add("hovering");
    const unhover = () => document.body.classList.remove("hovering");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unhover);
    });

    animate();
    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor"     ref={dotRef}  style={cursorStyle} />
      <div id="cursor-ring" ref={ringRef} style={ringStyle}  />
      <style>{`
        #cursor { width:10px;height:10px;background:var(--pulse);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transition:transform .12s ease,background .2s ease;mix-blend-mode:difference; }
        #cursor-ring { width:36px;height:36px;border:1px solid rgba(0,255,209,.35);border-radius:50%;position:fixed;pointer-events:none;z-index:9998; }
        body.hovering #cursor { transform:scale(3);background:var(--ember); }
        body.hovering #cursor-ring { transform:scale(1.6);border-color:rgba(255,77,109,.4); }
      `}</style>
    </>
  );
}
const cursorStyle: React.CSSProperties = { position:"fixed", pointerEvents:"none" };
const ringStyle:   React.CSSProperties = { position:"fixed", pointerEvents:"none" };
