"use client";
import { useEffect, useRef } from "react";

interface Star   { x:number; y:number; r:number; a:number; da:number; speed:number; }
interface Nebula { x:number; y:number; r:number; hue:number; a:number; }

export default function CosmosCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx    = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let stars:  Star[]   = [];
    let nebulae: Nebula[] = [];
    let raf: number;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      // Reduce star count on mobile for perf
      const count = window.innerWidth < 600 ? 120 : 260;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.15,
        a: Math.random(), da: (Math.random() - 0.5) * 0.004,
        speed: Math.random() * 0.07 + 0.008,
      }));
      nebulae = Array.from({ length: 5 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 300 + 100,
        hue: [180, 330, 210, 270, 160][Math.floor(Math.random() * 5)],
        a: Math.random() * 0.06 + 0.015,
      }));
    };

    let running = false;

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      nebulae.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        g.addColorStop(0, `hsla(${n.hue},80%,55%,${n.a})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      });
      stars.forEach(s => {
        s.a += s.da; if (s.a <= 0 || s.a >= 1) s.da *= -1;
        s.y -= s.speed; if (s.y < 0) { s.y = H; s.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,237,247,${s.a})`; ctx.fill();
      });
    };

    const loop = () => { render(); if (running) raf = requestAnimationFrame(loop); };
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(loop); } };
    const stop  = () => { running = false; cancelAnimationFrame(raf); };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onVisibility = () => { if (document.hidden) stop(); else start(); };

    window.addEventListener("resize", resize);
    init();
    if (reduce) {
      render(); // single static frame, no animation
    } else {
      start();
      document.addEventListener("visibilitychange", onVisibility);
    }
    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }} />;
}
