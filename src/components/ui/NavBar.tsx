"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Journey",  href: "#journey"  },
  { label: "Stack",    href: "#stack"    },
  { label: "Projects", href: "#projects" },
  { label: "Certs",    href: "#certs"    },
  { label: "Hire Me",  href: "#contact"  },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav style={{ ...navBase, padding: scrolled ? "0.7rem 1.5rem" : "1.2rem 1.5rem" }}>
        <span style={logoStyle}>AMAR.DEV</span>

        {/* Desktop links */}
        <ul style={linksStyle}>
          {LINKS.map(l => (
            <li key={l.href}><a href={l.href} style={linkStyle}>{l.label}</a></li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} style={hamburgerStyle} aria-label="Menu">
          <span style={{ ...burgerLine, transform: open ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ ...burgerLine, opacity: open ? 0 : 1 }} />
          <span style={{ ...burgerLine, transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={drawerStyle} onClick={close}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={drawerLinkStyle} onClick={close}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        nav ul { display:none; }
        @media (min-width:768px) {
          nav ul   { display:flex !important; }
          nav button { display:none !important; }
        }
      `}</style>
    </>
  );
}

const navBase: React.CSSProperties = {
  position:"fixed", top:0, left:0, right:0, zIndex:100,
  display:"flex", justifyContent:"space-between", alignItems:"center",
  background:"rgba(3,5,10,0.75)", backdropFilter:"blur(16px)",
  borderBottom:"1px solid rgba(255,255,255,0.04)",
  transition:"padding 0.3s ease",
};
const logoStyle: React.CSSProperties = {
  fontFamily:"Space Mono, monospace", fontSize:"0.82rem",
  letterSpacing:"0.15em", color:"var(--pulse)",
};
const linksStyle: React.CSSProperties = { display:"flex", gap:"2rem", listStyle:"none" };
const linkStyle: React.CSSProperties  = {
  fontFamily:"Space Mono, monospace", fontSize:"0.68rem",
  letterSpacing:"0.15em", color:"rgba(232,237,247,0.45)",
  textDecoration:"none", textTransform:"uppercase",
};
const hamburgerStyle: React.CSSProperties = {
  background:"none", border:"none", cursor:"pointer",
  display:"flex", flexDirection:"column", gap:"5px", padding:"4px",
};
const burgerLine: React.CSSProperties = {
  display:"block", width:"22px", height:"2px",
  background:"var(--pulse)", borderRadius:"2px",
  transition:"all 0.3s ease",
};
const drawerStyle: React.CSSProperties = {
  position:"fixed", top:"56px", left:0, right:0, zIndex:99,
  background:"rgba(3,5,10,0.97)", backdropFilter:"blur(20px)",
  display:"flex", flexDirection:"column", padding:"1.5rem",
  borderBottom:"1px solid rgba(255,255,255,0.06)",
};
const drawerLinkStyle: React.CSSProperties = {
  fontFamily:"Space Mono, monospace", fontSize:"0.85rem",
  letterSpacing:"0.15em", color:"rgba(232,237,247,0.65)",
  textDecoration:"none", textTransform:"uppercase",
  padding:"1rem 0", borderBottom:"1px solid rgba(255,255,255,0.04)",
};
