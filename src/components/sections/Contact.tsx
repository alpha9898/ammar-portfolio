"use client";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", msg:"" });

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".revealEl").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    const sec = document.getElementById("contact");
    if (sec) obs.observe(sec);
    return () => obs.disconnect();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.msg}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div style={wrapStyle}>
        <div style={{ flex:1, minWidth:0 }}>
          <p className="section-label">// HIRE ME</p>
          <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, lineHeight:1.2, marginBottom:"1.2rem" }}>
            Let&apos;s build<br />something real.
          </h2>
          <p style={{ fontSize:".92rem", color:"rgba(232,237,247,.5)", lineHeight:1.8, fontWeight:300, maxWidth:380 }}>
            Looking for a DevOps engineer who ships to production, builds his own tools, and doesn&apos;t stop at &quot;good enough.&quot; Open to remote roles, relocation to Europe or the US, and anything interesting.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem", marginTop:"2rem" }}>
            {[
              { icon:"🐙", label:"GitHub",   value:"github.com/alpha9898",  href: SITE.github,             external:true  },
              { icon:"📧", label:"Email",    value:SITE.email,              href:`mailto:${SITE.email}`,   external:false },
              { icon:"💼", label:"LinkedIn", value:"Amar Yasser",           href: SITE.linkedin,           external:true  },
              { icon:"📄", label:"Résumé",   value:"Download PDF",          href: SITE.resume,             download:true  },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                {...(l.download ? { download: true } : {})}
                {...(l.external ? { target:"_blank", rel:"noreferrer" } : {})}
                className="revealEl" style={linkStyle} data-hover
              >
                <span style={{ fontSize:"1.1rem" }}>{l.icon}</span>
                <span style={{ flex:1 }}>
                  <div style={{ fontFamily:"Space Mono,monospace", fontSize:".6rem", letterSpacing:".15em", color:"rgba(232,237,247,.35)", textTransform:"uppercase" }}>{l.label}</div>
                  <div style={{ fontSize:".88rem", fontWeight:600, marginTop:".15rem" }}>{l.value}</div>
                </span>
                <span style={{ color:"var(--pulse)", opacity:.6 }}>→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="revealEl" style={formCardStyle}>
          <h3 style={{ fontSize:"1.05rem", fontWeight:700, marginBottom:"1.5rem" }}>Send a message</h3>
          {sent ? (
            <div style={{ textAlign:"center", padding:"2rem 0", color:"var(--pulse)", fontFamily:"Space Mono,monospace", fontSize:".78rem" }}>
              ✓ Message logged.<br />Ammar will be in touch.
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              {(["name","email","msg"] as const).map(f => (
                <div key={f} style={{ marginBottom:"1.1rem" }}>
                  <label htmlFor={`contact-${f}`} style={labelStyle}>{f === "msg" ? "Message" : f.charAt(0).toUpperCase() + f.slice(1)}</label>
                  {f === "msg" ? (
                    <textarea id="contact-msg" name="msg" required className="form-input" rows={4} placeholder="We're looking for a DevOps engineer who..." value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} style={{ ...inputStyle, height:100, resize:"none" }} />
                  ) : (
                    <input id={`contact-${f}`} name={f} required type={f === "email" ? "email" : "text"} className="form-input" placeholder={f === "email" ? "jane@company.com" : "Jane Smith"} value={form[f]} onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))} style={inputStyle} />
                  )}
                </div>
              ))}
              <button type="submit" data-hover style={btnStyle}>SEND MESSAGE</button>
            </form>
          )}
          <style>{`
            .form-input { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:8px; padding:.72rem 1rem; color:#E8EDF7; font-family:Inter,sans-serif; font-size:.88rem; outline:none; transition:border-color .2s ease; width:100%; box-sizing:border-box; }
            .form-input:focus { border-color:rgba(0,255,209,.35); }
          `}</style>
        </div>
      </div>
    </section>
  );
}

const wrapStyle: React.CSSProperties = {
  display:"flex", flexDirection:"column", gap:"2.5rem",
};
// Applied via globals @media
const linkStyle: React.CSSProperties = {
  display:"flex", alignItems:"center", gap:"1rem",
  padding:"1rem 1.3rem", borderRadius:12,
  background:"var(--dim)", border:"1px solid rgba(255,255,255,.06)",
  textDecoration:"none", color:"#E8EDF7",
  transition:"all .3s ease",
};
const formCardStyle: React.CSSProperties = {
  background:"var(--glass)", border:"1px solid var(--border)",
  borderRadius:20, padding:"1.8rem",
};
const labelStyle: React.CSSProperties = {
  fontFamily:"Space Mono,monospace", fontSize:".62rem",
  letterSpacing:".15em", color:"rgba(232,237,247,.4)",
  textTransform:"uppercase", display:"block", marginBottom:".5rem",
};
const inputStyle: React.CSSProperties = { display:"block" };
const btnStyle: React.CSSProperties = {
  width:"100%", padding:".82rem",
  background:"linear-gradient(135deg,var(--pulse),#00b894)",
  border:"none", borderRadius:8,
  fontFamily:"Space Mono,monospace", fontSize:".75rem", letterSpacing:".15em",
  color:"#03050A", fontWeight:700, textTransform:"uppercase",
  cursor:"pointer", transition:"opacity .2s ease,transform .2s ease",
};
